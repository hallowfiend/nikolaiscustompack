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
    //Caminite
    event.remove({ output: 'embers:caminite_blend' })
    event.shapeless(
        Item.of('embers:caminite_blend', 8),
        ['minecraft:clay_ball', 'minecraft:clay_ball', 'gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:stone_dust', 'gtceu:stone_dust']
    ).id('kubejs:caminite_blend')
    event.recipes.farmersdelight.cutting(
        'embers:caminite_bricks',
        '#minecraft:pickaxes',
        [
            "4x embers:caminite_brick"
        ]
    )
    //Ashen Blend
    event.remove({ output: 'supplementaries:ash_brick' })
    event.remove({ id: 'embers:ashen_stone' })
    event.remove({ id: 'embers:ashen_brick' })
    event.shapeless(
        Item.of('kubejs:ashen_blend', 8),
        ['embers:caminite_blend', 'embers:caminite_blend', 'gtceu:deepslate_dust', 'gtceu:deepslate_dust', 'embers:ash', 'embers:ash']
    ).id('kubejs:ashen_blend')
    event.smelting('supplementaries:ash_brick', 'kubejs:ashen_blend')
    event.shaped(
        Item.of('embers:ashen_brick', 1),
        [
            'ii',
            'ii'
        ],
        {
            i: 'supplementaries:ash_brick'
        }
    ).id('kubejs:ash_brick')
    event.recipes.farmersdelight.cutting(
        'embers:ashen_brick',
        '#minecraft:pickaxes',
        [
            "4x supplementaries:ash_brick"
        ]
    )
    //Ethereal Ash Brick
    //event.remove({ output: /extra_sins:ethereal_ash_bric.*/ })
    event.shapeless(
        Item.of('kubejs:ethereal_ashen_blend', 8),
        ['kubejs:ashen_blend', 'kubejs:ashen_blend', 'gtceu:tuff_dust', 'gtceu:tuff_dust', 'sons_of_sins:ether_ashes', 'sons_of_sins:ether_ashes']
    ).id('kubejs:ethereal_ashen_blend')
     event.smelting('extra_sins:ethereal_ash_brick', 'kubejs:ethereal_ashen_blend')
})