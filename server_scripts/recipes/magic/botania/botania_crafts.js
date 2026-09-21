ServerEvents.recipes(event => {
    const removals = [
        'botania:mana_void',
        'botania:lens_normal',
        'botania:lens_magnet',
        'botania:phantom_ink'
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
    //Phantom Ink
    event.shapeless('4x botania:phantom_ink', [
        'irons_spellbooks:greater_invisibility_elixir',
        'irons_spellbooks:common_ink',
        'magichem:essentia_air',
        'magichem:essentia_air',
        '#forge:dyes',
        '#forge:dyes',
        'botania:mana_pearl'
    ]).id('botania:phantom_ink')
    //Mana Void
    event.shaped('botania:mana_void', [
        'LOL',
        'ORO',
        'LOL'
    ], {
        L: 'botania:livingrock',
        O: 'minecraft:obsidian',
        R: 'kubejs:rune_void'
    }).id('botania:mana_void')
    //Lenses
    event.shaped('botania:lens_normal', [
        ' M ',
        'MPM',
        ' M '
    ], {
        M: 'gtceu:manasteel_plate',
        P: 'botania:mana_glass_pane'
    }).id('botania:lens_normal')
    event.shapeless(
        'botania:lens_magnet',
        ['botania:lens_normal', 'gtceu:magnetic_iron_rod', 'enderio:conductive_alloy_ingot', 'actuallyadditions:empowered_palis_crystal']
    ).id('botania:lens_magnet')
})