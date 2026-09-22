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

    event.remove({type: 'crafting', output: /(irons_spellbooks:|iss_magicfromtheeast:|cataclysm_spellbooks:|wind_spellbooks:).*rune/})
    //ISS RUNES
    runework(
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:fire_focus"
        },
        'iss_runes/fire_from_focus'
    )
    runework(
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:lightning_focus"
        },
        'iss_runes/lightning_from_focus'
    )
    runework(
        'cataclysm_spellbooks:technomancy_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "cataclysm_spellbooks:technomancy_focus"
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
            "tag": "gtbcs_geomancy_plus:geo_focus"
        },
        'iss_runes/geo_from_focus'
    )
    runework(
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:nature_focus"
        },
        'iss_runes/nature_from_focus'
    )
    runework(
        'irons_spellbooks:arcane_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "kubejs:arcane_focus"
        },
        'iss_runes/arcane_from_focus'
    )
    runework(
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:evocation_focus"
        },
        'iss_runes/evocation_from_focus'
    )
    runework(
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:ender_focus"
        },
        'iss_runes/ender_from_focus'
    )
    runework(
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:blood_focus"
        },
        'iss_runes/blood_from_focus'
    )
    runework(
        'irons_spellbooks:protection_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "kubejs:protection_focus"
        },
        'iss_runes/protection_from_focus'
    )
    runework(
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:holy_focus"
        },
        'iss_runes/holy_from_focus'
    )
    runework(
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "irons_spellbooks:ice_focus"
        },
        'iss_runes/ice_from_focus'
    )
    runework(
        'irons_spellbooks:cooldown_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "kubejs:recovery_focus"
        },
        'iss_runes/recovery_from_focus'
    )
    runework(
        'iss_magicfromtheeast:spirit_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "iss_magicfromtheeast:spirit_focus"
        },
        'iss_runes/spirit_from_focus'
    )
    runework(
        'iss_magicfromtheeast:symmetry_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "iss_magicfromtheeast:symmetry_focus"
        },
        'iss_runes/symmetry_from_focus'
    )
    runework(
        'wind_spellbooks:wind_rune',
        'irons_spellbooks:blank_rune',
        {
            "count": 8,
            "tag": "wind_spellbooks:wind_focus"
        },
        'iss_runes/wind_from_focus'
    )
})