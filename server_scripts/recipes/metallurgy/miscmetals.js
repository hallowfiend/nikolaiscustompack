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
});