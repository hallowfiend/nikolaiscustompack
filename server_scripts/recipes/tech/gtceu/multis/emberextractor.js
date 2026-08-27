ServerEvents.recipes((event) => {
        event.recipes.create.mechanical_crafting('gtceu:thermomechanical_ember_extractor', [
        'aabaa',
        'acdca',
        'efgfe',
        'ahjha',
        'aakaa'
        ], {
        a: 'embers:ashen_brick',
        b: 'embers:catalytic_plug',
        c: 'create:mechanical_drill',
        d: 'embers:wildfire_stirling',
        e: 'immersiveengineering:heavy_engineering',
        f: 'create:precision_mechanism',
        g: 'scguns:cog_heart',
        h: 'immersiveengineering:thermoelectric_generator',
        j: 'embers:winding_gears',
        k: 'embers:ember_bore'
        })
    const pureFuels = [
        {fuel: "#forge:storage_blocks/charcoal", mult: 1},
        {fuel: "#forge:storage_blocks/coke", mult: 2},
        {fuel: "#forge:storage_blocks/arcane_charcoal", mult: 4}
    ]
    pureFuels.forEach(fuel => {
        var identifier = fuel.fuel.replace("#forge:storage_blocks/", "")
        //Overworld
        event.recipes.gtceu.ember_extraction(`overworld_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '6x embers:ember_shard',
            '3x gtceu:ember_gem',
            '2x embers:ember_crystal',
            '2x embers:ember_grit'
        )
        .chancedOutput('2x embers:ember_crystal', 2000*fuel.mult, 0)
        .chancedOutput('3x gtceu:ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('6x embers:ember_shard', 2000*fuel.mult, 0)
        .chancedOutput('2x embers:ember_grit', 2000*fuel.mult, 0)
        .chancedOutput('gtceu:exquisite_ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('gtceu:ember_gem', 500*fuel.mult, 0)
        .duration(2000/fuel.mult)
        .dimension("minecraft:overworld")
        .posY(-65, -20)
        .EUt(GTValues.V[GTValues.ULV]);
        //Nether
        event.recipes.gtceu.ember_extraction(`nether_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '6x embers:ember_shard',
            '3x gtceu:ember_gem',
            '2x embers:ember_crystal',
            '2x embers:ember_grit'
        )
        .chancedOutput('2x embers:ember_crystal', 2000*fuel.mult, 0)
        .chancedOutput('3x gtceu:ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('6x embers:ember_shard', 2000*fuel.mult, 0)
        .chancedOutput('2x embers:ember_grit', 2000*fuel.mult, 0)
        .chancedOutput('gtceu:exquisite_ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('gtceu:ember_gem', 500*fuel.mult, 0)
        .duration(3000/fuel.mult)
        .dimension("minecraft:the_nether")
        .posY(0, 20)
        .EUt(GTValues.V[GTValues.ULV]);
        //Undergarden
        event.recipes.gtceu.ember_extraction(`undergarden_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '7x embers:ember_crystal',
            '2x gtceu:exquisite_ember_gem',
            '2x gtceu:ember_gem',
        )
        .chancedOutput('embers:ember_shard', 800*fuel.mult, 0)
        .chancedOutput('embers:ember_crystal_cluster', 500*fuel.mult, 0)
        .chancedOutput('embers:ember_grit', 400*fuel.mult, 0)
        .chancedOutput('7x embers:ember_crystal', 2000*fuel.mult, 0)
        .chancedOutput('2x gtceu:exquisite_ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('2x gtceu:ember_gem', 2000*fuel.mult, 0)
        .duration(8000/fuel.mult)
        .dimension("undergarden:undergarden")
        .posY(0, 20)
        .EUt(GTValues.V[GTValues.ULV]);
        //Twilight Forest
        event.recipes.gtceu.ember_extraction(`twilight_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '6x enderio:grains_of_infinity',
            '6x hexcasting:amethyst_dust',
            '4x mna:chimerite_gem',
            '2x evilcraft:dark_gem_crushed',
            'embers:ember_grit',
        )
        .chancedOutput('4x mna:chimerite_gem', 2000*fuel.mult, 0)
        .chancedOutput('6x enderio:grains_of_infinity', 2000*fuel.mult, 0)
        .chancedOutput('6x hexcasting:amethyst_dust', 2000*fuel.mult, 0)
        .chancedOutput('2x evilcraft:dark_gem_crushed', 2000*fuel.mult, 0)
        .chancedOutput('embers:ember_grit', 2000*fuel.mult, 0)
        .duration(6000/fuel.mult)
        .dimension("twilightforest:twilight_forest")
        .posY(-40, 0)
        .EUt(GTValues.V[GTValues.ULV]);
        //Aether
        event.recipes.gtceu.ember_extraction(`aether_voidscraping_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '8x aether:cold_aercloud',
            '6x aether:blue_aercloud',
            '4x aether:golden_aercloud',
            '2x deep_aether:sterling_aercloud',
            '2x aether:aerogel',
            '2x malum:aerial_spirit',
            'malum:astral_weave',
        )
        .chancedOutput('8x aether:cold_aercloud', 2000*fuel.mult, 0)
        .chancedOutput('6x aether:blue_aercloud', 2000*fuel.mult, 0)
        .chancedOutput('4x aether:golden_aercloud', 2000*fuel.mult, 0)
        .chancedOutput('2x aether:aerogel', 2000*fuel.mult, 0)
        .chancedOutput('2x deep_aether:sterling_aercloud', 2000*fuel.mult, 0)
        .chancedOutput('2x malum:aerial_spirit', 2000*fuel.mult, 0)
        .chancedOutput('malum:astral_weave', 2000*fuel.mult, 0)
        .duration(6000/fuel.mult)
        .dimension("aether:the_aether")
        .posY(-10, 30)
        .EUt(GTValues.V[GTValues.ULV]);
        //End
        event.recipes.gtceu.ember_extraction(`end_voidscraping_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '8x occultism:crushed_end_stone',
            '6x gtceu:obsidian_dust',
            '6x goety:ectoplasm',
            '2x experienceobelisk:forgotten_dust'
        )
        .chancedOutput('8x occultism:crushed_end_stone', 2000*fuel.mult, 0)
        .chancedOutput('6x gtceu:obsidian_dust', 2000*fuel.mult, 0)
        .chancedOutput('6x goety:ectoplasm', 2000*fuel.mult, 0)
        .chancedOutput('2x experienceobelisk:forgotten_dust', 2000*fuel.mult, 0)
        .chancedOutput('malum:warp_flux', 500*fuel.mult, 0)
        .chancedOutput('malum:eldritch_spirit', 500*fuel.mult, 0)
        .duration(6000/fuel.mult)
        .dimension("minecraft:the_end")
        .posY(-10, 30)
        .EUt(GTValues.V[GTValues.ULV]);
        //Venus
    })
})