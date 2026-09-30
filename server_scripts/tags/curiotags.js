ServerEvents.tags('item', event => {
  event.add("curios:head", ["gtceu:face_mask"]);
  event.add('curios:necklace', [
    'hexalia:sage_pendant',
    'evilcraft:invigorating_pendant',
    'evilcraft:primed_pendant',
    'aether:ice_pendant',
    'aether:golden_pendant',
    'aether:zanite_pendant',
    'aether:iron_pendant',
    'deep_aether:aercloud_necklace'
  ]);
  event.add('curios:charm', [
    'hexalia:sage_pendant',
    'evilcraft:invigorating_pendant',
    'evilcraft:primed_pendant',
    'immersiveengineering:earmuffs',
    'embers:explosion_charm'
  ]);
  event.add('curios:ring', [
    'evilcraft:vengeance_ring',
    '#curios:rings'
  ])
  event.add("curios:hands", ["gtceu:rubber_gloves"]);
  event.add("curios:wrist", [
    'mna:bangle',
    /.*bracelet/
  ])
  event.add("curios:face", [
    'create:goggles',
    'occultism:otherworld_goggles',
    'gtceu:face_mask'
  ])
  event.add('curios:quiver', 'supplementaries:quiver')
  event.add('accessories:anklet', [
    '#curios:wrist'
  ])
  event.add('curios:waist', [
    /botania:.*belt/
  ])
  event.remove('curios:rings', [/.*/])
})