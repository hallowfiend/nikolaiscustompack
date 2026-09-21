ServerEvents.recipes(event => {
    function runework(output, base, addition, id) {
        event.custom({
    "type": "malum:runeworking",
    "output": {
        "item": output
    },
    "primaryInput": {
        "count": 1,
        "item": base
    },
  "secondaryInput": addition
}).id(`kubejs:malum/runeworking/${id}`)}

    //ISS RUNES
    //FOCI
    runework(
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:blaze_rod"
        },
        'iss_runes/fire_from_focus'
    )
    runework(
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "irons_spellbooks:lightning_bottle"
        },
        'iss_runes/lightning_from_focus'
    )
    runework(
        'cataclysm_spellbooks:technomancy_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:redstone"
        },
        'iss_runes/technomancy_from_focus'
    )
    runework(
        'cataclysm_spellbooks:abyssal_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "cataclysm:crystallized_coral"
        },
        'iss_runes/abyssal_from_focus'
    )
    runework(
        'gtbcs_geomancy_plus:geo_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "mowziesmobs:bluff_rod"
        },
        'iss_runes/geo_from_focus'
    )
    runework(
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:poisonous_potato"
        },
        'iss_runes/nature_from_focus'
    )
    runework(
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "apotheotic_additions:nature_rune_materials"
        },
        'iss_runes/nature_from_focus_alt'
    )
    runework(
        'irons_spellbooks:arcane_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "irons_spellbooks:arcane_essence"
        },
        'iss_runes/arcane_from_focus'
    )
    runework(
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:emerald"
        },
        'iss_runes/evocation_from_focus'
    )
    runework(
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:ender_pearl"
        },
        'iss_runes/ender_from_focus'
    )
    runework(
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "hexerei:blood_bottle"
        },
        'iss_runes/blood_from_focus'
    )
    runework(
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "twilightforest:fiery_blood"
        },
        'iss_runes/ender_from_focus_alt'
    )
    runework(
        'irons_spellbooks:protection_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:pufferfish"
        },
        'iss_runes/protection_from_focus'
    )
    runework(
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "irons_spellbooks:divine_pearl"
        },
        'iss_runes/holy_from_focus'
    )
    runework(
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "irons_spellbooks:frozen_bone"
        },
        'iss_runes/ice_from_focus'
    )
    runework(
        'irons_spellbooks:cooldown_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:phantom_membrane"
        },
        'iss_runes/recovery_from_focus'
    )
    runework(
        'iss_magicfromtheeast:spirit_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "netherexp:wisp_bottle"
        },
        'iss_runes/spirit_from_focus'
    )
    runework(
        'iss_magicfromtheeast:symmetry_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "issmagicfromtheeast:yin_yang_core"
        },
        'iss_runes/symmetry_from_focus'
    )
    runework(
        'wind_spellbooks:wind_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "minecraft:feather"
        },
        'iss_runes/wind_from_focus'
    )
    //ADMIXTURES/ESSENTIA
    runework(
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 32,
            "item": "magichem:essentia_fire"
        },
        'iss_runes/fire_from_essentia'
    )
    runework(
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 16,
            "item": "magichem:admixture_storms"
        },
        'iss_runes/lightning_from_admixture'
    )
    //OTHER
    runework(
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 64,
            "item": "malum:infernal_spirit"
        },
        'iss_runes/fire_from_spirit'
    )
    runework(
        'wind_spellbooks:wind_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 64,
            "item": "malum:aerial_spirit"
        },
        'iss_runes/wind_from_spirit'
    )
    runework(
        'irons_spellbooks:protection_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 64,
            "item": "malum:sacred_spirit"
        },
        'iss_runes/protection_from_spirit'
    )
    runework(
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "item": "ars_nouveau:fire_essence"
        },
        'iss_runes/fire_from_essence'
    )
    runework(
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 1,
            "item": "mna:mote_fire"
        },
        'iss_runes/fire_from_mote'
    )
    runework(
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 4,
            "item": "evilcraft:lightning_grenade"
        },
        'iss_runes/lightning_from_grenade'
    )
})