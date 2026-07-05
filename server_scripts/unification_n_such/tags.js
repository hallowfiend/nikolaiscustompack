//priority 1000

ServerEvents.tags("item", (event) => {
  const add = (tag, items) => items.forEach(item => event.add(tag, item));
  const remove = (tag, items) => items.forEach(item => event.remove(tag, item));
  //#region add item tag
  add('curios:necklace', [
        'hexalia:sage_pendant'
    ]);
  add('forge:hearts', [
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
  add('forge:zombie_heart', [
        'eidolon:zombie_heart'
    ]);
  add('forge:frigid_heart', [
        'eidolon:wraith_heart',
        'sons_of_sins:ice_heart'
    ]);
  add('forge:wither_heart', [
        'eidolon:withered_heart',
        'sosorgans:wither_skeleton_heart',
        'deeperdarker:heart_of_the_deep',
        'alexsmobs:soul_heart'
    ]);
  add('neapolitan:ice_cream', [
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
        'atmospheric:orange_sorbet',
        'goetydelight:ominous_ice_cream',
        'jadensnetherexpansiondelight:banshee_powder_ice_cream',
        'vampiresdelight:pure_sorbet',
        /.*popsicle.*/,
        /.*snow_cone.*/,
        'goetydelight:sundae_of_the_philosophers_potion',
        'goetydelight:blue_ectoplasmic_sundae',
        'goetydelight:grape_slush'
    ]);
  add('coldsweat:large_cooling_items',[
      'hexalia:chillberry_pie',
      'twilightdelight:glacier_ice_tea',
      'twilightdelight:glacier_cake',
      'twilightdelight:glacier_cake_slice'
  ]);
  add('coldsweat:small_cooling_items', [
        'hexalia:chillberries',
        'twilightdelight:twilight_spring',
        'sob:builder_smoothie',
        'delightful:strawberry_banana_smoothie',
        'exquisito:halo_halo',
        'delightful:berry_matcha_latte',
        'peculiars:aloe_berry_smoothie',
        /.*milkshake.*/
    ]);
  add('coldsweat:large_warming_items',[
    'mynethersdelight:fried_hoglin_chop'
  ]);
  add('coldsweat:small_warming_items', [
    'mynethersdelight:deviled_egg'
    ]);
  event.add("ad_astra:aeronos_logs", ["ad_astra:aeronos_cap", "ad_astra:aeronos_stem"]);
  event.add("ad_astra:strophar_logs", ["ad_astra:strophar_cap", "ad_astra:strophar_stem"]);

  event.add("forge:cookies", "hexalia:galeberries_cookie")

  event.add('farm_and_charm:cabbage', 'farmersdelight:cabbage');
  event.add('farm_and_charm:cabbage', 'farmersdelight:cabbage_leaf');

  event.add("aether:book_of_lore_materials", ["gtceu:ambrosium_gem"]);
  event.add("aether:gems/zanite", ["#forge:gems/zanite"]);
  event.add("aether:processed/gravitite", ["#forge:storage_blocks/gravitite"]);
  event.add("aether:zanite_repairing", ["#forge:gems/zanite"]);
  event.add("aether:gravitite_repairing", ["#forge:gems/gravitite"]);
  event.add("aether:obsidian_repairing", ["minecraft:obsidian"]);

  event.add("create:crushed_raw_materials", ["#forge:crushed_ores"]);

  event.add("forge:tallow", ["immersiveweathering:tallow"]);

  event.add("forge:essences/death", ["eidolon:death_essence"]);
  event.add("forge:essences/death", ["malum:rotting_essence"]);

  event.add("forge:wax", ["magichem:sealing_wax"])
  event.add("forge:wax", ["brewincompatdelight:soy_wax"])
  event.add("forge:wax", ["hexerei:wax_blend"])
  event.add("forge:wax", ["species:wicked_wax"])
  event.add("forge:wax", ["immersiveweathering:tallow"]);

  event.add("forge:resins", ["hexalia:tree_resin"]);
  event.add("forge:resins", ["minecraft:resin_clump"]);
  event.add("forge:resins", ["eidolon:merammer_resin"]);
  event.add("forge:resins", ["gtceu:sticky_resin"]);

  event.add("forge:ingots/cupronickel", ["immersiveengineering:ingot_constantan"]);
  event.add("forge:nuggets/cupronickel", ["immersiveengineering:nugget_constantan"]);
  event.add("forge:plates/cupronickel", ["immersiveengineering:plate_constantan"]);
  event.add("forge:dusts/cupronickel", ["immersiveengineering:dust_constantan"]);
  event.add("forge:storage_blocks/cupronickel", ["immersiveengineering:storage_constantan"]);

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

  event.add("c:hidden_from_recipe_viewers", [
    "ae2:facade",
    "hexalia:mandrake",
    "eidolon:magic_ink",
    "caverns_and_chasms:tether_potion",
    "caverns_and_chasms:trail_potion",
    "#tconstruct:parts",
    "elementalcraft:pure_ore"]);

  event.add("chipped:stripped_bamboo_log", ["minecraft:stripped_bamboo_block"]);
  event.add("chipped:stripped_crimson_log", ["#chipped:stripped_crimson_stem"]);
  event.add("chipped:stripped_snake_block_log", ["minecraft:prismarine"]);
  event.add("chipped:stripped_warped_log", ["#chipped:stripped_warped_stem"]);
  event.add("chipped:glass", ["aether:quicksoil_glass"]);
  event.add("chipped:glass_pane", ["aether:quicksoil_glass_pane"]);

  event.add("curios:head", ["gtceu:face_mask"]);
  event.add("curios:hands", ["gtceu:rubber_gloves"]);

  event.add("deep_aether:skyjade_repairing", ["#forge:gems/skyjade"]);

  event.add("forge:armors", /ad_astra:jet(.*)/);
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

  event.add("gbth:certus_quartz_blocks", ["ae2:smooth_quartz_block", "ae2:quartz_bricks", "ae2:quartz_pillar", "ae2:chiseled_quartz_block", "ae2:cut_quartz_block"]);

  event.add('forge:coconut','beachparty:coconut_open');

  event.add('forge:fruits/cherry','vinery:cherry');

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

  event.add("mynethersdelight:powdery_logs", ["mynethersdelight:powdery_block", "mynethersdelight:stripped_powdery_block"]);

  //#region remove item tag
  
  event.remove('farm_and_charm:cabbage', 'farm_and_charm:lettuce');

  event.remove('forge:gems/emerald', 'goety:magic_emerald')
  event.remove('forge:storage_blocks/emerald', 'goety:awakened_emerald_block')

  event.remove("minecraft:planks", ["gtceu:treated_wood_plate", "gtceu:wood_plate", "createdieselgenerators:chip_wood_block"]);

  console.log('Tags catalogued')
});