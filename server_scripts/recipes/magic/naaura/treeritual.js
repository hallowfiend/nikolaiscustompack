ServerEvents.recipes(event => {
    const yeeeet = [
      'naturesaura:tree_ritual/ancient_sapling',
      'naturesaura:tree_ritual/altar',
      'naturesaura:tree_ritual/conversion_catalyst',
      'naturesaura:tree_ritual/crushing_catalyst',
      'naturesaura:tree_ritual/token_joy',
      'naturesaura:tree_ritual/token_fear',
      'naturesaura:tree_ritual/token_anger',
      'naturesaura:tree_ritual/token_sorrow',
      'naturesaura:offering_table',
      'naturesaura:oak_generator',
      'naturesaura:moss_generator',
      'naturesaura:potion_generator',
      'naturesaura:chorus_generator',
      'naturesaura:animal_generator',
      'naturesaura:firework_generator',
      'naturesaura:projectile_generator',
      'naturesaura:slime_split_generator'
    ]
    yeeeet.forEach(yote => {
      event.remove({id: yote})
    })
    //recipe function
    function treeRitual(ingredients, output, outputCount, sapling, time){
      event.custom({
      "type": "naturesaura:tree_ritual",
      "ingredients": ingredients, //list, max 8
          "sapling": {
            "item": sapling //id
          },
          "output": {
            "item": output, //id
            "count": outputCount //int
          },
          "time": time //int
        }).id(`kubejs:natures_aura/tree_ritual/${output.split(":")[1]}`)
    }
    //PLONTS
    //Ancient Sapling
    treeRitual(
      [
        {"item": 'twilightforest:liveroot'},
        {'item': 'hexerei:mugwort_leaves'},
        {'tag': 'kubejs:ancient_seeds'},
        {'item': 'caverns_and_chasms:spinel'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'occultism:datura'},
        {'item': 'hexalia:begonia'},
        {'item': 'ars_nouveau:sourceberry_bush'}
      ],
      'naturesaura:ancient_sapling', 2,
      'quark:red_blossom_sapling',
      20
    );
    //BLOCKS/MACHINES
    //Natural Altar
    treeRitual(
      [
        {'item': 'kubejs:token_change'},
        {'item': 'naturesaura:token_joy'},
        {'item': 'embers:caminite_large_tile'},
        {'item': 'eidolon:avennian_sprig'},
        {'item': 'embers:caminite_large_tile'},
        {'item': 'twilightforest:naga_scale'},
        {'item': 'hexalia:mutavis'},
        {'item': 'cosmopolitan:fiddlehead_crate'}
      ],
      'naturesaura:nature_altar', 1,
      'minecraft:oak_sapling',
      500
    )
    //Offering Table
    treeRitual(
      [
        {'item': 'eidolon:holy_symbol'},
        {'item': 'eidolon:unholy_symbol'},
        {'item': 'naturesaura:infused_stone'},
        {'tag': 'forge:storage_blocks/regalium'},
        {'tag': 'forge:storage_blocks/vehement_coal'},
        {'item': 'eidolon:wooden_altar'},
        {'item': 'naturesaura:token_sorrow'},
        {'item': 'naturesaura:token_joy'}
      ],
      'naturesaura:offering_table', 1,
      'aether:skyroot_sapling',
      500
    )
    //Transmutation Catalyst
    treeRitual(
      [
        {'item': 'kubejs:token_change'},
        {'item': 'embers:ashen_brick'},
        {'item': 'botania:manasteel_ingot'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'eidolon:warped_sprouts'},
        {'item': 'naturesaura:infused_stone'},
        {'item': 'minecraft:brewing_stand'},
        {'item': 'magichem:admixture_change'}
      ],
      'naturesaura:conversion_catalyst', 1,
      'hexalia:cottonwood_sapling',
      500
    )
    //Crumbling Catalyst
    treeRitual(
      [
        {'item': 'naturesaura:token_anger'},
        {'item': 'botania:livingrock_bricks'},
        {'item': 'embers:dawnstone_plate'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'eidolon:warped_sprouts'},
        {'item': 'naturesaura:infused_stone'},
        {'item': 'create:millstone'},
        {'item': 'magichem:admixture_erosion'}
      ],
      'naturesaura:crushing_catalyst', 1,
      'hexalia:cottonwood_sapling',
      500
    )
    //TOKENS
    //Joy
    treeRitual(
      [
        {type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' }},
        {'item': 'naturesaura:gold_leaf'},
        {'tag': 'forge:gems/ambrosium'},
        {'item': 'farmersdelight:honey_cookie'},
        {'item': 'galosphere:lumiere_shard'},
        {'tag': 'kubejs:roses'}
      ],
      'naturesaura:token_joy', 2,
      'minecraft:cherry_sapling',
      50
    )
    //Sorrow
    treeRitual(
      [
        {type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' }},
        {'item': 'naturesaura:gold_leaf'},
        {'tag': 'aether:aerclouds'},
        {'tag': 'forge:gems/salt'},
        {'item': 'twilightforest:carminite'},
        {'item': 'netherexp:wisp_bottle'}
      ],
      'naturesaura:token_sorrow', 2,
      'hexerei:willow_sapling',
      50
    )
    //Fear
    treeRitual(
      [
        {type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:nether' }},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'goety:cursed_ingot'},
        {'item': 'dungeonsdelight:rancid_reduction'},
        {'tag': 'forge:wither_bones'},
        {'item': 'netherexp:banshee_powder'}
      ],
      'naturesaura:token_fear', 2,
      'goety:haunted_sapling',
      50
    )
    //Anger
    treeRitual(
      [
        {type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:nether' }},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'scguns:buckshot'},
        {'item': 'eidolon:crimson_essence'},
        {'tag': 'forge:dusts/dark'},
        {'item': 'alexsmobs:komodo_spit'}
      ],
      'naturesaura:token_anger', 2,
      'quark:red_blossom_sapling',
      50
    )
    //Change
    treeRitual(
      [
        {'item': 'hexerei:tallow_bottle'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'hexerei:mugwort_flowers'},
        {'item': 'malum:alchemical_calx'},
        {'item': 'cosmopolitan:spinalberry'},
        {'item': 'sons_of_sins:crystallized_ether'}
      ],
      'kubejs:token_change', 2,
      'malum:soulwood_growth',
      50
    )
    //Stillness
    treeRitual(
      [
        {'item': 'hexerei:tallow_bottle'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'malum:tin_node'},
        {'item': 'mna:infused_silk'},
        {'item': 'undergardendelight:shimmerpearl'},
        {'item': 'mynethersdelight:tear_popsicle'}
      ],
      'kubejs:token_stillness', 2,
      'arts_and_crafts:cork_sapling',
      50
    )
    //Defiance
    treeRitual(
      [
        {'item': 'hexerei:blood_bottle'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'galosphere:palladium_bomb'},
        {'item': 'twilightdelight:glacier_ice_cream'},
        {'item': 'goety:henbane_flower'},
        {'item': 'gtceu:kyanite_dust'}
      ],
      'kubejs:token_defiance', 2,
      'integrateddynamics:menril_sapling',
      50
    )
    //Cycles
    treeRitual(
      [
        {'item': 'hexerei:blood_bottle'},
        {'item': 'naturesaura:gold_leaf'},
        {'item': 'supplementaries:clock_block'},
        {'item': 'malum:rotting_essence'},
        {'item': 'minecraft:phantom_membrane'},
        {'item': 'botania:fertilizer'}
      ],
      'kubejs:token_cycles', 2,
      'windswept:flowering_acacia_sapling',
      50
    )
    const tokens = [
      {i: 'change', o: 'flux'},
      {i: 'stillness', o: 'stasis'},
      {i: 'defiance', o: 'determination'},
      {i: 'cycles', o: 'recurrence'}
    ]
    tokens.forEach(token => {
      event.custom({
    "type": "naturesaura:offering",
    "input": {
        "item": `kubejs:token_${token.i}`
    },
    "start_item": {
        "item": "naturesaura:calling_spirit"
    },
    "output": {
        "item": `kubejs:token_${token.o}`
    }
    }).id(`kubejs:natures_aura/offering_to_the_gods/token_${token.o}`)
    })
    //AURA GENERATORS
    //Canopy Diminisher
    treeRitual(
      [
        {'item': 'naturesaura:infused_iron'},
        {'item': 'naturesaura:token_joy'},
        {'item': 'hexalia:earth_node'},
        {'item': 'botania:livingwood'},
        {'item': 'goety:animation_core'},
        {'item': 'botania:livingwood'}
      ],
      'naturesaura:oak_generator', 1,
      'minecraft:oak_sapling',
      600
    )
    //Disentangler of Mortals
    treeRitual(
      [
        {'item': 'gtceu:darkened_silver_ingot'},
        {'item': 'naturesaura:token_sorrow'},
        {'item': 'kubejs:vengeful_node'},
        {'item': 'minecraft:nether_brick'},
        {'item': 'eidolon:reaper_scythe'},
        {'item': 'goety:cursed_cage'}
      ],
      'naturesaura:animal_generator', 1,
      'atmospheric:laurel_sapling',
      600
    )
    treeRitual(
      [
        {'item': 'naturesaura:sky_ingot'},
        {'item': 'naturesaura:token_joy'},
        {'item': 'hexalia:air_node'},
        {'item': 'minecraft:fire_charge'},
        {'item': 'minecraft:firework_rocket'},
        {'item': 'naturesaura:token_rage'}
      ],
      'naturesaura:firework_generator', 1,
      'ars_nouveau:red_archwood_sapling',
      600
    )
    //Herbivorous Absorber
    treeRitual(
      [
        {'item': 'naturesaura:infused_iron'},
        {'item': 'naturesaura:token_joy'},
        {'item': 'kubejs:sacred_node'},
        {'item': 'hexalia:fragrant_nectar'},
        {'item': 'eidolon:holy_symbol'},
        {'item': 'kubejs:bloomwrap_cloth'}
      ],
      'naturesaura:flower_generator', 1,
      'minecraft:flowering_azalea',
      600
    )
    treeRitual(
      [
        {'item': 'gtceu:darkened_silver_ingot'},
        {'item': 'kubejs:token_change'},
        {'item': 'kubejs:corrosive_node'},
        {'item': 'botania:manasteel_sword'},
        {'item': 'minecraft:bamboo'},
        {'item': 'naturesaura:token_sorrow'}
      ],
      'naturesaura:slime_split_generator', 1,
      'tconstruct:earth_slime_sapling',
      600
    )
    //Reaper of Ender Heights
    treeRitual(
      [
        {'item': 'gtceu:darkened_silver_ingot'},
        {'item': 'kubejs:token_defiance'},
        {'item': 'kubejs:eldritch_node'},
        {'item': 'quark:ender_watcher'},
        {'item': 'eidolon:ender_calx'},
        {'item': 'create:mechanical_saw'}
      ],
      'naturesaura:chorus_generator', 1,
      'betterend:dragon_tree_sapling',
      600
    )
    treeRitual(
      [
        {'item': 'naturesaura:tainted_gold'},
        {'item': 'kubejs:token_change'},
        {'item': 'kubejs:arcane_node'},
        {'item': 'eidolon:fungus_sprouts'},
        {'item': 'kubejs:shifting_tincture'},
        {'item': 'goety:mystic_core'}
      ],
      'naturesaura:potion_generator', 1,
      'hexerei:witch_hazel_sapling',
      600
    )
    treeRitual(
      [
        {'item': 'naturesaura:infused_iron'},
        {'item': 'kubejs:token_recurrence'},
        {'item': 'hexalia:water_node'},
        {'item': 'eidolon:avennian_sprig'},
        {'item': 'kubejs:ecologists_distillation'},
        {'item': 'hexalia:morphora'}
      ],
      'naturesaura:moss_generator', 1,
      'hexerei:willow_sapling',
      600
    )
    //Shooting Mark
    treeRitual(
      [
        {'item': 'naturesaura:infused_iron'},
        {'item': 'kubejs:token_defiance'},
        {'item': 'kubejs:vengeful_node'},
        {'item': 'minecraft:crossbow'},
        {'item': 'goety:wind_core'},
        {'item': 'naturesaura:token_anger'}
      ],
      'naturesaura:projectile_generator', 1,
      'hexerei:mahogany_sapling',
      600
    )
  //other crafts/gates
  //Slimy Eye
    treeRitual(
      [
        {'item': 'vampiresdelight:human_eye'},
        {'item': 'biomancy:mob_gland'},
        {'item': 'minecraft:fermented_spider_eye'},
        {'item': 'tconstruct:earth_congealed_slime'},
        {'item': 'biomancy:mob_gland'},
        {'item': 'goety:quick_growing_seed'}
      ],
      'kubejs:slimy_eye', 2,
      'atmospheric:yucca_sapling',
      50
    )
  //Entangled Block
  event.remove({ id: "entangled:block" })
  treeRitual(
    [
      {'item': 'botania:red_string_container'},
      {'item': 'botania:red_string'},
      {'tag': 'forge:storage_blocks/mithril'},
      {'item': 'botania:corporea_spark'},
      {'item': 'minecraft:crying_obsidian'},
      {'item': 'eidolon:ender_calx'}
    ],
    'entangled:block', 1,
    'undergarden:wigglewood_sapling',
    150
  )
  //Entangler
  event.remove({ id: 'entangled:item' })
  treeRitual(
    [
      {'item': 'kubejs:realmsplit_dew'},
      {'item': 'botania:dreamwood_twig'},
      {'tag': 'forge:rods/potin'},
      {'item': 'galosphere:allurite_shard'},
      {'item': 'botania:master_corporea_spark'},
      {'item': 'naturesaura:sky_ingot'}
    ],
    'entangled:item', 1,
    'undergarden:wigglewood_sapling',
    300
  )
  //Garden Cloche
  event.remove({ output: 'immersiveengineering:cloche' })
  treeRitual(
    [
      {'item': 'immersiveengineering:light_bulb'},
      {'item': 'create:fluid_tank'},
      {'item': 'immersiveengineering:component_iron'},
      {'item': 'botania:fertilizer'},
      {'item': 'immersiveengineering:slag_glass'},
      {'tag': 'forge:treated_wood'},
      {'item': 'immersiveengineering:slag_glass'},
      {'tag': 'forge:treated_wood'}
    ],
    'immersiveengineering:cloche', 1,
    'gtceu:rubber_sapling',
    100
  )
  //Terrestrial Agglomeration Plate
  event.remove({id: 'botania:terra_plate'})
  treeRitual(
    [
      {'item': 'botania:rune_fire'},
      {'item': 'botania:rune_water'},
      {'item': 'botania:rune_air'},
      {'item': 'botania:rune_earth'},
      {'tag': 'forge:storage_blocks/manasteel'},
      {'tag': 'forge:storage_blocks/froststeel'},
      {'tag': 'forge:storage_blocks/sky_ingot'},
      {'item': 'botania:rune_mana'}
    ],
    'botania:terra_plate', 1,
    'malum:azure_runewood_sapling',
    400
  )
  //Elven Gateway Core
})