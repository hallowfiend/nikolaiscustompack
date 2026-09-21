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
        ' b ',
        'ggg'
    ], {
        s: 'malum:processed_soulstone',
        g: 'gtceu:hallowed_gold_plate',
        b: 'eidolon:basic_belt'
    }).id('malum:gilded_belt')
})