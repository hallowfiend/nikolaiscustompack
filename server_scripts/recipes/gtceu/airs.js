ServerEvents.recipes((event) => {
    //Collecting
    event.recipes.gtceu.gas_collector('aether_air')
        .circuit(5)
        .dimension('aether:the_aether')
        .outputFluids(Fluid.of('gtceu:aether_air', 10000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.gas_collector('undergarden_smog')
        .outputFluids('gtceu:undergarden_smog 10000')
        .duration(400)
        .circuit(5)
        .dimension('undergarden:undergarden')
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.gas_collector("venus_atmosphere")
        .circuit(7)
        .dimension("ad_astra:venus")
        .outputFluids(Fluid.of("gtceu:venus_atmosphere", 10000))
        .EUt(1024)
        .duration(200);
    event.recipes.gtceu.gas_collector("glacio_atmosphere")
        .circuit(7)
        .dimension("ad_astra:glacio")
        .outputFluids(Fluid.of("gtceu:glacio_atmosphere", 10000))
        .EUt(1024)
        .duration(200);
    event.recipes.gtceu.gas_collector("twilight_air")
        .circuit(4)
        .duration(200)
        .dimension("twilightforest:twilight_forest")
        .outputFluids(Fluid.of("gtceu:twilight_air", 10000))
        .EUt(GTValues.VA[GTValues.LV]);
    //Cooling
    event.recipes.gtceu.vacuum_freezer('aether_air_to_liquid')
        .inputFluids(Fluid.of('gtceu:aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_aether_air', 4000))
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.vacuum_freezer('twilight_air_condensing')
        .inputFluids(Fluid.of('gtceu:twilight_air', 4000))
        .outputFluids(Fluid.of('gtceu:condensed_twilight', 4000))
        .duration(20*4)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.vacuum_freezer('undergarden_smog_to_sludge')
        .inputFluids('gtceu:undergarden_smog 4000')
        .outputFluids('gtceu:undergarden_sludge 4000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV]);
    //Centrifuging
    event.recipes.gtceu.centrifuge('aether_air_centrifuging')
        .inputFluids(Fluid.of('gtceu:aether_air', 10000))
        .outputFluids(
            Fluid.of('gtceu:fluorine', 4000),
            Fluid.of('gtceu:oxygen', 3500)
        )
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.MV]);
    //Distillation
    event.recipes.gtceu.distillation_tower('condensed_twilight_distillation')
        .inputFluids('gtceu:condensed_twilight 100000')
        .itemOutputs("gtceu:mundus_dust")
        .outputFluids(Fluid.of("gtceu:nitrogen", 42000))
        .outputFluids(Fluid.of("gtceu:oxygen", 25000))
        .outputFluids(Fluid.of("gtceu:carbon_dioxide", 15000))
        .outputFluids('gtceu:aura 5000')
        .outputFluids(Fluid.of("gtceu:helium", 2000))
        .duration(40 * 10)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.distillation_tower('aether_air_distillation')
        .inputFluids('gtceu:liquid_aether_air 100000')
        .outputFluids('gtceu:fluorine 28000')
        .outputFluids('gtceu:oxygen 22000')
        .outputFluids('gtceu:ozone 16000')
        .outputFluids('gtceu:helium 16000')
        .outputFluids('gtceu:aerialis 18000')
        .duration(40 * 10)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.distillation_tower('undergarden_sludge_distillation')
        .inputFluids('gtceu:undergarden_sludge 200000')
        .outputFluids('gtceu:fermented_biomass 75000')
        .outputFluids('gtceu:coal_gas 45000')
        .outputFluids('gtceu:natural_gas 20000')
        .outputFluids('gtceu:sulfur_trioxide 30000')
        .outputFluids('gtceu:coal_tar 15000')
        .outputFluids('pneumaticcraft:kerosene 15000')
        .duration(80 * 10)
        .EUt(GTValues.VA[GTValues.EV]);
});