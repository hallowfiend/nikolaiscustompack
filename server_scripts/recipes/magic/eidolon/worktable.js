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
    event.remove({ id: /irons_spellbooks:sequenced_assembly.*/ })
    //im turning this table into the central magic item crafting station and NOBODY CAN STOP ME
    //except for components that is im leaving those to be craftable normalstyle because i love ae2
    //MANA AND ARTIFICE
    //manaweaving altar
    event.remove({ id: 'mna:manaweaving_altar' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "wdw",
            "wnw",
            "wsw"
        ],
        "reagents": [
            "eeee"
        ],
        "key" : {
            "w": {
                "item" : "mna:decoration/arcane_sandstone_wall"
            },
            "d": {
                "item": "mna:decoration/arcane_sandstone"
            },
            "s": {
                "item": "mna:decoration/arcane_stone"
            },
            "n": {
                "item": "hexalia:water_node"
            },
            "e": {
                "item": "irons_spellbooks:arcane_ingot"
            }
        },
        "result" : {
            "item": "mna:manaweaving_altar"
        }
    }).id('kubejs:eidolon/worktable/workstations/manaweaving_altar')
    //IRON'S
    //graybeard staff
    event.remove({ id: 'irons_spellbooks:graybeard_staff' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " rb",
            " lr",
            "r  "
        ],
        "reagents": [
            "eeee"
        ],
        "key" : {
            "r": {
                "item" : "gtceu:pewter_ring"
            },
            "l": {
                "item": "gtceu:long_wood_rod"
            },
            "b": {
                "tag": "farmersdelight:barks"
            },
            "e": {
                "item": "irons_spellbooks:arcane_essence"
            }
        },
        "result" : {
            "item": "irons_spellbooks:graybeard_staff"
        }
    }).id('kubejs:eidolon/worktable/staves/graybeard_staff')
    //ice staff
    event.remove({ id: 'irons_spellbooks:deploying/ice_staff' })
    event.remove({ id: 'irons_spellbooks:ice_staff' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " rb",
            " lr",
            "f  "
        ],
        "reagents": [
            "egeg"
        ],
        "key" : {
            "r": {
                "item" : "gtceu:froststeel_bolt"
            },
            "l": {
                "item": "irons_spellbooks:frosted_helve"
            },
            "b": {
                "item": "irons_spellbooks:permafrost_shard"
            },
            "f":{
                "item": "goety:frost_breath_focus"
            },
            "e": {
                "item": "goety:chill_fabric"
            },
            "g": {
                "item": "goety:freezing_lamp"
            }
        },
        "result" : {
            "item": "irons_spellbooks:ice_staff"
        }
    }).id('kubejs:eidolon/worktable/staves/ice_staff')
    //artificer's cane
    event.remove({ id: 'irons_spellbooks:artificer_cane' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " rb",
            " lr",
            "t  "
        ],
        "reagents": [
            "iiee"
        ],
        "key" : {
            "r": {
                "item" : "gtceu:gold_ring"
            },
            "b": {
                "item": "hexcasting:charged_amethyst"
            },
            "l": {
                "item": "quark:stripped_crimson_post"
            },
            "t": {
                "item": "gtceu:topaz_gem"
            },
            "e": {
                "item": "goety:magic_fabric"
            },
            "i":{
                "item": "eidolon:gold_inlay"
            }
        },
        "result" : {
            "item": "irons_spellbooks:artificer_cane"
        }
    }).id('kubejs:eidolon/worktable/staves/artificer_cane')
    //pyrium staff
    event.remove({ id: 'irons_spellbooks:pyrium_staff' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " rb",
            " lr",
            "t  "
        ],
        "reagents": [
            "annn"
        ],
        "key" : {
            "r": {
                "item" : "irons_spellbooks:pyrium_ingot"
            },
            "b": {
                "item": "malum:block_of_blazing_quartz"
            },
            "l": {
                "item": "gtceu:long_tungsten_rod"
            },
            "t": {
                "item": "malum:copper_impetus"
            },
            "n":{
                "item": "gtceu:netherite_plate"
            },
            "a": {
                "item": "naturesaura:token_rage"
            }
        },
        "result" : {
            "item": "irons_spellbooks:pyrium_staff"
        }
    }).id('kubejs:eidolon/worktable/staves/pyrium_staff')
    //inscription table
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
    }).id('kubejs:eidolon/worktable/workstations/inscription_table')
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
    }).id('kubejs:eidolon/worktable/workstations/scroll_forge')
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
    }).id('kubejs:eidolon/worktable/workstations/arcane_anvil')
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
            "rrra"
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
                "item": "kubejs:bloodchannel_gem"
            },
            "a": {
                "item": "naturesaura:token_rage"
            }
        },
        "result" : {
            "item": "bloodmagic:altar"
        }
    }).id('kubejs:eidolon/worktable/workstations/blood_altar')
    //alchemy table
    event.remove({ id: 'bloodmagic:alchemy_table' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "v a",
            "rrr",
            "bfb"
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
            "f": {
                "item": "kubejs:token_flux"
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
    }).id('kubejs:eidolon/worktable/workstations/alchemy_table')
    //hellfire forge
    event.remove({ id: 'bloodmagic:soul_forge' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "odo",
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
            "d": {
                "item": "kubejs:token_determination"
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
                "item": "kubejs:undirected_node"
            },
            "a": {
                "item": "evilcraft:dark_power_gem_block"
            }
        },
        "result" : {
            "item": "bloodmagic:soulforge"
        }
    }).id('kubejs:eidolon/worktable/workstations/hellfire_forge')
    //incense altar
    event.remove({ id: 'bloodmagic:incense_altar' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "pip",
            "ldl",
            "lrl"
        ],
        "reagents": [
            "behe"
        ],
        "key" : {
            "p": {
                "item" : "embers:dawnstone_plate"
            },
            "d": {
                "item": "kubejs:destructive_node"
            },
            "i": {
                "item": "kubejs:anointing_paste"
            },
            "l": {
                "item": "gtceu:long_dawnstone_rod"
            },
            "r" : {
                "item" : "bloodmagic:selfsacrificerune"
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
    }).id('kubejs:eidolon/worktable/workstations/incense_altar')
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
    }).id('kubejs:eidolon/worktable/workstations/mixing_cauldron')
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
    }).id('kubejs:eidolon/worktable/workstations/spirit_altar')
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
            "vnvn"
        ],
        "key": {
            "h": {
                "item": "gtceu:arcane_gold_rod"
            },
            "a": {
                "item": "ars_nouveau:archwood_planks"
            },
            "v": {
                "item": "mna:vinteum_dust"
            },
            "n": {
                "item": "kubejs:arcane_node"
            }
        },
        "result": {
            "item": "ars_nouveau:imbuement_chamber"
        }
    }).id('kubejs:eidolon/worktable/workstations/imbuement_chamber')
    //arcane core
    event.remove({ id: 'ars_nouveau:arcane_core' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "sps",
            "hbh",
            "sps"
        ],
        "reagents": [
            "mama"
        ],
        "key": {
            "h": {
                "item": "gtceu:arcane_gold_rod"
            },
            "s": {
                "item": "ars_nouveau:sourcestone"
            },
            "p": {
                "item": "malum:soul_stained_steel_plating"
            },
            "b": {
                "item": "ars_nouveau:source_gem_block"
            },
            "m":{
                "item": "hexerei:moon_dust"
            },
            "a": {
                "item": "kubejs:arcane_node"
            }
        },
        "result": {
            "item": "ars_nouveau:arcane_core"
        }
    }).id('kubejs:eidolon/worktable/workstations/arcane_core')
    //enchanting apparatus
    event.remove({ id: 'ars_nouveau:enchanting_apparatus' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "hsh",
            "aba",
            "hsh"
        ],
        "reagents": [
            "mmmm"
        ],
        "key": {
            "h": {
                "item": "gtceu:arcane_gold_rod"
            },
            "s": {
                "item": "ars_nouveau:sourcestone"
            },
            "a": {
                "item": "malum:hex_ash"
            },
            "b": {
                "item": "botania:mana_pearl"
            },
            "m":{
                "item": "kubejs:arcane_node"
            }
        },
        "result": {
            "item": "ars_nouveau:enchanting_apparatus"
        }
    }).id('kubejs:eidolon/worktable/workstations/enchanting_apparatus')
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
                "item": "eidolon:arcane_gold_ingot"
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
    }).id('kubejs:eidolon/worktable/workstations/scribes_table')
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
                "item": "kubejs:token_cycles"
            },
            "i" : {
                "item": "eidolon:pewter_inlay"
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
    }).id('kubejs:eidolon/worktable/workstations/runic_altar')
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
                "item": "kubejs:corrosive_node"
            },
            "f" : {
                "item": "hexalia:water_node"
            },
            "v" : {
                "item": "kubejs:arcane_node"
            },
            "q" : {
                "item": "hexalia:earth_node"
            }
        },
        "result": {
            "item": "botania:brewery"
        }
    }).id('kubejs:eidolon/worktable/workstations/botanical_brewery')
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
                "item": "kubejs:sacred_node"
            },
            "n": {
                "item": "naturesaura:gold_powder"
            },
            "m" : {
                "item" : "malum:sacred_spirit"
            }
        },
        "result": {
            "item": `botania:apothecary_${group.apothecary}`
        }
    }).id(`kubejs:eidolon/worktable/workstations/apothecary_${group.apothecary}`)
    })

});