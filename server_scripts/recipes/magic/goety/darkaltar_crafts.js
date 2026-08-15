ServerEvents.recipes(event => {
    //NECROTURGY RITUALS
    //Dormant Weak Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_weak_blood_orb', 'goety:craft', [
            'botania:mana_diamond',
            'eidolon:lesser_soul_gem',
            'eidolon:holy_symbol',
            'eidolon:offering_incense',
            'hexalia:purity_idol',
            'hexalia:celestial_crystal'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(40)
        .duration(5)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_weak_blood_orb');
    //Dormant Apprentice Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_apprentice_blood_orb', 'goety:craft', [
            'magichem:admixture_mana',
            'bloodmagic:holy_water_anointment',
            'malum:cluster_of_brilliance',
            'elementalcraft:springaline_shard',
            'apotheosis:uncommon_material',
            'magichem:signalite_block'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(100)
        .duration(5)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_apprentice_blood_orb');
    //Dormant Magician Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_magician_blood_orb', 'goety:craft', [
            'magichem:perfected_electrum_block',
            'mna:mote_arcane',
            'malum:astral_weave',
            'botania:rune_mana',
            'bloodmagic:cyclingcatalyst',
            'malum:block_of_hallowed_gold'
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
            'malum:mnemonic_fragment',
            'botania:rune_pride',
            'embers:focal_lens',
            'bloodmagic:reinforcedteleposerfocus'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(200)
        .duration(10)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_master_blood_orb');
    //Dormant Archmage Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_archmage_blood_orb', 'goety:craft', [
            'goety:corruption_focus',
            'bloodmagic:holy_water_anointment_xl',
            'lendersdelight:maledictus_heart',
            'botania:gaia_ingot',
            'goety:forbidden_scroll',
            'bloodmagic:dungeon_metal'
        ])
        .activationItem('evilcraft:blood_orb_filled')
        .craftType('necroturgy')
        .soulCost(200)
        .duration(20)
        .id('kubejs:goety/dark_ritual/necroturgies/dormant_archmage_blood_orb');
    //Dormant Transcendent Blood Orb
    event.recipes.goety.ritual('kubejs:dormant_transcendent_blood_orb', 'goety:craft', [
            'deep_aether:stratus_block',
            'magichem:selargyros',
            'magichem:orichalkos',
            'goety:undeath_potion',
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
    //Wicked Boline
    event.remove({ id: 'goety:wicked_boline' })
    event.recipes.goety.ritual('goety:wicked_boline', 'goety:craft', [
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
        .id('kubejs:goety/dark_ritual/forging/wicked_boline');
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
            'gtceu:double_copper_plate',
            'gtceu:double_copper_plate',
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