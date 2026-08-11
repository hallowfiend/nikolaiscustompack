ServerEvents.recipes(event => {
    //treated leather
    event.recipes.create.filling("kubejs:treated_leather", [
        "minecraft:leather",
        Fluid.of("immersiveengineering:creosote", 250),
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
            fluid: "immersiveengineering:creosote",
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
    //laserio
    /* event.remove({ output: "laserio:logic_chip" });
    event.remove({ output: "laserio:logic_chip_raw" });
    event.remove({ output: "laserio:laser_connector" });
    event.remove({ output: "laserio:laser_node" });

    event.shaped("laserio:laser_connector", [" A ", "BCB", "DDD"], {
        A: "#forge:gems/ruby",
        B: "gtceu:vibrant_alloy_single_wire",
        C: "gtceu:ev_emitter",
        D: "#forge:plates/electrical_steel",
    });

    event.shaped("laserio:laser_node", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/stainless_steel",
        B: "#gtceu:circuits/ev",
        C: "#forge:storage_blocks/ruby",
        D: "laserio:laser_connector",
    }); */
})