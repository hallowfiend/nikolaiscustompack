ServerEvents.recipes((event) => {
    //Corporea index
    event.recipes.botania.runic_altar('botania:corporea_index',
        [
            'botania:corporea_spark',
            'malum:warp_flux',
            'botania:mana_glass',
            'integratedterminals:menril_glass'
        ],
        1000
    ).id('kubejs:botania/runic_altar/corporea_index')
    //Requesting halo
    event.recipes.botania.runic_altar('interactive_corporea:requesting_halo',
        [
            'botania:crafting_halo',
            'malum:warp_flux',
            'botania:corporea_index',
            'integrateddynamics:crystalized_menril_chunk'
        ],
        1000
    ).id('kubejs:botania/runic_altar/requesting_halo')
    //Item quantization device
    event.recipes.botania.runic_altar('interactive_corporea:item_quantization_device',
        [
            'botania:corporea_block',
            'malum:warp_flux',
            'botania:corporea_crystal_cube',
            'integrateddynamics:crystalized_menril_block'
        ],
        1000
    ).id('kubejs:botania/runic_altar/item_quantization_device')
    //Base runes
    const runesToRemove = [
        'fire',
        'water',
        'air',
        'earth'
    ]
    runesToRemove.forEach(rune => {
        event.remove({id: `botania:runic_altar/${rune}`})
    })
    event.recipes.botania.runic_altar('2x botania:rune_water',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:fishing_rod',
            'minecraft:kelp',
            'minecraft:bone_meal',
            'hexalia:water_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/water')
    event.recipes.botania.runic_altar('2x botania:rune_fire',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:nether_brick',
            'minecraft:gunpowder',
            'minecraft:nether_wart',
            'hexalia:fire_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/fire')
    event.recipes.botania.runic_altar('2x botania:rune_air',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:string',
            '#minecraft:wool_carpets',
            'farmersdelight:straw',
            'hexalia:air_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/air')
    event.recipes.botania.runic_altar('2x botania:rune_earth',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:coal_block',
            '#forge:ingots/copper',
            'miners_delight:cave_carrot',
            'hexalia:earth_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/earth')
    //Custom runes
    event.recipes.botania.runic_altar('2x kubejs:rune_light',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:shroomlight',
            'embers:ember_shard',
            'eternal_starlight:starcore',
            'kubejs:arcane_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/light')
    event.recipes.botania.runic_altar('2x kubejs:rune_void',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:hopper',
            'enderio:grains_of_infinity',
            'evilcraft:ender_tear',
            'kubejs:eldritch_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/void')
    event.recipes.botania.runic_altar('2x kubejs:rune_mind',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:book',
            'hexcasting:amethyst_dust',
            'magichem:admixture_thought',
            'kubejs:wicked_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/mind')
    event.recipes.botania.runic_altar('2x kubejs:rune_heart',
        [
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'minecraft:rose_bush',
            'biomancy:flesh_bits',
            'collectorsreap:beetroot_gummy',
            'kubejs:sacred_node'
        ],
        5200
    ).id('kubejs:botania/runic_altar/heart')
    function tier2Rune(rune1, rune2, output, item1, item2, item3, item4){
        event.recipes.botania.runic_altar(`kubejs:rune_${output}`,
        [
            `kubejs:rune_${rune1}`,
            `kubejs:rune_${rune2}`,
            item1,
            item2,
            item3,
            item4
        ],
        8000
    ).id(`kubejs:botania/runic_altar/${output}`)
    }
    tier2Rune(
        'light', 'mind', 'storms',
        'aether:aerogel', 'aether:aerogel', 'evilcraft:weather_container', 'gtceu:electrotine_dust'
    )
    tier2Rune(
        'void', 'heart', 'space',
        'minecraft:sculk', 'minecraft:sculk', 'minecraft:sculk', 'mna:cerublossom'
    )
    tier2Rune(
        'light', 'heart', 'force',
        'create:andesite_casing', 'create:andesite_casing', 'minecraft:wooden_sword', 'undergarden:cloggrum_ingot' 
    )
    tier2Rune(
        'void', 'mind', 'time',
        'minecraft:oxidized_copper', 'minecraft:oxidized_copper', 'minecraft:oxidized_copper', 'create:large_cogwheel'
    )
    function tier3Rune(rune1, rune2, output){
        event.recipes.botania.runic_altar(`kubejs:rune_${output}`,
        [
            `kubejs:rune_${rune1}`,
            `kubejs:rune_${rune2}`,
            'botania:mana_diamond',
            'botania:mana_diamond'
        ],
        12000
    ).id(`kubejs:botania/runic_altar/${output}`)
    }
    tier3Rune('light', 'space', 'charity')
    tier3Rune('heart', 'space', 'chastity')
    tier3Rune('heart', 'force', 'diligence')
    tier3Rune('void', 'storms', 'humility')
    tier3Rune('light', 'force', 'kindness')
    tier3Rune('mind', 'time', 'patience')
    tier3Rune('mind', 'storms', 'temperance')
    //Nodes
    event.recipes.botania.runic_altar('4x hexalia:fire_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:coal',
            'minecraft:sunflower',
            'malum:infernal_spirit'
        ],
        2000
    ).id('kubejs:botania/runic_altar/fire_node_efficient')
    event.recipes.botania.runic_altar('4x hexalia:water_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:lily_pad',
            'minecraft:ink_sac',
            'malum:aqueous_spirit'
        ],
        2000
    ).id('kubejs:botania/runic_altar/water_node_efficient')
    event.recipes.botania.runic_altar('4x hexalia:air_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:feather',
            'minecraft:dandelion',
            'malum:aerial_spirit'
        ],
        2000
    ).id('kubejs:botania/runic_altar/air_node_efficient')
    event.recipes.botania.runic_altar('4x hexalia:earth_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:brown_mushroom',
            'minecraft:clay_ball',
            'malum:earthen_spirit'
        ],
        2000
    ).id('kubejs:botania/runic_altar/earth_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:arcane_node',
        [
            'minecraft:amethyst_shard',
            'mna:cerublossom',
            'elementalcraft:inert_crystal',
            'malum:arcane_spirit'
        ],
        2000
    ).id('kubejs:botania/runic_altar/arcane_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:eldritch_node',
        [
            'minecraft:amethyst_shard',
            'miners_delight:tentacles',
            'dungeonsdelight:sculk_polyp',
            'malum:eldritch_spirit'
        ],
        2000
    ).id('kubejs:botania/runic_altar/eldritch_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:sacred_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:egg',
            'hexerei:dried_sage',
            'malum:sacred_spirit'
        ],
        2000
    ).id('kubejs/botania/runic_altar/sacred_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:wicked_node',
        [
            'minecraft:amethyst_shard',
            'malum:processed_soulstone',
            'gtceu:palladium_nugget',
            'malum:wicked_spirit'
        ],
        2000
    ).id('kubejs/botania/runic_altar/wicked_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:undirected_node',
        [
            'minecraft:amethyst_shard',
            'irons_spellbooks:lightning_bottle',
            'galosphere:allurite_shard',
            'bloodmagic:defaultcrystal'
        ],
        2000
    ).id('kubejs/botania/runic_altar/undirected_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:vengeful_node',
        [
            'minecraft:amethyst_shard',
            'hexalia:rabbage',
            'minecraft:redstone',
            'bloodmagic:vengefulcrystal'
        ],
        2000
    ).id('kubejs/botania/runic_altar/vengeful_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:steadfast_node',
        [
            'minecraft:amethyst_shard',
            'farmersrespite:black_tea_leaves',
            'ars_nouveau:bastion_pod',
            'bloodmagic:steadfastcrystal'
        ],
        2000
    ).id('kubejs/botania/runic_altar/steadfast_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:destructive_node',
        [
            'minecraft:amethyst_shard',
            'collectorsreap:pomegranate_slice',
            'scguns:vehement_coal',
            'bloodmagic:destructivecrystal'
        ],
        2000
    ).id('kubejs/botania/runic_altar/destructive_node_efficient')
    event.recipes.botania.runic_altar('4x kubejs:corrosive_node',
        [
            'minecraft:amethyst_shard',
            'collectorsreap:lime',
            'minecraft:spider_eye',
            'bloodmagic:corrosivecrystal'
        ],
        2000
    ).id('kubejs/botania/runic_altar/corrosive_node_efficient')
    //BLOOD MAGIC
    //Prepared Stone
    event.recipes.botania.runic_altar('8x kubejs:prepared_stone',
        [
            'goety:empty_focus',
            'gtceu:talc_dust',
            'mna:arcane_ash',
            'biomancy:stone_powder',
            'kubejs:bloodchannel_gem'
        ],
        4000
    ).id('kubejs:botania/runic_altar/prepared_stone')
    //Blank Rune
    event.remove({ output: "bloodmagic:blankrune" })
    event.recipes.botania.runic_altar('2x bloodmagic:blankrune',
        [
            'bloodmagic:blankslate',
            'bloodmagic:blankslate',
            'botania:mana_powder',
            'biomancy:mineral_fragments',
            'sons_of_sins:ether_ashes',
            'occultism:burnt_otherstone'
        ],
        2000
    ).id('kubejs:botania/runic_altar/blank_rune')
    //TIER 1
    //Speed Rune
    event.remove({ output: "bloodmagic:speedrune" })
    event.recipes.botania.runic_altar('bloodmagic:speedrune',
        [
            'bloodmagic:blankslate',
            'bloodmagic:blankrune',
            'kubejs:sanctified_steam',
            'neapolitan:chocolate_bar',
            'mna:transmuted_silver'
        ],
        4000
    ).id('kubejs:botania/runic_altar/speed_rune')
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
    ).id('kubejs:botania/runic_altar/arcane_rune')
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
    ).id('kubejs:botania/runic_altar/sacrifice_rune')
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
    ).id('kubejs:botania/runic_altar/self_sacrifice_rune')
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
    ).id('kubejs:botania/runic_altar/unleashed_nature_rune')
    //Displacement Rune
    event.remove({ output: "bloodmagic:dislocationrune" })
    event.recipes.botania.runic_altar('bloodmagic:dislocationrune',
        [
            'bloodmagic:infusedslate',
            'bloodmagic:blankrune',
            'kubejs:shifting_tincture',
            'biomancy:water_gel_block',
            'pneumaticcraft:vacuum_pump'
        ],
        12000
    ).id('kubejs:botania/runic_altar/displacement_rune')
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
    ).id('kubejs:botania/runic_altar/capacity_rune')
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
    ).id('kubejs:botania/runic_altar/augmented_capacity_rune')
    //Orb Rune
    event.remove({ output: "bloodmagic:orbcapacityrune" })
    event.recipes.botania.runic_altar('bloodmagic:orbcapacityrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:blankrune',
            'kubejs:rune_space',
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
    ).id('kubejs:botania/runic_altar/orb_rune')
    //Acceleration Rune
    event.remove({ output: "bloodmagic:accelerationrune" })
    event.recipes.botania.runic_altar('bloodmagic:accelerationrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:speedrune',
            'kubejs:caustic_oil',
            'malum:malignant_pewter_ingot',
            'ae2:speed_card'
        ],
        16000
    ).id('kubejs:botania/runic_altar/acceleration_rune')
    //Charging Rune
    event.remove({ output: "bloodmagic:chargingrune" })
    event.recipes.botania.runic_altar('bloodmagic:chargingrune',
        [
            'bloodmagic:demonslate',
            'bloodmagic:speedrune',
            'magichem:compacted_verdigris',
            'scguns:plasma_block',
            'kubejs:rune_storms'
        ],
        16000
    ).id('kubejs:botania/runic_altar/charging_rune')
})