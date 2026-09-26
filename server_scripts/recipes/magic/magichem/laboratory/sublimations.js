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
//Printer giganerf
event.remove({output: 'create_enchantment_industry:printer'})
  event.custom({
    "type": "magichem:sublimation",
    "tier": 4,
    "wisdom": 3,
    "object": {
    "item": "create_enchantment_industry:printer",
    "count": 1
    },
    "stages": [
    {
      "experience": 6400,
      "components": [
        { "item": "malum:brilliant_obelisk" },
        { "item": "botania:mana_pylon" },
        { "item": "botania:life_essence" },
        { "item": "botania:mana_pylon" },
        { "item": "malum:brilliant_obelisk" }
      ],
      "materia": [
        { "item": "magichem:admixture_memory", "count": 128 },
        { "item": "magichem:essentia_arcane", "count": 64 },
        { "item": "magichem:admixture_sorcery", "count": 42 },
        { "item": "magichem:essentia_wrought", "count":  42 }
      ]
    },
    {
      "experience": 6400,
      "components": [
        { "item": "goety:dark_anvil" },
        { "item": "gtceu:hv_forge_hammer" },
        { "item": "mna:inscription_table" },
        { "item": "gtceu:hv_forge_hammer" },
        { "item": "evilcraft:purifier" }
      ],
      "materia": [
        { "item": "magichem:admixture_memory", "count": 128 },
        { "item": "magichem:admixture_thought", "count": 64 },
        { "item": "magichem:admixture_mana", "count": 42 },
        { "item": "magichem:admixture_vessel", "count": 42 },
        { "item": "magichem:essentia_earth", "count":  16 }
      ]
    },
    {
      "experience": 6400,
      "components": [
        { "item": "irons_spellbooks:legendary_ink" },
        { "item": "cataclysm:ignitium_ingot" },
        { "item": "create:spout" },
        { "item": "eternal_starlight:golem_steel_ingot" },
        { "item": "embers:winding_gears" }
      ],
      "materia": [
        { "item": "magichem:admixture_industry", "count": 128 },
        { "item": "magichem:admixture_motion", "count": 64 },
        { "item": "magichem:admixture_construct", "count": 34 },
        { "item": "magichem:essentia_water", "count": 16 },
        { "item": "magichem:essentia_citrinitas", "count": 16 }
      ]
    }
  ]
}).id('kubejs:magichem/sublimation/printer')
event.remove({output: 'create_enchantment_industry:infuser'})
//Infuser giganerf
event.custom({
    "type": "magichem:sublimation",
    "tier": 4,
    "wisdom": 3,
    "object": {
    "item": "create_enchantment_industry:infuser",
    "count": 1
    },
    "stages": [
    {
      "experience": 6400,
      "components": [
        { "item": "malum:brilliant_obelisk" },
        { "item": "botania:mana_pylon" },
        { "item": "botania:life_essence" },
        { "item": "botania:mana_pylon" },
        { "item": "malum:brilliant_obelisk" }
      ],
      "materia": [
        { "item": "magichem:admixture_memory", "count": 128 },
        { "item": "magichem:essentia_arcane", "count": 64 },
        { "item": "magichem:admixture_sorcery", "count": 42 },
        { "item": "magichem:essentia_wrought", "count":  42 }
      ]
    },
    {
      "experience": 6400,
      "components": [
        { "item": "apotheosis:draconic_endshelf" },
        { "item": "gtceu:hv_alloy_smelter" },
        { "item": "mna:greater_mote_arcane" },
        { "item": "gtceu:hv_alloy_smelter" },
        { "item": "bloodmagic:altar" }
      ],
      "materia": [
        { "item": "magichem:admixture_memory", "count": 128 },
        { "item": "magichem:admixture_thought", "count": 64 },
        { "item": "magichem:admixture_mana", "count": 42 },
        { "item": "magichem:admixture_vessel", "count": 42 },
        { "item": "magichem:essentia_fire", "count":  16 }
      ]
    },
    {
      "experience": 6400,
      "components": [
        { "item": "create:precision_mechanism" },
        { "item": "ad_astra:calorite_ingot" },
        { "item": "create:spout" },
        { "item": "botania:terrasteel_ingot" },
        { "item": "embers:focal_lens" }
      ],
      "materia": [
        { "item": "magichem:admixture_industry", "count": 128 },
        { "item": "magichem:admixture_motion", "count": 64 },
        { "item": "magichem:admixture_construct", "count": 34 },
        { "item": "magichem:essentia_air", "count": 16 },
        { "item": "magichem:essentia_citrinitas", "count": 16 }
      ]
    }
  ]
}).id('kubejs:magichem/sublimation/infuser')
})