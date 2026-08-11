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
})