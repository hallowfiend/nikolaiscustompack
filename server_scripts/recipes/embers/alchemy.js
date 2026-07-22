const iron = { "tag": "embers:aspectus/iron" }
const lead = { "tag": "embers:aspectus/lead" }
const copper = { "tag": "embers:aspectus/copper" }
const silver = { "tag": "embers:aspectus/silver" }
const dawnstone = { "tag": "embers:aspectus/dawnstone" }

ServerEvents.recipes(events => {
    event.remove({ output: "bloodmagic:lavacrystal" })
    event.remove({ output: "naturesaura:depth_ingot" })
    
    //Convenience recipes

    //Actual progression n shit
    //Lava crystal
    event.custom({
        "type": "embers:alchemy",
        "aspects": [dawnstone, copper],
        "inputs": [
            {
                "item": "bloodmagic:reagent_lava"
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
        "aspects": [lead, iron, silver],
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