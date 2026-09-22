ServerEvents.recipes(event => {
    //Witch Hat
    event.remove({id: 'goety:witch_hat'})
    event.recipes.goety.ritual('goety:witch_hat', 'goety:craft', [
            'goety:soul_emerald',
            'eidolon:pewter_inlay',
            'goety:dark_fabric'
        ])
        .activationItem('hexerei:witch_helmet')
        .craftType('storm')
        .soulCost(1)
        .duration(10)
        .id('goety:witch_hat');
    //Witch Robe
    event.remove({id: 'goety:witch_robe'})
    event.recipes.goety.ritual('goety:witch_robe', 'goety:craft', [
            'goety:occult_fabric',
            'goety:occult_fabric',
            'hexerei:mindful_trance_blend',
            'goety:soul_emerald',
            '#forge:slimeballs',
            'kubejs:wicked_node',
            'hexalia:earth_node',
            'goety:mystic_core'
        ])
        .activationItem('hexerei:witch_chestplate')
        .craftType('storm')
        .soulCost(1)
        .duration(10)
        .id('goety:witch_robe');
})