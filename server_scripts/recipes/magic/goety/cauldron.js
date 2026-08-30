ServerEvents.recipes(event => {
    //the cauldron itself
    event.remove({output: 'goety:witch_cauldron'})
    event.shaped('goety:witch_cauldron', [
        'CHC',
        'CNC',
        'III'
    ], {
        C: 'gtceu:cursed_alloy_plate',
        I: 'goety:cursed_ingot',
        N: 'kubejs:wicked_node',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers').id('kubejs:shaped/cursed_cauldron')
    //the ladle
    event.remove({output: 'goety:cauldron_ladle'})
    event.shaped('goety:cauldron_ladle', [
        ' fs',
        ' w ',
        't  '
    ], {
        s: 'goety:shade_stone',
        t: '#forge:rods/wooden',
        w: 'kubejs:wicked_node',
        f: '#forge:tools/files'
    }).damageIngredient('#forge:tools/files').id('kubejs:shaped/cauldron_ladle')
    //cauldron crafting proper
    function cauldronCraft(soulCost, color, ingredients, takeWith, output, outputCount){
        event.custom({
    "type": "goety:cauldron",
    "soulCost": soulCost,
    "color": color,
    "levelLeft": 1,
    "take_with": {
        "item": takeWith
    },
    "ingredients": ingredients,
    "result": {
        "item": output,
        "count": outputCount
    }
    }).id(`kubejs:goety/cauldron_crafting/${output.split(":")[1]}`)
    }
    //UNGUENTS
    //tier 1
    //atropos serum
    cauldronCraft(
        8000,
        14548453,
        [
            {"item": "twilightforest:mushgloom"},
            {"item": "mna:transmuted_silver"},
            {"item": "galosphere:allurite_shard"},
            {"item": "minecraft:glow_berries"},
            {"item": "magichem:admixture_sight"},
            {"item": "magichem:admixture_acid"},
            {"item": "undergarden:mogmoss"},
            {"item": "kubejs:concentratedcatalyst"}
        ],
        "minecraft:glass_bottle",
        'kubejs:atropos_serum', 1
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
            {"item": "vampirism:pure_salt"},
            {"item": "eidolon:enchanted_ash"},
            {"item": "malum:cthonic_gold"}
        ],
        "minecraft:glass_bottle",
        'kubejs:anointing_paste', 1
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
            {'item': 'minecraft:magma_cream'},
            {'item': 'malum:blazing_quartz'}
        ],
        "minecraft:glass_bottle",
        'kubejs:seething_nethersblood', 1
    )
    //shifting tincture
    cauldronCraft(
        2000,
        5938680,
        [
            {'item': 'gtceu:soapstone_dust'},
            {'item': 'gtceu:lepidolite_dust'},
            {'item': 'goety:ectoplasm'},
            {'item': 'mna:wakebloom'},
            {'item': 'hexalia:siren_paste'},
            {'item': 'minecraft:cod'},
            {'item': 'minecraft:blue_orchid'}
        ],
        "minecraft:glass_bottle",
        'kubejs:shifting_tincture', 1
    )
    //deepbore tar
    cauldronCraft(
        2000,
        5855577,
        [
            {"item": "cosmopolitan:roasted_tuber"},
            {"tag": "forge:slag"},
            {"item": "eidolon:mirecap"},
            {"item": "minecraft:amethyst_shard"},
            {"item": "create:andesite_alloy"},
            {"item": "minecraft:potato"},
            {"item": "minecraft:coal_block"}
        ],
        "minecraft:glass_bottle",
        'kubejs:deepbore_tar', 1
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
        "minecraft:glass_bottle",
        'kubejs:sanctified_steam', 1
    )
    //whiff of vitality
    cauldronCraft(
        2000,
        12930373,
        [
            {'item': 'eidolon:restoration_incense'},
            {'item': 'delightful:acorn'},
            {'item': 'minecraft:birch_sapling'},
            {'item': 'minecraft:spruce_sapling'},
            {'item': 'culturaldelights:eggplant'},
            {'item': 'hexalia:menders_salve'},
            {'item': 'farmersrespite:green_tea_leaves'}
        ],
        "minecraft:glass_bottle",
        'kubejs:whiff_of_vitality', 1
    )
    //tier 2
    //blacksmithing resin
    cauldronCraft(
        2000,
        4925193,
        [
            {'item': 'kubejs:deepbore_tar'},
            {'item': 'gtceu:steel_ingot'},
            {'item': 'eidolon:merammer_resin'},
            {'item': 'minecraft:honeycomb'},
            {'item': 'goety:henbane_flower'}
        ],
        "minecraft:glass_bottle",
        'kubejs:blacksmithing_resin', 1
    )
    //caustic oil
    cauldronCraft(
        2000,
        9350212,
        [
            {'item': 'kubejs:shifting_tincture'},
            {'item': 'kubejs:corrosive_node'},
            {'item': 'hexerei:yellow_dock_flowers'},
            {'item': 'hexalia:witchweed'},
            {'item': 'minecraft:gunpowder'}
        ],
        "minecraft:glass_bottle",
        'kubejs:caustic_oil', 1
    )
    //daemonic preparation
    cauldronCraft(
        2000,
        8560539,
        [
            {'item': 'kubejs:seething_nethersblood'},
            {'tag': 'forge:fleshy_heart'},
            {'item': 'occultism:datura'},
            {'item': 'hexerei:belladonna_flowers'},
            {'item': 'goety:hunger_core'}
        ],
        "minecraft:glass_bottle",
        'kubejs:daemonic_preparation', 1
    )
    //ecologist's distillation
    cauldronCraft(
        2000,
        4753190,
        [
            {'item': 'kubejs:whiff_of_vitality'},
            {'item': 'kubejs:lifecrystal'},
            {'item': 'farmersdelight:straw'},
            {'item': 'minecraft:vine'},
            {'item': 'hexerei:mugwort_leaves'}
        ],
        "minecraft:glass_bottle",
        'kubejs:ecologists_distillation', 1
    )
    //realmsplit dew
    cauldronCraft(
        2000,
        6627484,
        [
            {'item': 'kubejs:sanctified_steam'},
            {'item': 'eidolon:warped_sprouts'},
            {'item': 'hexerei:mandrake_root'},
            {'tag': 'forge:gems/certus_quartz'},
            {'item': 'goety:mystic_core'}
        ],
        "minecraft:glass_bottle",
        'kubejs:realmsplit_dew', 1
    )
    //tier 3
    //logistician's alkahest
    cauldronCraft(
        2000,
        9945849,
        [
            {'item': 'kubejs:blacksmithing_resin'},
            {'item': 'kubejs:sanctified_steam'},
            {'item': 'alexsmobs:gazelle_horn'},
            {'item': 'malum:grim_talc'},
            {'item': 'magichem:signalite'},
            {'item': 'goety:animation_core'},
            {'item': 'hexalia:galeberries'}
        ],
        "minecraft:glass_bottle",
        'kubejs:logisticians_alkahest', 1
    )
    //flying ointment
    event.remove({id: 'goety:cauldron/flying_ointment'})
    cauldronCraft(
        2000,
        15002780,
        [
            {'item': 'kubejs:caustic_oil'},
            {'item': 'kubejs:sanctified_steam'},
            {'tag': 'forge:tallow'},
            {'item': 'goety:jade'},
            {'item': 'goety:wind_core'},
            {'item': 'minecraft:poppy'},
            {'item': 'minecraft:ender_eye'}
        ],
        "minecraft:glass_bottle",
        'goety:flying_ointment', 1
    )
    //frostfire reduction
    cauldronCraft(
        2000,
        8184315,
        [
            {'item': 'kubejs:daemonic_preparation'},
            {'item': 'kubejs:shifting_tincture'},
            {'item': 'goety:freezing_lamp'},
            {'item': 'botania:rune_winter'},
            {'item': 'hexalia:chillberries'},
            {'item': 'windswept:snowdrop'},
            {'item': 'magichem:admixture_cold'}
        ],
        "minecraft:glass_bottle",
        'kubejs:frostfire_reduction', 1
    )
    //OTHER STUFF
    //Pure Salt
    cauldronCraft(
        1000,
        14214366,
        [
            {'item': 'gtceu:salt_dust'},
            {'item': 'gtceu:salt_dust'},
            {'item': 'gtceu:salt_dust'},
            {'item': 'vampirism:item_garlic'},
            {'item': 'mna:aum'},
            {'item': 'magichem:admixture_crystal'}
        ],
        'gtceu:gypsum_dust',
        'vampirism:pure_salt', 4
    )
})