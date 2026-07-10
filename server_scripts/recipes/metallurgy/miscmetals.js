ServerEvents.recipes(event => {
    // Eternal Starlight alloy recipes
    event.recipes.gtceu.alloy_blast_smelter("golem_steel_duping")
        .itemInputs("3x gtceu:deepsilver_dust", "2x gtceu:tiny_golem_steel_dust")
        .outputFluids(Fluid.of("gtceu:golem_steel", 144))
        .duration(260)
        .EUt(120)
        .blastFurnaceTemp(1400);
    event.recipes.gtceu.alloy_blast_smelter("unrealium_forging")
        .itemInputs("gtceu:deepsilver_dust", "gtceu:golem_steel_dust", "gtceu:malarite_dust", "eternal_starlight:soul_dew")
        .outputFluids(Fluid.of("gtceu:unrealium", 144))
        .duration(260)
        .EUt(120)
        .blastFurnaceTemp(1400);
    // Better End alloy recipes
    event.recipes.gtceu.alloy_blast_smelter("terminite_forging")
        .itemInputs("gtceu:thallasium_dust", "#forge:dusts/ender_pearl")
        .outputFluids(Fluid.of("gtceu:terminite", 144))
        .duration(260)
        .EUt(120)
        .blastFurnaceTemp(1400);
    event.recipes.gtceu.alloy_blast_smelter("aeternium_forging")
        .itemInputs("gtceu:terminite_dust", "gtceu:netherite_dust")
        .outputFluids(Fluid.of("gtceu:aeternium", 144))
        .duration(260)
        .EUt(120)
        .blastFurnaceTemp(1400);
    //Blend hand-mixing
    event.shapeless(
        Item.of('gtceu:pewter_dust', 2),
            [
                '#forge:dusts/iron',
                '#forge:dusts/lead'
            ]
    )
    event.shapeless(
        Item.of('gtceu:bendalloy_dust', 4),
            [
                '#forge:dusts/tin',
                '#forge:dusts/cadmium',
                '#forge:dusts/tin',
                '#forge:dusts/lead'
            ]
    )
    event.shapeless(
        Item.of('gtceu:duralumin_dust', 4),
            [
                'gtceu:aluminium_dust',
                'gtceu:aluminium_dust',
                'gtceu:aluminium_dust',
                '#forge:dusts/copper'
            ]
    )
    event.shapeless(
        Item.of('gtceu:nicrosil_dust', 4),
            [
                '#forge:dusts/nickel',
                '#forge:dusts/nickel',
                '#forge:dusts/chromium',
                '#forge:dusts/quartz'
            ]
    )
    event.shapeless(
        Item.of('gtceu:nicrosil_dust', 4),
            [
                '#forge:dusts/nickel',
                '#forge:dusts/nickel',
                '#forge:dusts/chromium',
                '#forge:dusts/silicon_dioxide'
            ]
    )
});