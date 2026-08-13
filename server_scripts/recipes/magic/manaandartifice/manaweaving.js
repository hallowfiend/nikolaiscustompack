const bolt = "mna:bolt"
const square = "mna:square"
const triangle = "mna:triangle"
const inverted_triangle = "mna:inverted_triangle"
const split_triangle = "mna:split_triangle"
const circle = "mna:circle"
const diamond = "mna:diamond"
const slash = "mna:slash"
const backslash = "mna:backslash"
const knot3 = "mna:knot3"
const hourglass = "mna:hourglass"
const infinity = "mna:infinity"

ServerEvents.recipes(event => {
    event.remove({id: 'mna:ritual_focus_minor'})
    event.shaped('4x mna:ritual_focus_minor', [
        'ztz',
        'tgt',
        'ztz'
    ], {
        z: 'gtceu:zinc_plate',
        t: 'gtceu:tin_nugget',
        g: 'caverns_and_chasms:float_glass_pane'
    }).id('kubejs:shaped/ritual_focus_minor')
    const removals = [
        'botania:mana_ring',
        'botania:aura_ring',
        'botania:magnet_ring',
        'botania:water_ring',
        'botania:swap_ring',
        'botania:dodge_ring',
        'botania:mining_ring',
    ]
    removals.forEach(item => {
        event.remove({output: item})
    })
    function manaweave(tier, inputs, patterns, output){
        event.custom({
        "type": "mna:manaweaving-recipe",
        "output": output,
        "tier": tier,
        "items": inputs,
        "patterns": patterns
        }).id(`kubejs:mna/manaweaving/${output.split(":")[1]}`)
    }
    //tania rings
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
            'botania:lens_magnetizing',
            'goety:waystone'
        ],
        [diamond, circle, square], 'botania:magnet_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_water',
            'minecraft:heart_of_the_sea',
            'spawn:white_clam_case'
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
            'goety:jade',
            'kubejs:token_defiance'
        ],
        [diamond, circle, backslash], 'botania:dodge_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_force',
            'embers:blasting_core',
            'gtceu:brass_ingot'
        ],
        [diamond, circle, square], 'botania:mining_ring'
    )
})