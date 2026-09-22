ServerEvents.recipes(event => {
    //Targeting Monocle
    event.remove({id: 'goety:targeting_monocle'})
    event.recipes.goety.ritual('goety:targeting_monocle', 'goety:craft', [
            'goety:ectoplasm',
            'minecraft:spyglass',
            'malum:wicked_spirited_glass',
            'malum:wicked_spirited_glass',
            'kubejs:treated_leather',
            'kubejs:treated_leather',
            'malum:block_of_cthonic_gold',
            'eidolon:pewter_inlay'
        ])
        .activationItem('hexcasting:lens')
        .craftType('geoturgy')
        .soulCost(1)
        .duration(10)
        .id('goety:targeting_monocle');
})