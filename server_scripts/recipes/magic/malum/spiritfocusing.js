ServerEvents.recipes(event =>{
    function pureSpiritFocusing(type, output, outputCount){
        event.custom({
        "type": "malum:spirit_focusing",
        "durabilityCost": 1,
        "input": {
                "item": "malum:alchemical_impetus"
            },
        "output": {
            "count": outputCount,
            "item": output
        },
        "spirits": [
            {
            "type": type,
            "count": 1
            }
        ],
        "time": 300
    })
    }
    function dualSpiritFocusing(type1, type2, output, outputCount){
        event.custom({
        "type": "malum:spirit_focusing",
        "durabilityCost": 1,
        "input": {
                "item": "malum:alchemical_impetus"
            },
        "output": {
            "count": outputCount,
            "item": output
        },
        "spirits": [
            {
            "type": type1,
            "count": 2
            },
            {
            "type": type2,
            "count": 2
            }
        ],
        "time": 300
    })
    }
    //pureSpiritFocusing("eldritch", 1, )
    dualSpiritFocusing("eldritch", "arcane", "mna:vinteum_dust", 8)
    dualSpiritFocusing("eldritch", "wicked", "tconstruct:ender_slime_crystal", 4)
    //dualSpiritFocusing("eldritch", "sacred", "eidolon:soul_shard", 1)
    dualSpiritFocusing("eldritch", "aerial", "tconstruct:sky_slime_crystal", 4)
    dualSpiritFocusing("eldritch", "earthen", "tconstruct:earth_slime_crystal", 4)
    dualSpiritFocusing("eldritch", "infernal", "tconstruct:ichor_slime_crystal", 4)
    dualSpiritFocusing("eldritch", "aqueous", "theurgy:mercury_shard", 4)
    //pure arcane: redstone
    //dualSpiritFocusing("arcane", "wicked", "")
    //dualSpiritFocusing("arcane", "sacred", )
    //arcane + aerial: amethyst
    //arcane + infernal: blazing quartz
    //arcane + earthen: quartz
    //arcane + aqueous: prismarine
    pureSpiritFocusing("wicked", "minecraft:soul_sand", 8)
    dualSpiritFocusing("wicked", "sacred", "sons_of_sins:ether_ashes", 4)
    //dualSpiritFocusing("wicked", "aerial", "goety:jade", 8)
    //dualSpiritFocusing("wicked", "infernal", "minecraft:blaze_powder", 8)
    dualSpiritFocusing("wicked", "earthen", "gtceu:saltpeter_dust", 8)
    //dualSpiritFocusing("wicked", "aqueous", "netherexp:banshee_powder", 8)
    pureSpiritFocusing("sacred", "minecraft:sugar", 8)
    // dualSpiritFocusing("sacred", "aerial", "hexalia:celestial_crystal", 4)
    dualSpiritFocusing("sacred", "infernal", "galosphere:lumiere_shard", 8)
    dualSpiritFocusing("sacred", "earthen", "hexerei:selenite_shard", 4)
    dualSpiritFocusing("sacred", "aqueous", "gtceu:salt_dust", 8)
    //pureSpiritFocusing("aerial", "")
    dualSpiritFocusing("aerial", "infernal", "gtceu:sulfur_dust", 8)
    dualSpiritFocusing("aerial", "earthen", "ae2:certus_quartz_crystal", 4)
    dualSpiritFocusing("aerial", "aqueous", "galosphere:allurite_shard", 8)
    //pure infernal: glowstone
    dualSpiritFocusing("infernal", "earthen", "embers:ash", 8)
    dualSpiritFocusing("infernal", "aqueous", "gtceu:phosphorus_dust", 8)
    //pure earthen: gunpowder
    //dualSpiritFocusing("earthen", "aqueous", "")
    //dualSpiritFocusing("aqueous", "")
})