ServerEvents.recipes(event => {
    //Witch Hat
    event.remove({id: 'goety:witch_hat'})
    event.recipes.goety.ritual('goety:witch_hat', 'goety:craft', [
            'goety:soul_emerald',
            'eidolon:pewter_inlay',
            'kubejs:witches_stitching',
            'kubejs:witches_stitching',
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
            'kubejs:witches_stitching',
            'goety:soul_emerald',
            '#forge:slimeballs',
            'hexalia:earth_node',
            'goety:mystic_core'
        ])
        .activationItem('hexerei:witch_chestplate')
        .craftType('storm')
        .soulCost(1)
        .duration(10)
        .id('goety:witch_robe');
    //Magichemless (thus, more 'spensive) thunderstone
    event.recipes.goety.ritual('2x magichem:thunderstone', 'goety:craft', [
        'minecraft:purple_dye',
        'malum:soul_stained_steel_sword',
        'minecraft:lightning_rod',
        'minecraft:lightning_rod',
        'minecraft:lightning_rod',
        'malum:alchemical_calx'
    ])
    .activationItem('minecraft:deepslate')
    .craftType('storm')
    .soulCost(5)
    .duration(10)
    .id('kubejs:goety/dark_ritual/stormchanging/thunderstone_from_soul_magic')
})