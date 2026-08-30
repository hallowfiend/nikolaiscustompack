ServerEvents.recipes(event => {
    //NECROTURGY RITUALS
    //Dormant Weak Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_weak_blood_orb', 'goety:craft', [
            'kubejs:thirsting_soulshard',
            'eidolon:holy_symbol',
            'eidolon:offering_incense',
            'hexalia:celestial_crystal'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(40)
        .duration(5)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_weak_blood_orb');
    //Dormant Apprentice Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_apprentice_blood_orb', 'goety:craft', [
            'elementalcraft:springaline_shard',
            'bloodmagic:holy_water_anointment',
            'actuallyadditions:empowered_restonia_crystal_block',
            'eidolon:lesser_soul_gem'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(100)
        .duration(5)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_apprentice_blood_orb');
    //Dormant Magician Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_magician_blood_orb', 'goety:craft', [
            'mna:mote_arcane',
            'magichem:perfected_electrum_block',
            'malum:astral_weave',
            'botania:rune_mana'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(100)
        .duration(10)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_magician_blood_orb');
    //Dormant Master Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_master_blood_orb', 'goety:craft', [
            'ars_elemental:mark_of_mastery',
            'bloodmagic:holy_water_anointment_l',
            'botania:rune_pride',
            'embers:focal_lens'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(200)
        .duration(10)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_master_blood_orb');
    //Dormant Archmage Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_archmage_blood_orb', 'goety:craft', [
            'botania:life_essence',
            'bloodmagic:holy_water_anointment_xl',
            'lendersdelight:maledictus_heart',
            'bloodmagic:dungeon_metal'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(200)
        .duration(20)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_archmage_blood_orb');
    //Dormant Transcendent Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_transcendent_blood_orb', 'goety:craft', [
            'goety:undeath_potion',
            'deep_aether:stratus_block',
            'gtceu:luv_fusion_reactor',
            'animus:crystallized_demon_will_block'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(400)
        .duration(20)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_transcendent_blood_orb');
    //DIVINATION RITUALS
    //Nature's Compass
    /* event.recipes.goety.ritual('goety:wicked_boline', 'goety:craft', [
            'naturesaura:infused_iron',
            'naturesaura:token_joy',
            'botania:rune_sloth',
            'magichem:admixture_travel'
        ])
        .activationItem('minecraft:compass')
        .craftType('divination')
        .soulCost(50)
        .duration(5); */
    //Explorer's Compass
    /* event.recipes.goety.ritual('goety:wicked_boline', 'goety:craft', [
            'naturesaura:depth_ingot',
            'eternal_starlight:deepsilver_block',
            'aether:zanite_block',
            'undergarden:cloggrum_block',
            'goety:ruby_of_souls',
            'magichem:admixture_travel'
        ])
        .activationItem('minecraft:recovery_compass')
        .craftType('divination')
        .soulCost(50)
        .duration(5); */
    //FORGE RITUALS
    //Sacrificial Dagger
    event.remove({id: 'bloodmagic:sacrificial_dagger'})
    event.recipes.goety.ritual('bloodmagic:sacrificialdagger', 'goety:craft', [
            'kubejs:bone_needle',
            'evilcraft:dark_spike',
            'kubejs:dread_echoes',
            'kubejs:dread_echoes',
            'kubejs:dread_echoes',
            'kubejs:dread_echoes',
            'kubejs:vengeful_node'
        ])
        .activationItem('delightful:steel_knife')
        .craftType('forge')
        .soulCost(10)
        .duration(5)
        .id('bloodmagic:sacrificial_dagger');
    //Dagger of Sacrifice
    event.remove({id: 'bloodmagic:altar/daggerofsacrifice'})
    event.recipes.goety.ritual('bloodmagic:daggerofsacrifice', 'goety:craft', [
            'eidolon:goblet',
            'evilcraft:blood_extractor',
            'hexerei:quicksilver_bottle',
            'kubejs:vengeful_node'
        ])
        .activationItem('evilcraft:vein_sword')
        .craftType('forge')
        .soulCost(20)
        .duration(5)
        .id('bloodmagic:altar/daggerofsacrifice');
    //Scryer's Crystal Cube
    event.recipes.goety.ritual('goety:crystal_ball', 'goety:craft', [
            'eidolon:gold_inlay',
            'goety:taglock_kit',
            'minecraft:ender_eye',
            'goety:mystic_core',
            'malum:wicked_spirited_glass',
            'malum:wicked_spirited_glass'
        ])
        .activationItem('hexerei:crystal_ball')
        .craftType('forge')
        .soulCost(10)
        .duration(10)
        .id('kubejs:goety/dark_ritual/forging/hexerei_crystal_cube_to_goety_crystal_cube')
    //Flesh Plunderer
    event.remove({output: 'biomancy:despoil_sickle'})
    event.recipes.goety.ritual('biomancy:despoil_sickle', 'goety:craft', [
            'hexerei:blood_bottle',
            '#forge:bones',
            'malum:living_flesh'
        ])
        .activationItem('hexalia:briar_sickle')
        .craftType('forge')
        .soulCost(1)
        .duration(10)
        .id('kubejs:goety/dark_ritual/forging/flesh_plunderer')
    //Wicked Boline
    event.remove({ id: 'goety:wicked_boline' })
    /* event.recipes.goety.ritual('goety:wicked_boline', 'goety:craft', [
            'goety:cursed_ingot',
            'goety:pale_steel_ingot',
            'goety:pale_steel_ingot',
            'eidolon:gold_inlay',
            'malum:hex_ash'
        ])
        .activationItem('hexalia:briar_sickle')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/wicked_boline'); */
    //Botania special weapons
    //Starcaller
    event.remove({ id: 'botania:star_sword' })
    event.recipes.goety.ritual('botania:star_sword', 'goety:craft', [
            'botania:elementium_ingot',
            'botania:dragonstone',
            'botania:ender_air_bottle',
            'botania:ender_air_bottle',
            'embers:dawnstone_aspectus',
            'kubejs:rune_space',
            'eternal_starlight:starcore_block'
        ])
        .activationItem('botania:terra_sword')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/starcaller');
    //Thundercaller
    event.remove({ id: 'botania:thunder_sword' })
    event.recipes.goety.ritual('botania:thunder_sword', 'goety:craft', [
            'botania:elementium_ingot',
            'botania:mana_diamond',
            'botania:ender_air_bottle',
            'botania:ender_air_bottle',
            'magichem:thunderstone',
            'kubejs:rune_storms',
            'cosmere:nicrosil_block'
        ])
        .activationItem('botania:terra_sword')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/thundercaller');

    //Iron's Spellbooks weaponry
    //Weapon parts
    //Spellbreaker
    event.remove({ id: 'irons_spellbooks:spellbreaker' })
    event.recipes.goety.ritual('irons_spellbooks:spellbreaker', 'goety:craft', [
            'constructs_casting:mithril_block',
            'magichem:alchemical_waste_block',
            'botania:mana_diamond',
            'botania:mana_diamond',
            'malum:rune_of_reinforcement'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/spellbreaker');
    //Amethyst Rapier
    event.remove({ id: 'irons_spellbooks:amethyst_rapier' })
    event.recipes.goety.ritual('irons_spellbooks:amethyst_rapier', 'goety:craft', [
            'hexcasting:directrix/redstone',
            'caverns_and_chasms:echo_block',
            'species:broken_links',
            'species:broken_links',
            'malum:rune_of_volatile_distortion'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/amethyst_rapier');
    //Boreal Blade
    event.remove({ id: 'irons_spellbooks:boreal_blade' })
    event.recipes.goety.ritual('irons_spellbooks:boreal_blade', 'goety:craft', [
            'undergarden:froststeel_block',
            'hexalia:celestial_crystal_block',
            'irons_spellbooks:ice_venom_vial',
            'irons_spellbooks:ice_venom_vial',
            'botania:rune_winter'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/boreal_blade');
    //Twilight Gale
    event.remove({ id: 'irons_spellbooks:twilight_gale' })
    event.remove({ id: 'irons_spellbooks:sequenced_assembly/twilight_gale' })
    event.recipes.goety.ritual('irons_spellbooks:twilight_gale', 'goety:craft', [
            'twilightforest:knightmetal_block',
            'eternal_starlight:starlit_diamond_block',
            'irons_spellbooks:lightning_bottle',
            'irons_spellbooks:lightning_bottle',
            'mna:rune_projection'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/twilight_gale');

    //Embers stuff
    //Ember Bore
    event.remove({ id: 'embers:ember_bore' })
    event.recipes.goety.ritual('embers:ember_bore', 'goety:craft', [
            'eidolon:pewter_inlay',
            'embers:caminite_bricks',
            'embers:caminite_bricks',
            'embers:caminite_bricks',
            'embers:caminite_bricks',
            'create:mechanical_drill',
            'magichem:cog_components',
            'immersiveengineering:heavy_engineering',
            'malum:intricate_assembly'
        ])
        .activationItem('embers:mechanical_core')
        .craftType('forge')
        .soulCost(16)
        .duration(10)
        .id('kubejs:goety/dark_ritual/forging/ember_bore');
    //MnA stuff
    //Runeforge
    event.remove({ id: 'mna:runeforge' })
    event.remove({ id: 'mna:runeforge_alt' })
    event.recipes.goety.ritual('mna:runeforge', 'goety:craft', [
            'mna:transmuted_silver',
            'mna:transmuted_silver',
            'mna:decoration/arcane_sandstone',
            'mna:decoration/arcane_sandstone',
            'mna:decoration/arcane_stone',
            'mna:decoration/arcane_stone',
            '#mna:stone_runes',
            '#mna:stone_runes',
            'minecraft:coal_block',
            '#forge:ingots/vinteum_alloy'
        ])
        .activationItem('minecraft:blast_furnace')
        .craftType('forge')
        .soulCost(8)
        .duration(8)
        .id('kubejs:goety/dark_ritual/forging/runeforge');
    
    //GEOTURGY RITUALS
    //Targeting monocle
    event.remove({id: 'goety:targeting_monocle'})
    event.recipes.goety.ritual('goety:targeting_monocle', 'goety:craft', [
            'goety:ectoplasm',
            'minecraft:spyglass',
            'malum:wicked_spirited_glass',
            'malum:wicked_spirited_glass',
            'kubejs:treated_leather',
            'kubejs:treated_leather',
            'malum:block_of_cthonic_gold',
            'eidolon:pewter_inlay'
        ])
        .activationItem('hexcasting:lens')
        .craftType('geoturgy')
        .soulCost(1)
        .duration(10)
        .id('goety:targeting_monocle');
    //OVERGROWN RITUALS
    //Crow Ankh Amulet
    event.remove({ id: 'hexerei:crow_ankh_amulet_from_mixing_cauldron' })
    event.recipes.goety.ritual('hexerei:crow_ankh_amulet', 'goety:craft', [
            'minecraft:totem_of_undying',
            'minecraft:glow_berries',
            'hexerei:dried_yellow_dock_leaves',
            'hexerei:dried_mugwort_flowers',
            'goety:grave_dust',
            'kubejs:whiff_of_vitality'
        ])
        .activationItem('hexerei:crow_blank_amulet')
        .craftType('overgrown')
        .soulCost(5)
        .duration(20)
        .id('kubejs:goety/dark_ritual/druidism/crow_ankh_amulet');
    //END RITUALS
    //BetterEnd infusion altar
    event.recipes.goety.ritual('betterend:crystalite_helmet', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_helmet')
    .craftType('end')
    .soulCost(10)
    .duration(7)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_helmet');
    event.recipes.goety.ritual('betterend:crystalite_chestplate', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_chestplate')
    .craftType('end')
    .soulCost(10)
    .duration(15)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_chestplate');
    event.recipes.goety.ritual('betterend:crystalite_leggings', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_leggings')
    .craftType('end')
    .soulCost(10)
    .duration(11)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_leggings');
    event.recipes.goety.ritual('betterend:crystalite_boots', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_boots')
    .craftType('end')
    .soulCost(10)
    .duration(7)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_boots');
    event.recipes.goety.ritual('betterend:enchanted_membrane', 'goety:craft', [
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards'
    ])
    .activationItem('minecraft:phantom_membrane')
    .craftType('end')
    .soulCost(10)
    .duration(4)
    .id('kubejs:goety/dark_ritual/voidwork/enchanted_membrane');
    event.recipes.goety.ritual('betterend:elytra_crystalite', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:enchanted_membrane',
        'betterend:enchanted_membrane',
        'betterend:enchanted_membrane'
    ])
    .activationItem('minecraft:elytra')
    .craftType('end')
    .soulCost(25)
    .duration(25)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_elytra');
    event.recipes.goety.ritual('betterend:flavolite_runed', 'goety:craft', [
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:flavolite_polished')
    .craftType('end')
    .soulCost(10)
    .duration(5)
    .id('kubejs:goety/dark_ritual/voidwork/runed_flavolite');
    event.recipes.goety.ritual('betterend:eternal_crystal', 'goety:craft', [
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        '#forge:dusts/ender_pearl',
        '#forge:dusts/ender_pearl',
        '#forge:dusts/ender_pearl',
        '#forge:dusts/ender_pearl'
    ])
    .activationItem('minecraft:end_crystal')
    .craftType('end')
    .soulCost(25)
    .duration(25)
    .id('kubejs:goety/dark_ritual/voidwork/eternal_crystal');
});