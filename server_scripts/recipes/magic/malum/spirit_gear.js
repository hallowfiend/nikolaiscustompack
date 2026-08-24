ServerEvents.recipes(event => {
    event.remove({id: 'malum:spirit_jar'})
    event.shaped('malum:spirit_jar', [
        'H',
        'J'
    ], {
        H: 'gtceu:hallowed_gold_plate',
        J: 'supplementaries:jar'
    }).id('malum:spirit_jar')
})