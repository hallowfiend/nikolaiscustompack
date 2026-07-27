const iron = { "tag": "embers:aspectus/iron" }
const lead = { "tag": "embers:aspectus/lead" }
const copper = { "tag": "embers:aspectus/copper" }
const silver = { "tag": "embers:aspectus/silver" }
const dawnstone = { "tag": "embers:aspectus/dawnstone" }
const tin = {"tag": "embers:aspectus/tin"}
const zinc = {"tag": "embers:aspectus/tin"}
const aluminium = {"tag": "embers:aspectus/aluminium"}
const gold = {"tag": "embers:aspectus/gold"}
const rose_gold = {"tag": "embers:aspectus/rose_gold"}
const sterling_silver = {"tag": "embers:aspectus/sterling_silver"}
const electrum = {"tag": "embers:aspectus/electrum"}
const constantan = {"tag": "embers:aspectus/constantan"}
const invar = {"tag": "embers:aspectus/invar"}
const pewter = {"tag": "embers:aspectus/pewter"}
const bronze = {"tag": "embers:aspectus/bronze"}
const brass = {"tag": "embers:aspectus/brass"}
const duralumin = {"tag": "embers:aspectus/duralumin"}

ServerEvents.recipes(event => {
    event.remove({ output: "bloodmagic:lavacrystal" })
    event.remove({ output: "naturesaura:depth_ingot" })

    //Custom aspecti
    //Base metals: Tin, Zinc, Aluminium, Gold
    //Alloys: Rose Gold, Sterling Silver, Electrum, Constantan, Invar, Pewter, Bronze, Brass, Duralumin
    //missing mixing recipes first
    function mixing(firstMetal, firstRatio, secondMetal, secondRatio, outputAlloy, alloyAmount){
        event.custom({
            "type": "embers:mixing",
            "inputs": [
                {
                "amount": firstRatio,
                "tag": `forge:${firstMetal}`
            },
            {
            "amount": secondRatio,
                "tag": `forge:${secondMetal}`
            }
        ],
        "output": {
            "amount": alloyAmount,
            "tag": `forge:${outputAlloy}`
        }
        })
    }
    mixing("gold", 16, "copper", 4, "rose_gold", 20)
    mixing("silver", 16, "copper", 4, "sterling_silver", 20)
    mixing("lead", 2, "iron", 2, "pewter", 4)
    mixing("copper", 2, "aluminium", 6, "duralumin", 8)
    //the aspecti proper
    const customAspectiMetals = [
        'tin',
        'zinc',
        'aluminium',
        'gold',
        'rose_gold',
        'sterling_silver',
        'electrum',
        'constantan',
        'invar',
        'pewter',
        'bronze',
        'brass',
        'duralumin'
    ]
    customAspectiMetals.forEach(metal =>{
        event.custom({
            "type": "embers:stamping",
            "fluid": {
                "amount": 144,
                "tag": `forge:${metal}`
            },
            "input": {
                "item": "embers:ember_shard"
            },
            "output": {
                "item": `kubejs:aspectus_${metal}`
            },
            "stamp": {
                "item": "embers:ingot_stamp"
        }
        })
    })
    
    //Convenience recipes
    //TF MATERIAL DUPES
    //Ironwood
    event.custom({
        "type": "embers:alchemy",
        "aspects": [iron, invar],
        "inputs": [
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "malum:alchemical_calx"
            },
            {
                "item": "malum:earthen_spirit"
            },
            {
                "tag": "farmersdelight:barks"
            }
        ],
        "output": {
            "count": 4,
            "item": "twilightforest:ironwood_ingot"
        },
        "tablet": {
            "item": "twilightforest:ironwood_ingot"
        }
    })
    //Steeleaf
    event.custom({
        "type": "embers:alchemy",
        "aspects": [zinc, duralumin],
        "inputs": [
            {
                "tag": "forge:ingots/steel"
            },
            {
                "item": "eidolon:avennian_sprig"
            },
            {
                "item": "malum:earthen_spirit"
            },
            {
                "item": "farmersrespite:green_tea_leaves"
            }
        ],
        "output": {
            "count": 4,
            "item": "twilightforest:steeleaf_ingot"
        },
        "tablet": {
            "item": "twilightforest:steeleaf_ingot"
        }
    })
    //Knightmetal
    event.custom({
        "type": "embers:alchemy",
        "aspects": [zinc, invar, pewter],
        "inputs": [
            {
                "item": "goety:cursed_ingot"
            },
            {
                "item": "sons_of_sins:ether_ashes"
            },
            {
                "item": "malum:earthen_spirit"
            },
            {
                "tag": "forge:dusts/jade"
            }
        ],
        "output": {
            "count": 4,
            "item": "twilightforest:knightmetal_ingot"
        },
        "tablet": {
            "item": "twilightforest:knightmetal_ingot"
        }
    })
    //Nagascale
    event.custom({
        "type": "embers:alchemy",
        "aspects": [zinc, tin],
        "inputs": [
            {
                "item": "alexsmobs:shed_snake_skin"
            },
            {
                "item": "alexsmobs:crocodile_scute"
            },
            {
                "item": "malum:grim_talc"
            },
            {
                "tag": "forge:plates/zinc"
            }
        ],
        "output": {
            "count": 4,
            "item": "twilightforest:naga_scale"
        },
        "tablet": {
            "item": "twilightforest:naga_scale"
        }
    })
    //Carminite
    event.custom({
        "type": "embers:alchemy",
        "aspects": [iron, duralumin],
        "inputs": [
            {
                "item": "hexerei:blood_bottle"
            },
            {
                "item": "evilcraft:corrupted_tear"
            },
            {
                "item": "malum:alchemical_calx"
            },
            {
                "tag": "forge:gems/ruby"
            }
        ],
        "output": {
            "count": 8,
            "item": "twilightforest:carminite"
        },
        "tablet": {
            "item": "twilightforest:carminite"
        }
    })
    //Aurora block
    event.custom({
        "type": "embers:alchemy",
        "aspects": [rose_gold, sterling_silver],
        "inputs": [
            {
                "item": "alexsmobs:rainbow_jelly"
            },
            {
                "item": "malum:astral_weave"
            },
            {
                "tag": "forge:glass"
            },
            {
                "tag": "forge:glass"
            }
        ],
        "output": {
            "count": 16,
            "item": "twilightforest:aurora_block"
        },
        "tablet": {
            "item": "twilightforest:aurora_block"
        }
    })
    //Actual progression n shit
    //Lava crystal
    event.custom({
        "type": "embers:alchemy",
        "aspects": [electrum, brass, dawnstone],
        "inputs": [
            {
                "item": "bloodmagic:reagentlava"
            },
            {
                "item": "ars_nouveau:fire_essence"
            },
            {
                "item": "scguns:sheol"
            }
        ],
        "output": {
            "count": 1,
            "item": "bloodmagic:lavacrystal"
        },
        "tablet": {
            "item": "undergarden:utherium_crystal"
        }
    })
    //Depth ingots
    event.custom({
        "type": "embers:alchemy",
        "aspects": [pewter, lead],
        "inputs": [
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "naturesaura:sky_ingot"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "naturesaura:sky_ingot"
            }
        ],
        "output": {
            "count": 1,
            "item": "naturesaura:depth_ingot"
        },
        "tablet": {
            "item": "minecraft:netherite_scrap"
        }
    })
})