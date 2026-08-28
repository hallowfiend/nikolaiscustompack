ServerEvents.recipes(event => {
    const removals = [
        'occultism:golden_sacrificial_bowl',
        'occultism:magic_lamp_empty',
        'occultism:brush',
        'occultism:lens_frame',
        'occultism:lenses'
    ]
    removals.forEach(item => {
        event.remove({output: item})
    })
    event.shaped('occultism:golden_sacrificial_bowl', [
        ' p ',
        'gbg',
        'sus'
    ],{
        g: 'naturesaura:gold_powder',
        b: 'occultism:sacrificial_bowl',
        p: '#eidolon:patron_symbol',
        u: 'gtceu:hallowed_gold_plate',
        s: 'malum:cthonic_gold'
    }).keepIngredient('#eidolon:patron_symbol').id('kubejs:shaped/golden_sacrificial_bowl')
    event.shaped('occultism:magic_lamp_empty', [
        ' C ',
        'CTC',
        ' CC',
        ], {
    T: 'gtceu:double_iesnium_plate',
    C: 'gtceu:double_strumm_plate'
    }).id('kubejs:shaped/empty_lamp')
    event.shaped('occultism:brush', [    
        'WWW',
        'HHS',
        ], {
    W: '#minecraft:wooden_slabs',
    H: 'farmersdelight:straw_bale',
    S: 'gtceu:silver_plate'
    }).id('kubejs:shaped/chalk_brush')
    event.shaped('occultism:lens_frame', [
    'PHP',
    'ILI',
    'SFS'
    ], {
    P: 'gtceu:silver_rod',
    I: 'occultism:otherstone_frame',
    S: 'gtceu:silver_plate',
    L: 'gtceu:silver_ring',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
    })
    event.shaped('occultism:lenses', [
    ' C ',
    'IPI',
    'SFS'
    ], {
    P: 'gtceu:fine_gold_wire',
    I: 'occultism:spirit_attuned_gem',
    S: 'malum:arcane_spirited_glass',
    F: '#forge:tools/files',
    C: '#forge:tools/wire_cutters'
    })
})