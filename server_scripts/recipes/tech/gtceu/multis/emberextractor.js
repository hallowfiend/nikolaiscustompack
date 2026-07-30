ServerEvents.recipes((event) => {
    const pureFuels = [
        {fuel: "#forge:storage_blocks/charcoal", mult: 1},
        {fuel: "#forge:storage_blocks/coke", mult: 2},
        {fuel: "#forge:storage_blocks/arcane_charcoal", mult: 4},
        {fuel: "#forge:storage_blocks/ichorfuel", mult: 12}
    ]
    pureFuels.forEach(fuel => {
        var identifier = fuel.fuel.replace("#forge:storage_blocks/", "")
        //Overworld
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/overworld_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '6x embers:ember_shard',
            '3x gtceu:ember_gem',
            '2x embers:ember_crystal',
            '2x embers:ember_grit'
        )
        .chancedOutput('2x embers:ember_crystal', 4000*fuel.mult, 0)
        .chancedOutput('3x gtceu:ember_gem', 4000*fuel.mult, 0)
        .chancedOutput('6x embers:ember_shard', 4000*fuel.mult, 0)
        .chancedOutput('2x embers:ember_grit', 4000*fuel.mult, 0)
        .chancedOutput('gtceu:exquisite_ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('gtceu:ember_gem', 500*fuel.mult, 0)
        .duration(4000/fuel.mult)
        .dimension("minecraft:overworld")
        .posY(-65, -20)
        .EUt(GTValues.VA[GTValues.LV]);
        //Nether
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/nether_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '6x embers:ember_shard',
            '3x gtceu:ember_gem',
            '2x embers:ember_crystal',
            '2x embers:ember_grit'
        )
        .chancedOutput('2x embers:ember_crystal', 4000*fuel.mult, 0)
        .chancedOutput('3x gtceu:ember_gem', 4000*fuel.mult, 0)
        .chancedOutput('6x embers:ember_shard', 4000*fuel.mult, 0)
        .chancedOutput('2x embers:ember_grit', 4000*fuel.mult, 0)
        .chancedOutput('gtceu:exquisite_ember_gem', 2000*fuel.mult, 0)
        .chancedOutput('gtceu:ember_gem', 500*fuel.mult, 0)
        .duration(3000/fuel.mult)
        .dimension("minecraft:the_nether")
        .posY(0, 20)
        .EUt(GTValues.VA[GTValues.LV]);
        //Undergarden
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/undergarden_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '7x embers:ember_crystal',
            '2x gtceu:exquisite_ember_gem',
            '2x gtceu:ember_gem',
        )
        .chancedOutput('embers:ember_shard', 800*fuel.mult, 0)
        .chancedOutput('embers:ember_crystal_cluster', 500*fuel.mult, 0)
        .chancedOutput('embers:ember_grit', 400*fuel.mult, 0)
        .chancedOutput('7x embers:ember_crystal', 4000*fuel.mult, 0)
        .chancedOutput('2x gtceu:exquisite_ember_gem', 4000*fuel.mult, 0)
        .chancedOutput('2x gtceu:ember_gem', 4000*fuel.mult, 0)
        .duration(8000/fuel.mult)
        .dimension("undergarden:undergarden")
        .posY(0, 20)
        .EUt(GTValues.VA[GTValues.LV]);
        //Twilight Forest
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/twilight_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '6x enderio:grains_of_infinity',
            '6x hexcasting:amethyst_dust',
            '4x mna:chimerite_gem',
            '2x evilcraft:dark_gem_crushed',
            'embers:ember_grit',
        )
        .chancedOutput('4x mna:chimerite_gem', 4000*fuel.mult, 0)
        .chancedOutput('6x enderio:grains_of_infinity', 4000*fuel.mult, 0)
        .chancedOutput('6x hexcasting:amethyst_dust', 4000*fuel.mult, 0)
        .chancedOutput('2x evilcraft:dark_gem_crushed', 4000*fuel.mult, 0)
        .chancedOutput('embers:ember_grit', 4000*fuel.mult, 0)
        .duration(6000/fuel.mult)
        .dimension("twilightforest:twilight_forest")
        .posY(-40, 0)
        .EUt(GTValues.VA[GTValues.LV]);
        //Aether
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/aether_voidscraping_with_${identifier}`)
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
        .chancedOutput('8x aether:cold_aercloud', 4000*fuel.mult, 0)
        .chancedOutput('6x aether:blue_aercloud', 4000*fuel.mult, 0)
        .chancedOutput('4x aether:golden_aercloud', 4000*fuel.mult, 0)
        .chancedOutput('2x aether:aerogel', 4000*fuel.mult, 0)
        .chancedOutput('2x deep_aether:sterling_aercloud', 4000*fuel.mult, 0)
        .chancedOutput('2x malum:aerial_spirit', 4000*fuel.mult, 0)
        .chancedOutput('malum:astral_weave', 4000*fuel.mult, 0)
        .duration(6000/fuel.mult)
        .dimension("aether:the_aether")
        .posY(-10, 30)
        .EUt(GTValues.VA[GTValues.LV]);
        //End
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/end_voidscraping_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            '8x occultism:crushed_end_stone',
            '6x gtceu:obsidian_dust',
            '6x goety:ectoplasm',
            '2x experienceobelisk:forgotten_dust'
        )
        .chancedOutput('8x occultism:crushed_end_stone', 4000*fuel.mult, 0)
        .chancedOutput('6x gtceu:obsidian_dust', 4000*fuel.mult, 0)
        .chancedOutput('6x goety:ectoplasm', 4000*fuel.mult, 0)
        .chancedOutput('2x experienceobelisk:forgotten_dust', 4000*fuel.mult, 0)
        .chancedOutput('malum:warp_flux', 500*fuel.mult, 0)
        .chancedOutput('malum:eldritch_spirit', 500*fuel.mult, 0)
        .duration(6000/fuel.mult)
        .dimension("minecraft:the_end")
        .posY(-10, 30)
        .EUt(GTValues.VA[GTValues.LV]);
        //Venus
    })
})