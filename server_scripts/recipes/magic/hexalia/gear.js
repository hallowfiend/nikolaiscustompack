ServerEvents.recipes(event => {
    //thornbow
    event.remove({id: 'hexalia:thornbow'})
    event.shaped('hexalia:thornbow', [
        ' SV',
        'REF',
        ' SV'
        ], {
    E: 'hexalia:earth_node',
    V: 'minecraft:vine',
    R: 'hexalia:rabbage',
    F: 'immersiveengineering:hemp_fiber',
    S: 'minecraft:stick'
    }).id('kubejs:shaped/thornbow')
    //spiritroot tether
    event.remove({id: 'hexalia:spiritroot_tether'})
    event.shaped('hexalia:spiritroot_tether', [
        'ER ',
        'RD ',
        '  H'
        ], {
    E: 'hexalia:earth_node',
    D: 'kubejs:eldritch_node',
    R: 'supplementaries:rope',
    H: 'immersiveengineering:hemp_fiber'
    }).id('kubejs:shaped/spiritroot_tether')
    //bogshade boots
    event.remove({id: 'hexalia:bogshade_boots'})
    event.shaped('hexalia:bogshade_boots', [
        'SWS',
        'K K'
        ], {
    S: 'kubejs:woven_silk',
    K: 'minecraft:kelp',
    W: 'hexerei:water_node'
    }).id('kubejs:shaped/bogshade_boots')
    //silkweave armor
    event.remove({id: /hexalia:silkweave.*/})
    event.shaped('hexalia:silkweave_hood', [
        ' S ',
        'SLS',
        ' W '
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    W: '#minecraft:wool'
    }).id('kubejs:shaped/silkweave_hood')
    event.shaped('hexalia:silkweave_mantle', [
        'TWT',
        'SLS',
        ' W '
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    T: 'immersiveengineering:hemp_fiber',
    W: '#minecraft:wool'
    }).id('kubejs:shaped/silkweave_mantle')
    event.shaped('hexalia:silkweave_bindings', [
        ' S ',
        'SLS',
        'TWT'
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    T: 'immersiveengineering:hemp_fiber',
    W: '#minecraft:wool'
    }).id('kubejs:shaped/silkweave_bindings')
    event.shaped('hexalia:silkweave_bindings', [
        ' S ',
        'SLS',
        'TST'
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    T: 'immersiveengineering:hemp_fiber'
    }).id('kubejs:shaped/silkweave_footwraps')
    //ghostveil
    event.remove({id: 'hexalia:ghostveil'})
    event.shaped('hexalia:ghostveil', [
        'A A',
        'PAP',
        'SLS'
        ], {
    A: 'minecraft:leather',
    P: 'kubejs:woven_silk',
    L: '#minecraft:leaves',
    S: 'hexalia:ghost_powder'
    }).id('kubejs:shaped/ghostveil')
})