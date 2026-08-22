ServerEvents.recipes(event => {
    const removals = [
        'occultism:golden_sacrificial_bowl',
        'occultism:magic_lamp_empty',
        'occultism:brush'
    ]
    removals.forEach(item => {
        event.remove({output: item})
    })
    event.remove({output: 'occultism:golden_sacrificial_bowl'})
    event.shaped('occultism:golden_sacrificial_bowl', [
        ' p ',
        'gbg',
        'gug'
    ],{
        g: 'naturesaura:gold_powder',
        b: 'occultism:sacrificial_bowl',
        p: '#eidolon:patron_symbol',
        u: 'gtceu:hallowed_gold_plate'
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
})