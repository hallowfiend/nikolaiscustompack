ItemEvents.modification(event => {
    //Ashen Armor dura buff
    event.modify('embers:ashen_goggles', item => {
    item.maxDamage = 444
    })
    event.modify('embers:ashen_cloak', item => {
    item.maxDamage = 646
    })
    event.modify('embers:ashen_leggings', item => {
    item.maxDamage = 646
    })
    event.modify('embers:ashen_boots', item => {
    item.maxDamage = 444
    })
})