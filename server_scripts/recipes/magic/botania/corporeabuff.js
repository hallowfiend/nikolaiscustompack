ServerEvents.recipes(event => {
    //i think corporea is sick as fuuuuck so i'm buffing the HELL outta it godbless
    const removals = [
        'botania:corporea_spark',
        'botania:corporea_spark_master',
        'botania:corporea_crystal_cube',
        'interactive_corporea:requesting_halo',
        'interactive_corporea:item_quantization_device',
        'botania:corporea_index'
    ]
    removals.forEach(removal => {
        event.remove({id: removal})
    })
    //base spark
    event.shaped('botania:corporea_spark' ,[
        ' O ',
        'ASA',
        ' O '
    ], {
        O: 'naturesaura:gold_powder',
        A: 'integrateddynamics:crystalized_menril_chunk',
        S: 'botania:spark'
    }).id('kubejs:shaped/corporea_spark')
    //master spark
    event.shaped('botania:corporea_spark_master', [
        'CIC',
        'ISI',
        'CIC'
    ], {
        I: 'gtceu:iesnium_plate',
        C: 'hexcasting:charged_amethyst',
        S: 'botania:corporea_spark'
    }).id('kubejs:shaped/corporea_spark_master')
    //crystal cube
    event.shaped('botania:corporea_crystal_cube', [
        'S',
        'C',
        'M'
    ], {
        S: 'botania:corporea_spark',
        C: 'hexerei:crystal_ball',
        M: 'gtceu:iesnium_plate'
    }).id('kubejs:shaped/corporea_crystal_cube')
})