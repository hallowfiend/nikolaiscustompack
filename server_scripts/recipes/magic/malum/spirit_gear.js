ServerEvents.recipes(event => {
    event.remove({id: 'malum:spirit_jar'})
    event.shaped('malum:spirit_jar', [
        'H',
        'J'
    ], {
        H: 'gtceu:hallowed_gold_plate',
        J: 'supplementaries:jar'
    }).id('malum:spirit_jar')
    event.remove({id: 'malum:gilded_belt'})
    event.shaped('malum:gilded_belt', [
        ' s ',
        'ubh',
        'ggg'
    ], {
        s: 'malum:processed_soulstone',
        g: 'gtceu:hallowed_gold_plate',
        b: 'eidolon:basic_belt',
        h: '#forge:tools/hammers',
        u: 'gtceu:gold_screw'
    }).damageIngredient('#forge:tools/hammers').id('malum:gilded_belt')
    event.remove({id: 'malum:ornate_necklace'})
    event.shaped('malum:ornate_necklace', [
        ' s ',
        'gbg',
        ' nd'
    ], {
        s: 'malum:processed_soulstone',
        g: 'gtceu:soul_stained_steel_plate',
        n: 'malum:soul_stained_steel_nugget',
        b: 'eidolon:basic_amulet',
        d: '#forge:tools/screwdrivers'
    }).damageIngredient('#forge:tools/screwdrivers').id('malum:ornate_necklace')
})