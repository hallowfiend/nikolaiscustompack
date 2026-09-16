ServerEvents.recipes(event => {
    const yeet = [
        'embers:mechanical_core',
        'embers:mixer_centrifuge',
        'embers:ember_activator',
        'embers:stamper',
        'embers:heat_exchanger',
        'embers:ember_emitter',
        'embers:ember_relay',
        'embers:ember_receiver'
    ]
    yeet.forEach(item => {
        event.remove({output: item})
    })
    //GENERAL MACHINERY
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
    //Ember Activator
    event.shaped(
        Item.of('embers:ember_activator', 1),
        [
            'cfc',
            'cec',
            'pup'
        ],
        {
            c: 'gtceu:copper_rod',
            f: 'mna:mote_fire',
            e: 'goety:ignite_focus',
            p: 'gtceu:steel_plate',
            u: 'immersiveengineering:furnace_heater'
        }
    ).id('kubejs:shaped/ember_activator')
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
            s: 'create:mechanical_mixer',
            g: 'embers:caminite_bricks',
            l: 'gtceu:steel_plate',
            u: 'embers:fluid_vessel'
        }
    ).id('kubejs:shaped/mixer_centrifuge')
    //Stamper
    event.shaped(
        Item.of('embers:stamper', 1),
        [
            'cgc',
            'csc',
            'c c'
        ],
        {
            c: 'embers:caminite_brick',
            g: 'gtceu:copper_gear',
            s: 'create:mechanical_press'
        }
    ).id('kubejs:shaped/stamper')
    //EMBER TRANSFER
    //Emitter
    event.shaped(
        Item.of('embers:ember_emitter', 4),
        [
            ' c ',
            ' b ',
            'pbp'
        ],
        {
            c: 'malum:copper_node',
            b: '#forge:ingots/constantan',
            p: 'gtceu:double_steel_plate',
            b: 'embers:caminite_plate'
        }
    ).id('kubejs:shaped/ember_emitter')
    //Receptor
    event.shaped(
        Item.of('embers:ember_receiver', 4),
        [
            'pcp',
            'pbp'
        ],
        {
            c: 'malum:copper_node',
            p: 'gtceu:double_steel_plate',
            b: 'embers:caminite_plate'
        }
    ).id('kubejs:shaped/ember_receiver')
    //Relay
    event.shaped(
        Item.of('embers:ember_relay', 4),
        [
            ' c ',
            'cfc',
            ' p '
        ],
        {
            c: '#forge:rods/constantan',
            f: 'malum:cthonic_gold',
            p: 'gtceu:double_steel_plate'
        }
    ).id('kubejs:shaped/ember_relay')
    //UPGRADES
    //Heat Exchanger
    event.shaped(
        Item.of('embers:heat_exchanger', 1),
        [
            'ccr',
            'ww ',
            'ccr'
        ],
        {
            r: '#forge:rods/constantan',
            w: 'immersiveengineering:wirecoil_copper',
            c: 'gtceu:compressed_iron_plate'
        }
    ).id('kubejs:shaped/heat_exchanger')
})