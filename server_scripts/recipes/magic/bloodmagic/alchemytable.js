ServerEvents.recipes(event => {
    function alchemytable(output, inputs, cost, duration, tier){
        event.recipes.bloodmagic
        .alchemytable(output,
            inputs) //list
        .syphon(cost).ticks(duration).upgradeLevel(tier)
        .id(`kubejs:blood_magic/blood_alchemy/${output.split(":")[1]}`)
    }
    //glacier essence dupe
    alchemytable('4x cosmopolitan:glacier_essence',
        [
            'cosmopolitan:glacier_essence',
            'minecraft:packed_ice',
            'irons_spellbooks:arcane_essence',
            'biomancy:gem_fragments'
        ],
        400,
        40,
        1
    )
    //base catalysts
    event.remove({id: 'bloodmagic:alchemytable/simple_catalyst'})
    event.remove({id: 'bloodmagic:alchemytable/strenghtened_catalyst'})
    alchemytable('2x bloodmagic:simplecatalyst',
        [
            'minecraft:sugar',
            'minecraft:redstone',
            'gtceu:charcoal_dust',
            'gtceu:salt_dust',
            'biomancy:nutrients'
        ],
        200,
        100,
        1
    )
    alchemytable('bloodmagic:strengthenedcatalyst',
        [
            'bloodmagic:simple_catalyst',
            'gtceu:sal_ammoniac_dust',
            'biomancy:regenerative_fluid',
            'minecraft:glow_berries',
            'vampiresdelight:rice_dough'
        ],
        1000,
        100,
        3
    )
    alchemytable('kubejs:concentratedcatalyst',
        [
            'bloodmagic:strengthenedcatalyst',
            'gtceu:gravitite_gem',
            'gtceu:electrotine_dust',
            'magichem:admixture_alcohol',
            'biomancy:exotic_dust'
        ],
        5000,
        100,
        5
    )
    //plain reagent
    alchemytable('2x kubejs:reagentbasic',
        [
            'hexerei:quicksilver_bottle',
            'kubejs:electrolytic_composite',
            'magichem:admixture_acid',
            'aether:healing_stone'
        ],
        200,
        100,
        1
    )
    //reagents
    const reagenceBaseBM = [
        {type: 'lava', tier: 1, inputs: [ //max 4
            {item: 'theurgy:crystallized_lava'},
            {item: 'malum:block_of_blazing_quartz'},
            {item: 'botania:rune_fire'},
            {item: 'tconstruct:seared_tank'}
        ]},
        {type: 'water', tier: 1, inputs: [
            {item: 'theurgy:crystallized_water'},
            {tag: 'forge:storage_blocks/salt'},
            {item: 'botania:rune_water'},
            {tag: 'forge:storage_blocks/sugar'}
        ]},
        {type: 'sight', tier: 1, inputs: [
            {item: 'bloodmagic:divinationsigil'},
            {item: 'botania:lens_normal'},
            {item: 'minecraft:fermented_spider_eye'},
            {item: 'evilcraft:blood_orb_filled'}
        ]},
        {type: 'air', tier: 2, inputs: [
            {item: 'goety:gale_fabric'},
            {item: 'malum:aerial_spirited_glass'},
            {item: 'botania:rune_air'},
            {item: 'hexerei:selenite_shard'}
        ]},
        {type: 'fastminer', tier: 2, inputs: [
            {item: 'goety:magic_fabric'},
            {item: 'malum:block_of_cthonic_gold'},
            {item: 'malum:block_of_cthonic_gold'},
            {item: 'hexalia:galeberries_cookie'}
        ]},
        {type: 'growth', tier: 2, inputs: [
            {item: 'naturesaura:infused_iron'},
            {item: 'magichem:essentia_verdant'},
            {item: 'botania:rune_earth'},
            {item: 'kubejs:token_cycles'}
        ]},
        {type: 'holding', tier: 2, inputs: [
            {item: 'ae2:printed_logic_processor'},
            {item: 'botania:mana_pool'},
            {item: 'create:item_vault'},
            {item: 'irons_spellbooks:bloody_vellum'}
        ]},
        {type: 'void', tier: 2, inputs: [
            {item: 'kubejs:destructive_node'},
            {item: 'malum:malignant_lead'},
            {item: 'kubejs:rune_void'},
            {item: 'goety:shade_stone'}
        ]},
        {type: 'binding', tier: 3, inputs: [
            {item: 'goety:flying_ointment'},
            {item: 'kubejs:bloodied_dust'},
            {item: 'mna:arcane_ash'},
            {item: 'botania:red_string'}
        ]},
        {type: 'bloodlight', tier: 3, inputs: [
            {item: 'embers:glimmer_crystal'},
            {item: 'malum:iridescent_ether'},
            {item: 'kubejs:rune_light'},
            {item: 'naturesaura:token_euphoria'}
        ]},
        {type: 'frost', tier: 3, inputs: [
            {item: 'goety:chill_fabric'},
            {item: 'twilightforest:arctic_fur'},
            {item: 'botania:rune_winter'},
            {tag: 'forge:ingots/mithril'}
        ]},
        {type: 'magnetism', tier: 3, inputs: [
            {item: 'botania:lens_magnet'},
            {item: 'theurgy:purified_gold'},
            {item: 'kubejs:rune_mind'},
            {item: 'magichem:admixture_metal'}
        ]},
        {type: 'suppression', tier: 4, inputs: [
            {item: 'occultism:sacrificial_bowl'},
            {item: 'kubejs:token_stasis'},
            {item: 'kubejs:rune_void'},
            {item: 'magichem:admixture_trap'}
        ]},
        {type: 'teleposition', tier: 4, inputs: [
            {item: 'bloodmagic:teleposer'},
            {item: 'botania:lens_warp'},
            {item: 'kubejs:rune_space'},
            {item: 'ae2:spatial_cell_component_2'}
        ]}
    ]
    reagenceBaseBM.forEach(reagent => {
        event.remove({output: `bloodmagic:reagent${reagent.type}`})
        let ingredientlist = []
        if (reagent.tier < 3) {
            ingredientlist.concat(reagent.inputs, {item: 'kubejs:reagentbasic'}, {item: 'bloodmagic:simplecatalyst'})
            alchemytable(`bloodmagic:reagent${reagent.type}`,
        ingredientlist,
        1000*reagent.tier,
        100,
        reagent.tier
    )
        }
        else {
            ingredientlist.concat(reagent.inputs, {item: 'kubejs:reagentbasic'}, {item: 'bloodmagic:strengthenedcatalyst'})
            alchemytable(`bloodmagic:reagent${reagent.type}`,
        ingredientlist,
        1000*reagent.tier,
        100,
        reagent.tier
    )
        }
    })
    const reagenceAnimus = [
        {type: 'fist', tier: 2, inputs:[
            {item: 'create:brass_hand'},
            {item: 'mowziesmobs:bluff_rod'},
            {item: 'kubejs:rune_force'},
            {item: 'kubejs:token_defiance'}
        ]},
        {type: 'builder', tier: 2, inputs: [
            {item: 'botania:sextant'},
            {item: 'create:empty_schematic'},
            {item: 'kubejs:rune_time'},
            {item: 'hexalia:mandrake_stew'}
        ]},
        {type: 'leach', tier: 2, inputs: [
            {item: 'goety:leeching_focus'},
            {item: 'malum:block_of_rotting_essence'},
            {item: 'botania:rune_gluttony'},
            {item: 'kubejs:destructive_node'}
        ]},
        {type: 'boundlessnature', tier: 2, inputs: [
            {item: 'botania:terrasteel_ingot'},
            {item: 'botania:agricarnation'},
            {item: 'botania:rune_greed'},
            {tag: 'forge:storage_blocks/infused_iron'}
        ]},
        {type: 'equivalency', tier: 3, inputs: [
            {item: 'kubejs:steadfast_node'},
            {item: 'magichem:admixture_bargain'},
            {item: 'kubejs:rune_generosity'},
            {tag: 'forge:storage_blocks/amethyst_bronze'}
        ]},
        {type: 'chains', tier: 3, inputs: [
            {item: 'hexalia:spiritroot_tether'},
            {item: 'eidolon:tether_incense'},
            {item: 'kubejs:rune_chastity'},
            {item: 'goety:fire_spawner_cage'}
        ]},
        {type: 'consumption', tier: 3, inputs:[
            {item: 'biomancy:decomposer'},
            {item: 'create:mechanical_drill'},
            {item: 'malum:warp_flux'},
            {item: 'botania;elementium_pickaxe'}
        ]},
        {type: 'remendium', tier: 3, inputs: [
            {item: 'malum:rune_of_aliment_cleansing'},
            {item: 'evilcraft:purifier'},
            {item: 'mna:greater_mote_water'},
            {tag: 'forge:storage_blocks/unrealium'}
        ]},
        {type: 'reparare', tier: 3, inputs: [
            {item: 'evilcraft:colossal_blood_chest'},
            {item: 'goety:dark_ingot'},
            {item: 'biomancy:living_flesh'},
            {item: 'naturesaura:aura_trove'}
        ]},
        {type: 'storm', tier: 3, inputs: [
            {item: 'irons_spellbooks:energized_core'},
            {item: 'magichem:perfected_electrum'},
            {item: 'kubejs:rune_storms'},
            {item: 'evilcraft:weather_container', nbt: {"weather": "RAIN"}}
        ]},
        {type: 'freesoul', tier: 4, inputs: [
            {item: 'minecraft:totem_of_undying'},
            {item: 'malum:astral_weave'},
            {item: 'minecraft:phantom_membrane'},
            {item: 'netherexp:wisp_bottle'}
        ]},
        {type: 'heavelywrath', tier: 4, inputs: [
            {item: 'minecraft:shulker_shell'},
            {tag: 'forge:storage_blocks/gravitite'},
            {tag: 'forge:storage_blocks/malignant_pewter'},
            {item: 'goety:telekinesis_focus'}
        ]},
        {type: 'temporaldominance', tier: 4, inputs: [
            {item: 'botania:hourglass'},
            {item: 'kubejs:token_recurrence'},
            {item: 'botania:rune_sloth'},
            {tag: 'gtceu:iv_circuits'}
        ]},
        {type: 'transposition', tier: 4, inputs: [
            {item: 'mna:animus_dust'},
            {item: 'ae2:spatial_cell_component_128'},
            {item: 'kubejs:rune_space'},
            {item: 'malum:warp_flux'}
        ]}
    ]
    reagenceAnimus.forEach(reagent => {
        event.remove({output: `animus:reagent${reagent.type}`})
        let ingredientlist = []
        if (reagent.tier < 3) {
            ingredientlist.concat(reagent.inputs, {item: 'kubejs:reagentbasic'}, {item: 'bloodmagic:simplecatalyst'})
            alchemytable(`animus:reagent${reagent.type}`,
        ingredientlist,
        1000*reagent.tier,
        100,
        reagent.tier
    )
        }
        else {
            ingredientlist.concat(reagent.inputs, {item: 'kubejs:reagentbasic'}, {item: 'bloodmagic:strengthenedcatalyst'})
            alchemytable(`animus:reagent${reagent.type}`,
        ingredientlist,
        1000*reagent.tier,
        100,
        reagent.tier
    )
        }
    })
})