ServerEvents.recipes(event => {
    //atropos serum
    event.custom({
    "type": "goety:cauldron",
    "soulCost": 8000,
    "color": 14548453,
    "levelLeft": 1,
    "take_with": {
        "item": "supplementaries:lumisene_bottle"
    },
    "ingredients": [
        {
            "item": "twilightforest:mushgloom"
        },
        {
            "item": "occultism:datura"
        },
        {
            "item": "galosphere:allurite_shard"
        },
        {
            "item": "eternal_starlight:lunaris_cactus_gel"
        },
        {
            "item": "magichem:admixture_sight"
        },
        {
            "item": "undergarden:mogmoss"
        },
        {
            "item": "kubejs:concentrated_catalyst"
        }
    ],
    "result": {
        "item": "kubejs:atropos_serum"
    }
    })
    //anointing paste
    event.custom({
    "type": "goety:cauldron",
    "soulCost": 2000,
    "color": 9151542,
    "levelLeft": 1,
    "take_with": {
        "item": "hexerei:tallow_bottle"
    },
    "ingredients": [
        {
            "item": "eidolon:purity_incense"
        },
        {
            "item": "botania:redstone_root"
        },
        {
            "item": "hexerei:dried_sage"
        },
        {
            "item": "embers:ash"
        },
        {
            "item": "hexalia:ghost_powder"
        },
        {
            "item": "naturesaura:infused_iron"
        },
        {
            "item": "bloodmagic:simplecatalyst"
        }
    ],
    "result": {
        "item": "kubejs:anointing_paste"
    }
    })
})