ServerEvents.recipes(event => {
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'embersaddcompat:stamping/andesite_alloy_from_iron'})
    event.remove({id: 'create:mixing/andesite_alloy'})
    //early plates
    event.shaped('2x gtceu:wood_plate', ['A', 'B'], { A: '#gtceu:crafting_tools/saw', B: '#minecraft:wooden_slabs' })
    //treated leather
    event.recipes.create.filling("kubejs:treated_leather", [
        "minecraft:leather",
        Fluid.of("gtceu:creosote", 250),
    ]);
    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 250,
            tag: "forge:creosote",
        },
        inputs: [
            {
                item: "minecraft:leather",
            },
        ],
        results: [
            {
                item: "kubejs:treated_leather",
            },
        ],
    });
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 250,
            fluid: "gtceu:creosote",
        },
        item_input: {
            item: "minecraft:leather",
        },
        item_output: {
            count: 1,
            item: "kubejs:treated_leather",
        },
        temperature: {
            min_temp: 273,
        },
    });
    const treatLeathers = [
        'eidolon:basic_belt',
        'malum:gilded_belt',
        'malum:gilded_ring',
        'malum:elaborate_brooch',
        'malum:ornate_ring',
        'goety:focus_pack',
        'goety:brew_bag'
    ]
    treatLeathers.forEach(item => {
        event.replaceInput({output: item}, /minecraft:leather|#c:leathers|#forge:leather/, 'kubejs:treated_leather')
    })
    //photovoltaic composite
    event.remove({output: 'enderio:photovoltaic_composite'})
    event.shapeless('4x enderio:photovoltaic_composite', [
        'experienceobelisk:cognitive_flux', 'gtceu:electrotine_dust', 'minecraft:glowstone_dust', '#forge:dusts/coal'
    ])
    //laserio
    /* event.remove({ output: "laserio:logic_chip" });
    event.remove({ output: "laserio:logic_chip_raw" });
    event.remove({ output: "laserio:laser_connector" });
    event.remove({ output: "laserio:laser_node" });

    event.shaped("laserio:laser_connector", [" A ", "BCB", "DDD"], {
        A: "#forge:gems/ruby",
        B: "gtceu:vibrant_alloy_single_wire",
        C: "gtceu:hv_emitter",
        D: "#forge:plates/electrical_steel",
    });

    event.shaped("laserio:laser_node", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/stainless_steel",
        B: "#gtceu:circuits/hv",
        C: "#forge:storage_blocks/ruby",
        D: "laserio:laser_connector",
    }); */
})