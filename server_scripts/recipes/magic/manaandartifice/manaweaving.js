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
        'botania:manaweave_cloth',
        'botania:reach_ring',
        /botania:.*pendant/,
        /botania:.*_cloak/,
        /botania:.*_belt/,
        'botania:world_seed',
        /botania:.*_rod/
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
            'kubejs:golden_thread',
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
            'kubejs:pure_filament'
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
            'minecraft:chain',
            'kubejs:pure_filament'
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
            'goety:empty_focus'
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
    manaweave(3,
        [
            'gtceu:elementium_ring',
            'botania:rune_pride',
            'kubejs:token_determination'
        ],
        [diamond, circle, split_triangle], 'botania:reach_ring', 1,
        'botania:reach_ring'
    )
    //'tania belts
    manaweave(2,
        [
            'malum:gilded_belt',
            'botania:rune_air',
            'botania:rune_earth',
            'botania:manasteel_ingot',
            'mna:infused_silk'
        ],
        [circle, circle], 'botania:travel_belt', 1,
        'botania:travel_belt'
    )
    manaweave(2,
        [
            'botania:travel_belt',
            'kubejs:whiff_of_vitality',
            'botania:grass_seeds',
            'kubejs:travellers_twine'
        ],
        [circle, circle], 'botania:speed_up_belt', 1,
        'botania:speed_up_belt'
    )
    manaweave(3,
        [
            'botania:travel_belt',
            'botania:life_essence',
            'botania:elementium_ingot',
            'kubejs:realmsplit_dew'
        ],
        [bolt, bolt, circle, circle], 'botania:super_travel_belt', 1,
        'botania:super_travel_belt'
    )
    manaweave(2,
        [
            'eidolon:resolute_belt',
            'botania:rune_earth',
            'kubejs:blacksmithing_resin',
            'botania:manasteel_ingot'
        ],
        [circle, square, square, square], 'botania:knockback_belt', 1,
        'botania:knockback_belt'
    )
    //'tania pendants/necklaces
    manaweave(2,
        [
            'eidolon:basic_amulet',
            'botania:rune_winter',
            'botania:rune_water',
            'botania:mana_string',
            'kubejs:flowing_yarn',
            'irons_spellbooks:frozen_bone'
        ],
        [circle, square, diamond, knot1], 'botania:ice_pendant', 1,
        'botania:ice_pendant'
    )
    manaweave(2,
        [
            'eidolon:basic_amulet',
            'botania:rune_summer',
            'botania:rune_fire',
            'botania:mana_string',
            'kubejs:diabolical_vein',
            'minecraft:magma_block'
        ],
        [circle, square, triangle, inverted_triangle], 'botania:lava_pendant', 1,
        'botania:lava_pendant'
    )
    manaweave(3,
        [
            'botania:lava_pendant',
            'botania:life_essence',
            'botania:elementium_ingot',
            'mna:mote_fire',
            'kubejs:seething_nethersblood',
            'magichem:admixture_demon'
        ],
        [bolt, triangle, inverted_triangle], 'botania:super_lava_pendant', 1,
        'botania:super_lava_pendant'
    )
    manaweave(2,
        [
            'eidolon:basic_amulet',
            'botania:rune_autumn',
            'botania:rune_air',
            'botania:mana_string',
            'elementalcraft:air_silk',
            'aether:aerclouds'
        ],
        [circle, square, knot3, knot4], 'botania:cloud_pendant', 1,
        'botania:cloud_pendant'
    )
    manaweave(3,
        [
            'botania:cloud_pendant',
            'botania:life_essence',
            'botania:elementium_ingot',
            'mna:mote_air',
            'kubejs:sanctified_steam',
            'magichem:admixture_breath'
        ],
        [bolt, knot3, knot4], 'botania:super_cloud_pendant', 1,
        'botania:super_cloud_pendant'
    )
    manaweave(2,
        [
            'eidolon:basic_amulet',
            'botania:mana_diamond',
            'kubejs:shifting_tincture',
            'kubejs:diabolical_vein',
            'kubejs:flowing_yarn',
            'minecraft:ghast_tear'
        ],
        [circle, square, inverted_triangle, slash], 'botania:blood_pendant', 1,
        'botania:blood_pendant'
    )
    //'tania cloaks
    manaweave(2,
        [
            'eidolon:raven_cloak',
            'botania:phantom_ink',
            'mna:stone_rune_white',
            'botania:mana_glass',
            'mna:infused_silk'
        ],
        [square, inverted_triangle, circle], 'botania:invisibility_cloak', 1,
        'botania:invisibility_cloak'
    )
    manaweave(3,
        [
            'eidolon:warlock_cloak',
            'botania:life_essence',
            'actuallyadditions:restonia_crystal',
            'mna:stone_rune_black',
            'kubejs:diabolical_vein',
            'evilcraft:dark_power_gem'
        ],
        [square, square, bolt], 'botania:unholy_cloak', 1,
        'botania:unholy_cloak'
    )
    manaweave(3,
        [
            'eidolon:warlock_cloak',
            'botania:life_essence',
            'irons_spellbooks:divine_pearl',
            'mna:stone_rune_white',
            'kubejs:pure_filament',
            'actuallyadditions:empowered_enori_crystal'
        ],
        [square, square, bolt], 'botania:holy_cloak', 1,
        'botania:holy_cloak'
    )
    manaweave(3,
        [
            'eidolon:warlock_cloak',
            'botania:life_essence',
            'goety:magic_emerald',
            'mna:stone_rune_light_gray',
            'kubejs:herbal_string',
            'kubejs:life_crystal'
        ],
        [square, square, bolt], 'botania:balance_cloak', 1,
        'botania:balance_cloak'
    )
    //'tania rods
    manaweave(2,
        [
            'mna:wands',
            'minecraft:cobblestone',
            'botania:rune_fire',
            'botania:rune_water',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square], 'botania:cobble_rod', 1,
        'botania:cobble_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'minecraft:dirt',
            'botania:rune_earth',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square], 'botania:dirt_rod', 1,
        'botania:dirt_rod'
    )
    manaweave(3,
        [
            'botania:dirt_rod',
            'botania:rune_air',
            'botania:pixie_dust'
        ],
        [slash, square, square, knot4], 'botania:skydirt_rod', 1,
        'botania:skydirt_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'kubejs:deepbore_tar',
            'botania:mana_diamond',
            'kubejs:rune_mind',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square, circle, inverted_triangle], 'botania:divining_rod', 1,
        'botania:divining_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'botania:rune_fire',
            'mna:stone_rune_red',
            'mna:mote_fire',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square, circle, inverted_triangle], 'botania:fire_rod', 1,
        'botania:fire_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'botania:rune_air',
            'forge:feathers',
            'eidolon:avennian_sprig',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square, knot3, knot3], 'botania:tornado_rod', 1,
        'botania:tornado_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'botania:rune_water',
            'mna:mote_water',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square, circle, circle], 'botania:water_rod', 1,
        'botania:water_rod'
    )
    manaweave(3,
        [
            'mna:wands',
            'botania:life_essence',
            'botania:dragonstone',
            'ars_nouveau:source_gem',
            'forge:gems/zanite',
            'mna:mote_ender',
            'mna:mote_arcane',
            'botania:dreamwood_twig',
            'botania:dreamwood_twig'
        ],
        [slash, square, square, bolt, bolt], 'botania:missile_rod', 1,
        'botania:missile_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'botania:rune_fire',
            'mna:stone_rune_gray',
            'mna:mote_earth',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square, triangle, triangle], 'botania:smelt_rod', 1,
        'botania:smelt_rod'
    )
    manaweave(2,
        [
            'mna:wands',
            'botania:rune_sloth',
            'botania:livingwood_twig',
            'botania:livingwood_twig'
        ],
        [slash, square, square, slash, backslash], 'botania:exchange_rod', 1,
        'botania:exchange_rod'
    )
    manaweave(3,
        [
            'mna:wands',
            'kubejs:rune_force',
            'kubejs:rune_space',
            'kubejs:rune_time',
            'botania:dragonstone',
            'minecraft:echo_shard',
            'botania:dreamwood_twig',
            'botania:dreamwood_twig'
        ],
        [slash, square, square, split_triangle, circle], 'botania:gravity_rod', 1,
        'botania:gravity_rod'
    )
    manaweave(3,
        [
            'mna:wands',
            'kubejs:rune_light',
            'botania:dragonstone',
            'twilightforest:aurora_block',
            'alexsmobs:rainbow_jelly',
            'gtceu:elementium_rod',
            'gtceu:elementium_rod'
        ],
        [slash, square, square, circle, bolt], 'botania:rainbow_rod', 1,
        'botania:rainbow_rod'
    )
    //convenience recipes
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
    //eldritch spirit
    manaweave(3,
        [
            'malum:wicked_spirit',
            'malum:sacred_spirit',
            'ars_nouveau:manipulation_essence'
        ],
        [bolt], 'malum:eldritch_spirit', 2,
        'kubejs:mna/manaweaving/impulse_inversion'
    )
    //world seed (no longer locked behind alfheim, solid alternative to enderfeather charms if youve progressed in botania)
    manaweave(2,
        [
            'hexalia:ancient_seed',
            'botania:grass_seeds',
            'botania:mana_powder',
            'magichem:essentia_ender',
            'malum:earthen_spirit'
        ],
        [square], 'botania:world_seed', 4,
        'botania:world_seed'
    )
})