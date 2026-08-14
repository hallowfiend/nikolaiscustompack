ServerEvents.recipes(event => {
    const removals = [
        'botania:mana_void',
        'botania:lens_normal',
        'botania:lens_magnet'
    ]
    removals.forEach(item => {
        event.remove({id: item})
    })
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
    //Lenses
    event.shaped('botania:lens_normal', [
        ' M ',
        'MPM',
        ' M '
    ], {
        M: 'gtceu:manasteel_plate',
        P: 'botania:mana_glass_pane'
    }).id('kubejs:shaped/mana_lens')
    event.shapeless(
        'botania:lens_magnet',
        ['botania:lens_normal', 'gtceu:magnetic_iron_rod', 'enderio:conductive_alloy_ingot']
    ).id('kubejs/shapeless/magnetizing_lens')
})