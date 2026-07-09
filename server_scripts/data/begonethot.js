ServerEvents.highPriorityData(e => {
    let ores =  [
    "actuallyadditions:ore_black_quartz",
    "occultism:ore_silver",
    "occultism:ore_silver_deepslate",
    "evilcraft:ore_dark",
    "evilcraft:ore_dark_lower",
    "evilcraft:ore_infested_extra",
    "tinkers_advanced:bismuthinite_ore",
    "tinkers_advanced:iridium_lean_ore",
    "tinkers_advanced:stibnite_ore",
    "eidolon:lead_ore",
    "eidolon:silver_ore",
    "immersiveengineering:bauxite",
    "immersiveengineering:deep_nickel",
    "immersiveengineering:lead",
    "immersiveengineering:mineral_veins",
    "immersiveengineering:nickel",
    "immersiveengineering:silver",
    "immersiveengineering:uranium",
    "cosmere:ore_nickel_middle",
    "cosmere:ore_nickel_small",
    "cosmere:ore_nickel_upper",
    "cosmere:ore_silver_abundant",
    "cosmere:ore_silver_normal",
    "cosmere:ore_silver_rich",
    "cosmere:ore_tin_abundant",
    "cosmere:ore_tin_medium",
    "cosmere:ore_tin_small",
    "cosmere:ore_zinc_deep",
    "cosmere:ore_zinc_middle",
    "cosmere:ore_zinc_upper",
    "cosmere:ore_aluminum_buried",
    "cosmere:ore_aluminum_medium",
    "cosmere:ore_aluminum_small",
    "cosmere:ore_cadmium_abundant",
    "cosmere:ore_cadmium_deep",
    "cosmere:ore_cadmium_normal",
    "cosmere:ore_chromium_deep",
    "cosmere:ore_chromium_normal",
    "cosmere:ore_chromium_rare",
    "cosmere:ore_lead_abundant",
    "cosmere:ore_lead_deep",
    "cosmere:ore_lead_normal",

  ]

    function removeFeatures(idArray) {
        let noop = {
            "type": "minecraft:no_op",
            "config": {}
        }
        for (let id of idArray) {
            e.addJson(`${id.namespace}:worldgen/configured_feature/${id.path}`, noop)
        }
    }

    removeFeatures(ores)
  })