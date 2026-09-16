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
        event.remove({id: item})
    })
    function manaweave(tier, inputs, patterns, output, count, id){
        event.custom({
        "type": "mna:manaweaving-recipe",
        "output": output,
        "quantity": count,
        "tier": tier,
        "items": inputs, //max 9
        "patterns": patterns
        }).id(id)
    }
    //clusters - alternative to sachets, requires cross-mod progression
    //arcane
    manaweave(3,
        [
            'forge:gems/source',
            'botania:mana_pearl',
            'malum:arcane_spirit',
            'hexcasting:quenched_allay_shard',
            'irons_spellbooks:arcane_ingot',
            'hexerei:mandrake_root'
        ],
        [diamond, bolt, bolt, split_triangle], 'kubejs:arcane_cluster', 1,
        'kubejs:mna/manaweaving/arcane_cluster'
    )
    //ender
    manaweave(3,
        [
            'forge:gems/fluorite',
            'evilcraft:dark_power_gem',
            'malum:eldritch_spirit',
            'minecraft:chorus_fruit',
            'occultism:iesnium_ingot',
            'goety:nightshade_blossom'
        ],
        [diamond, bolt, inverted_triangle, split_triangle], 'kubejs:ender_cluster', 1,
        'kubejs:mna/manaweaving/ender_cluster'
    )
    //fire
    manaweave(3,
        [
            'forge:gems/ember',
            'irons_spellbooks:cinder_essence',
            'malum:infernal_spirit',
            'bloodmagic:simplecatalyst',
            'tconstruct:seared_brick',
            'elementalcraft:fire_shard'
        ],
        [diamond, bolt, triangle, triangle], 'kubejs:fire_cluster', 1,
        'kubejs:mna/manaweaving/fire_cluster'
    )
    //air
    manaweave(3,
        [
            'forge:gems/ambrosium',
            'aether:aerogel',
            'malum:aerial_spirit',
            'botania:mana_string',
            'goety:jade',
            'elementalcraft:air_shard'
        ],
        [diamond, bolt, knot4, knot3], 'kubejs:air_cluster', 1,
        'kubejs:mna/manaweaving/air_cluster'
    )
    //earth
    manaweave(3,
        [
            'malum:cthonic_gold',
            'forge:dusts/graphite',
            'malum:earthen_spirit',
            'naturesaura:infused_stone',
            'supplementaries:ash_brick',
            'elementalcraft:earth_shard'
        ],
        [diamond, bolt, square, diamond], 'kubejs:earth_cluster', 1,
        'kubejs:mna/manaweaving/earth_cluster'
    )
    //water
    manaweave(3,
        [
            'forge:gems/salt',
            'cataclysm:lacrima',
            'malum:aqueous_spirit',
            'undergarden:glitterkelp',
            'aquamirae:fin',
            'elementalcraft:water_shard'
        ],
        [diamond, bolt, circle, inverted_triangle], 'kubejs:water_cluster', 1,
        'kubejs:mna/manaweaving/water_cluster'
    )
    //various artifices
    //mna baubles
    //selfish belt
    event.remove({id: 'mna:manaweaving/artifice/belt_of_selfishness'})
    manaweave(2,
        [
            'eidolon:basic_belt',
            'mna:belt_buckle',
            'mna:rune_aura',
            'minecraft:tripwire_hook'
        ],
        [circle], 'mna:selfish_belt', 1,
        'mna:manaweaving/artifice/belt_of_selfishness'
    )
    //lock belt
    event.remove({id: 'mna:manaweaving/artifice/belt_of_locks'})
    manaweave(2,
        [
            'eidolon:basic_belt',
            'mna:belt_buckle',
            'supplementaries:key',
            'supplementaries:lock_block',
            'mna:chimerite_gem',
            'mna:chimerite_gem',
            'mna:chimerite_gem',
            'mna:chimerite_gem',
            'mna:chimerite_gem'
        ],
        [triangle, circle], 'mna:affinity_lock_belt', 1,
        'mna:manaweaving/artifice/belt_of_locks'
    )
    //atmo gauge
    manaweave(2,
        [
            'create:factory_gauge',
            'goety:sensing_focus',
            'malum:copper_impetus',
            'mna:mote_fire',
            'mna:stone_rune_gray',
            'mna:stone_rune_black'
        ],
        [circle, circle, square, diamond, slash], 'embers:atmospheric_gauge', 1,
        'kubejs:mna/manaweaving/atmospheric_gauge'
    )
    //infused silk
    event.remove({id: 'mna:manaweaving/intermediate/infused_silk'})
    manaweave(1,
        [
            'kubejs:woven_silk',
            'kubejs:woven_silk',
            'kubejs:woven_silk',
            'kubejs:woven_silk',
            'forge:rods/wooden',
            'mna:ritual_focus_minor',
            'mna:vinteum_dust'
        ],
        [square], 'mna:infused_silk', 4,
        'mna:manaweaving/intermediate/infused_silk'
    )
    //blank rune
    manaweave(2,
        [
            'malum:tainted_rock_tablet',
            'mna:rune_ritual_metal',
            'mna:decoration/arcane_stone',
            'mna:decoration/arcane_stone',
            'mna:decoration/arcane_stone',
            'mna:decoration/arcane_stone'
        ],
        [diamond, triangle, knot4], 'irons_spellbooks:blank_rune', 1,
        'kubejs:mna/manaweaving/blank_iss_rune'
    )
    //mithril weave
    event.remove({output: 'irons_spellbooks:mithril_weave'})
    manaweave(3,
        [
            'goety:magic_fabric',
            'kubejs:treated_leather',
            'botania:manaweave_cloth',
            'forge:ingots/mithril',
            'minecraft:chain',
            'minecraft:chain',
            'minecraft:chain'
        ],
        [square, bolt, bolt, bolt], 'irons_spellbooks:mithril_weave', 2,
        'kubejs:mna/manaweaving/mithril_weave'
    )
    //gaia ingot
    event.remove({id: 'botania:gaia_ingot'})
    manaweave(3,
        [
            'gtceu:gravitite_gem',
            'gtceu:strumm_ingot',
            'gtceu:darkened_silver_ingot',
            'gtceu:livingbronze_ingot',
            'magichem:admixture_mountains',
            'magichem:admixture_realm',
            'botania:life_essence'
        ],
        [split_triangle, knot3, knot4, diamond], 'botania:gaia_ingot', 1,
        'kubejs:mna/manaweaving/gaia_ingot'
    )
    //manaweave cloth
    manaweave(1,
        [
            'kubejs:bloomwrap_cloth',
            'botania:mana_string',
            'botania:mana_string',
            'botania:mana_string',
            'botania:mana_string',
            'mna:infused_thread'
        ],
        [square, square, square, slash], 'botania:manaweave_cloth', 1,
        'botania:manaweave_cloth'
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
        [circle, circle, circle], 'botania:monocle', 1,
        'botania:manaseer_monocle'
    )
    //'tania rings
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_space',
            'botania:mana_tablet',
            'gtceu:infused_iron_plate'
        ],
        [diamond, circle, circle], 'botania:mana_ring', 1,
        'botania:mana_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_mana',
            'naturesaura:infused_stone',
            'eternal_starlight:malarite'
        ],
        [diamond, circle, diamond], 'botania:aura_ring', 1,
        'botania:aura_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_storms',
            'evilcraft:lightning_grenade',
            'bloodmagic:sigilofmagnetism'
        ],
        [diamond, circle, square], 'botania:magnet_ring', 1,
        'botania:magnet_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_water',
            'minecraft:heart_of_the_sea',
            'kubejs:shifting_tincture'
        ],
        [diamond, circle, knot3], 'botania:water_ring', 1,
        'botania:water_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'malum:alchemical_calx',
            'embers:caminite_plate',
            'kubejs:token_stillness'
        ],
        [diamond, circle, slash], 'botania:swap_ring', 1,
        'botania:swap_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'botania:rune_air',
            'goety:flying_ointment',
            'kubejs:token_defiance'
        ],
        [diamond, circle, backslash], 'botania:dodge_ring', 1,
        'botania:dodge_ring'
    )
    manaweave(2,
        [
            'gtceu:manasteel_ring',
            'kubejs:rune_force',
            'embers:blasting_core',
            'kubejs:caustic_oil'
        ],
        [diamond, circle, knot1], 'botania:mining_ring', 1,
        'botania:mining_ring'
    )
})