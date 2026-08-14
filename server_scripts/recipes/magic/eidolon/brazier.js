ServerEvents.recipes(event => {
    //CHALK
    event.remove({ id: /occultism:crafting.*impure/ })
    event.remove({ id: /occultengineering:compacting.*impure/ })
    event.remove({ id: 'mna:wizard_chalk' })
    event.remove({ id: 'ars_nouveau:runic_chalk' })
    //wizard's
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "minecraft:flint"
        }
    ],
    "output": {
        "item": "mna:wizard_chalk"
    },
    "pedestalItems":
    [
        {
            "item": "mna:bone_ash"
        },
        {
            "item": "mna:bone_ash"
        },
        {
            "item": "mna:vinteum_dust"
        },
        {
            "item": "gtceu:silver_dust"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:light_blue_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/wizard_chalk')
    //runic
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "mna:rune_ritual_metal"
        }
    ],
    "output": {
        "item": "ars_nouveau:runic_chalk"
    },
    "pedestalItems":
    [
        {
            "item": "ars_nouveau:magebloom_block"
        },
        {
            "item": "eidolon:enchanted_ash"
        },
        {
            "item": "malum:runic_sapball"
        },
        {
            "item": "apotheosis:gem_dust"
        },
        {
            "item": "botania:rune_mana"
        },
        {
            "item": "ars_nouveau:manipulation_essence"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:blue_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/runic_chalk')
    //white
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "hexalia:purity_idol"
        }
    ],
    "output": {
        "item": "occultism:chalk_white_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "eidolon:oanna_bloom"
        },
        {
            "item": "hexalia:spirit_powder"
        },
        {
            "item": "hexerei:selenite_shard"
        },
        {
            "item": "goety:ectoplasm"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:white_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/white_occult_chalk')
    //red
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "botania:rune_wrath"
        }
    ],
    "output": {
        "item": "occultism:chalk_red_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "occultism:afrit_essence"
        },
        {
            "item": "eidolon:crimson_essence"
        },
        {
            "item": "kubejs:blood_slime_ball"
        },
        {
            "item": "malum:auric_embers"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:red_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/red_occult_chalk')
    //purple
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "goety:ender_chest_focus"
        }
    ],
    "output": {
        "item": "occultism:chalk_purple_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "eidolon:ender_calx"
        },
        {
            "item": "eidolon:ender_calx"
        },
        {
            "tag": "forge:dusts/endstone"
        },
        {
            "item": "gtceu:xithricite_dust"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:purple_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/purple_occult_chalk')
    //gold
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "undergarden:regalium_block"
        }
    ],
    "output": {
        "item": "occultism:chalk_gold_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "eidolon:merammer_resin"
        },
        {
            "item": "theurgy:purified_gold"
        },
        {
            "tag": "forge:dusts/sulfur"
        },
        {
            "item": "malum:ether"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:yellow_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/gold_occult_chalk')
    //copper
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "embers:dawnstone_aspectus"
        }
    ],
    "output": {
        "item": "occultengineering:chalk_copper_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "experienceobelisk:cognitive_flux"
        },
        {
            "item": "magichem:admixture_instrument"
        },
        {
            "tag": "forge:dusts/copper"
        },
        {
            "item": "goety:flying_ointment"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:orange_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/copper_occult_chalk')
    //zinc
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "embers:dawnstone_aspectus"
        }
    ],
    "output": {
        "item": "occultengineering:chalk_zinc_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "dungeonsdelight:ghastly_spirits"
        },
        {
            "item": "elementalcraft:earthcrystal"
        },
        {
            "item": "malum:grim_talc"
        },
        {
            "item": "ars_nouveau:air_essence"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:light_gray_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/zinc_occult_chalk')
    //brass
    event.custom({
    "type": "eidolon:ritual_brazier_crafting",
    "focusItems": [
        {
            "item": "immersiveengineering:coil_mv"
        }
    ],
    "output": {
        "item": "occultengineering:chalk_brass_impure"
    },
    "pedestalItems":
    [
        {
            "item": "occultism:otherworld_ashes"
        },
        {
            "item": "occultism:burnt_otherstone"
        },
        {
            "item": "scguns:sheol"
        },
        {
            "item": "undergarden:raw_cloggrum"
        },
        {
            "item": "gtceu:tainted_gold_dust"
        },
        {
            "item": "pneumaticcraft:glycerol"
        }
    ],
    "reagent": [
        {
            "item": "arts_and_crafts:brown_chalk_stick"
        }
    ]
    }).id('kubejs:eidolon/brazier_crafting/brass_occult_chalk')
})