ServerEvents.recipes((event) => {
    //Nodes
    event.recipes.botania.runic_altar('4x hexalia:fire_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:coal',
            'minecraft:sunflower',
            'malum:infernal_spirit'
        ],
        2000
    )
    event.recipes.botania.runic_altar('4x hexalia:water_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:lily_pad',
            'minecraft:ink_sac',
            'malum:aqueous_spirit'
        ],
        2000
    )
    event.recipes.botania.runic_altar('4x hexalia:air_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:feather',
            'minecraft:dandelion',
            'malum:aerial_spirit'
        ],
        2000
    )
    event.recipes.botania.runic_altar('4x hexalia:earth_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:brown_mushroom',
            'minecraft:clay_ball',
            'malum:earthen_spirit'
        ],
        2000
    )
    //BLOOD MAGIC
    //Prepared Stone
    event.recipes.botania.runic_altar('8x kubejs:prepared_stone',
        [
            'goety:empty_focus',
            'biomancy:stone_powder',
            'malum:runic_sapball',
            'eidolon:magicians_wax'
        ],
        4000
    )
    //Blank Rune
    event.remove({ output: "bloodmagic:blankrune" })
    event.recipes.botania.runic_altar('2x bloodmagic:blankrune',
        [
            'bloodmagic:blankslate',
            'bloodmagic:blankslate',
            'botania:mana_powder',
            'biomancy:gem_fragments',
            'sons_of_sins:ether_ashes',
            'occultism:burnt_otherstone'
        ],
        2000
    )
    //TIER 1
    //Speed Rune
    event.remove({ output: "bloodmagic:speedrune" })
    event.recipes.botania.runic_altar('bloodmagic:speedrune',
        [
            'bloodmagic:blankslate',
            'bloodmagic:blankrune',
            'hexalia:air_node',
            'neapolitan:chocolate_bar',
            'mna:transmuted_silver'
        ],
        4000
    )
    //Arcane Rune
    event.remove({ output: "animus:arcane_rune" })
    event.recipes.botania.runic_altar('animus:arcane_rune',
        [
            'bloodmagic:blankslate',
            'bloodmagic:blankrune',
            'mna:rune_arcane',
            'ars_nouveau:warp_scroll',
            'constructs_casting:arcane_block'
        ],
        4000
    )
    //TIER 2
    //Sacrifice Rune
    event.remove({ output: "bloodmagic:sacrificerune" })
    event.recipes.botania.runic_altar('bloodmagic:sacrificerune',
        [
            'bloodmagic:reinforcedslate',
            'bloodmagic:blankrune',
            'hexerei:blood_sigil',
            'naturesaura:tainted_gold',
            'twilightforest:carminite'
        ],
        8000
    )
    //Self-Sacrifice Rune
    event.remove({ output: "bloodmagic:selfsacrificerune" })
    event.recipes.botania.runic_altar('bloodmagic:selfsacrificerune',
        [
            'bloodmagic:reinforcedslate',
            'bloodmagic:blankrune',
            'eidolon:gold_inlay',
            'malum:ether',
            'tconstruct:pig_iron_ingot'
        ],
        8000
    )
    //TIER 3
    //Rune of Unleashed Nature
    event.remove({ output: "animus:rune_unleashed_nature" })
    event.recipes.botania.runic_altar('animus:rune_unleashed_nature',
        [
            'bloodmagic:infusedslate',
            'bloodmagic:blankrune',
            'naturesaura:infused_iron_block',
            'botania:rune_earth',
            'biomancy:fertilizer'
        ],
        12000
    )
    //Displacement Rune
    event.remove({ output: "bloodmagic:dislocationrune" })
    event.recipes.botania.runic_altar('bloodmagic:dislocationrune',
        [
            'bloodmagic:infusedslate',
            'bloodmagic:blankrune',
            'goety:wind_core',
            'biomancy:water_gel_block',
            'pneumaticcraft:vacuum_pump'
        ],
        12000
    )
    //Capacity Rune
    event.remove({ output: "bloodmagic:altarcapacityrune" })
    event.recipes.botania.runic_altar('bloodmagic:altarcapacityrune',
        [
            'bloodmagic:infusedslate',
            'bloodmagic:blankrune',
            'embers:copper_cell',
            'pneumaticcraft:air_canister',
            'malum:block_of_blazing_quartz'
        ],
        12000
    )
    //TIER 4
    //Augmented Capacity Rune
    event.remove({ output: "bloodmagic:bettercapacityrune" })
    event.recipes.botania.runic_altar('bloodmagic:bettercapacityrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:altarcapacityrune',
            'embers:crystal_cell',
            'pneumaticcraft:reinforced_air_canister',
            'malum:block_of_auric_embers'
        ],
        16000
    )
    //Orb Rune
    event.remove({ output: "bloodmagic:orbcapacityrune" })
    event.recipes.botania.runic_altar('bloodmagic:orbcapacityrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:blankrune',
            'magichem:sidereal_orb',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled',
            'evilcraft:blood_orb_filled'
        ],
        16000
    )
    //Acceleration Rune
    event.remove({ output: "bloodmagic:accelerationrune" })
    event.recipes.botania.runic_altar('bloodmagic:accelerationrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:speedrune',
            'magichem:red_vitriol',
            'malum:malignant_pewter_ingot',
            'ae2:speed_card'
        ],
        16000
    )
    //Charging Rune
    event.remove({ output: "bloodmagic:chargingrune" })
    event.recipes.botania.runic_altar('bloodmagic:chargingrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:speedrune',
            'magichem:compacted_verdigris',
            'scguns:plasma_block',
            'embers:catalytic_plug'
        ],
        16000
    )
})