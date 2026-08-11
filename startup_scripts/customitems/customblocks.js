StartupEvents.registry('block', (event) => {
    event
        .create('mana_reinforced_livingwood_casing')
        .displayName('Manasteel-Reinforced Livingwood Casing')
        .hardness(5)
        .resistance(1)
        .lightLevel(0)
        .soundType('wood')
        .requiresTool(true)
        .tagBlock('mineable/axe')
        .textureAll('kubejs:block/mana_reinforced_livingwood_casing');
    event
        .create('blood_congealed_slime')
        .displayName('Congealed Blood Block')
        .hardness(0.5)
        .resistance(0.5)
        .lightLevel(0)
        .fullBlock(true)
        .soundType(SoundType.SLIME_BLOCK)
        .requiresTool(false)
        .tagBlock('mineable/shovel')
        .tagBoth('tconstruct:congealed_slime')
        .textureAll('kubejs:block/blood_congealed_slime');
})