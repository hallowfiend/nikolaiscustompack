const bolt = "mna:bolt" //
const square = "mna:square" //t1
const triangle = "mna:triangle" //t1
const inverted_triangle = "mna:inverted_triangle" //t2
const split_triangle = "mna:split_triangle"
const circle = "mna:circle"
const diamond = "mna:diamond"
const slash = "mna:slash" //t1
const backslash = "mna:backslash" //t1
const knot1 = "mna:knot1"
const knot2 = "mna:knot2"
const knot3 = "mna:knot3"
const knot4 = "mna:knot4"
const hourglass = "mna:hourglass"
const infinity = "mna:infinity"

ServerEvents.recipes(event => {
    //manaweaving components
    event.remove({id: 'mna:ritual_focus_minor'})
    event.shaped('4x mna:ritual_focus_minor', [
        'ztz',
        'tgt',
        'ztz'
    ], {
        z: 'gtceu:zinc_plate',
        t: 'elementalcraft:inert_crystal',
        g: 'caverns_and_chasms:float_glass_pane'
    }).id('kubejs:shaped/ritual_focus_minor')
    //manaweaving proper
    const removals = [
        'botania:mana_ring',
        'botania:aura_ring',
        'botania:magnet_ring',
        'botania:water_ring',
        'botania:swap_ring',
        'botania:dodge_ring',
        'botania:mining_ring',
        'botania:monocle',
        'botania:manaweave_cloth'
    ]
    removals.forEach(item => {
        event.remove({output: item})
    })
    function manaweave(tier, inputs, patterns, output){
        event.custom({
        "type": "mna:manaweaving-recipe",
        "output": output,
        "tier": tier,
        "items": inputs, //max 9
        "patterns": patterns
        }).id(`kubejs:mna/manaweaving/${output.split(":")[1]}`)
    }
    //manaweave cloth
    manaweave(1,
        [
            'kubejs:bloomwrap_cloth',
            'mna:vinteum_dust',
            'botania:mana_string',
            'botania:mana_string',
            'botania:mana_string',
            'botania:mana_string'
        ],
        [square, square, square, slash], 'botania:manaweave_cloth'
    )
    //manaseer monocle
    manaweave(1,
        [
            'botania:mana_glass',
            'botania:mana_glass',
            'gtceu:tainted_gold_plate',
            'gtceu:manasteel_plate',
            'magichem:admixture_sight',
            'goety:targeting_monocle'
        ],
        [circle, circle, circle], 'botania:monocle'
    )
    //'tania rings
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_space',
            'botania:mana_tablet',
            'gtceu:infused_iron_plate'
        ],
        [diamond, circle, circle], 'botania:mana_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_mana',
            'naturesaura:infused_stone',
            'eternal_starlight:malarite'
        ],
        [diamond, circle, diamond], 'botania:aura_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_storms',
            'evilcraft:lightning_grenade',
            'bloodmagic:sigilofmagnetism'
        ],
        [diamond, circle, square], 'botania:magnet_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_water',
            'minecraft:heart_of_the_sea',
            'kubejs:shifting_tincture'
        ],
        [diamond, circle, knot3], 'botania:water_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'malum:alchemical_calx',
            'embers:caminite_plate',
            'kubejs:token_stillness'
        ],
        [diamond, circle, slash], 'botania:swap_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_air',
            'goety:flying_ointment',
            'kubejs:token_defiance'
        ],
        [diamond, circle, backslash], 'botania:dodge_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_force',
            'embers:blasting_core',
            'kubejs:caustic_oil'
        ],
        [diamond, circle, knot1], 'botania:mining_ring'
    )
})