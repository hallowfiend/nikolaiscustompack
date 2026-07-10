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
})