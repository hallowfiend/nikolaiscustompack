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
    //Catalysis & combustion
    function emberCatalysis(input, burntime, mult) {
      event.custom({
      "type": "embers:catalysis_combustion",
      "burn_time": burntime, //int
      "input": input, //item or tag
      "machine": {
          "item": "embers:catalysis_chamber"
      },
      "multiplier": mult //float
      })
    }
    function emberCombustion(input, burntime, mult) {
      event.custom({
      "type": "embers:catalysis_combustion",
      "burn_time": burntime, //int
      "input": input, //item or tag
      "machine": {
          "item": "embers:combustion_chamber"
      },
      "multiplier": mult //float
      })
    }
    emberCatalysis({"tag": "forge:dusts/sulfur"}, 200, 1.5)
    emberCatalysis({"tag": "forge:dusts/saltpeter"}, 200, 1.5)
    emberCatalysis({"tag": "forge:dusts/netherrack"}, 100, 1.1)
    emberCatalysis({"item": "sons_of_sins:ether_ashes"}, 333, 3.3)
    emberCatalysis({"item": "occultism:otherworld_ashes"}, 444, 2.5)
    emberCatalysis({"item": "mna:vinteum_dust"}, 100, 2.0)
    emberCatalysis({"item": "mna:purified_vinteum_dust"}, 200, 3.0)
    emberCatalysis({"item": "evilcraft:dark_gem_crushed"}, 300, 2.5)
    emberCatalysis({"item": "evilcraft:dull_dust"}, 500, 4.0)
    emberCatalysis({"item": "kubejs:bloodied_dust"}, 1200, 8.8)
    emberCombustion({"item": "malum:blazing_quartz"}, 100, 2.0)
    emberCombustion({"item": "malum:infernal_spirit"}, 200, 2.0)
    emberCombustion({"item": "malum:auric_embers"}, 300, 4.0)
    emberCombustion({"item": "scguns:vehement_coal"}, 100, 6.6)
    emberCombustion({"item": "ars_nouveau:fire_essence"}, 400, 6.0)
    emberCombustion({"item": "elementalcraft:fire_crystal"}, 2400, 8.8)
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
})