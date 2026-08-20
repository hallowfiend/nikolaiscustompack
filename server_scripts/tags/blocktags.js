ServerEvents.tags('block', event => {
  event.add('coldsweat:warm_kitchen_blocks', [
    /.*stove/,
    /cookingforblockheads:.*oven/,
    'handcrafted:oven'
  ])

  event.add('kubejs:airs', [
    'minecraft:air',
    'minecraft:cave_air',
    'minecraft:void_air'
  ])

  event.add('goety:heating', [ //thank you polarice
    '#hexerei:heat_sources'
  ])
})