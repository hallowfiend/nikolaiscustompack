ServerEvents.recipes(event => {
    const yeet = [
        'mna:rune_clay_plate',
        'mna:stone_runes/rune_blank'
    ]
    yeet.forEach(yeet => {
        event.remove({id: yeet})
    })
    //stone glyph
    event.shaped('mna:stone_rune_blank', [
        ' S ',
        'SCS',
        ' S '
    ], {
        S: '#forge:stone',
        C: 'elementalcraft:inert_crystal'
    }).id('mna:rune_clay_plate')
    //unfired rune plate
    event.shaped('mna:rune_clay_plate', [
        ' C ',
        'CSC',
        ' C '
    ], {
        C: 'embers:raw_caminite_plate',
        S: '#mna:stone_runes'
    }).id('mna:stone_runes/rune_blank')
    //runeforging proper
    function runeforge(tier, hits, pattern, material, output, outputCount){
        event.custom({
	"type": "mna:runeforging",
	"tier": tier,
	"material": material,
	"hits": hits,
	"pattern": pattern,
	"output": output,
    "output_quantity": outputCount
    })
    }

    //ISS runes, again
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_fire',
        'irons_spellbooks:fire_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_water',
        'irons_spellbooks:ice_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_air',
        'wind_spellbooks:wind_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_force',
        'gtbcs_geomancy_plus:geo_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_earth',
        'irons_spellbooks:nature_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_mana',
        'irons_spellbooks:arcane_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_light',
        'irons_spellbooks:holy_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_heart',
        'irons_spellbooks:blood_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_storms',
        'irons_spellbooks:lightning_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_void',
        'irons_spellbooks:ender_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_mind',
        'cataclysm_spellbooks:technomancy_rune', 2
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_winter',
        'irons_spellbooks:protection_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_time',
        'irons_spellbooks:cooldown_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_autumn',
        'iss_magicfromtheeast:symmetry_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'kubejs:rune_space',
        'irons_spellbooks:evocation_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_spring',
        'iss_magicfromtheeast:spirit_rune', 4
    )
    runeforge(1, 4,
        'malum:tainted_rock_tablet',
        'botania:rune_pride',
        'cataclysm_spellbooks:abyssal_rune', 8
    )
})