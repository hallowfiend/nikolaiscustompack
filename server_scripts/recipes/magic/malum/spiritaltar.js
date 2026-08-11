
ServerEvents.recipes((event) => {

  // arcane charcoal coking
  event.recipes.gtceu.coke_oven('arcane_charcoal_coking')
    .itemInputs('#malum:soulwood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .outputFluids(Fluid.of('gtceu:creosote', 1000))
    .duration(900);

  event.recipes.gtceu.coke_oven('arcane_charcoal_coking2')
    .itemInputs('#malum:runewood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .outputFluids(Fluid.of('gtceu:creosote', 1000))
    .duration(900);
  
  event.recipes.immersiveengineering.coke_oven(
    'malum:arcane_charcoal', '#malum:runewood_logs', 1000, 2000
  );

  event.recipes.immersiveengineering.coke_oven(
    'malum:arcane_charcoal', '#malum:soulwood_logs', 1000, 2000
  );

  //blast furnace fuel
  event.recipes.immersiveengineering.blast_furnace_fuel('malum:arcane_charcoal', 600)
  event.recipes.immersiveengineering.blast_furnace_fuel('malum:block_of_arcane_charcoal', 6000)

  //apotheosis shelves
  const shelves = [
    'apotheosis:blazing_hellshelf',
    'apotheosis:glowing_hellshelf',
    'apotheosis:crystal_seashelf',
    'apotheosis:heart_seashelf',
    'apotheosis:echoing_deepshelf',
    'apotheosis:soul_touched_deepshelf',
    'apotheosis:echoing_sculkshelf',
    'apotheosis:soul_touched_sculkshelf',
    'apotheotic_additions:gilded_aerogel_skyshelf',
    'apotheosis:pearl_endshelf',
    'apotheosis:draconic_endshelf'
  ]
  shelves.forEach(shelf => {
    event.remove({ id: shelf })
  })
  //harder living flesh
  event.remove({ id: 'malum:spirit_infusion/living_flesh' })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'caverns_and_chasms:living_flesh',
      "count": 4
    },
    "output": {
      "item": 'malum:living_flesh',
      "count": 4
    },
    "spirits": [
      {
        "type": "sacred",
        "count": 2
      },
      {
        "type": "wicked",
        "count": 2
      },
    ]
  })
  //blazing hellshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'apotheosis:infused_hellshelf',
      "count": 1
    },
    "output": {
      "item": 'apotheosis:blazing_hellshelf',
      "count": 1
    },
    "extra_items": [
      {
      "item": "malum:block_of_blazing_quartz",
      "count": 4
      },
      {
      "item": "tconstruct:blazing_blood_bucket",
      "count": 1
      }
    ],
    "spirits": [
      {
        "type": "wicked",
        "count": 16
      },
      {
        "type": "infernal",
        "count": 16
      },
    ]
  })
  //glowing hellshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'apotheosis:infused_hellshelf',
      "count": 1
    },
    "output": {
      "item": 'apotheosis:glowing_hellshelf',
      "count": 1
    },
    "extra_items": [
      {
      "item": "twilightdelight:torchberry_ice_cream",
      "count": 4
      },
      {
      "item": "botania:lens_light",
      "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "wicked",
        "count": 8
      },
      {
        "type": "infernal",
        "count": 16
      },
    ]
  })
  //crystalline seashelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:infused_seashelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:crystal_seashelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "minecraft:sea_lantern",
        "count": 4
      },
      {
        "item": "hexalia:nautilite",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "aerial",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 8
      },
    ]
  })
  //heart-forged seashelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:infused_seashelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:heart_seashelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "biomancy:mineral_fragment",
        "count": 4
      },
      {
        "item": "minecraft:heart_of_the_sea",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "aerial",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 8
      },
    ]
  })
  //echoing deepshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:deepshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:echoing_deepshelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "minecraft:echo_shard",
        "count": 4
      },
      {
        "item": "embers:resonating_bell",
        "count": 1
      },
      {
        "item": "goety:soul_candlestick",
        "count": 2
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 16
      },
      {
        "type": "earthen",
        "count": 12
      },
      {
        "type": "eldritch",
        "count": 4
      },
    ]
  })
  //soul-touched deepshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:deepshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:soul_touched_deepshelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "goety:haunted_glass",
        "count": 4
      },
      {
        "item": "netherexp:wisp_bottle",
        "count": 1
      },
      {
        "item": "cold_sweat:soul_sprout",
        "count": 2
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 4
      },
      {
        "type": "wicked",
        "count": 12
      },
      {
        "type": "earthen",
        "count": 12
      },
      {
        "type": "eldritch",
        "count": 4
      },
    ]
  })
  //echoing sculkshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:echoing_deepshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:echoing_sculkshelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "minecraft:sculk_sensor",
        "count": 8
      },
      {
        "item": "malum:void_salts",
        "count": 4
      },
      {
        "item": "apotheosis:warden_tendril",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "wicked",
        "count": 8
      },
      {
        "type": "eldritch",
        "count": 16
      },
    ]
  })
  //soul-touched sculkshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:soul_touched_deepshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:soul_touched_sculkshelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "minecraft:sculk_catalyst",
        "count": 8
      },
      {
        "item": "goety:shadow_essence",
        "count": 4
      },
      {
        "item": "apotheosis:warden_tendril",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 12
      },
      {
        "type": "wicked",
        "count": 12
      },
      {
        "type": "eldritch",
        "count": 8
      },
    ]
  })
  //pearl endshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:endshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:pearl_endshelf',
      "count": 1
    },
    "extra_items": [
      {
        "tag": "forge:ender_pearls",
        "count": 8
      },
      {
        "item": "minecraft:end_rod",
        "count": 4
      },
      {
        "item": "minecraft:pearlescent_froglight",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 16
      },
      {
        "type": "eldritch",
        "count": 16
      },
    ]
  })
  //draconic endshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:endshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:draconic_endshelf',
      "count": 1
    },
    "extra_items": [
      {
        "tag": "constructs_casting:dragon_scales",
        "count": 8
      },
      {
        "item": "collectorsreap:pink_dragon_fruit_gummy",
        "count": 4
      },
      {
        "item": "ends_delight:roasted_dragon_meat",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "wicked",
        "count": 16
      },
      {
        "type": "eldritch",
        "count": 16
      },
    ]
  })
  //gilded areogel skyshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheosis:infused_seashelf",
      "count": 1
    },
    "output": {
      "item": 'apotheosis:crystal_seashelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "minecraft:sea_lantern",
        "count": 4
      },
      {
        "item": "hexalia:nautilite",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "aerial",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 8
      },
    ]
  })
  //gilded aerogel skyshelf
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "apotheotic_additions:infused_skyshelf",
      "count": 1
    },
    "output": {
      "item": 'apotheotic_additions:gilded_aerogel_skyshelf',
      "count": 1
    },
    "extra_items": [
      {
        "item": "aether:aerogel",
        "count": 4
      },
      {
        "tag": "forge:storage_blocks/electrum",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "aerial",
        "count": 16
      }
    ]
  })
  //chimerite
  const chimeriteSeeds = [
    {nugget: "palladium", mult: "1"}, //4
    {nugget: "mithril", mult: "4"}, //16
    {nugget: "sterling_silver", mult: "8"}, //32
    {nugget: "iesnium", mult: "16"} //64
  ]
  chimeriteSeeds.forEach(seed => {
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "tag": `forge:nuggets/${seed.nugget}`,
      "count": 1
    },
    "output": {
      "item": "mna:chimerite_gem",
      "count": 4*seed.mult
    },
    "extra_items": [
      {
      "item": "experienceobelisk:cognitive_flux",
      "count": 1
      },
      {
      "item": "mna:purified_vinteum_dust",
      "count": 1
      },
      {
      "item": "cold_sweat:chameleon_molt",
      "count": 1
      },
      {
      "item": "cosmopolitan:aurora_kohakutou",
      "count": 1
      },
      {
      "tag": "forge:gems/spinel",
      "count": 1
      },
      {
      "tag": "forge:gems/opal",
      "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "earthen",
        "count": 8
      }
    ]
  })
  })
  // soulstained bronze
  event.remove({ id: "malum:spirit_infusion/soul_stained_steel_ingot" })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "tconstruct:amethyst_bronze_ingot",
      "count": 4
    },
    "output": {
      "item": "malum:soul_stained_steel_ingot",
      "count": 4
    },
    "extra_items": [
      {
      "item": "malum:processed_soulstone",
      "count": 4
      }
    ],
    "spirits": [
      {
        "type": "wicked",
        "count": 3
      },
      {
        "type": "earthen",
        "count": 1
      },
      {
        "type": "arcane",
        "count": 1
      }
    ]
  })
  //malignant pewter
  event.remove({ id: "malum:spirit_infusion/malignant_pewter_ingot" })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "eidolon:pewter_ingot",
      "count": 4
    },
    "output": {
      "item": "malum:malignant_pewter_ingot",
      "count": 4
    },
    "extra_items": [
      {
      "item": "malum:null_slate",
      "count": 8
      },
      {
        "item": "malum:malignant_lead",
        "count": 1
      },
      {
        "item": "gtceu:cursed_alloy_plate",
        "count": 3
      }
    ],
    "spirits": [
      {
        "type": "earthen",
        "count": 16
      },
      {
        "type": "eldritch",
        "count": 4
      }
    ]
  })
})