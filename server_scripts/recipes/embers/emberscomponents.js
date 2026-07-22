ServerEvents.recipes(event => {
    //Mechanical Core
    event.remove({ output: 'embers:mechanical_core' })
    event.shaped(
        Item.of('embers:mechanical_core', 1),
        [
            'ici',
            'lpl',
            'igi'
        ],
        {
            i: 'gtceu:invar_plate',
            l: 'gtceu:lead_rotor',
            c: 'embers:caminite_bricks',
            p: 'create:precision_mechanism',
            g: 'gtceu:brass_gear'
        }
    ).id('kubejs:mechanical_core')
})