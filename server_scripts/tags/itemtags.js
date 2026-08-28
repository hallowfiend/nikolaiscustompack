//priority 1000

ServerEvents.tags("item", (event) => {
  //#region event.add item tag
  event.add('forge:hearts', [
        'eidolon:zombie_heart',
        'sons_of_sins:heart',
        'vampirism:human_heart',
        'vampirism:weak_human_heart',
        'eidolon:wraith_heart',
        'eidolon:withered_heart',
        'lendersdelight:maledictus_heart',
        'alexsmobs:soul_heart',
    ]);
  event.add('forge:zombie_heart', [
        'eidolon:zombie_heart',
        'reliquary:zombie_heart'
    ]);
  event.add('forge:ashes/bone', [
    'mna:bone_ash',
    'eidolon:enchanted_ash'
  ])
  event.add('hexerei:tallow_meltable', [
    'delightful:animal_fat',
    'eidolon:candle',
    /dyenamics:.*candle/,
    'occultism:tallow'
  ])
  event.add('kubejs:roses', [
    'minecraft:rose_bush',
    /windswept:.*_rose/,
    /windswept:.*_rose_bush/,
    'collectorsreap:bulbous_rose'
  ])
  event.add('kubejs:crafting_claws', [
    'alexsmobs:dropbear_claw',
    'biomancy:mob_claw',
    'collectorsreap:chieftain_claw',
    'reliquary:rib_bone',
    'spawn:coastal_crab_claw',
    'cataclysm:chitin_claw',
    'crabbersdelight:crab_claw'
  ])
  event.add('kubejs:ancient_seeds', [
    'minecraft:torchflower_seeds',
    'minecraft:pitcher_pod',
    'collectorsreap:damselflower_seeds',
    'collectorsreap:moontear_seeds',
    'collectorsreap:skull_lily_seeds',
    'collectorsreap:bulbous_rose_seeds',
    'collectorsreap:heartpetals_seeds'
  ])
  event.add('forge:tools/hammers', [
    'evilcraft:mace_of_destruction',
    'evilcraft:mace_of_distortion'
  ])
  event.add('forge:frigid_heart', [
        'eidolon:wraith_heart',
        'sons_of_sins:ice_heart',
        'reliquary:frozen_core'
    ]);
  event.add('forge:wither_heart', [
        'eidolon:withered_heart',
        'sosorgans:wither_skeleton_heart',
        'deeperdarker:heart_of_the_deep',
        'alexsmobs:soul_heart',
        'reliquary:nebulous_heart'
    ])
  event.add('forge:logs/mahogany', [
    /hexerei:.*mahogany_log/,
    /hexerei:.*mahogany_wood/
  ])
  event.add('forge:logs/witch_hazel', [
    /hexerei:.*witch_hazel_log/,
    /hexerei:.*witch_hazel_wood/
  ])
  event.add('environmental:willow_logs', [
    '#hexalia:willow_logs',
    /hexerei:.*willow_wood/,
    /hexerei:.*willow_log/
  ])
  
  event.add("ad_astra:aeronos_logs", ["ad_astra:aeronos_cap", "ad_astra:aeronos_stem"]);
  event.add("ad_astra:strophar_logs", ["ad_astra:strophar_cap", "ad_astra:strophar_stem"]);

  event.add("forge:cookies", [
    "hexalia:galeberries_cookie"
  ])
  
  event.add('forge:tools/needles', [
    'kubejs:bone_needle',
    'mna:vinteum_needle'
  ])

  event.add('farm_and_charm:cabbage', 'farmersdelight:cabbage');
  event.add('farm_and_charm:cabbage', 'farmersdelight:cabbage_leaf');

  event.add('forge:mint', 'aethersdelight:peppermint_leaf');
  event.add('neapolitan:mint_leaves', 'aethersdelight:peppermint_leaf');

  event.add('forge:gems/amber', 'aether:golden_amber')
  event.add('forge:gems/amber', 'betterend:amber_gem')

  event.add('forge:raw_crab_meat', 'lendersdelight:crab_legs');
  event.add('forge:cooked_crab_meat', 'lendersdelight:cooked_crab_legs');

  event.add('candlelight:white_effect', 'brewincompatdelight:white_wine');
  event.add('candlelight:white_effect', 'brewinandchewin:rice_wine');
  event.add('candlelight:red_effect', 'brewincompatdelight:red_wine');

  event.add('bakery:jam', ['#forge:jams']);

  event.add("aether:book_of_lore_materials", ["gtceu:ambrosium_gem"]);
  event.add("aether:gems/zanite", ["#forge:gems/zanite"]);
  event.add("aether:processed/gravitite", ["#forge:storage_blocks/gravitite"]);
  event.add("aether:zanite_repairing", ["#forge:gems/zanite"]);
  event.add("aether:gravitite_repairing", ["#forge:gems/gravitite"]);
  event.add("aether:obsidian_repairing", ["minecraft:obsidian"]);

  event.add("create:crushed_raw_materials", ["#forge:crushed_ores"]);

  event.add("forge:tallow", ["immersiveweathering:tallow"]);

  event.add("hibernalherbs:herbs/sage", ["hexerei:sage"]);

  event.add("forge:essences/death", ["eidolon:death_essence"]);
  event.add("forge:essences/death", ["malum:rotting_essence"]);

  event.add("forge:wax", ["magichem:sealing_wax"])
  event.add("forge:wax", ["hexerei:wax_blend"])
  event.add("forge:wax", ["species:wicked_wax"])
  event.add("forge:wax", ["immersiveweathering:tallow"]);

  event.add("forge:resins", ["hexalia:tree_resin"]);
  event.add("forge:resins", ["minecraft:resin_clump"]);
  event.add("forge:resins", ["eidolon:merammer_resin"]);
  event.add("forge:resins", ["gtceu:sticky_resin"]);

  event.add("c:black_dyes", ["#forge:dyes/black"]);
  event.add("c:blue_dyes", ["#forge:dyes/blue"]);
  event.add("c:brown_dyes", ["#forge:dyes/brown"]);
  event.add("c:cyan_dyes", ["#forge:dyes/cyan"]);
  event.add("c:gray_dyes", ["#forge:dyes/gray"]);
  event.add("c:green_dyes", ["#forge:dyes/green"]);
  event.add("c:light_blue_dyes", ["#forge:dyes/light_blue"]);
  event.add("c:light_gray_dyes", ["#forge:dyes/light_gray"]);
  event.add("c:lime_dyes", ["#forge:dyes/lime"]);
  event.add("c:magenta_dyes", ["#forge:dyes/magenta"]);
  event.add("c:orange_dyes", ["#forge:dyes/orange"]);
  event.add("c:pink_dyes", ["#forge:dyes/pink"]);
  event.add("c:purple_dyes", ["#forge:dyes/purple"]);
  event.add("c:red_dyes", ["#forge:dyes/red"]);
  event.add("c:white_dyes", ["#forge:dyes/white"]);
  event.add("c:yellow_dyes", ["#forge:dyes/yellow"]);

  /* event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/sand')
  event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/gravel')
  event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/soul_soil')
  event.add('minecraft:mineable/shovel', '#forge:ores_in_ground/soul_soil')
  event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/soul_sand')
  event.add('minecraft:mineable/shovel', '#forge:ores_in_ground/soul_sand')
  event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/moon_stone')
  event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/moon_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/moon_deepslate')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/moon_deepslate')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/mars_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/mars_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/venus_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/venus_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/venus_sandstone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/venus_sandstone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/mercury_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/mercury_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/glacio_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/glacio_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/permafrost')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/permafrost') */

  event.add("c:hidden_from_recipe_viewers", [
    "ae2:facade",
    "hexalia:mandrake",
    "caverns_and_chasms:tether_potion",
    "caverns_and_chasms:trail_potion",
    "#tconstruct:modifiable/multipart",
    "elementalcraft:pure_ore",
    /reliquary:.*mob_charm.*/,
    'enderio:broken_spawner',
    'enderio:filled_soul_vial'
  ]);

  event.add("forge:cooked_fishes/tuna", [
    "spawn:cooked_tuna_chunk",
    "spawn:cooked_tuna_slice"
  ]);

  event.add("forge:dusts/netherrack", [
    "create:cinder_flour"
  ]);

  event.add("tidesdelight:cooked_tuna", [
    "#forge:cooked_fishes/tuna"
  ]);

  event.add("forge:silicon", [
    "gtceu:silicon_ingot"
  ]);

  event.add("kubejs:spell_scrolls"), [
    /irons_spellbooks:scroll/
  ]

  event.add("forge:raw_fishes/tuna", [
    "tide:tuna",
    "spawn:tuna_chunk",
    "spawn:tuna_slice"
  ])

  event.add("forge:raw_clam", [
    "spawn:clam"
  ])

  event.add("forge:urchin", [
    "collectorsreap:urchin",
    "lendersdelight:urchinkin",
    "spawn:sea_urchin"
  ])

  event.add("rusticdelight:cooking_oil", [
    "delightful:animal_oil_bottle",
    "alexsmobs:fish_oil"
  ])

  event.add("chipped:stripped_bamboo_log", ["minecraft:stripped_bamboo_block"]);
  event.add("chipped:stripped_crimson_log", ["#chipped:stripped_crimson_stem"]);
  event.add("chipped:stripped_snake_block_log", ["minecraft:prismarine"]);
  event.add("chipped:stripped_warped_log", ["#chipped:stripped_warped_stem"]);

  event.add("curios:head", ["gtceu:face_mask"]);
  event.add('curios:necklace', [
    'hexalia:sage_pendant',
    'evilcraft:invigorating_pendant',
    'evilcraft:primed_pendant'
  ]);
  event.add('curios:charm', [
    'hexalia:sage_pendant',
    'evilcraft:invigorating_pendant',
    'evilcraft:primed_pendant'
  ]);
  event.add('curios:ring', [
    'evilcraft:vengeance_ring'
  ])
  event.add("curios:hands", ["gtceu:rubber_gloves"]);

  event.add("twilightdelight:vension_raw", ["#forge:raw_venison"])
  event.add("twilightdelight:vension_cooked", ["#forge:cooked_venison"])

  event.add("deep_aether:skyjade_repairing", ["#forge:gems/skyjade"]);

  event.add("forge:armors", /ad_astra:jet(.*)/);

  event.add("scguns:advanced_bullet_material", [
    "gtceu:steel_ingot",
    'pneumaticcraft:ingot_iron_compressed'
  ])

  event.add("forge:dusts/saltpeter", "scguns:niter_dust")
  event.add("forge:dusts/sulfur", "scguns:sulfur_dust")

  event.add("forge:armors", /ad_astra:(.*)space(.*)/);
  // event.add("forge:tools/knives", ["#farmersdelight:tools/knives"]);
  // event.add("forge:tools/knives", /:(.*)knife(.*)/);
  event.add("forge:stripped_logs", [
    "aether:stripped_skyroot_log",
    "deep_aether:stripped_roseroot_log",
    "deep_aether:stripped_yagroot_log",
    "deep_aether:stripped_cruderoot_log",
    "deep_aether:stripped_conberry_log",
    "deep_aether:stripped_sunroot_log"
  ]);
  event.add("forge:stripped_wood", [
    "aether:stripped_skyroot_wood",
    "deep_aether:stripped_roseroot_wood",
    "deep_aether:stripped_yagroot_wood",
    "deep_aether:stripped_cruderoot_wood",
    "deep_aether:stripped_conberry_wood",
    "deep_aether:stripped_sunroot_wood"
  ]);

  event.add("forge:flour/wheat", ["gtceu:wheat_dust"]);

  event.add('farmersdelight:ropes', 'supplementaries:rope');

  event.add("minecraft:coals", ["gtceu:raw_coal", "gtceu:coal_dust", "gtceu:charcoal_dust"]);
  event.add("minecraft:planks", [
    "aether:skyroot_planks",
    "deep_aether:roseroot_planks",
    "deep_aether:yagroot_planks",
    "deep_aether:cruderoot_planks",
    "deep_aether:conberry_planks",
    "deep_aether:sunroot_planks"
  ]);
  event.add("minecraft:fence_gates", ["mynethersdelight:powdery_fence_gate", "aether:skyroot_fence_gate"]);
  event.add("minecraft:bamboo_logs", ["minecraft:bamboo_block", "minecraft:stripped_bamboo_block"]);
  event.add("minecraft:crimson_logs", ["minecraft:crimson_stem", "minecraft:crimson_hyphae", "minecraft:stripped_crimson_stem", "minecraft:stripped_crimson_hyphae"]);
  event.add("minecraft:warped_logs", ["minecraft:warped_stem", "minecraft:warped_hyphae", "minecraft:stripped_warped_stem", "minecraft:stripped_warped_hyphae"]);
  event.add("minecraft:boats", [
    "deep_aether:roseroot_boat",
    "deep_aether:yagroot_boat",
    "deep_aether:cruderoot_boat",
    "deep_aether:conberry_boat",
    "deep_aether:sunroot_boat",
    "deep_aether:roseroot_chest_boat",
    "deep_aether:yagroot_chest_boat",
    "deep_aether:cruderoot_chest_boat",
    "deep_aether:conberry_chest_boat",
    "deep_aether:sunroot_chest_boat"
  ]);

  event.add("minecraft:bookshelf_books", [
    /ars_elemental:.*caster_tome/,
    'patchouli:guide_book',
    'evilcraft:origins_of_darkness',
    'guideme:guide',
    'cookingforblockheads:recipe_book',
    'cookingforblockheads:crafting_book',
    "solcarrot:food_book",
    'eccentrictome:tome'
  ])

  event.add('kubejs:incense', /eidolon:.*_incense/);

  event.add('constructs_casting:dragon_scales', 'quark:dragon_scale'),

  event.add('forge:gems/coke', 'immersiveengineering:coal_coke');

  event.add('forge:storage_blocks/coke', 'immersiveengineering:coke');

  event.add('forge:storage_blocks/arcane_charcoal', 'malum:block_of_arcane_charcoal');

  event.add('forge:storage_blocks/charcoal', 'betterend:charcoal_block');

  event.add('irons_spellbooks:blood_focus', 'hexerei:blood_bottle');

  event.add('iss_magicfromtheeast:spirit_focus', 'netherexp:wisp_bottle');

  event.add('hexalia:crushed_herbs', /hibernalherbs:pounded.*/);

  event.add('forge:corals/alive', [
    '#create:upgrade_aquatic/coral',
    'eternal_starlight:tentacles_coral',
    'eternal_starlight:golden_coral',
    'spawn:wax_coral',
    'spawn:thorn_coral',
    'spawn:heart_coral',
    'spawn:reed_coral',
    'spawn:spike_coral'
  ])

  event.add('immersiveengineering:toolbox/tools', [
    'eccentrictome:tome'
  ]);

  event.add('forge:stripped_logs', [
    'eidolon:stripped_illwood_log'
  ])

  event.add('malum:soul_hunter_weapon', [
    'embers:tyrfing',
    /naturesaura:(sky|depth)_(sword|axe)/,
    'irons_spellbooks:boreal_blade',
    'embers:cinder_staff'
  ])

  event.add('malum:magic_capable_weapon', [
    '#goety:wands',
    'goetyawaken:potato_staff',
    '#mna:staves',
    'winds_spellbooks:wind_staff',
    '#constructs_casting:modifiable_magic',
    'ars_nouveau:wand',
    'ars_nouveau:spell_crossbow',
    'ars_nouveau:enchanters_sword',
    'ars_nouveau:enchanters_shield'
  ])

  event.add("mynethersdelight:powdery_logs", ["mynethersdelight:powdery_block", "mynethersdelight:stripped_powdery_block"]);

  //#region remove item tag
  
  event.remove('farm_and_charm:cabbage', 'farm_and_charm:lettuce');

  event.remove('forge:coal', 'immersiveengineering:coal_coke');
  event.remove('minecraft:coals', 'immersiveengineering:coal_coke');

  event.remove('forge:ingots/brick', 'supplementaries:ash_brick');

  event.remove('forge:gems/emerald', 'goety:magic_emerald')
  event.remove('forge:storage_blocks/emerald', 'goety:awakened_emerald_block')

  event.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli')

  event.remove("minecraft:planks", ["gtceu:treated_wood_plate", "gtceu:wood_plate", "createdieselgenerators:chip_wood_block"]);

  console.log('Item tags catalogued')
});