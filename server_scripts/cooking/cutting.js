ServerEvents.recipes((event) => {
    event.remove({ id: 'dungeonsdelight:cutting/wardenzola' })


    //Fish and seafood
    event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
		  { item: 'crabbersdelight:shrimp' }
		],
		tool: { tag: 'forge:tools/knives' },
		result: [
		  { item: 'oceanic_delight:shrimp_slices', count: 2 }
		]
	  })
    event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
		  { item: 'aquaculture:frog' }
		],
		tool: { tag: 'forge:tools/knives' },
		result: [
		  { item: 'quark:frog_leg', count: 2 }
		]
	  })
    //Mob heads
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:creeper_head' }
    ],
    tool: { tag: 'forge:tools/axes' },
    result: [
      { item: 'minecraft:gunpowder', count: 4 },
      { item: 'savage_and_ravage:creeper_spores', count: 2 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:zombie_head' }
    ],
    tool: { tag: 'forge:tools/axes' },
    result: [
      { item: 'minecraft:rotten_flesh', count: 4 },
      { item: 'minecraft:skeleton_skull', count: 1 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:skeleton_skull' }
    ],
    tool: { tag: 'forge:tools/pickaxes' },
    result: [
      { item: 'minecraft:bone', count: 8 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:piglin_head' }
    ],
    tool: { tag: 'forge:tools/axes' },
    result: [
      { item: 'farmersdelight:bacon', count: 4 },
      { item: 'undergarden:blood_globule', count: 2 },
      { item: 'minecraft:gold_nugget', count: 1, chance: 0.1 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'caverns_and_chasms:peeper_head' }
    ],
    tool: { tag: 'forge:tools/axes' },
    result: [
      { item: 'caverns_and_chasms:living_flesh', count: 4 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'caverns_and_chasms:mime_head' }
    ],
    tool: { tag: 'forge:tools/axes' },
    result: [
      { item: 'caverns_and_chasms:spinel', count: 4 },
      { item: 'alexsmobs:mimicream', count: 1, chance: 0.5 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'neapolitan:chimpanzee_head' }
    ],
    tool: { tag: 'forge:tools/axes' },
    result: [
      { item: 'undergarden:blood_globule', count: 2 },
      { item: 'neapolitan:dried_banana', count: 1, chance: 0.5 }
    ]
    })
    //Various monster-adjacent items
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:dried_ghast' }
    ],
    tool: { tag: 'forge:tools/knives' },
    result: [
      { item: 'mynethersdelight:ghasta', count: 4 },
      { item: 'dungeonsdelight:ghast_tentacle', count: 2 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'alexsmobs:blood_sac' }
    ],
    tool: { tag: 'forge:tools/knives' },
    result: [
      { item: 'undergarden:blood_globule', count: 1 }
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'scguns:weird_flesh' }
    ],
    tool: { tag: 'forge:tools/knives' },
    result: [
      { item: 'minecraft:rotten_flesh', count: 1 },
      { item: 'gtceu:sulfur_dust', count: 1, chance: 0.5},
      { item: 'dungeonsdelight:gritty_flesh', count: 1, chance: 0.2}
    ]
    })
    event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'cold_sweat:hoglin_hide' }
    ],
    tool: { tag: 'forge:tools/knives' },
    result: [
      { item: 'irons_spellbooks:hogskin', count: 4 },
      { item: 'minecraft:string', count: 1, chance: 0.5}
    ]
    })
})