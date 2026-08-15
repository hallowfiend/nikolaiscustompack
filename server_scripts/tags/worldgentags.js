ServerEvents.tags('worldgen/biome', event => {
    event.add('exquisito:has_structure/inverted_ruins', 
        [
            'betterend:chorus_forest',
            'betterend:foggy_mushroomland',
            'betterend:lantern_woods',
            'betterend:shadow_forest',
            'betterend:neon_oasis',
            'betterend:blossoming_spires',
            'betterend:megalake',
            'betterend:megalake_grove',
            'unusualend:gloopstone_lands'
        ]
    )
    event.add('botania:mystical_flower_spawnlist',
        [
            '#aether:is_aether',
            '#twilightforest:in_twilight_forest',
            /eternalstarlight:.*/
        ]
    )
    event.add('botania:mystical_mushroom_spawnlist',
        [
            '#twilightforest:in_twilight_forest',
            /eternalstarlight:.*/,
            '#undergarden:is_undergarden'
        ]
    )

    event.add('hexalia:has_shrooms', [
        '#minecraft:is_taiga'
    ])

    event.add('hexalia:has_swamp_vegetation', [
        '#forge:is_swamp'
    ])

    event.add('hexalia:has_floral_vegetation', [
        '#minecraft:is_plains'
    ])

    event.add('hexalia:has_cool_biome_vegetation', [
        '#forge:is_cold/overworld'
    ])

    event.add('hexalia:has_dry_biome_vegetation', [
        '#forge:is_dry/overworld'
    ])

    event.add('hexalia:has_shaded_vegetation', [
        '#forge:is_spooky'
    ])
    
})