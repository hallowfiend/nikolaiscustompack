ServerEvents.recipes(event => {
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
})