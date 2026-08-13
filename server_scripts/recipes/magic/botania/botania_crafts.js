ServerEvents.recipes(event => {
    event.remove({id: 'botania:mana_void'})
    /* event.remove({ output: 'botania:alchemy_catalyst' })
    event.shaped('botania:alchemy_catalyst', [
        'LCL',
        'BPB',
        'LGL'
    ], {
        B: 'minecraft:brewing_stand',
        L: 'gtceu:livingrock_plate',
        G: 'gtceu:arcane_gold_plate',
        P: 'botania:mana_pearl',
        C: 'kubejs:aspectus_gold'
    }) */
    //Mana Void
    event.shaped('botania:mana_void', [
        'LOL',
        'ORO',
        'LOL'
    ], {
        L: 'botania:livingrock',
        O: 'minecraft:obsidian',
        R: 'kubejs:rune_void'
    }).id('kubejs:shaped/mana_void')
})