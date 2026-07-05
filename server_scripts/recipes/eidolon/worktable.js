const petalApothecary = [
        {stoneType:{"item": "minecraft:cobblestone" }, apothecary: "default"},
        {stoneType:{"item": "botania:metamorphic_forest_cobblestone" }, apothecary: "forest"},
        {stoneType:{"item": "botania:metamorphic_plains_cobblestone" }, apothecary: "plains"},
        {stoneType:{"item": "botania:metamorphic_mountain_cobblestone" }, apothecary: "mountain"},
        {stoneType:{"item": "botania:metamorphic_fungal_cobblestone" }, apothecary: "fungal"},
        {stoneType:{"item": "botania:metamorphic_swamp_cobblestone" }, apothecary: "swamp"},
        {stoneType:{"item": "botania:metamorphic_desert_cobblestone" }, apothecary: "desert"},
        {stoneType:{"item": "botania:metamorphic_taiga_cobblestone" }, apothecary: "taiga"},
        {stoneType:{"item": "botania:metamorphic_mesa_cobblestone" }, apothecary: "mesa"},
        {stoneType:{"item": "minecraft:mossy_cobblestone" }, apothecary: "mossy"},
        {stoneType:{"item": "minecraft:cobbled_deepslate" }, apothecary: "deepslate"},
        {stoneType:{"item": "botania:livingrock" }, apothecary: "livingrock"},

    ]

ServerEvents.recipes((event) => {
    //im turning this table into the central magic item crafting station and NOBODY CAN STOP ME
    //except for components that is im leaving those to be craftable normalstyle because i love ae2

    //MALUM
    //spirit altar
    event.remove({ id: 'malum:spirit_altar' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "rsr",
            "sls",
            "rsr"
        ],
        "reagents": [
            "gggg"
        ],
        "key": {
            "r": {
                "item": "malum:runewood_planks"
            },
            "s": {
                "item": "malum:processed_soulstone"
            },
            "l": {
                "item": "malum:runewood_log"
            },
            "g": {
                "item": "gtceu:gold_plate"
            }
        },
        "result": {
            "item": "malum:spirit_altar"
        }
    })
    //ARS NOUVEAU
    //imbuement chamber
    event.remove({ id: 'ars_nouveau:imbuement_chamber' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "aha",
            "a a",
            "hhh"
        ],
        "reagents": [
            "v v "
        ],
        "key": {
            "h": {
                "item": "gtceu:gold_rod"
            },
            "a": {
                "item": "ars_nouveau:archwood_planks"
            },
            "v": {
                "item": "mna:vinteum_dust"
            }
        },
        "result": {
            "item": "ars_nouveau:imbuement_chamber"
        }
    })

    //scribe's table
    event.remove({ id: 'ars_nouveau:scribes_table' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "sss",
            "h h",
            "l l"
        ],
        "reagents": [
            "more"
        ],
        "key": {
            "s": {
                "item": "ars_nouveau:archwood_slab"
            },
            "h": {
                "item": "minecraft:gold_ingot"
            },
            "l": {
                "tag": "forge:logs/archwood"
            },
            "m": {
                "item": "minecraft:purple_carpet"
            },
            "o": {
                "item": "occultism:awakened_feather"
            },
            "r": {
                "item": "ars_nouveau:source_gem_block"
            },
            "e" : {
                "item": "irons_spellbooks:epic_ink"
            }
        },
        "result": {
            "item": "ars_nouveau:scribes_table"
        }
    })
    //BOTANIA
    //runic altar
    event.remove({ id: 'botania:runic_altar' })
    event.remove({ id: 'botania:runic_altar_alt' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " i ",
            "lml",
            "tst"
        ],
        "reagents": [
            "pfvf"
        ],
        "key": {
            "m": {
                "item": "botania:mana_diamond"
            },
            "l": {
                "item": "botania:livingrock"
            },
            "t": {
                "item": "malum:tainted_rock_tablet"
            },
            "s": {
                "item": "gtceu:silver_block"
            },
            "i" : {
                "item" : "eidolon:pewter_inlay"
            },
            "p" : {
                "item": "malum:prismatic_focus_lens"
            },
            "f" : {
                "item": "gtceu:manasteel_foil"
            },
            "v" : {
                "item": "malum:alchemical_impetus"
            }
        },
        "result": {
            "item": "botania:runic_altar"
        }
    })
    //brewery
    event.remove({ id: 'botania:brewery' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "tit",
            "lml",
            "tst"
        ],
        "reagents": [
            "pfvq"
        ],
        "key": {
            "m": {
                "item": "botania:rune_mana"
            },
            "l": {
                "item": "botania:livingrock"
            },
            "t": {
                "item": "mna:decoration/transmuted_silver_block"
            },
            "s": {
                "item": "botania:manasteel_block"
            },
            "i" : {
                "item" : "eidolon:wooden_brewing_stand"
            },
            "p" : {
                "item": "eidolon:restoration_incense"
            },
            "f" : {
                "item": "hexalia:siren_paste"
            },
            "v" : {
                "item": "scguns:honey_sulfur_poultice"
            },
            "q" : {
                "item": "hexerei:moon_dust"
            }
        },
        "result": {
            "item": "botania:brewery"
        }
    })
    //petal apothecaries
    petalApothecary.forEach(group => {
        event.remove({ id: `botania:apothecary_${group.apothecary}` })
        event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "shs",
            " s ",
            "sns"
        ],
        "reagents": [
            "mama"
        ],
        "key": {
            "s" : group.stoneType,
            "h": {
                "tag": "botania:petals"
            },
            "a": {
                "item": "malum:sacred_spirit"
            },
            "n": {
                "item": "naturesaura:gold_powder"
            },
            "m" : {
                "item" : "hexerei:dried_sage"
            }
        },
        "result": {
            "item": `botania:apothecary_${group.apothecary}`
        }
    })
    })

});