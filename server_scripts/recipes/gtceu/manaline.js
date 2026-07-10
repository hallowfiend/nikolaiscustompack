ServerEvents.recipes(event => {
    // Entheogen
    event.recipes.gtceu.macerator(`hexalia:siren_paste`)
        .itemInputs('hexalia:siren_kelp')
        .itemOutputs('2x hexalia:siren_paste')
        .duration(200)
        .EUt(8);
    event.recipes.gtceu.macerator(`kubejs:spiral_paste`)
        .itemInputs('eternal_starlight:spiral_kelp')
        .itemOutputs('kubejs:spiral_paste')
        .duration(200)
        .EUt(8);
    
    event.recipes.gtceu.macerator(`kubejs:glitterkelp_paste`)
        .itemInputs('undergarden:glitterkelp')
        .itemOutputs('kubejs:glitterkelp_paste')
        .duration(200)
        .EUt(8);
    
    event.recipes.gtceu.macerator(`kubejs:ground_yellow_tea`)
        .itemInputs('farmersrespite:yellow_tea_leaves')
        .itemOutputs('minecraft:yellow_dye')
        .chancedOutput('kubejs:ground_yellow_tea', '2/5', 200)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);
    
    event.recipes.gtceu.fluid_heater('inactivating_virulence')
        .inputFluids('undergarden:virulent_mix_source 1000')
        .outputFluids('kubejs:inactivated_virulence 1000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV]);
    
    event.recipes.gtceu.centrifuge('underbroth_centrifuging')
        .inputFluids(Fluid.of('kubejs:inactivated_virulence', 10000))
        .outputFluids(
            Fluid.of('kubejs:underbroth', 8000))
        .itemOutputs('4x gtceu:bio_chaff')
        .itemOutputs('4x biomancy:exotic_dust')
        .duration(100*30)
        .EUt(GTValues.VA[GTValues.LuV]);
    
    event.recipes.gtceu.mixer('impure_interdim_tisane')
        .itemInputs('32x hexalia:siren_paste')
        .itemInputs('32x kubejs:spiral_paste')
        .itemInputs('32x kubejs:glitterkelp_paste')
        .itemInputs('32x kubejs:ground_yellow_tea')
        .inputFluids(`kubejs:underbroth 4000`)
        .outputFluids('kubejs:impure_interdim_tisane 4000')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800);
    
    event.recipes.gtceu.extractor('molten_carminite')
        .itemInputs('twilightforest:carminite')
        .outputFluids('twilight_construct:molten_carminite 90')
        .duration(50)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.extractor('molten_carminite_from_block')
        .itemInputs('twilightforest:carminite_block')
        .outputFluids('twilight_construct:molten_carminite 810')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    
    event.recipes.gtceu.mixer('composite_stardust')
        .itemInputs('gtceu:luminite_dust')
        .itemInputs('gtceu:deepsilver_dust')
        .itemInputs('gtceu:starlit_diamond_dust')
        .itemInputs('mna:purified_vinteum_dust')
        .itemOutputs('4x gtceu:composite_stardust_dust')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100);

    event.recipes.gtceu.mixer('regal_zanite')
        .itemInputs('gtceu:zanite_dust')
        .itemInputs('gtceu:regalium_dust')
        .itemOutputs('2x gtceu:regal_zanite_dust')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400);
    
    event.recipes.gtceu.chemical_reactor('rezanite_pentachloride')
        .inputFluids(`gtceu:regal_zanite 1000`)
        .inputFluids(`gtceu:chlorine 5000`)
        .itemInputs('16x gtceu:iesnium_foil')
        .outputFluids('gtceu:rezanite_pentachloride 6000')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400);

    event.recipes.gtceu.chemical_reactor('fluororezanitic_acid')
        .inputFluids(`gtceu:rezanite_pentachloride 10000`)
        .inputFluids(`gtceu:hydrofluoric_acid 10000`)
        .itemInputs('16x gtceu:iesnium_foil')
        .outputFluids('gtceu:fluororezanitic_acid 10000')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400);

    event.recipes.gtceu.brewery('gigantarubra')
        .itemInputs('16x gtceu:composite_stardust_dust')
        .inputFluids('twilight_construct:molten_carminite 4000')
        .outputFluids('gtceu:gigantarubra 4000')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100);
    
    event.recipes.gtceu.large_chemical_reactor('clarified_interdim_tisane')
        .inputFluids(`gtceu:fluororezanitic_acid 10000`)
        .inputFluids(`kubejs:impure_interdim_tisane 5000`)
        .itemInputs('16x gtceu:froststeel_foil')
        .outputFluids('kubejs:clarified_interdim_tisane 5000')
        .outputFluids('gtceu:acetic_acid 2000')
        .itemOutputs('4x gtceu:fluorite_dust')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600);
    
    event.recipes.gtceu.large_chemical_reactor('pure_interdim_tisane')
        .inputFluids(`kubejs:clarified_interdim_tisane 10000`)
        .itemInputs('8x gtceu:gigantarubra_dust')
        .outputFluids('kubejs:pure_interdim_tisane 5000')
        .itemOutputs('8x gtceu:spiritual_debris_dust')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600);

    event.recipes.gtceu.fermenter('entheogen_at_last')
        .inputFluids('kubejs:pure_interdim_tisane 8000')
        .outputFluids('kubejs:entheogen 4000')
        .itemOutputs('eidolon:soul_shard')
        .duration(120)
        .EUt(GTValues.VA[GTValues.UV])
    
    event.recipes.gtceu.centrifuge('spiritual_debris_centrifuging')
        .itemInputs('4x gtceu:spiritual_debris_dust')
        .itemOutputs('gtceu:mundus_dust')
        .itemOutputs('gtceu:solid_xenorhast_dust')
        .itemOutputs('gtceu:solid_arkanum_dust')
        .itemOutputs('sons_of_sins:ether_ashes')
        .duration(40*30)
        .EUt(GTValues.VA[GTValues.LuV]);
})