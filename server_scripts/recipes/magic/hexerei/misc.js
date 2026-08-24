ServerEvents.recipes(event => {
    event.remove({id: 'hexerei:herb_jar_from_mixing_cauldron'})
    event.shaped('hexerei:herb_jar', [
        'P',
        'J',
        'S'
    ], {
        P: 'minecraft:paper',
        J: 'supplementaries:jar',
        S: 'gtceu:pewter_plate'
    }).id('kubejs:shaped/herb_jar')
})