const TANKARD_AMOUNT = 250

// Override map for fluids whose item form lives in a different mod's namespace.
// Keys are fluid IDs, values are the item ID to use for tribute lookup.
// Apple cider: FR ships the fluid (`farmersrespite:apple_cider`) but the bottled
// item lives in Farmer's Delight (`farmersdelight:apple_cider`) — verified via
// the `data/farmersrespite/recipes/filling/apple_cider.json` filling recipe.
// Most drinks (BAC + FR teas + FR's own long/strong cider variants) keep the
// same modid for fluid and item, so they don't need an entry here.
const FLUID_TO_ITEM_OVERRIDE = {
    'farmersrespite:apple_cider': 'farmersdelight:apple_cider',
}

const DRINKS = [

    'brewinandchewin:mead',
    'brewinandchewin:saccharine_rum',
    'brewinandchewin:beer',
    'brewinandchewin:vodka',
    'brewinandchewin:rice_wine',
    'brewinandchewin:bloody_mary',
    'brewinandchewin:red_rum',
    'brewinandchewin:salty_folly',
    'brewinandchewin:strongroot_ale',
    'brewinandchewin:steel_toe_stout',
    'brewinandchewin:dread_nog',
    'brewinandchewin:egg_grog',
    'brewinandchewin:pale_jane',
    'brewinandchewin:glittering_grenadine',
    'brewinandchewin:kombucha',
    'brewinandchewin:withering_dross',

    'sob:hard_cider',
    'sob:prickly_melomel',
    'sob:tequila',
    'sob:sunrise_seltzer',
    'sob:bustling_brew',
    'sob:creeper_drink',
    'sob:death_drink',
    'sob:pale_daiquiri',

    'cosmopolitan:cachaca',
    'cosmopolitan:root_beer',
    'cosmopolitan:smoggy_aperol',
    'cosmopolitan:neverending_night',
    'cosmopolitan:twilight_chartreuse',
    'cosmopolitan:generic_romance',
    'cosmopolitan:green_beer',
    'cosmopolitan:morning_fog',
    'cosmopolitan:exotic_mirage',

    'collectorsreap:hermits_sour',
    'collectorsreap:heavens_cream',
    'collectorsreap:rose_moon',
    'collectorsreap:reanimators_garden',
    'collectorsreap:deific_blood',

    'brewincompatdelight:white_wine',
    'brewincompatdelight:red_wine',
    'brewincompatdelight:sweet_red_wine',
    'brewincompatdelight:gin',
    'brewincompatdelight:whiskey',
    'brewincompatdelight:moonshine',
    'brewincompatdelight:nut_brown_ale',
    'brewincompatdelight:blue_curacao',
    'brewincompatdelight:kraken_rum',

    'farmersrespite:green_tea',
    'farmersrespite:yellow_tea',
    'farmersrespite:black_tea',
    'farmersrespite:rose_hip_tea',
    'farmersrespite:dandelion_tea',
    'farmersrespite:purulent_tea',
    'farmersrespite:coffee',
    'farmersrespite:apple_cider',
    'farmersrespite:long_green_tea',
    'farmersrespite:long_yellow_tea',
    'farmersrespite:long_black_tea',
    'farmersrespite:long_rose_hip_tea',
    'farmersrespite:long_dandelion_tea',
    'farmersrespite:long_purulent_tea',
    'farmersrespite:long_coffee',
    'farmersrespite:long_apple_cider',
    'farmersrespite:strong_green_tea',
    'farmersrespite:strong_yellow_tea',
    'farmersrespite:strong_black_tea',
    'farmersrespite:strong_rose_hip_tea',
    'farmersrespite:strong_purulent_tea',
    'farmersrespite:strong_coffee',
    'farmersrespite:strong_apple_cider'
]

const REGISTER_SIG = 'register(net.minecraft.world.level.material.Fluid,com.github.elenterius.biomancy.api.tribute.fluid.FluidToTributeConversion)'

StartupEvents.postInit(event => {

    try {

        var $FluidTributes            = Java.loadClass('com.github.elenterius.biomancy.api.tribute.fluid.FluidTributes')
        var $FluidTribute             = Java.loadClass('com.github.elenterius.biomancy.api.tribute.fluid.FluidTribute')
        var $FluidToTributeConversion = Java.loadClass('com.github.elenterius.biomancy.api.tribute.fluid.FluidToTributeConversion')
        var $MobEffectTribute         = Java.loadClass('com.github.elenterius.biomancy.api.tribute.MobEffectTribute')
        var $Tributes                 = Java.loadClass('com.github.elenterius.biomancy.api.tribute.Tributes')
        var $ForgeRegistries          = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
        var $ResourceLocation         = Java.loadClass('net.minecraft.resources.ResourceLocation')
        var $ItemStack                = Java.loadClass('net.minecraft.world.item.ItemStack')

        let registered = 0
        let skipped_no_fluid = 0
        let skipped_no_item = 0
        let skipped_empty_tribute = 0
        let errors = 0

        DRINKS.forEach(id => {
            try {
                var rl = $ResourceLocation.tryParse(id)
                if (rl === null) {
                    console.warn(`[cradle_fluid_tributes] Bad resource id: ${id}`)
                    errors++
                    return
                }
                var fluid = $ForgeRegistries.FLUIDS.getValue(rl)
                if (fluid === null) { skipped_no_fluid++; return }

                var resolvedItemId = FLUID_TO_ITEM_OVERRIDE[id] || id
                var itemRl = (resolvedItemId === id) ? rl : $ResourceLocation.tryParse(resolvedItemId)
                var item = $ForgeRegistries.ITEMS.getValue(itemRl)
                if (item === null) { skipped_no_item++; return }

                var itemStack = new $ItemStack(item, 1)
                var fallbackItemTribute = $Tributes.getTribute(itemStack)
                if (fallbackItemTribute === null || fallbackItemTribute.isEmpty()) {
                    skipped_empty_tribute++
                    return
                }
                var fallbackMilli = $FluidTribute.of(fallbackItemTribute, TANKARD_AMOUNT)

                var ADD_EFFECT_SIG = 'addEffect(net.minecraft.world.effect.MobEffectInstance)'
                var cachedMilli = null

                var conversion = new $FluidToTributeConversion({
                    getTributePerUnit: function (resource) {
                        if (cachedMilli !== null) return cachedMilli
                        try {
                            var foodProps = item.getFoodProperties()
                            if (foodProps === null) {
                                cachedMilli = fallbackMilli
                                return cachedMilli
                            }
                            var effects = foodProps.getEffects()
                            if (effects === null || effects.isEmpty()) {
                                cachedMilli = fallbackMilli
                                return cachedMilli
                            }
                            var b = $MobEffectTribute.builder()
                            for (var i = 0; i < effects.size(); i++) {
                                b[ADD_EFFECT_SIG](effects.get(i).getFirst())
                            }
                            var built = b.build()
                            if (built.isEmpty()) {
                                cachedMilli = fallbackMilli
                                return cachedMilli
                            }
                            cachedMilli = $FluidTribute.of(built, TANKARD_AMOUNT)
                            return cachedMilli
                        } catch (e) {
                            console.warn(`[cradle_fluid_tributes] runtime build failed for ${id}, using fallback: ${e}`)
                            cachedMilli = fallbackMilli
                            return cachedMilli
                        }
                    },
                })
                $FluidTributes[REGISTER_SIG](fluid, conversion)
                registered++
            } catch (e) {
                errors++
                console.warn(`[cradle_fluid_tributes] Failed for ${id}: ${e}`)
            }
        })

        console.log(`[cradle_fluid_tributes] Registered=${registered}, ` +
                    `skipped(no_fluid=${skipped_no_fluid}, no_item=${skipped_no_item}, ` +
                    `empty_tribute=${skipped_empty_tribute}), errors=${errors}`)
    } catch (e) {
        // Last-resort containment — log and swallow so we don't take down ModLoader.
        console.error(`[cradle_fluid_tributes] FATAL setup error (contained): ${e}`)
    }
})