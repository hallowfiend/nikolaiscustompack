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
        'deeperdarker:heart_of_the_deep'
    ]);
  event.add('forge:zombie_heart', [
        'eidolon:zombie_heart',
        'reliquary:zombie_heart'
    ]);
  event.add('kubejs:crafting_claws', [
    'alexsmobs:dropbear_claw',
    'biomancy:mob_claw',
    'collectorsreap:chieftain_claw',
    'reliquary:rib_bone',
    'spawn:coastal_crab_claw',
    'cataclysm:chitin_claw',
    'crabbersdelight:crab_claw'
  ])
  event.add('collectorsreap:gummies', [
    /cosmopolitan:.*_gummy/
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
    ]);
  event.add('malum:gross_foods', [
    'minecraft:poisonous_potato',
    'alexsmobsdelight:maggot_salad',
    'alexsmobsdelight:pickled_maggots',
    'alexsmobs:maggot',
    "dungeonsdelight:gritty_flesh",
    "dungeonsdelight:brined_flesh",
    'dungeonsdelight:rotten_tripe',
    "dungeonsdelight:chicken_jockey_sandwich",
    "dungeonsdelight:shiokara",
    "dungeonsdelight:malicious_sandwich",
    "dungeonsdelight:ghoulash",
    "dungeonsdelight:bloated_baked_potato",
    "dungeonsdelight:terrine_loaf",
    "dungeonsdelight:salt_soaked_stew",
    "dungeonsdelight:soaked_skewer",
    "dungeonsdelight:rubaboo",
    "dungeonsdelight:bloody_mary",
    "dungeonsdelight:gyudon",
    "dungeonsdelight:ossobuco",
    "dungeonsdelight:monster_burger",
    "dungeonsdelight:au_rotten_potatoes",
    "dungeonsdelight:bloated_baked_potato",
    "dungeonsdelight:poisonous_poutine",
    'dungeonsdelight:sweetbread',
    "dungeonsdelight:silverfish_and_chips",
    'sob:silverfish_shingle',
    'miners_delight:silverfish_eggs',
    'dungeonsdelight:silverfish_abdomen',
    'miners_delight:weird_caviar',
    'dungeonsdelight:candied_silverfish_sucker',
    'dungeonsdelight:silverfish_fried_rice',
    'undergardendelight:scintling_stew',
    'dungeonsdelight:poi',
    'dungeonsdelight:bubblegunk',
    'dungeonsdelight:taro_milk_tea',
    'dungeonsdelight:monster_muffin',
    'dungeonsdelight:tokayaki',
    'dungeonsdelight:spider_donut',
    'dungeonsdelight:ghast_roll',
    'dungeonsdelight:spider_meat',
    'dungeonsdelight:spider_salmagundi',
    'dungeonsdelight:monster_cake',
    'dungeonsdelight:monster_cake_slice',
    'autumnity:foul_soup',
    'brewinandchewin:dread_nog',
    'brewinandchewin:red_rum',
    /farmersrespite:.*purulent_tea/,
    'alexsmobsdelight:raw_tarantula_hawk_abdomen',
    'alexsmobsdelight:raw_tarantula_hawk_larva',
    'alexsmobsdelight:slurgyfisk_open',
    'species:monster_meal',
    'eternal_starlight:pungency_stew',
    'eternal_starlight:pungency_fruit'
  ]);
  event.add('neapolitan:ice_cream', [
        'exquisito:warzipan_ice_cream',
        'twilightdelight:aurora_ice_cream',
        'twilightdelight:torchberry_ice_cream',
        'twilightdelight:phytochemical_ice_cream',
        'twilightdelight:glacier_ice_cream',
        'twilightdelight:twilight_ice_cream',
        'twilightdelight:rainbow_ice_cream',
        'twilightdelight:refreshing_ice_cream',
        'vampiresdelight:orchid_ice_cream',
        'vampiresdelight:dark_ice_cream',
        'vampiresdelight:snow_white_ice_cream',
        'goetydelight:ominous_ice_cream',
        'jadensnetherexpansiondelight:banshee_powder_ice_cream',
        /.*popsicle.*/,
        /.*snow_cone.*/,
        'goetydelight:grape_slush',
        /.*parfait.*/,
        /.*sundae.*/,
        /.*sorbet.*/,
        /.*shaved_ice.*/,
        'aethersdelight:aechor_ice_cream',
        'dungeonsdelight:aurora_ice_cream',
        'mapleful:maple_ice_cream',
        'cosmopolitan:spaghettieis'
    ]);
  event.add('coldsweat:large_cooling_foods',[
      'hexalia:chillberry_pie',
      'twilightdelight:glacier_ice_tea',
      'twilightdelight:glacier_cake',
      'twilightdelight:glacier_cake_slice',
      'arsdelight:frostaya_jelly',
      'arsdelight:frostaya_mutton',
      '#neapolitan:ice_cream',
      /jadensnetherexpansiondelight:.*wisp.*/,
      'goetydelight:ectoplasm_jelly',
      'goetydelight:ectoplasmic_melon',
      'goetydelight:polarice'
  ]);
  event.add('coldsweat:small_cooling_foods', [
        'atmospheric:aloe_gel_bottle',
        'peculiars:tropical_salad',
        'peculiars:aloe_cake',
        'hexalia:chillberries',
        'twilightdelight:twilight_spring',
        'sob:builder_smoothie',
        'delightful:strawberry_banana_smoothie',
        'exquisito:halo_halo',
        'arsdelight:frostaya_pie_slice',
        'arsdelight:neutralized_frostaya_jam',
        'jadensnetherexpansiondelight:nightspores_cheesecake',
        'jadensnetherexpansiondelight:nightspores_cheesecake_slice',
        'jadensnetherexpansiondelight:nether_hamburger',
        'ecologics:tropical_stew',
        /twilightdelight:aurora_pie.*/,
        /abnormalsdelight:mint_cake.*/,
        'sob:mint_jelly',
        'neapolitan:mint_candies',
        'neapolitan:mint_chocolate',
        'cookielicious:mint_cookie',
        'collectorsreap:mint_cannoli',
        'collectorsreap:mint_gummy',
        'peculiars:aloe_jelly_slice',
        'abnormalsdelight:dune_platter',
        'abnormalsdelight:passion_aloe_nectar',
        /collectorsreap:key_lime_pie.*/,
        /collectorsreap:lime_cake.*/,
        "collectorsreap:salmon_tartare",
        "collectorsreap:cod_ceviche",
        /neapolitan:mint_cake.*/,
        /abnormalsdelight:mint_cake.*/,
        'sob:mint_jelly',
        'sob:spiky_salad',
        'collectorsreap:lucuma_gazpacho'
    ]);
  event.add('coldsweat:large_warming_foods',[
    'mynethersdelight:fried_hoglin_chop',
    'mynethersdelight:spicy_noodle_soup',
    'mynethersdelight:plate_of_ghasta_with_cream',
    'mynethersdelight:chilidog',
    'mynethersdelight:spicy_hoglin_stew',
    'mynethersdelight:hot_wings_bucket',
    'mynethersdelight:spicy_curry',
    'mynethersdelight:rock_soup',
    'mynethersdelight:magma_cake_block',
    'mynethersdelight:magma_cake_slice',
    'mynethersdelight:hot_cream',
    'delightful:balkava',
    'delightful:baklava_slice',
    'delightful:sinigang',
    'embersdelight:spicy_meatballs',
    'culturaldelights:spicy_curry',
    'dungeonsdelight:hydra_fricassee',
    'goetydelight:boiling_blood_brew',
    'farmersrespite:blazing_chili',
    'arsdelight:bombegrante_steak',
    'arsdelight:bombegrante_pie',
    'arsdelight:bombegrante_pie_slice',
    'arsdelight:bombegrante_jelly',
    'twilightdelight:plate_of_fiery_snakes',
    'brewinandchewin:fiery_fondue',
    'twilightdelight:grilled_ghast',
    'dungeonsdelight:blazing_blood_sausage',
    /.*soup.*/,
    'tinkersdelight:ichor_salad',
    'tconstruct:magma_cake',
    'tinkersdelight:magma_cake_slice'
  ]);
  event.add('coldsweat:small_warming_foods', [
    'mynethersdelight:deviled_egg',
    'mynethersdelight:spicy_cotton',
    'mynethersdelight:sizzling_pudding',
    'mynethersdelight:stuffed_pepper',
    'mynethersdelight:spicy_skewer',
    'delightful:cactus_chili',
    'mynethersdelight:hot_wings',
    'mynethersdelight:burnt_roll',
    'mynethersdelight:hot_cream_cone',
    'sob:honey_barbecue_stick',
    'minersdelight:spicy_hoglin_stew_cup',
    'minersdelight:spicy_noodle_soup_cup',
    'minersdelight:rock_soup_cup',
    'delightful:sinigang_cup',
    'arsdelight:neutralized_bombegrante_jam',
    'jadensnetherexpansiondelight:lightspores_cheesecake',
    'jadensnetherexpansiondelight:lightspores_cheesecake_slice',
    'twilightdelight:torchberry_cookie',
    'twilightdelight:torchberry_venison_sandwich',
    'twilightdelight:glowstew',
    /twilightdelight:torchberry_pie.*/,
    /twilightdelight:torchberry_cake.*/,
    'twilightdelight:berry_stick',
    'collectorsreap:bullet_pepper_popper',
    'collectorsreap:spicy_grenadine_jelly',
    'sob:pepper_jelly'
    ]);
  event.add('coldsweat:small_warming_drinks', [
      /farmersrespite:.*coffee/,
      'cosmopolitan:dandelion_coffee',
      'farmersdelight:apple_cider',
    'respiteful:mocha_coffee',
    'respiteful:vanilla_milk_tea',
    'respiteful:adzuki_milk_tea',
    'brewincompatdelight:white_russian',
    /rusticdelight:.*coffee/,
    'brewinandchewin:red_rum',
    'arsdelight:source_berry_tea',
    'arsdelight:flashpine_tea',
    'arsdelight:bastion_tea',
    'arsdelight:mendosteen_tea',
    'jadensnetherexpansiondelight:lightspores_juice',
    'twilightdelight:torchberry_juice',
    'undergardendelight:blisterberry_juice',
    'cosmopolitan:autumn_tea',
    'cosmpolitan:mate',
    'cosmpolitan:charmed_infusion',
    'cosmopolitan:tisane'
    ])
  event.add('coldsweat:large_warming_drinks', [
    /farmersrespite:.*tea/,
    'vampiresdelight:daisy_tea',
    'vampiresdelight:orchid_tea',
    'delightful:matcha_latte',
    'delightful:azalea_tea',
    'create:builders_tea',
    'ends_delight:chorus_fruit_milk_tea',
    'ends_delight:bubble_tea',
    'ends_delight:chorus_flower_tea',
    'goetydelight:boiling_blood_brew',
    /windswept:.*tea/,
    'arsdelight:bombegrante_tea',
    /farmersrespite:.*cocoa/,
    'sob:bitter_tea',
    'twilightdelight:thorn_rose_tea',
    'twilightdelight:tear_drink',
    'unusualend:chorus_tea',
    'undergardendelight:depthflower_tea',
    /farm_and_charm:.*tea/,
    /collectorsreap:lime_green_tea/,
    /collectorsreap:pomegranate_black_tea/,
    /collectorsreap:.*vernal_purge/,
    /collectorsreap:.*limbo_brew/,
    /collectorsreap:.*sweet_recovery/,
    'brewincompatdelight:black_russian',
    'brewincompatdelight:mulled_wine',
    'sob:tequila',
    'arsdelight:bombegrante_hornbeer',
    'collectorsreap:deific_blood',
    'cosmopolitan:winter_glogg',
    'cosmopolitan:netheresso'
  ])
  event.add('coldsweat:small_cooling_drinks', [
    'respiteful:mint_green_tea',
    /farmersrespite:.*melon_juice/,
    /delightful:.*prickly_pear_juice/,
    'sob:aloe_tea',
    /dungeonsdelight:.*tea/,
    'goetydelight:spider_egg_bubble_tea',
    'sob:sunrise_seltzer',
    'brewinandchewin:saccharine_rum',
    'brewinandchewin:salty_folly',
    'collectorsreap:rose_moon',
    'sob:hard_cider',
    'brewincompatdelight:kraken_rum',
    'brewincompatdelight:brass_monkey',
    'abnormals_delight:pickerelweed_juice',
    'jadensnetherexpansiondelight:nightspores_juice',
    'sob:prickly_melomel',
    'sob:orange_juice',
    'oceanic_delight:sea_grape_juice',
    'oceanic_delight:nautilus_juice',
    'sob:cactus_juice',
    'sob:birch_beer',
    /collectorsreap:.*limeade/,
    'collectorsreap:pomegranate_smoothie',
    'collectorsreap:pomegranate_custard',
    'brewincompatdelight:mojito',
    'cosmopolitan:spring_soda',
    'cosmopolitan:greenday_juice'
  ])
  event.add('coldsweat:large_cooling_drinks', [
    'cosmpolitan:summer_cordial',
    'goetydelight:liquid_void_tea_drink',
    'arsdelight:frostaya_tea',
    /respiteful:snow_top.*/,
    'delightful:berry_matcha_latte',
    'peculiars:aloe_berry_smoothie',
    /.*milkshake.*/,
    'arsdelight:frostaya_hornbeer',
    'collectorsreap:hermits_sour',
    /cosmopolitan:.*americano/,
    'cosmopolitan:cha_jau',
    'cosmopolitan:mocha',
    'cosmopolitan:ice_cream_float',
    'cosmopolitan:black_cow'
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
  event.add('toughasnails:thirst/2_thirst_drinks', [
    /.*milkshake.*/,
    /.*popsicle.*/,
    'sob:bitter_tea',
    'brewincompatdelight:vodka_tonic',
    'brewincompatdelight:red_wine',
    'culturaldelights:cucumber',
    'culturaldelights:pickle',
    'brewincompatdelight:blue_curacao'
  ])
  event.add('toughasnails:hydration/10_hydration_drinks', [
    '#toughasnails:thirst/2_thirst_drinks'
  ])
  event.add('toughasnails:thirst/4_thirst_drinks', [
    /rusticdelight:.*coffee/,
    /respiteful:snow_top.*/,
    /.*soup.*/,
    'respiteful:mocha_coffee',
    'brewincompatdelight:black_russian',
    'brewincompatdelight:white_wine',
    'brewincompatdelight:sweet_red_wine',
    'kubejs:soulchill_absinthe'
  ])
  event.add('toughasnails:hydration/30_hydration_drinks', [
    '#toughasnails:thirst/4_thirst_drinks'
  ])
  event.add('toughasnails:thirst/5_thirst_drinks', [
    /twilightdelight:.*juice/,
    /unusualend:.*juice/,
    /betterend:.*juice/,
    /delightful.*juice/,
    /abnormals_delight:.*juice/,
    /undergardendelight:.*juice/,
    /jadensnetherexpansiondelight:.*juice/,
    /sob:.*juice/,
    /.*smoothie.*/,
    'sob:birch_beer',
    'sob:hard_cider',
    'sob:prickly_melomel',
    'sob:sunrise_seltzer',
    'sob:creeper_drink',
    'sob:pale_daiquiri',
    'sob:root_beer',
    'sob:death_drink',
    'brewincompatdelight:white_russian',
    'brewincompatdelight:mojito',
    'brewincompatdelight:kraken_rum',
    'brewincompatdelight:brass_monkey',
    'brewinandchewin:beer',
    'brewinandchewin:rice_wine',
    'brewinandchewin:mead', //vodka, tequila and withering dross give 0 thirst bc theyre too strong
    'brewinandchewin:pale_jane',
    'brewinandchewin:egg_grog',
    'brewinandchewin:glittering_grenadine',
    'brewinandchewin:saccharine_rum',
    'brewinandchewin:salty_folly',
    'brewinandchewin:bloody_mary',
    'brewinandchewin:red_rum',
    'brewinandchewin:strongroot_ale',
    'brewinandchewin:steel_toe_stout',
    'brewinandchewin:dread_nog',
    'brewincompatdelight:nut_brown_ale',
    'brewincompatdelight:boilermaker',
    'brewincompatdelight:rum',
    'ends_delight:chorus_fruit_wine',
    /undergardendelight:.*juice/,
    'dungeonsdelight:liveroot_beer',
    'cosmopolitan:black_cow',
    'abnormalsdelight:passion_aloe_nectar',
    'kubejs:red_rock_blaster',
    'kubejs:forgotten_imbibation'
  ])
  event.add('toughasnails:hydration/50_hydration_drinks', [
    '#toughasnails:thirst/5_thirst_drinks'
  ])
  event.add('toughasnails:thirst/8_thirst_drinks', [
    /goetydelight:.*tea.*/,
    /dungeonsdelight:.*tea.*/,
    'brewinandchewin:kombucha',
    'collectorsreap:lime_green_tea',
    'collectorsreap:pomegranate_black_tea',
    /windswept:.*tea/,
    /arsdelight:.*_tea/,
    'respiteful:mint_green_tea',
    'respiteful:vanilla_milk_tea',
    'respiteful:adzuki_milk_tea',
    'oceanicdelight:sea_grape_juice',
    'oceanicdelight:nautilus_juice',
    /.*limeade.*/,
    /vampiresdelight:.*tea/,
    'cosmopolitan:exotic_mirage',
    'cosmopolitan:green_beer',
    'cosmopolitan:generic_romance',
    'collectorsreap:deific_blood',
    'collectorsreap:hermits_sour',
    'collectorsreap:rose_moon',
    'collectorsreap:reanimators_garden',
    'collectorsreap:heavens_cream',
    'sob:bustling_brew',
    'delightful:ender_nectar'
  ])
  event.add('toughasnails:hydration/80_hydration_drinks', [
    '#toughasnails:thirst/8_thirst_drinks'
  ])
  event.add('toughasnails:thirst/12_thirst_drinks', [
    /arsdelight:.*hornbeer/,
    'sob:aloe_tea',
    'twilightdelight:tear_drink'
  ])
  event.add('toughasnails:hydration/100_hydration_drinks', [
    '#toughasnails:thirst/12_thirst_drinks'
  ])
  event.add("ad_astra:aeronos_logs", ["ad_astra:aeronos_cap", "ad_astra:aeronos_stem"]);
  event.add("ad_astra:strophar_logs", ["ad_astra:strophar_cap", "ad_astra:strophar_stem"]);

  event.add("forge:cookies", [
    "hexalia:galeberries_cookie"
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
    "eidolon:magic_ink",
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

  event.add("mynethersdelight:powdery_logs", ["mynethersdelight:powdery_block", "mynethersdelight:stripped_powdery_block"]);

  //#region remove item tag
  
  event.remove('farm_and_charm:cabbage', 'farm_and_charm:lettuce');

  event.remove('forge:coal', 'immersiveengineering:coal_coke');
  event.remove('minecraft:coals', 'immersiveengineering:coal_coke');

  event.remove('forge:ingots/brick', 'supplementaries:ash_brick');

  event.remove('forge:gems/emerald', 'goety:magic_emerald')
  event.remove('forge:storage_blocks/emerald', 'goety:awakened_emerald_block')

  event.remove("minecraft:planks", ["gtceu:treated_wood_plate", "gtceu:wood_plate", "createdieselgenerators:chip_wood_block"]);

  console.log('Item tags catalogued')
});