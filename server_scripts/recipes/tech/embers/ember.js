ServerEvents.recipes(event => {
    event.remove({ output: 'embers:iron_plate' })
    event.remove({ output: 'embers:copper_plate' })
    event.remove({ output: 'embers:lead_plate' })
    event.remove({ output: 'embers:silver_plate' })
    event.remove({ id: 'embers:ember_shard_to_crystal' })
    event.remove({ id: 'embers:stamping/ember_shard' })
    event.remove({ id: 'embers:ember_crystal_to_shard' })

    //boiler now makes gtceu steam and does not break conservation of mass
    event.remove({ id: /embers:boiling.*steam.*/ })
    event.custom({
      "type": "embers:boiling",
      "input": {
        "amount": 1,
        "tag": "minecraft:water"
      },
      "output": {
      "amount": 1,
        "fluid": "gtceu:steam"
      }
    })

    //Activation
    event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 6400,
      "input": {
        "item": "gtceu:exquisite_ember_gem"
      }
    })
    event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 1000,
      "input": {
        "item": "gtceu:ember_gem"
      }
    })
    //Boring
    function basicBoring(dimension, heightMax, weight, output) {
      event.custom({
      "type": "embers:boring",
        "dimensions": [
          dimension
        ],
      "max_height": heightMax,
      "output": {
        "item": output
      },
      "required_block": {
        "amount": 3,
        "block_tag": "embers:world_bottom"
      },
      "weight": weight
    })
    }
    //adding the greg embers to overworld and nether
    basicBoring(
      "minecraft:overworld",
      -57,
      35,
      "gtceu:ember_gem"
    )
    basicBoring(
      "minecraft:overworld",
      -57,
      2,
      "gtceu:exquisite_ember_gem"
    )
    basicBoring(
      "minecraft:the_nether",
      7,
      35,
      "gtceu:ember_gem"
    )
    basicBoring(
      "minecraft:the_nether",
      7,
      2,
      "gtceu:exquisite_ember_gem"
    )
    basicBoring(
      "undergarden:undergarden", //exceptionally ember rich dimension
      10,
      4,
      "embers:ember_grit"
    )
    basicBoring(
      "undergarden:undergarden",
      10,
      8,
      "embers:ember_shard"
    )
    basicBoring(
      "undergarden:undergarden",
      10,
      20,
      "gtceu:ember_gem"
    )
    basicBoring(
      "undergarden:undergarden",
      10,
      70,
      "embers:ember_crystal"
    )
    basicBoring(
      "undergarden:undergarden",
      10,
      20,
      "gtceu:exquisite_ember_gem"
    )
    basicBoring(
      "undergarden:undergarden",
      10,
      5,
      "embers:ember_crystal_cluster"
    )
    basicBoring(
      "twilightforest:twilight_forest", //ember poor, but boring here gives u some nice goodies as compensation
      7,
      10,
      "embers:ember_grit"
    )
    basicBoring(
      "twilightforest:twilight_forest",
      7,
      20,
      "evilcraft:dark_gem_crushed"
    )
    basicBoring(
      'twilightforest:twilight_forest',
      7,
      40,
      'mna:chimerite_gem'
    )
    basicBoring(
      "twilightforest:twilight_forest",
      7,
      60,
      "enderio:grains_of_infinity"
    )
    basicBoring(
      "twilightforest:twilight_forest",
      7,
      60,
      "hexcasting:amethyst_dust"
    )
    //"Voidscraping"
    function voidscraping(dimension, weight, output) {
      event.custom({
      "type": "embers:boring",
        "dimensions": [
          dimension
        ],
      "max_height": 30,
      "required_block": {
        "amount": 9,
        "block_tag": "kubejs:airs"
      },
      "output": {
        "item": output
      },
      "weight": weight
    })
    }
    voidscraping(
      "aether:the_aether", //is this even boring anymore
      80,
      "aether:cold_aercloud"
    )
    voidscraping(
      "aether:the_aether",
      60,
      "aether:blue_aercloud"
    )
    voidscraping(
      "aether:the_aether",
      40,
      "aether:golden_aercloud"
    )
    voidscraping(
      "aether:the_aether",
      20,
      "deep_aether:sterling_aercloud"
    )
    voidscraping(
      "aether:the_aether",
      20,
      "aether:aerogel"
    )
    voidscraping(
      "aether:the_aether",
      10,
      "malum:astral_weave"
    )
    voidscraping(
      "aether:the_aether",
      20,
      "malum:aerial_spirit"
    )
    voidscraping(
      "minecraft:the_end",
      80,
      "occultism:crushed_end_stone"
    )
    voidscraping(
      "minecraft:the_end",
      60,
      "goety:ectoplasm"
    )
    voidscraping(
      "minecraft:the_end",
      60,
      "gtceu:obsidian_dust"
    )
    voidscraping(
      "minecraft:the_end",
      5,
      "malum:warp_flux"
    )
    voidscraping(
      "minecraft:the_end",
      5,
      "malum:eldritch_spirit"
    )
    voidscraping(
      "minecraft:the_end",
      20,
      "experienceobelisk:forgotten_dust"
    )
    
})