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
    '#botania:petals',
    'farmersdelight:cabbage_seeds',
    'farmersdelight:tomato_seeds',
    'farmersdelight:onion',
    'minecraft:potato',
    'minecraft:glow_lichen',
    'miners_delight:cave_carrot'
  ])
})