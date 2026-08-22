ServerEvents.recipes(event => {
    //Undergarden catalyst
    event.remove({ output: 'undergarden:catalyst'})
    event.custom({
      "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
          "item": "botania:mana_diamond"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": {
          "item": "undergarden:catalyst"
        },
        "item_to_use": {
            "item": "minecraft:flint_and_steel"
        },
        "ingredients": [
          {
            "item": "occultism:iesnium_pickaxe"
          },
          {
            "item": "eidolon:pewter_inlay"
          },
          {
            "item": "eidolon:gold_inlay"
          },
          {
            "item": "embers:dawnstone_aspectus"
          },
          {
            "item": "twilightforest:knightmetal_ingot"
          },
          {
            "item": "kubejs:deepbore_tar"
          }
        ],
        "result": 
        { "item": "undergarden:catalyst" }
      }).id('kubejs:occultism/ritual/undergarden_catalyst')
    //Crushers
    event.remove({ id: 'occultism:ritual/summon_foliot_crusher' })
    event.remove({ id: 'occultism:ritual/summon_djinni_crusher' })
    event.remove({ id: 'occultism:ritual/summon_afrit_crusher' })
    event.remove({ id: 'occultism:ritual/summon_marid_crusher' })
    //Foliot
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 40,
      "spirit_max_age": 32400,
      "spirit_job_type": "occultism:crush_tier1",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_foliot_crusher"
      },
      "ingredients": [
        {
          "item": "malum:hex_ash" //to resonate with the spirit world
        },
        {
          "item": "hexerei:blood_bottle" //to attract the spirit
        },
        {
          "item": "experienceobelisk:cognitive_flux" //to bind the spirit
        },
        {
          "item": "create:millstone" //to suffuse it with purpose
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    //Djinni
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_djinni"
      },
      "pentacle_id": "occultism:summon_djinni",
      "duration": 60,
	  "spirit_max_age": -1,
      "spirit_job_type": "occultism:crush_tier2",
      "entity_to_summon": "occultism:djinni",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_djinni_crusher"
      },
      "ingredients": [
        {
          "item": "malum:hex_ash" //to resonate with the spirit world
        },
        {
          "item": "evilcraft:blood_waxed_coal_block" //to attract the spirit
        },
        {
          "item": "eidolon:tether_incense" //to bind the spirit
        },
        {
          "item": "immersiveengineering:heavy_engineering" //to suffuse it with purpose
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    //Afrit
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_afrit"
      },
      "pentacle_id": "occultism:summon_afrit",
      "duration": 90,
	    "spirit_max_age": -1,
      "spirit_job_type": "occultism:crush_tier3",
      "entity_to_summon": "occultism:afrit",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_afrit_crusher"
      },
      "ingredients": [
        {
          "item": "malum:void_salts" //to resonate with the spirit world
        },
        {
          "item": "bloodmagic:life_essence_bucket" //to attract the spirit
        },
        {
          "item": "bloodmagic:reagent_binding" //to bind the spirit
        },
        {
          "item": "gtceu:hv_macerator" //to suffuse it with purpose
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    //Marid
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_marid"
      },
      "pentacle_id": "occultism:summon_marid",
      "duration": 150,
	    "spirit_max_age": -1,
      "spirit_job_type": "occultism:crush_tier4",
      "entity_to_summon": "occultism:marid",
      "ritual_dummy": {
        "item": "occultism:ritual_dummy/summon_marid_crusher"
      },
      "ingredients": [
        {
          "item": "malum:void_salts" //to resonate with the spirit world
        },
        {
          "item": "goety:unholy_blood" //to attract the spirit
        },
        {
          "item": "botania:vinculotus" //to bind the spirit
        },
        {
          "item": "gtceu:luv_macerator" //to suffuse it with purpose
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
})