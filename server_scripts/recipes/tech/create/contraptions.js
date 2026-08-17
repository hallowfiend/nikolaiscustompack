ServerEvents.recipes((event) => {
    //accurate arcane essence recipe
    event.remove({ id: 'irons_spellbooks:mixing/arcane_essence' })
    event.recipes.create.mixing(
        '4x irons_spellbooks:arcane_essence', //output
        [
            'sons_of_sins:ether_ashes', //inputs
            'gtceu:source_dust',
            'mna:vinteum_dust',
            "create:experience_nugget",
            Fluid.of('minecraft:water').withAmount(1000)
        ]
    )
    //irons' fluids
    //chalk compacting
    event.recipes.create.compacting(
        ['arts_and_crafts:white_chalk'],
        ['2x gtceu:gypsum_dust', '2x gtceu:calcite_dust']
    )
    //pnc upgrade base ('spensive ver)
    event.recipes.create.compacting(
        ['pneumaticcraft:upgrade_matrix'],
        ['8x minecraft:lapis_lazuli', '8x malum:chunk_of_brilliance']
    )
    //IE multi bricks
})