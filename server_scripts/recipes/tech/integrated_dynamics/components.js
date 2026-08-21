ServerEvents.recipes(event =>{
    const yeeters = [
        'integrateddynamics:crafting/cable',
        'integrateddynamics:crafting/variable'
    ]
    yeeters.forEach(yeet => {
        event.remove({id: yeet})
    })
    //cables
    event.shaped('6x integrateddynamics:cable',
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {A: 'gtceu:aluminium_single_wire',B: 'integrateddynamics:crystalized_menril_chunk',C: 'magichem:signalite'}
    ).id(`kubejs:shaped/id_cable`)
    //more efficient Greg recipe
    event.recipes.gtceu.assembler('kubejs:assembly/id_cable')
    .itemInputs('3x gtceu:aluminium_single_wire', 'integrateddynamics:crystalized_menril_chunk', 'magichem:signalite')
    .itemOutputs('6x integrateddynamics:cable')
    .duration(80)
    .EUt(16)
    //variable card
    event.shaped('32x integrateddynamics:variable',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {A: 'integrateddynamics:crystalized_menril_chunk', B: 'pneumaticcraft:upgrade_matrix'}
    ).id('kubejs:shaped/id_variable')
    //variable store
    event.replaceInput({output: 'integrateddynamics:variablestore'}, '#forge:chests/wooden', 'immersiveengineering:crate')
    event.replaceInput({output: 'integrateddynamics:variablestore'}, 'integrateddynamics:crystallized_menril_block', '#forge:gears/silver')
    //interface parts
    const tunnelsPartTypes = [
        {type: 'energy', item: 'immersiveengineering:coil_mv', metal: 'silver'},
        {type: 'item', item: 'embers:bin', metal: 'nickel'},
        {type: 'fluid', item: 'create:fluid_tank', metal: 'copper'}
    ]
    tunnelsPartTypes.forEach(part => {
        event.remove({id: `integratedtunnels:crafting/part_interface_${part.type}`})
        event.shaped(`4x integratedtunnels:part_interface_${part.type}`,
            [
                'CIC',
                'CMC'
            ],{
                C: 'integrateddynamics:menril_chunk',
                I: part.item,
                M: `#forge:double_plates/${part.metal}`
            }
        )
    })
    //input transformer
    //output transformer
})