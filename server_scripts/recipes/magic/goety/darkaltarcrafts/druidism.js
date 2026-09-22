ServerEvents.recipes(event => {
    //Crow Ankh Amulet
    event.remove({ id: 'hexerei:crow_ankh_amulet_from_mixing_cauldron' })
    event.recipes.goety.ritual('hexerei:crow_ankh_amulet', 'goety:craft', [
            'minecraft:totem_of_undying',
            'minecraft:glow_berries',
            'hexerei:dried_yellow_dock_leaves',
            'hexerei:dried_mugwort_flowers',
            'goety:grave_dust',
            'kubejs:whiff_of_vitality'
        ])
        .activationItem('hexerei:crow_blank_amulet')
        .craftType('overgrown')
        .soulCost(5)
        .duration(20)
        .id('kubejs:goety/dark_ritual/druidism/crow_ankh_amulet');
})