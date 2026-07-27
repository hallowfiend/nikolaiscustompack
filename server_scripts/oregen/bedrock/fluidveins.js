ServerEvents.recipes(event =>{
    event.remove({ id: "immersivepetroleum:reservoirs/oil" })
    const id_prefix = 'kubejs/immersivepetroengi/reservoirs/';

    const recipes = [
        {
            fluid: 'gtceu:oil',
            fluidminimum: 1000000,
            fluidcapacity: 15000000,
            fluidtrace: 1,
            weight: 100,
            dimension: {
                whitelist: ['minecraft:overworld'],
                blacklist: []
            },
            biome: {
                whitelist: [],
                blacklist: []
            },
            name: 'oil',
            id: 'overworld_oil'
        },
        {
            fluid: 'gtceu:oil_medium',
            fluidminimum: 1000000,
            fluidcapacity: 15000000,
            fluidtrace: 1,
            weight: 100,
            dimension: {
                whitelist: ['minecraft:overworld'],
                blacklist: []
            },
            biome: {
                whitelist: [],
                blacklist: []
            },
            name: 'medium_oil',
            id: 'overworld_medium_oil'
        },
        {
            fluid: 'gtceu:oil',
            fluidminimum: 2000000,
            fluidcapacity: 25000000,
            fluidtrace: 6,
            weight: 40,
            dimension: {
                whitelist: ['undergarden:undergarden'],
                blacklist: []
            },
            biome: {
                whitelist: [],
                blacklist: []
            },
            name: 'underoil',
            id: 'undergarden_oil'
        },
        {
            fluid: 'gtceu:oil_heavy',
            fluidminimum: 2000000,
            fluidcapacity: 25000000,
            fluidtrace: 6,
            weight: 80,
            dimension: {
                whitelist: ['undergarden:undergarden'],
                blacklist: []
            },
            biome: {
                whitelist: [],
                blacklist: []
            },
            name: 'heavy_underoil',
            id: 'undergarden_heavy_oil'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:reservoirs';
        event.custom(recipe).id(recipe.id);
    });
})