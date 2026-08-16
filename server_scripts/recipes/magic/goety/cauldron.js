ServerEvents.recipes(event => {
    //the cauldron itself
    event.remove({output: 'goety:witch_cauldron'})
    event.shaped('goety:witch_cauldron', [
        'C C',
        'CNC',
        'III'
    ], {
        C: 'gtceu:cursed_alloy_plate',
        I: 'goety:cursed_ingot',
        N: 'kubejs:wicked_node'
    }).id('kubejs:shaped/cursed_cauldron')
    //the ladle
    event.remove({output: 'goety:cauldron_ladle'})
    event.shaped('goety:cauldron_ladle', [
        '  s',
        ' w ',
        't  '
    ], {
        s: 'goety:shade_stone',
        t: '#forge:rods/wooden',
        w: 'kubejs:wicked_node'
    }).id('kubejs:shaped/cauldron_ladle')
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
            "item": "magichem:admixture_acid"
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
            "item": "kubejs:sacred_node"
        },
        {
            "item": "embers:ash"
        },
        {
            "item": "hexalia:ghost_powder"
        },
        {
            "item": "hexerei:sage_bundle"
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