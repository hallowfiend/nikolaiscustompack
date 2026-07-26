ServerEvents.recipes(event =>{
    //cables
    event.remove({output: 'integrateddynamics:cable'})
    event.shaped('6x integrateddynamics:cable',
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {A: 'gtceu:aluminium_single_wire',B: 'integrateddynamics:crystalized_menril_chunk',C: 'magichem:signalite'}).id(`kubejs:shaped/id_cable`)
    //more efficient Greg recipe
    event.recipes.gtceu.assembler('kubejs:assembly/id_cable')
    .itemInputs('3x gtceu:aluminium_single_wire', 'integrateddynamics:crystalized_menril_chunk', 'magichem:signalite')
    .itemOutputs('6x integrateddynamics:cable')
    .duration(80)
    .EUt(16)
})