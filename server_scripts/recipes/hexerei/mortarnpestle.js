ServerEvents.recipes(event =>{
    /**
    {
     inputItem:[
     {"item":},
     {"item":},
     {"item":},
     {"item":},
     {"item":}
     ], // max 5
     output:,
     output_amount:,
     time:,
    }
    */
    const typicalRecipes = [
        // Hexalia mortar and pestle
        {
            inputItem:[
                {"tag": "forge:slimeballs"},
                {"tag": "forge:resins"},
                {"tag": "hexalia:crushed_herbs"}
            ],
            output:'hexalia:mutavis',
            output_amount:1,
            time:60
        },
        {
            inputItem:[
                {"item": "minecraft:honeycomb"},
                {"tag": "minecraft:small_flowers"},
                {"tag": "hexalia:crushed_herbs"}
            ],
            output:'hexalia:fragrant_nectar',
            output_amount:1,
            time:60
        },
        {
            inputItem:[
                {"item": "minecraft:cornflower"},
                {"tag": "forge:resins"},
                {"item": "minecraft:oxeye_daisy"}
            ],
            output:'hexalia:menders_salve',
            output_amount:1,
            time:120
        },
        {
            inputItem:[
                {"item": "minecraft:poppy"},
                {"item": "hexalia:rabbage"},
                {"item": "minecraft:azure_bluet"}
            ],
            output:'hexalia:brambleguard_salve',
            output_amount:1,
            time:120
        }
    ]
    
    const repeatingRecipes = [
        // Hexalia mortar and pestle
        {
            input: { "item": "hexalia:siren_kelp"},
            output: 'hexalia:siren_paste',
            baseGrindingTime: 20
        },
        {
            input: { "item": "hexalia:dreamshroom"},
            output: 'hexalia:dream_paste',
            baseGrindingTime: 20
        },
        {
            input: {"item": "hexalia:spirit_bloom"},
            output: 'hexalia:spirit_powder',
            baseGrindingTime: 30
        },
        {
            input: {"item": "hexalia:saltsprout"},
            output: 'gtceu:salt_dust',
            baseGrindingTime: 30
        },
        {
            input: {"item": "hexalia:ghost_fern"},
            output: 'hexalia:ghost_powder',
            baseGrindingTime: 30
        },
        {
            input: {"item": "hexalia:silk_fiber"},
            output: 'minecraft:string',
            baseGrindingTime: 30
        },
        // GT mortar grindables
        {
            input: {"item": "minecraft:wheat"},
            output: 'create:wheat_flour',
            baseGrindingTime: 20
        },
        {
            input: {"item": "gtceu:wrought_iron_ingot"},
            output: 'gtceu:wrought_iron_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:bricks"},
            output: 'gtceu:brick_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:coal"},
            output: 'gtceu:coal_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:gravel"},
            output: 'minecraft:flint',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:charcoal"},
            output: 'gtceu:charcoal_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:copper_ingot"},
            output: 'immersiveengineering:dust_copper',
            baseGrindingTime: 60
        },
        {
            input: {"item": "gtceu:bronze_ingot"},
            output: 'gtceu:bronze_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "gtceu:invar_ingot"},
            output: 'gtceu:invar_dust',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:gems/coke"},
            output: 'gtceu:coke_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "create:brass_ingot"},
            output: 'gtceu:brass_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "gtceu:annealed_copper_ingot"},
            output: 'gtceu:annealed_copper_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:clay_ball"},
            output: 'gtceu:small_clay_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:clay"},
            output: 'gtceu:clay_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:brick"},
            output: 'gtceu:small_brick_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:flint"},
            output: 'gtceu:flint_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "minecraft:sand"},
            output: 'gtceu:quartz_sand_dust',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/silver"},
            output: 'immersiveengineering:dust_silver',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/gold"},
            output: 'immersiveengineering:dust_gold',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/electrum"},
            output: 'immersiveengineering:dust_electrum',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/iron"},
            output: 'immersiveengineering:dust_iron',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/nickel"},
            output: 'immersiveengineering:dust_nickel',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/lead"},
            output: 'immersiveengineering:dust_lead',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/steel"},
            output: 'immersiveengineering:dust_steel',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/tin"},
            output: 'gtceu:tin_dust',
            baseGrindingTime: 60
        },
        {
            input: {"tag": "forge:ingots/zinc"},
            output: 'gtceu:zinc_dust',
            baseGrindingTime: 60
        },
        {
            input: {"item": "gtceu:antimony_ingot"},
            output: 'gtceu:antimony_dust',
            baseGrindingTime: 60
        }
    ]

    const hibernalHerbs = [
        "calendula",
        "rosemary",
        "thyme",
        "tarragon",
        "chamomile",
        "chives",
        "verbena",
        "sorrel",
        "marjoram",
        "chervil",
        "fennsel",
        "ceillis",
        "punuel",
        "essitte",
        "fennkystral",
        "thyocielle",
        "sage"
    ]
    //Hibernal Herbs herb pounding and drying
    hibernalHerbs.forEach(herb =>{
        event.remove({ output: `hibernalherbs:pounded_${herb}`})
        event.remove({ output: `hibernalherbs:dried_${herb}`})
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[{"item": `hibernalherbs:${herb}`}],
            "output": {"item": `hibernalherbs:pounded_${herb}`,"count": 1},
            "grindingTime":10
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`}
            ],
            "output": {"item": `hibernalherbs:pounded_${herb}`,"count": 2},
            "grindingTime":20
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`}
            ],
            "output": {"item": `hibernalherbs:pounded_${herb}`,"count": 3},
            "grindingTime":30
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`}
            ],
            "output": {"item": `hibernalherbs:pounded_${herb}`,"count": 4},
            "grindingTime":40
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`},
                {"item": `hibernalherbs:${herb}`}
            ],
            "output": {"item": `hibernalherbs:pounded_${herb}`,"count": 5},
            "grindingTime":50
        })
        event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": `hibernalherbs:pounded_${herb}`}],
            "output": {"item": `hibernalherbs:dried_${herb}`, "count": 1},
            "dryingTimeInTicks": 2000
        })
    })

    typicalRecipes.forEach(recipe =>{
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":recipe.inputItem,
            "output": {"item":recipe.output,"count":recipe.output_amount},
            "grindingTime":recipe.time
        })
    })

    repeatingRecipes.forEach(recipe => {
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[recipe.input],
            "output": {"item":recipe.output,"count": 1},
            "grindingTime":recipe.baseGrindingTime
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[recipe.input, recipe.input],
            "output": {"item":recipe.output,"count": 2},
            "grindingTime":(recipe.baseGrindingTime*1.5)
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[recipe.input, recipe.input, recipe.input],
            "output": {"item":recipe.output,"count": 3},
            "grindingTime":(recipe.baseGrindingTime*2.25)
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[recipe.input, recipe.input, recipe.input, recipe.input],
            "output": {"item":recipe.output,"count": 4},
            "grindingTime":(recipe.baseGrindingTime*3)
        })
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":[recipe.input, recipe.input, recipe.input, recipe.input, recipe.input],
            "output": {"item":recipe.output,"count": 5},
            "grindingTime":(recipe.baseGrindingTime*3.75)
        })
    })
})