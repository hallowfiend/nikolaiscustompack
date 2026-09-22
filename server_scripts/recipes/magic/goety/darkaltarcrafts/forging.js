ServerEvents.recipes(event => {
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
            'gtceu:nicrosil_block'
        ])
        .activationItem('botania:terra_sword')
        .craftType('forge')
        .soulCost(50)
        .duration(5)
        .id('kubejs:goety/dark_ritual/forging/thundercaller');

    //Iron's Spellbooks weaponry
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
    
})