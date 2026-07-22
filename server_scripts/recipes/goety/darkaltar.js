ServerEvents.recipes(event => {
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
        .soulCost(5)
        .duration(5);
    //Botania special weapons
    //Starcaller
    event.remove({ id: 'botania:star_sword' })
    event.recipes.goety.ritual('botania:star_sword', 'goety:craft', [
            'botania:elementium_ingot',
            'botania:dragonstone',
            'botania:ender_air_bottle',
            'botania:ender_air_bottle',
            'embers:dawnstone_aspectus',
            'eternal_starlight:starcore_block'
        ])
        .activationItem('botania:terra_sword')
        .craftType('forge')
        .soulCost(5)
        .duration(5);
    //Thundercaller
    event.remove({ id: 'botania:thunder_sword' })
    event.recipes.goety.ritual('botania:thunder_sword', 'goety:craft', [
            'botania:elementium_ingot',
            'botania:mana_diamond',
            'botania:ender_air_bottle',
            'botania:ender_air_bottle',
            'magichem:thunderstone',
            'cosmere:nicrosil_block'
        ])
        .activationItem('botania:terra_sword')
        .craftType('forge')
        .soulCost(5)
        .duration(5);

    //Iron's Spellbooks weaponry
    //Weapon parts
    //Spellbreaker
    event.remove({ id: 'irons_spellbooks:spellbreaker' })
    event.remove({ id: 'irons_spellbooks:sequenced_assembly/spellbreaker' })
    event.recipes.goety.ritual('irons_spellbooks:spellbreaker', 'goety:craft', [
            'constructs_casting:mithril_block',
            'magichem:alchemical_waste_block',
            'botania:mana_diamond',
            'botania:mana_diamond',
            'malum:rune_of_reinforcement'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(5)
        .duration(5);
    //Amethyst Rapier
    event.remove({ id: 'irons_spellbooks:amethyst_rapier' })
    event.remove({ id: 'irons_spellbooks:sequenced_assembly/amethyst_rapier' })
    event.recipes.goety.ritual('irons_spellbooks:amethyst_rapier', 'goety:craft', [
            'hexcasting:directrix_redstone',
            'caverns_and_chasms:echo_block',
            'species:broken_links',
            'species:broken_links',
            'malum:rune_of_volatile_distortion'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(5)
        .duration(5);
    //Boreal Blade
    event.remove({ id: 'irons_spellbooks:boreal_blade' })
    event.remove({ id: 'irons_spellbooks:sequenced_assembly/boreal_blade' })
    event.recipes.goety.ritual('irons_spellbooks:boreal_blade', 'goety:craft', [
            'sons_of_sins:block_of_ice_hearts',
            'hexalia:celestial_crystal_block',
            'irons_spellbooks:ice_venom_vial',
            'irons_spellbooks:ice_venom_vial',
            'botania:rune_winter'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(5)
        .duration(5);
    //Twilight Gale
    event.remove({ id: 'irons_spellbooks:twilight_gale' })
    event.remove({ id: 'irons_spellbooks:sequenced_assembly/twilight_gale' })
    event.recipes.goety.ritual('irons_spellbooks:twilight_gale', 'goety:craft', [
            'twilightforest:knightmetal_block',
            'eternal_starlight:deepsilver_block',
            'irons_spellbooks:lightning_bottle',
            'irons_spellbooks:lightning_bottle',
            'mna:rune_projection'
        ])
        .activationItem('irons_spellbooks:weapon_parts')
        .craftType('forge')
        .soulCost(5)
        .duration(5);

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
            'create:gearbox',
            'magichem:cog_components',
            'immersiveengineering:heavy_engineering',
            'immersiveengineering:heavy_engineering',
            'malum:intricate_assembly'
        ])
        .activationItem('embers:mechanical_core')
        .craftType('forge')
        .soulCost(4)
        .duration(10);

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
    .duration(7);
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
    .duration(15);
event.recipes.goety.ritual('betterend:crystalite_leggings', 'goety:craft', [
    '#forge:gems/amber',
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards'
])
    .activationItem('betterend:terminite_leggings')
    .craftType('end')
    .soulCost(10)
    .duration(11);
event.recipes.goety.ritual('betterend:crystalite_boots', 'goety:craft', [
    '#forge:gems/amber',
    'betterend:crystal_shards',
    'betterend:crystal_shards'
])
    .activationItem('betterend:terminite_boots')
    .craftType('end')
    .soulCost(10)
    .duration(7);
event.recipes.goety.ritual('betterend:enchanted_membrane', 'goety:craft', [
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards'
])
    .activationItem('minecraft:phantom_membrane')
    .craftType('end')
    .soulCost(10)
    .duration(4);
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
    .duration(25);
event.recipes.goety.ritual('betterend:flavolite_runed', 'goety:craft', [
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards'
])
    .activationItem('betterend:flavolite_polished')
    .craftType('end')
    .soulCost(10)
    .duration(5);
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
    .duration(25);
});