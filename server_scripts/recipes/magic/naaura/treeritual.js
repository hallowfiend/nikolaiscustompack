ServerEvents.recipes(event => {
    event.remove({ id: 'naturesaura:tree_ritual/ancient_sapling' })
    event.remove({ id: 'naturesaura:tree_ritual/token_joy' })
    event.remove({ id: 'naturesaura:tree_ritual/token_fear' })
    event.remove({ id: 'naturesaura:tree_ritual/token_anger' })
    event.remove({ id: 'naturesaura:tree_ritual/token_sorrow' })
    // Ancient Sapling
    event.custom({
      "type": "naturesaura:tree_ritual",
      "ingredients": [
          {
              "item": 'twilightforest:liveroot'
            },
            {
              "item": 'hexerei:sage'
            },
            {
              "item": 'hexerei:mugwort_leaves'
            },
            {
              "item": "naturesaura:gold_leaf"
            },
            {
              "item": 'occultism:datura'
            },
            {
              "item": 'ars_nouveau:source_berry'
            },
            {
              "item": 'hexalia:begonia'
            },
            {
              "item": 'caverns_and_chasms:spinel'
            }
          ],
          "sapling": {
            "item": "quark:red_blossom_sapling"
          },
          "output": {
            "item": "naturesaura:ancient_sapling",
            "count": 2
          },
          "time": 5
        }).id('kubejs:natures_aura/tree_ritual/ancient_sapling')
    //TOKENS
    //Joy
    event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      {
        type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' }
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "tag": "forge:gems/ambrosium"
      },
      {
        "item": "farmersdelight:honey_cookie"
      },
      {
        "item": "galosphere:lumiere_shard"
      },
      {
        "item": "windswept:red_rose"
      }
    ],
    "sapling":
      {
        "item": "minecraft:cherry_sapling"
      },
    "output": { 
      "item": "naturesaura:token_joy",
      "count": 2
    },
    "time": 50
    }).id("kubejs:natures_aura/tree_ritual/token_of_joy");
    //Sorrow
    event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      {
        type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' }
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "tag": "aether:aerclouds"
      },
      {
        "tag": "forge:gems/salt"
      },
      {
        "item": "twilightforest:carminite"
      },
      {
        "item": "netherexp:wisp_bottle"
      }
    ],
    "sapling":
      {
        "item": "hexerei:willow_sapling"
      },
    "output": { 
      "item": "naturesaura:token_sorrow",
      "count": 2
    },
    "time": 50
    }).id("kubejs:natures_aura/tree_ritual/token_of_sorrow");
    //Fear
    event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      {
        type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:nether' }
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "goety:cursed_ingot"
      },
      {
        "item": "dungeonsdelight:rancid_reduction"
      },
      {
        "tag": "forge:wither_bones"
      },
      {
        "item": "netherexp:banshee_powder"
      }
    ],
    "sapling":
      {
        "item": "goety:haunted_sapling"
      },
    "output": { 
      "item": "naturesaura:token_fear",
      "count": 2
    },
    "time": 50
    }).id("kubejs:natures_aura/tree_ritual/token_of_fear");
    //Anger
    event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      {
        type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:nether' }
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "scguns:buckshot"
      },
      {
        "item": "eidolon:crimson_essence"
      },
      {
        "tag": "forge:dusts/dark"
      },
      {
        "item": "alexsmobs:komodo_spit"
      }
    ],
    "sapling":
      {
        "item": 'quark:red_blossom_sapling'
      },
    "output": { 
      "item": "naturesaura:token_anger",
      "count": 2
    },
    "time": 50
    }).id("kubejs:natures_aura/tree_ritual/token_of_anger");
  //other crafts/gates
  // Garden Cloche
  event.remove({ output: 'immersiveengineering:cloche' })
  event.custom({
      "type": "naturesaura:tree_ritual",
      "ingredients": [
          {
              "item": "immersiveengineering:light_bulb"
            },
            {
              "item": "create:fluid_tank"
            },
            {
              "item": "immersiveengineering:component_iron"
            },
            {
              "item": "reliquary:fertile_essence"
            },
            {
              "item": "immersiveengineering:slag_glass"
            },
            {
              "tag": "forge:treated_wood"
            },
            {
              "item": "immersiveengineering:slag_glass"
            },
            {
              "tag": "forge:treated_wood"
            }
          ],
          "sapling": {
            "item": "hexerei:mahogany_sapling"
          },
          "output": {
            "item": "immersiveengineering:cloche",
            "count": 1
          },
          "time": 100
      }).id("kubejs:natures_aura/tree_ritual/cloche");
    //Terrestrial Agglomeration Plate
    //Elven Gateway Core
})