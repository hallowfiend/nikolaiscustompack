ServerEvents.recipes(event => {
    const yeet = [
        'embers:mechanical_core',
        'embers:mixer_centrifuge'
    ]
    yeet.forEach(item => {
        event.remove({output: item})
    })
    //Mechanical Core
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
    ).id('kubejs:shaped/mechanical_core')
    //Mixer Centrifuge
    event.shaped(
        Item.of('embers:mixer_centrifuge', 1),
        [
            'lul',
            'lsl',
            'gmg'
        ],
        {
            m: 'embers:mechanical_core',
            s: 'create:mixer',
            g: 'embers:caminite_bricks',
            l: 'gtceu:steel_plate',
            u: 'embers:fluid_vessel'
        }
    ).id('kubejs:shaped/mixer_centrifuge')
})