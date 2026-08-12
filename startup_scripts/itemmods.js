ItemEvents.modification(event => {
    //evilcraft maces now have actual attack speed
    event.modify('evilcraft:mace_of_distortion', item => {
        item.attackSpeed(1.2)
    })
    event.modify('evilcraft:mace_of_destruction', item => {
        item.attackSpeed(0.9)
    })
})