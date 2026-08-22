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
    //cauldron crafting proper
    function cauldronCraft(soulCost, color, ingredients, output){
        event.custom({
    "type": "goety:cauldron",
    "soulCost": soulCost,
    "color": color,
    "levelLeft": 1,
    "take_with": {
        "item": "minecraft:glass_bottle"
    },
    "ingredients": ingredients,
    "result": {
        "item": output
    }
    })
    }
    //atropos serum
    cauldronCraft(
        8000,
        14548453,
        [
            {"item": "twilightforest:mushgloom"},
            {"item": "occultism:datura"},
            {"item": "galosphere:allurite_shard"},
            {"item": "minecraft:glow_berries"},
            {"item": "magichem:admixture_sight"},
            {"item": "magichem:admixture_acid"},
            {"item": "undergarden:mogmoss"},
            {"item": "kubejs:concentratedcatalyst"}
        ],
        'kubejs:atropos_serum'
    )
    //anointing paste
    cauldronCraft(
        2000,
        9151542,
        [
            {"item": "eidolon:purity_incense"},
            {"tag": "forge:tallow"},
            {"item": "hexerei:sage"},
            {"item": "embers:ash"},
            {"item": "hexalia:ghost_powder"},
            {"item": "vampirism:item_garlic"},
            {"item": "eidolon:enchanted_ash"},
            {"item": "embers:caminite_blend"}
        ],
        'kubejs:anointing_paste'
    )
    //seething nethersblood
    cauldronCraft(
        2000,
        13185053,
        [
            {'item': 'mynethersdelight:bullet_pepper'},
            {'tag': 'forge:dusts/sulfur'},
            {'item': 'hexerei:blood_bottle'},
            {'item': 'hexalia:rabbage'},
            {'item': 'gtceu:netherrack_dust'},
            {'item': 'eidolon:crimson_essence'},
            {'item': 'evilcraft:dark_power_gem'}
        ],
        'kubejs:nethersblood'
    )
    //shifting tincture
    cauldronCraft(
        2000,
        5938680,
        [
            {'item': 'gtceu:soapstone_dust'},
            {'item': 'gtceu:lepidolite_dust'},
            {'item': 'goety:ectoplasm'},
            {'item': 'goety:animation_core'},
            {'item': 'hexalia:siren_kelp'},
            {'item': 'minecraft:cod'},
            {'item': 'minecraft:blue_orchid'}
        ],
        'kubejs:shifting_tincture'
    )
    //deepbore tar
    cauldronCraft(
        2000,
        5855577,
        [
            {"item": "miners_delight:cave_carrot"},
            {"item": "immersiveeengineering:slag"},
            {"item": "eidolon:mirecap"},
            {"item": "minecraft:amethyst_shard"},
            {"item": "create:andesite_alloy"},
            {"item": "minecraft:pumpkin"},
            {"tag": "forge:storage_blocks/coal"}
        ],
        'kubejs:deepbore_tar'
    )
    //sanctified steam
    cauldronCraft(
        2000,
        13355979,
        [
            {'item': 'miners_delight:bat_wing'},
            {'item': 'gtceu:salt_dust'},
            {'item': 'minecraft:lily_of_the_valley'}, 
            {'item': 'immersiveengineering:seed'},
            {'item': 'minecraft:glowstone_dust'},
            {'item': 'hexalia:spirit_powder'},
            {'item': 'malum:alchemical_calx'}
        ],
        'kubejs:sanctified_steam'
    )
    //caustic oil
    cauldronCraft(
        2000,
        9350212,
        [
            {'item': 'kubejs:deepbore_tar'},
            {'item': 'kubejs:corrosive_node'},
            {'item': 'goety:nightshade'},
            {'item': 'hexalia:witchweed'},
            {'item': 'farmersdelight:tomato'},
            {'tag': 'forge:dusts/saltpeter'},
            {'item': 'minecraft:nether_wart'}
        ],
        'kubejs:caustic_oil'
    )
    //daemonic preparation
    cauldronCraft(
        2000,
        8560539,
        [
            {'item': 'kubejs:nethersblood'},
            {'item': 'vampirism:human_heart'},
            {'item': 'goety:hunger_core'},
            {'item': 'hexalia:ghost_powder'},
            {'item': 'occultism:datura'},
            {'item': 'goety:nightshade'},
            {'item': 'hexerei:belladonna_flowers'}
        ],
        'kubejs:daemonic_preparation'
    )
    //logistician's alkahest
    cauldronCraft(
        2000,
        9945849,
        [
            {'item': 'kubejs:sanctified_steam'},
            {'item': 'alexsmobs:gazelle_horn'},
            {'item': 'minecraft:phantom_membrane'},
            {'item': 'malum:grim_talc'},
            {'item': 'hexalia:dreamshroom'},
            {'item': 'mna:chimerite_gem'},
            {'item': 'bloodmagic:simplecatalyst'}
        ],
        'kubejs:logisticians_alkahest'
    )
    //realmsplit dew
    cauldronCraft(
        2000,
        6627484,
        [
            {'item': 'kubejs:shifting_tincture'},
            {'item': 'minecraft:chorus_fruit'},
            {'item': 'hexerei:mandrake_root'},
            {'tag': 'forge:gems/certus_quartz'},
            {'item': 'goety:mystic_core'},
            {'item': 'goety:nightshade'},
            {'item': 'eidolon:warped_sprouts'}
        ],
        'kubejs:realmsplit_dew'
    )
})