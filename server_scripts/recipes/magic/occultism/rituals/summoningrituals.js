ServerEvents.recipes(event => {
    //Conjure Witch
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon",
      "activation_item": {
        "item": "hexalia:athame"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "entity_to_summon": "minecraft:witch",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/conjure_witch"
      },
      "ingredients": [
        {
          "item": "hexerei:infused_fabric"
        },
        {
          "item": "minecraft:poisonous_potato"
        },
        {
          "item": "goety:nightshade"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    //Conjure Cleric
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon",
      "activation_item": {
        "item": "eidolon:basic_ring"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "entity_to_summon": "minecraft:villager",
      "entity_nbt": {
         VillagerData: { level: 1, profession: 'minecraft:cleric' }
      },
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/conjure_cleric"
      },
      "ingredients": [
        {
          "tag": "forge:gems/amethyst"
        },
        {
          "item": "minecraft:glowstone_dust"
        },
        {
          "tag": "forge:ingots/silver"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    //Conjure Wandering Trader
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon",
      "activation_item": {
        "item": "goety:magic_emerald"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "entity_to_summon": "minecraft:wandering_trader",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/conjure_wandering_trader"
      },
      "ingredients": [
        {
          "tag": "forge:ingots/gold"
        },
        {
          "item": "minecraft:carrot"
        },
        {
          "item": "hexalia:galeberries"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    //Time/weather changing
    event.remove({id: /occultism:.*summon_djinni_.*time/})
    event.remove({id: /occultism:.*summon_.*_weather/})
    //Day
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 60,
      "spirit_job_type": "occultism:day_time",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/summon_day_foliot"
      },
      "ingredients": [
        {
          "item": "minecraft:glowstone_dust"
        },
        {
          "item": "minecraft:yellow_dye"
        },
        {
            "item": "naturesaura:gold_leaf"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 60,
      "spirit_job_type": "occultism:night_time",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/summon_night_foliot"
      },
      "ingredients": [
        {
          "item": "gtceu:lapis_dust"
        },
        {
          "item": "minecraft:black_dye"
        },
        {
            "item": "hexerei:mandrake_flowers"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 60,
      "spirit_job_type": "occultism:clear_weather",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/summon_clear_foliot"
      },
      "ingredients": [
        {
          "item": "hexalia:lotus_flower"
        },
        {
          "item": "gtceu:salt_dust"
        },
        {
          "item": "kubejs:woven_silk"
        },
        {
            "item": "gtceu:opal_gem"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 60,
      "spirit_job_type": "occultism:rain_weather",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/summon_rain_foliot"
      },
      "ingredients": [
        {
          "item": "minecraft:dead_bush"
        },
        {
          "item": "minecraft:sand"
        },
        {
          "item": "mna:vinteum_dust"
        },
        {
            "item": "minecraft:kelp"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
    event.custom({
      "type": "occultism:ritual",
      "ritual_type": "occultism:summon_spirit_with_job",
      "activation_item": {
        "item": "occultism:book_of_binding_bound_foliot"
      },
      "pentacle_id": "occultism:summon_foliot",
      "duration": 60,
      "spirit_max_age": 60,
      "spirit_job_type": "occultism:thunder_weather",
      "entity_to_summon": "occultism:foliot",
      "ritual_dummy": {
        "item": "kubejs:ritual_dummy/summon_thunder_foliot"
      },
      "ingredients": [
        {
          "item": "minecraft:lightning_rod"
        },
        {
          "item": "gtceu:electrotine_dust"
        },
        {
          "item": "goety:magic_emerald"
        },
        {
            "item": "minecraft:gunpowder"
        }
      ],
      "result": {
        "item": "occultism:jei_dummy/none"
      }
    })
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