ServerEvents.recipes(event => {
    const yeet = [
        'embers:mechanical_core',
        'embers:mixer_centrifuge',
        'embers:ember_activator',
        'embers:stamper',
        'embers:heat_exchanger',
        'embers:ember_emitter',
        'embers:ember_relay',
        'embers:ember_receiver',
        'embers:ember_ejector',
        'embers:beam_splitter',
        'embers:pressure_refinery',
        'embers:inferno_forge',
        'embers:melter',
        'embers:crystal_cell',
        'embers:hearth_coil',
        'embers:heat_insulation'
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
    //EMBER
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
    //Pressure Refinery
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'embers:stamper',
      "count": 1
    },
    "output": {
      "item": 'embers:pressure_refinery',
      "count": 1
    },
    "extra_items": [
      {
        "item": "create:steam_engine",
        "count": 4
      },
      {
        "item": "embers:dawnstone_plate",
        "count": 4
      },
      {
        "tag": "forge:ingots/compressed_iron",
        "count": 4
      },
      {
        "tag": "forge:rods/steel",
        "count": 8
      },
      {
        "item": "malum:copper_impetus",
        "count": 1
      },
      {
        "item": "immersiveengineering:heavy_engineering",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "earthen",
        "count": 64
      },
      {
        "type": "infernal",
        "count": 64
      }
    ]
    }).id('kubejs:malum/spirit_infusion/pressure_refinery')
    //Ignem Reactor
    /* event.recipes.create.mechanical_crafting('embers:ignem_reactor', [
        'aabaa',
        'acdca',
        'efgfe',
        'ahjha',
        'aakaa'
        ], {
        a: 'embers:ashen_brick',
        b: 'embers:catalytic_plug',
        c: 'create:mechanical_drill',
        d: 'embers:wildfire_stirling',
        e: 'immersiveengineering:heavy_engineering',
        f: 'create:precision_mechanism',
        g: 'scguns:cog_heart',
        h: 'immersiveengineering:thermoelectric_generator',
        j: 'embers:winding_gears',
        k: 'embers:ember_bore'
        }) */
    //PROCESSING
    //Hearth Coil
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'immersiveengineering:coil_lv',
      "count": 9
    },
    "output": {
      "item": 'embers:hearth_coil',
      "count": 1
    },
    "extra_items": [
      {
        "item": "embers:caminite_brick",
        "count": 12
      },
      {
        "item": "gtceu:steel_plate",
        "count": 6
      },
      {
        "item": "embers:mechanical_core",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "infernal",
        "count": 16
      }
    ]
    }).id('kubejs:malum/spirit_infusion/hearth_coil')
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
            'psp',
            'c c'
        ],
        {
            c: 'embers:caminite_brick',
            g: 'gtceu:copper_gear',
            s: 'create:mechanical_press',
            p: 'gtceu:double_steel_plate'
        }
    ).id('kubejs:shaped/stamper')
    //Melter
    event.shaped(
        Item.of('embers:melter', 1),
        [
            'bpb',
            'aca',
            'ifi'
        ],
        {
            f: 'tconstruct:seared_tank',
            i: 'gtceu:double_steel_plate',
            a: 'tconstruct:seared_bricks',
            b: 'embers:caminite_bricks',
            c: 'mna:mote_fire',
            p: 'embers:caminite_plate'
        }
    ).id('kubejs:shaped/melter')
    //EMBER TRANSFER & STORAGE
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
    //Ejector
    event.shaped(
        Item.of('embers:ember_ejector', 1),
        [
            ' c ',
            ' f ',
            'sps'
        ],
        {
            c: 'embers:dawnstone_aspectus',
            f: 'embers:ember_emitter',
            p: 'embers:caminite_plate',
            s: '#forge:rods/steel'
        }
    ).id('kubejs:shaped/ember_ejector')
    //Beam Splitter
    event.shaped(
        Item.of('embers:beam_splitter', 1),
        [
            ' d ',
            'cfc',
            ' s '
        ],
        {
            d: 'embers:dawnstone_plate',
            f: 'embers:ember_relay',
            c: 'gtceu:copper_plate',
            s: 'gtceu:double_steel_plate'
        }
    ).id('kubejs:shaped/beam_splitter')
    //Crystal Cell
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'gtceu:exquisite_ember_gem',
      "count": 1
    },
    "output": {
      "item": 'embers:crystal_cell',
      "count": 1
    },
    "extra_items": [
      {
        "item": "embers:caminite_brick",
        "count": 12
      },
      {
        "item": "embers:dawnstone_plate",
        "count": 8
      },
      {
        "item": "kubejs:aspectus_gold",
        "count": 1
      },
      {
        "item": "malum:block_of_blazing_quartz",
        "count": 1
      },
      {
        "item": "malum:alchemical_calx",
        "count": 8
      }
    ],
    "spirits": [
      {
        "type": "earthen",
        "count": 16
      },
      {
        "type": "infernal",
        "count": 16
      }
    ]
    }).id('kubejs:malum/spirit_infusion/crystal_cell')
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
    //Heat Insulation
    event.shaped(
        Item.of('embers:heat_insulation', 1),
        [
            'sss',
            'rgr',
            'aca'
        ],
        {
            r: '#forge:rods/compressed_iron',
            s: 'gtceu:double_silver_plate',
            a: '#embers:ashen_stone',
            g: 'immersiveengineering:insulating_glass',
            c: '#forge:plates/copper'
        }
    ).id('kubejs:shaped/heat_insulation')
})