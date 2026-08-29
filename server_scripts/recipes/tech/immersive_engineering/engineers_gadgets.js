ServerEvents.recipes(event => {
    const yeet = [
        'immersiveengineering:crafting/crate'
    ]
    yeet.forEach(item => {
        event.remove({id: item})
    })
    //crate nerf
    event.shaped('immersiveengineering:crate', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        C: 'actuallyadditions:wood_casing',
        P: 'gtceu:treated_wood_plate'
    }).id('immersiveengineering:crafting/crate')
    //barrel
    event.replaceInput({id: 'immersiveengineering:crafting/wooden_barrel'}, '#forge:treated_wood_slab', 'gtceu:treated_wood_plate')
})