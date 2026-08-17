ServerEvents.recipes(event => {
    //upgrade base - storages
    event.remove({output: 'sophisticatedstorage:upgrade_base'})
    event.shaped('sophisticatedstorage:upgrade_base', [
        'TTT',
        'TUT',
        'TTT'
    ], {
        T: '#forge:treated_wood',
        U: 'pneumaticcraft:upgrade_matrix'
    })
    //upgrade base - backpacks
    event.remove({output: 'sophisticatedbackpacks:upgrade_base'})
    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'STS',
        'TUT',
        'STS'
    ], {
        T: 'kubejs:treated_leather',
        U: 'pneumaticcraft:upgrade_matrix',
        S: 'immersiveengineering:hemp_fiber'
    })
})