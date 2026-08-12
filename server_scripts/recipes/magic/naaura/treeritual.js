ServerEvents.recipes(event => {
    event.remove({ id: 'naturesaura:tree_ritual/ancient_sapling' })
    event.remove({ id: 'naturesaura:tree_ritual/token_joy' })
    event.remove({ id: 'naturesaura:tree_ritual/token_fear' })
    event.remove({ id: 'naturesaura:tree_ritual/token_anger' })
    event.remove({ id: 'naturesaura:tree_ritual/token_sorrow' })
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
    //Ancient Sapling
    treeRitual(
      [
        {"item": 'twilightforest:liveroot'},
        {'item': 'hexerei:mugwort_leaves'},
        {'item': 'hexalia:ancient_seed'},
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
    //Rotbulb
    treeRitual(
      [
        {'item': 'minecraft:poisonous_potato'},
        {'item': 'farmersdelight:rotten_tomato'},
        {'item': 'dungeonsdelight:rotten_tripe'},
        {'item': 'gtceu:twilit_mithril_ingot'},
        {'item': 'malum:wicked_spirit'},
        {'item': 'hexalia:witchweed'}
      ],
      'dungeonsdelight:rotbulb', 4,
      'goety:rotten_sapling',
      120
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
        {'item': 'windswept:red_rose'}
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
  //other crafts/gates
  //Entangled Block
  event.remove({ id: "entangled:block" })
  treeRitual(
    [
      {'item': 'botania:red_string_container'},
      {'item': 'botania:red_string'},
      {'tag': 'forge:storage_blocks/mithril'},
      {'item': 'botania:corporea_spark'},
      {'item': 'minecraft:crying_obsidian'},
      {'tag': 'forge:ender_pearls'}
    ],
    'entangled:block', 1,
    'undergarden:wigglewood_sapling',
    150
  )
  //Entangler
  event.remove({ id: 'entangled:item' })
  treeRitual(
    [
      {'item': 'eidolon:warped_sprouts'},
      {'item': 'botania:dreamwood_twig'},
      {'tag': 'forge:rods/potin'},
      {'item': 'galosphere:allurite_shard'},
      {'item': 'botania:corporea_spark'},
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
      {'item': 'reliquary:fertile_essence'},
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