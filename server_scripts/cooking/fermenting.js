ServerEvents.recipes(event => {
    //forgotten imbibation
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "brewincompatdelight:white_wine"
        },
        "experience": 1.0,
        "fermentingtime": 6400,
        "ingredients": [
          {
            "item": "experienceobelisk:forgotten_dust"
          },
          {
            "item": "goety:grave_dust"
          },
          {
            "item": "undergarden:rotten_blisterberry"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "kubejs:forgotten_imbibation"
        },
        "temperature": 2
    })
    //soulchill absinthe
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "kubejs:forgotten_imbibation"
        },
        "experience": 1.0,
        "fermentingtime": 12000,
        "ingredients": [
          {
            "item": "goety:ectoplasm"
          },
          {
            "item": "netherexp:phasmo_shard"
          },
          {
            "tag": "forge:ingots/froststeel"
          },
          {
            "item": "cold_sweat:soul_sprout"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "kubejs:soulchill_absinthe"
        },
        "temperature": 0
    })
    //red rock blaster
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "brewinandchewin:strongroot_ale"
        },
        "experience": 1.0,
        "fermentingtime": 4400,
        "ingredients": [
          {
            "item": "minecraft:redstone_block"
          },
          {
            "item": "brewinandchewin:scarlet_cheese_wedge"
          },
          {
            "item": "eidolon:crimson_essence"
          },
          {
            "item": "mynethersdelight:bullet_pepper"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "kubejs:red_rock_blaster"
        },
        "temperature": 4
    })
    //slayer stout
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "brewinandchewin:strongroot_ale"
        },
        "experience": 1.0,
        "fermentingtime": 6400,
        "ingredients": [
          {
            "item": "undergarden:blood_globule"
          },
          {
            "item": "biomancy:frenzy_serum"
          },
          {
            "item": "twilightforest:hydra_chop"
          },
          {
            "item": "dungeonsdelight:gunk"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "kubejs:slayer_stout"
        },
        "temperature": 2
    })
    //skullcrusher ale
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "brewinandchewin:strongroot_ale"
        },
        "experience": 1.0,
        "fermentingtime": 6400,
        "ingredients": [
          {
            "item": "malum:grim_talc"
          },
          {
            "item": "savage_and_ravage:creeper_spores"
          },
          {
            "tag": "forge:ingots/steel"
          },
          {
            "item": "miners_delight:cave_carrot"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "kubejs:skull_crusher_ale"
        },
        "temperature": 2
    })

    //pouring
    function kegPouring(fluid, container){
      event.custom({
      "type": "brewinandchewin:keg_pouring",
      "amount": 250,
      "filling": true,
      "fluid": fluid,
      "container": {
        "item": container
      },
      "output": {
          "item": fluid
        },
      "strict": false
      }).id(`kubejs:bnc/pouring/${fluid.split(":")[1]}`)
      event.recipes.create.filling(fluid, [`${fluid} 250`, container])
      event.custom({
        "type": "immersiveengineering:bottling_machine",
        "input": {
          "item": container
        },
        "fluid": {
          "tag": fluid,
          "amount": 250
        },
          "results": [{ "item": fluid }]}).id(`kubejs:immersive_engineering/bottling/${fluid.split(":")[1]}`)
    }
    kegPouring('kubejs:red_rock_blaster', 'brewinandchewin:tankard')
    kegPouring('kubejs:soulchill_absinthe', 'brewinandchewin:tankard')
    kegPouring('kubejs:forgotten_imbibation', 'brewinandchewin:tankard')
    kegPouring('kubejs:skull_crusher_ale', 'brewinandchewin:tankard')
    kegPouring('kubejs:slayer_stout', 'brewinandchewin:tankard')
    kegPouring('kubejs:pyrogenic_cognac', 'tconstruct:seared_brick')
})