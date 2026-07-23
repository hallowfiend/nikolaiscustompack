global.removedItems = [
  "malum:brilliant_stone",
  "malum:natural_quartz_ore",
  "malum:cthonic_gold_ore",
  "malum:deepslate_soulstone_ore",
  "malum:soulstone_ore",
  "malum:brilliant_deepslate",
  "malum:deepslate_quartz_ore",
  "malum:blazing_quartz_ore",
  "create:zinc_ore",
  "create:deepslate_zinc_ore",
  "create:raw_zinc",
  "create:raw_zinc_block",
  "create:zinc_block",
  "create:zinc_ingot",
  "create:zinc_nugget",
  "create:copper_nugget",
  "create:brass_ingot",
  "create:brass_nugget",
  "create:brass_block",
  'eidolon:pewter_blend',
  /ad_astra:.*etrium.*/,
  "ad_astra:compressor",
  "ad_astra:etrionic_blast_furnace",
  "ad_astra:coal_generator",
  "ad_astra:iron_plate",
  /ad_astra:.*ice_shard_ore.*/,
  /quark:.*limestone.*/,
  /meadow:.*limestone.*/,
  /gtceu:.*mortar.*/,
  /tconstruct:.*mortar.*/,
  /tconstruct:.*gear_cast.*/,
  "aether:enchanted_gravitite",
  /cosmere:.*blend.*/,
  "eidolon:crucible",
  "hexalia:mandrake_seeds",
  "hexalia:wild_mandrake",
  "hexalia:small_cauldron",
  "scguns:macerator",
  "scguns:powered_macerator",
  "scguns:mechanical_press",
  "scguns:powered_mechanical_press",
  'miners_delight:moss',
  "hexalia:mortar_and_pestle",
  "irons_spellbooks:alchemist_cauldron",
  /eternal_starlight:.*alloy_furnace/,
  'moreburners:electric_burner',
  'betterend:end_stone_smelter',
  /toughasnails:.*juice/,
  'sob:root_beer', //in favor of cosmopolitan's
  /vampiresdelight:.*beer.*/,
  /vampiresdelight:blood_wine.*/,
  /vampiresdelight:mulled_wine.*/,
  'largemeals:rice_pudding', //in favor of cosmopolitan's
  //ENDERIO YEET SECTION
  'enderio:xp_obelisk',
  'enderio:experience_rod',
  'enderio:experience_vacuum',
  'enderio:painting_machine',
  'enderio:alloy_smelter',
  'enderio:primitive_alloy_smelter',
  'enderio:sag_mill',
  'enderio:painting_machine',
  'enderio:enchanter',
  /enderio:.*powder.*/,
  'enderio:fluid_conduit',
  /enderio:.*grinding_ball/,
  /enderio:copper_alloy.*/,
  /enderio:redstone_alloy.*/,
  //end of enderio yeet section
  'hibernalherbs:conjuration_altar',
  'brewincompatdelight:hard_cider',
  'alexsmobsdelight:cheese',
  'tidesdelight:cheese',
  'tconstruct:cheese_ingot',
  'tconstruct:cheese_block',
  //foodstuff unification
  /twilightforest:.*venison/,
  /twilightdelight:.*venison_rib/,
  /naturalist:.*venison/,
  /culturaldelights:.*calamari/,
  /rusticdelight:.*calamari.*/,
  /oceanic_delight:.*squid_tentacles/,
  /culturaldelights:.*squid/,
  /crabbersdelight:.*squid_tentacles/,
  'tide:grilled_tuna',
  'tidesdelight:tuna_steak',
  'tidesdelight:tuna_slice',
  'sob:sculk_tendril',
  'oceanic_delight:takoyaki',
  'alexsmobsdelight:takoyaki',
  'spawn:clam_chowder',
  'crabbersdelight:clam_chowder',
  'farm_and_charm:onion_soup',
  'aquaculture:turtle_soup',
  'tidesdelight:seafood_paella',
  //end of foodstuff unification
  'elementalcraft:elementpipe_impaired',
  'sons_of_sins:iron_and_ether',
  'sosorgans:soulium_ingot'
];

global.removedRecipeIds = [
    /cosmere:.*blend.*/,
    "rusticdelight:brewing/coffee",
    "rusticdelight:coffee"
]

global.removedRecipeTypes = [
    "hexalia:small_cauldron", //flattened into hexerei cauldron
    "eidolon:crucible", //flattened into hexerei cauldron
    "scguns:macerating", //not needed
    "scguns:powered_macerating", //not needed
    "scguns:mechanical_pressing", //not needed
    "scguns:powered_mechanical_pressing", //not needed
    "hexalia:mortar_and_pestle", //flattened into hexerei mortar and pestle
    "irons_spellbooks:alchemist_cauldron", //flattened into hexerei cauldron
    'eternal_starlight:alloy', //flattened into alloy blast smelter
    'eternal_starlight:alloy_furnace_cooling', //idk what this even is tbh
    'eternal_starlight:drying', //not needed
    'betterend:anvil', //not needed
    'betterend:alloying', //flattened into alloy blast smelter
    'betterend:infusion', //flattened into goety rituals
    'enderio:alloy_smelting', //flattened into alloy smelter/abs
    'enderio:grinding_ball', //not needed
    'enderio:painting', //kinda useless
    'enderio:sag_milling', //not needed
    'enderio:enchanter', //we have a zillion magic mods to help us enchant stuff
    'hibernalherbs:herbal_conjuration', //flattened into hexalia ritual table
    'ae2:inscriber' //folded into other crafting mechanics
]

global.removedFluids = [
	"create_wizardry:mana"
];

global.removedFluids.forEach((fluid) => {
	let bucket = Item.of(Fluid.of(fluid).getFluid().getBucket());
	if (bucket.getId() != "minecraft:air") {
		global.removedItems.push(fluid + "_bucket");
	}
});