ServerEvents.recipes(event => {
    //pnc is gated behind create like IE is, but its also itself gated behind a lil bit of IE, together they gate greg
    event.replaceInput({ mod: "pneumaticcraft"}, '#forge:glass', 'immersiveengineering:insulating_glass')
    event.replaceInput({ mod: "pneumaticcraft"}, 'minecraft:iron_bars', 'undergarden:cloggrum_bars')
    //pressure tubes and associated gizmos
    event.remove({ output: "pneumaticcraft:pressure_tube"})
    event.shaped(
        Item.of('pneumaticcraft:pressure_tube', 2),
        [
            'aga'
        ],
        {
            a: '#forge:plates/compressed_iron',
            g: 'immersiveengineering:insulating_glass',
        }
    ).id('kubejs:shaped/pressure_tube')
    //compressors
    //solar
    event.remove({output: "pneumaticcraft:solar_compressor"})
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
    event.remove({output: "compressedcreativity:rotational_compressor"})
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
    event.remove({output: "pneumaticcraft:liquid_compressor"})
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
    event.remove({output: "pneumaticcraft:advanced_liquid_compressor"})
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
    event.remove({output: "pneumaticcraft:electrostatic_compressor"})
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
    event.remove({output: "pneumaticcraft:thermal_compressor"})
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