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
  /ad_astra:.*etrium.*/,
  "ad_astra:compressor",
  "ad_astra:etrionic_blast_furnace",
  "ad_astra:coal_generator",
  "ad_astra:iron_plate",
  /ad_astra:.*ice_shard_ore.*/,
  /quark:.*limestone.*/,
  /meadow:.*limestone.*/,
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
  'miners_delight:moss'
];

global.removedRecipeIds = [
    /cosmere:.*blend.*/,
    "rusticdelight:brewing/coffee",
    "rusticdelight:coffee"
]

global.removedRecipeTypes = [
    "hexalia:small_cauldron",
    "eidolon:crucible",
    "scguns:macerating",
    "scguns:powered_macerating",
    "scguns:mechanical_pressing",
    "scguns:powered_mechanical_pressing"
]

global.removedFluids = [
	
];

global.removedFluids.forEach((fluid) => {
	let bucket = Item.of(Fluid.of(fluid).getFluid().getBucket());
	if (bucket.getId() != "minecraft:air") {
		global.removedItems.push(fluid + "_bucket");
	}
});