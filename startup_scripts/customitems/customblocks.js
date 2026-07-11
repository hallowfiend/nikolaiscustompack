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
        .textureAll('kubejs:block/mana_reinforced_livingwood_casing')
})