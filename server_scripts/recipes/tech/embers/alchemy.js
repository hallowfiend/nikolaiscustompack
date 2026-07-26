const iron = { "tag": "embers:aspectus/iron" }
const lead = { "tag": "embers:aspectus/lead" }
const copper = { "tag": "embers:aspectus/copper" }
const silver = { "tag": "embers:aspectus/silver" }
const dawnstone = { "tag": "embers:aspectus/dawnstone" }

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
    
    //Convenience recipes

    //Actual progression n shit
    //Lava crystal
    event.custom({
        "type": "embers:alchemy",
        "aspects": [dawnstone, copper],
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