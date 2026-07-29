ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('magebloom_oil_extraction')
        .inputFluids('gtceu:seed_oil 150')
        .itemInputs('ars_nouveau:magebloom')
        .outputFluids('gtceu:magebloom_oil 200')
        .duration(450)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.brewery('magebloom_oil_alchemical_preparation')
        .inputFluids('gtceu:magebloom_oil 3000')
        .itemInputs('magichem:aristose')
        .outputFluids('gtceu:alchemically_prepared_magebloom_oil 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.mixer('thaumophytochemical_emulsion_mixing')
        .inputFluids(
            'gtceu:alchemically_prepared_magebloom_oil 1500',
            Fluid.of("gtceu:potion", 1500, { Potion: "ars_nouveau:mana_regen_potion_strong" })
        )
        .outputFluids('gtceu:thaumophytochemical_emulsion 3000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.distillation_tower("thaumophytochemical_extract_distillation")
        .inputFluids("gtceu:thaumophytochemical_emulsion 6000")
        .outputFluids("gtceu:thaumophytochemical_extract 2000")
        .outputFluids("gtceu:seed_oil 300")
        .outputFluids("gtceu:biomass 1000")
        .outputFluids("minecraft:water 700")
        .itemOutputs('4x biomancy:exotic_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.chemical_reactor("source_boosted_dieselixir_production")
        .itemInputs('malum:cursed_sapball')
        .inputFluids("gtceu:thaumophytochemical_extract 400")
        .inputFluids("gtceu:bio_diesel 800")
        .outputFluids("gtceu:source_boosted_dieselixir 1000")
        .itemOutputs('minecraft:sugar')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor("source_boosted_dieselixir_batch")
        .itemInputs('malum:cursed_sap_block')
        .inputFluids("gtceu:thaumophytochemical_extract 8000")
        .inputFluids("gtceu:bio_diesel 16000")
        .outputFluids("gtceu:source_boosted_dieselixir 24000")
        .itemOutputs('supplementaries:sugar_cube')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.combustion_generator("source_boosted_dieselixir_fuel")
        .inputFluids("gtceu:source_boosted_dieselixir 1")
        .duration(64)
        .EUt(-32);
    
})