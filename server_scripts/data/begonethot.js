ServerEvents.highPriorityData(e => {
    let ores =  [
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
    "immersiveengineering:uranium"

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