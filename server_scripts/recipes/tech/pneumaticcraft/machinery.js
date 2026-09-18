ServerEvents.recipes(event => {
    //pnc is gated behind create like IE is, but its also itself gated behind a lil bit of IE, together they gate greg
    event.replaceInput({ mod: "pneumaticcraft"}, '#forge:glass', 'immersiveengineering:insulating_glass')
    event.replaceInput({ mod: "pneumaticcraft"}, 'minecraft:iron_bars', 'undergarden:cloggrum_bars')
    const yeet = [
        'pneumaticcraft:thermal_lagging',
        'pneumaticcraft:pressure_tube',
        'pneumaticcraft:solar_compressor',
        "compressedcreativity:rotational_compressor",
        "pneumaticcraft:liquid_compressor",
        "pneumaticcraft:advanced_liquid_compressor",
        "pneumaticcraft:electrostatic_compressor",
        "pneumaticcraft:thermal_compressor",
        'pneumaticcraft:pressure_chamber_wall',
        'pneumaticcraft:pressure_chamber_glass',
        'pneumaticcraft:pressure_chamber_x1',
        'pneumaticcraft:pressure_chamber_x4'
    ]
    yeet.forEach(item => {
        event.remove({id: item})
    })
    //pressure tubes and associated gizmos
    event.shaped(
        Item.of('pneumaticcraft:pressure_tube', 4),
        [
            'aga',
            ' e '
        ],
        {
            a: '#forge:plates/compressed_iron',
            g: 'immersiveengineering:insulating_glass',
            e: 'kubejs:industrial_sealant'
        }
    ).id('kubejs:shaped/pressure_tube')
    //temperature stuff
    event.shaped('4x pneumaticcraft:thermal_lagging', [ 
    'GIT', 
    'IG '
    ], {
      G: 'immersiveengineering:insulating_glass',
      I: 'cold_sweat:chameleon_molt',
      T: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
    .id('kubejs:shaped/thermal_lagging')
    //pressure chamber
    event.shaped('16x pneumaticcraft:pressure_chamber_wall', [ 
      'SSS', 
      'SBS',
      'SSS'
      ], {
        S: 'pneumaticcraft:reinforced_bricks',
        B: 'kubejs:industrial_sealant'
    }).id('kubejs:shaped/pressure_chamber_wall')
    event.shapeless('pneumaticcraft:pressure_chamber_glass', ['immersiveengineering:insulating_glass', 'pneumaticcraft:pressure_chamber_wall'])
    event.shapeless('4x pneumaticcraft:pressure_chamber_glass', ['immersiveengineering:insulating_glass', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall', 'pneumaticcraft:pressure_chamber_wall'])
    //tppn
    event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [ 
      'LSL', 
      'GTG',
      'PWP'
      ], {
        T: 'pneumaticcraft:small_tank',
        S: 'embers:stamper',
        W: 'embers:wildfire_core',
        G: 'immersiveengineering:insulating_glass',
        P: 'kubejs:aerilated_pneumatic_component',
        L: 'kubejs:industrial_sealant'
    }).id('kubejs:shaped/tppn')
    //compressors
    //solar
    event.shaped(
        Item.of('pneumaticcraft:solar_compressor', 1),
        [
            'aaa',
            'cdc',
            'efe'
        ],
        {
            a: 'enderio:photovoltaic_plate',
            c: 'kubejs:aerilated_pneumatic_component',
            d: 'elementalcraft:solar_prism',
            e: 'pneumaticcraft:advanced_pressure_tube',
            f: 'pneumaticcraft:compressed_iron_block'
        })
    //rotational
    event.shaped(
        Item.of('compressedcreativity:rotational_compressor', 1),
        [
            'aba',
            'cdc',
            'fef'
        ],
        {
            a: '#forge:plates/compressed_iron',
            b: 'gtceu:steel_rotor',
            c: 'pneumaticcraft:pressure_tube',
            d: 'create:brass_casing',
            e: 'immersiveengineering:component_iron',
            f: 'create:shaft'
        }
    )
    //liquid
    event.shaped(
        Item.of(
                'pneumaticcraft:liquid_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
        [
            'aba',
            'cdc',
            'efe'
        ],
        {
            a: 'embers:atmospheric_bellows',
            b: 'pneumaticcraft:small_tank',
            c: 'kubejs:aerilated_pneumatic_component',
            d: 'actuallyadditions:iron_casing',
            e: 'pneumaticcraft:pressure_tube',
            f: 'immersiveengineering:metal_barrel'
        }
    )
    //advanced liquid
    event.shaped(
        Item.of(
                'pneumaticcraft:advanced_liquid_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'),
                [
                    'aba',
                    'cdc',
                    'ege'
                ],
                {
                    a: 'kubejs:aerilated_pneumatic_component',
                    b: 'immersiveengineering:component_electronic_adv',
                    c: 'pneumaticcraft:heat_pipe',
                    d: 'pneumaticcraft:liquid_compressor',
                    g: 'embers:intelligent_apparatus',
                    e: 'pneumaticcraft:advanced_pressure_tube'
                }
    )
    //electrostatic
    event.shaped(
        Item.of('pneumaticcraft:electrostatic_compressor', 1),
        [
            'cbg',
            'ada',
            'efe'
        ],
        {
            a: 'pneumaticcraft:pressure_tube',
            b: 'magichem:skywrath_altar',
            c: 'irons_spellbooks:energized_core',
            g: 'botania:rune_air',
            d: 'actuallyadditions:iron_casing',
            e: '#forge:small_gears/duralumin',
            f: 'magichem:perfected_electrum_block'
        }
    )
    //thermal
    event.shaped(
        Item.of('pneumaticcraft:thermal_compressor', 1),
        [
            'aba',
            'cdc',
            'afa'
        ], {
            a: 'pneumaticcraft:heat_pipe',
            b: 'create:encased_fan',
            c: 'pneumaticcraft:pressure_tube',
            d: 'immersiveengineering:furnace_heater',
            f: 'embers:heat_insulation'
        }
    )
})