ServerEvents.tags('item', event => {
  //overworld
  event.remove('mna:constructs/adventure_overworld_common', [
        '#forge:mushrooms',
        'minecraft:clay'
      ])
  event.add('mna:constructs/adventure_overworld_common', [
    'minecraft:clay_ball',
    'minecraft:brown_mushroom',
    'minecraft:red_mushroom',
    'farmersdelight:cabbage_seeds',
    'farmersdelight:tomato_seeds',
    'minecraft:glow_lichen'
  ])
  event.add('mna:constructs/adventure_overworld_rare', [
    '#botania:petals',
    'farmersdelight:onion',
    'minecraft:potato',
    'miners_delight:cave_carrot'
  ])
  //nether
  event.remove('mna:constructs/adventure_nether_common', [
    'minecraft:blaze_rod',
    'minecraft:porkchop'
  ])
  event.add('mna:constructs/adventure_nether_common', [
    'netherexp:lightspores',
    'netherexp:nightspores',
    'minecraft:crimson_fungus',
    'minecraft:warped_fungus'
  ])
  event.add('mna:constructs/adventure_nether_rare', [
    'minecraft:blaze_rod',
    'netherexp:wisp_bottle',
    'mynethersdelight:hoglin_loin',
    'cold_sweat:hoglin_hide',
    'minecraft:magma_cream'
  ])
  event.add('mna:constructs/mining_nether_rare', [
    'occultism:raw_iesnium',
    'minecraft:ancient_debris'
  ])
  //end
  event.remove('mna:constructs/adventure_end_common', [
    'minecraft:end_rod'
  ])
  event.add('mna:constructs/adventure_end_common', [
    'botania:ender_air',
    'goety:void_bottle'
  ])
})