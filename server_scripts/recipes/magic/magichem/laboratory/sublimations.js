ServerEvents.recipes(event => {
    //efficient healing stone
    event.custom({
    "type": "magichem:sublimation",
    "tier": 2,
    "wisdom": 0,
    "object": {
    "item": "aether:healing_stone",
    "count": 6
    },
    "stages": [
    {
      "experience": 1,
      "components": [
        { "item": "aether:holystone" },
        { "item": "aether:holystone" },
        { "item": "aether:holystone" },
        { "tag": "forge:gems/ambrosium" },
        { "tag": "forge:gems/ambrosium" },
      ],
      "materia": [
        { "item": "magichem:admixture_healing", "count": 32 },
        { "item": "magichem:admixture_firmament", "count": 16 }
      ]
    }
  ]
}).id('kubejs:magichem/sublimation/healing_stone_bulk')
    /* event.custom({
  "type": "magichem:sublimation",
  "tier": 2,
  "wisdom": 0,
  "object": {
    "item": "gtceu:imitation_thaumium_block",
    "count": 2
  },
  "stages": [
    {
      "experience": 0,
      "components": [
        { "item": "minecraft:copper_block" },
        { "item": "minecraft:copper_block" },
        { "item": "bloodmagic:simple_catalyst" },
        { "item": "gtceu:darkened_silver_block" },
        { "item": "gtceu:darkened_silver_block" }
      ],
      "materia": [
        { "item": "magichem:admixture_metal", "count": 126 },
        { "item": "magichem:essentia_nigredo", "count": 54 }
      ]
    }
  ]
}) */
})