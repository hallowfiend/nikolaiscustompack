ServerEvents.recipes(event => {
    //mechanical components
    event.remove({ id: 'immersiveengineering:crafting/component_iron' })
    event.remove({ id: 'immersiveengineering:crafting/component_steel' })
    event.remove({ id: 'immersiveengineering:blueprint/component_iron' })
    event.remove({ id: 'immersiveengineering:blueprint/component_steel' })
    event.recipes.immersiveengineering.blueprint(
        '2x immersiveengineering:component_iron',
        [
            '2x #forge:plates/iron',
            '#forge:rods/copper',
            'gtceu:brass_gear'
        ],
        'components'
    )
    event.recipes.immersiveengineering.blueprint(
        '2x immersiveengineering:component_steel',
        [
            '2x #forge:plates/steel',
            '#forge:rods/bronze',
            'gtceu:invar_gear'
        ],
        'components'
    )
    //vacuum tube
    event.remove({ id: 'immersiveengineering:blueprint/electron_tube' })
    event.recipes.immersiveengineering.blueprint(
        '2x gtceu:vacuum_tube',
        [
            '2x #forge:glass',
            '2x gtceu:steel_bolt',
            '2x gtceu:copper_single_wire'
        ],
        'components'
    )
    //AE2 components
    const circuittypes = [
        "logic",
        "calculation",
        "engineering"
    ]
    circuittypes.forEach(type =>{
        event.recipes.immersiveengineering.blueprint(
        `ae2:${type}_processor`,
        [
            `ae2:printed_${type}_processor`,
            'gtceu:conductive_alloy_single_wire',
            'minecraft:redstone',
            'ae2:printed_silicon'
        ],
        'components'
    )
    })
});