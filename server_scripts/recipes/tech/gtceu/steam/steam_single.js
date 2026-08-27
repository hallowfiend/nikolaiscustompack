ServerEvents.recipes(event => {
    event.shaped('gtceu:steam_mixer', [
            'WPH',
            'RKR',
            'SBS'
        ], {
                W: '#forge:tools/wrenches',
                P: 'gtceu:brass_gear',
                R: 'gtceu:bronze_rod',
                H: '#forge:tools/hammers',
                K: 'embers:mixer_centrifuge',
                B: 'gtceu:steam_machine_casing',
                S: 'gtceu:steel_rotor'
        })
        .id('kubejs:shaped/steam_mixer');

})