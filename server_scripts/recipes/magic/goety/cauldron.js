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
    }).id(`kubejs:goety/cauldron_crafting/${output.split(":")[1]}`)
    }
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
            {"item": "malum:cthonic_gold"}
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
            {'item': 'minecraft:magma_cream'},
            {'item': 'malum:blazing_quartz'}
        ],
        'kubejs:seething_nethersblood'
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
    //whiff of vitality
    cauldronCraft(
        2000,
        12930373,
        [
            {'item': 'eidolon:restoration_incense'},
            {'item': 'minecraft:oak_sapling'},
            {'item': 'minecraft:birch_sapling'},
            {'item': 'minecraft:spruce_sapling'},
            {'item': 'hexalia:lotus_flower'},
            {'item': 'farmersrespite:rose_hips'},
            {'item': 'farmersrespite:green_tea_leaves'}
        ],
        'kubejs:whiff_of_vitality'
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
        'kubejs:blacksmithing_resin'
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
        'kubejs:caustic_oil'
    )
    //daemonic preparation
    cauldronCraft(
        2000,
        8560539,
        [
            {'item': 'kubejs:seething_nethersblood'},
            {'item': 'vampirism:human_heart'},
            {'item': 'occultism:datura'},
            {'item': 'hexerei:belladonna_flowers'},
            {'item': 'goety:hunger_core'}
        ],
        'kubejs:daemonic_preparation'
    )
    //ecologist's distillation
    cauldronCraft(
        2000,
        4753190,
        [
            {'item': 'kubejs:whiff_of_vitality'},
            {'item': 'naturesaura:gold_powder'},
            {'item': 'farmersdelight:straw'},
            {'item': 'minecraft:vine'},
            {'item': 'hexerei:mugwort_leaves'}
        ],
        'kubejs:ecologists_distillation'
    )
    //realmsplit dew
    cauldronCraft(
        2000,
        6627484,
        [
            {'item': 'kubejs:deepbore_tar'},
            {'item': 'eidolon:warped_sprouts'},
            {'item': 'hexerei:mandrake_root'},
            {'tag': 'forge:gems/certus_quartz'},
            {'item': 'goety:mystic_core'}
        ],
        'kubejs:realmsplit_dew'
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
        'kubejs:logisticians_alkahest'
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
        'goety:flying_ointment'
    )
    //frostfire reduction
    cauldronCraft(
        2000,
        8184315,
        [
            {'item': 'kubejs:demonic_preparation'},
            {'item': 'kubejs:shifting_tincture'},
            {'item': 'goety:freezing_lamp'},
            {'item': 'botania:rune_winter'},
            {'item': 'hexalia:chillberries'},
            {'item': 'windswept:snowdrop'},
            {'item': 'magichem:admixture_cold'}
        ],
        'kubejs:frostfire_reduction'
    )
})