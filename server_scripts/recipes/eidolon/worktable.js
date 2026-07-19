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
    //IRON'S
    //inscription table
    event.remove({ id: 'irons_spellbooks:sequenced_assembly/inscription_table' })
    event.remove({ id: 'irons_spellbooks:inscription_table' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "ssq",
            "www",
            "f f"
        ],
        "reagents": [
            "levb"
        ],
        "key" : {
            "s": {
                "item" : "irons_spellbooks:scroll",
                "nbt": /.*/
            },
            "q": {
                "item": "minecraft:writable_book"
            },
            "w": {
                "item": "eidolon:illwood_planks_slab"
            },
            "f": {
                "item": "eidolon:illwood_planks_fence"
            },
            "l" : {
                "item" : "hexcasting:lens"
            },
            "e" : {
                "item": "minecraft:enchanted_book"
            },
            "v" : {
                "item" : "mna:vinteum_block"
            },
            "b" : {
                "item": "minecraft:glass_bottle"
            }
        },
        "result" : {
            "item": "irons_spellbooks:inscription_table"
        }
    })
    //scroll forge
    event.remove({ id: 'irons_spellbooks:scroll_forge' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "ddd",
            " o ",
            "ooo"
        ],
        "reagents": [
            "icic"
        ],
        "key" : {
            "d": {
                "item" : "minecraft:polished_deepslate"
            },
            "o": {
                "item": "minecraft:crying_obsidian"
            },
            "i": {
                "item": "irons_spellbooks:epic_ink"
            },
            "c": {
                "item": "goety:cursed_metal_block"
            }
        },
        "result" : {
            "item": "irons_spellbooks:scroll_forge"
        }
    })
    //arcane anvil
    event.remove({ id: 'irons_spellbooks:arcane_anvil' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "pmp",
            "mam",
            "pmp"
        ],
        "reagents": [
            "l v "
        ],
        "key" : {
            "p": {
                "item" : "gtceu:manasteel_plate"
            },
            "m": {
                "item": "hexcasting:charged_amethyst"
            },
            "a": {
                "item": "tconstruct:tinkers_anvil",
                "nbt": /.*/
            },
            "l" : {
                "item" : "ars_nouveau:manipulation_essence"
            },
            "v" : {
                "item" : "ars_nouveau:blank_parchment"
            }
        },
        "result" : {
            "item": "irons_spellbooks:arcane_anvil"
        }
    })
    //BLOOD MAGIC
    //blood altar
    event.remove({ id: 'bloodmagic:blood_altar' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "sis",
            "sbs",
            "ptp"
        ],
        "reagents": [
            "rrrr"
        ],
        "key" : {
            "s": {
                "item" : "goety:shade_stone"
            },
            "i": {
                "item": "eidolon:bloodlust_incense"
            },
            "b": {
                "item": "evilcraft:blood_infuser"
            },
            "t" : {
                "item" : "evilcraft:dark_tank"
            },
            "p" : {
                "item" : "eidolon:pewter_inlay"
            },
            "r": {
                "item": "gtceu:ruby_gem"
            }
        },
        "result" : {
            "item": "bloodmagic:altar"
        }
    })
    //alchemy table
    event.remove({ id: 'bloodmagic:alchemy_table' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "v a",
            "rrr",
            "bbb"
        ],
        "reagents": [
            "ctit"
        ],
        "key" : {
            "v": {
                "item" : "botania:vial"
            },
            "a": {
                "item": "magichem:alembic"
            },
            "r": {
                "item": "bloodmagic:blankrune"
            },
            "b" : {
                "item" : "embers:ashen_stone"
            },
            "c" : {
                "item" : "gtceu:calcite_dust"
            },
            "t": {
                "item": "evilcraft:corrupted_tear"
            },
            "i": {
                "item": "embers:iron_aspectus"
            }
        },
        "result" : {
            "item": "bloodmagic:alchemytable"
        }
    })
    //hellfire forge
    event.remove({ id: 'bloodmagic:soul_forge' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "ooo",
            "sis",
            "srs"
        ],
        "reagents": [
            "cgag"
        ],
        "key" : {
            "o": {
                "item" : "gtceu:opal_gem"
            },
            "s": {
                "item": "goety:shade_stone"
            },
            "i": {
                "item": "malum:tin_impetus"
            },
            "r" : {
                "item" : "bloodmagic:blankrune"
            },
            "c" : {
                "item" : "hexerei:selenite_shard"
            },
            "g" : {
                "item": "hexalia:spirit_powder"
            },
            "a": {
                "item": "evilcraft:dark_power_gem_block"
            }
        },
        "result" : {
            "item": "bloodmagic:soulforge"
        }
    })
    //incense altar
    event.remove({ id: 'bloodmagic:incense_altar' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "pip",
            "lpl",
            "lrl"
        ],
        "reagents": [
            "behe"
        ],
        "key" : {
            "p": {
                "item" : "embers:dawnstone_plate"
            },
            "i": {
                "item": "eidolon:purity_incense"
            },
            "l": {
                "item": "gtceu:long_dawnstone_rod"
            },
            "r" : {
                "item" : "bloodmagic:blankrune"
            },
            "b" : {
                "item" : "malum:blazing_diode"
            },
            "e" : {
                "item": "embers:eldritch_insignia"
            },
            "h": {
                "item": "malum:block_of_hallowed_gold"
            }
        },
        "result" : {
            "item": "bloodmagic:incensealtar"
        }
    })
    //HEXEREI
    //mixing cauldron
    event.remove({ id: 'hexerei:mixing_cauldron' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "i i",
            "psp",
            "ppp"
        ],
        "reagents": [
            "gcgc"
        ],
        "key": {
            "p": {
                "item": "gtceu:pewter_plate"
            },
            "s": {
                "item": "minecraft:cauldron"
            },
            "i": {
                "item": "gtceu:iron_screw"
            },
            "g": {
                "item": "gtceu:fine_gold_wire"
            },
            "c": {
                "item": "gtceu:coal_dust"
            }
        },
        "result": {
            "item": "hexerei:mixing_cauldron"
        }
    })
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