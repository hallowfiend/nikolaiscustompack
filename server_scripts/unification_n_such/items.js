//priority 900

const bulkReplace = [
    { target: 'eidolon:magic_ink', replacement: 'irons_spellbooks:common_ink'},
    { target: 'irons_spellbooks:blood_vial', replacement: 'hexerei:blood_bottle'},
    { target: 'eidolon:parchment', replacement: 'mna:vellum'},
    { target: 'hexalia:mandrake', replacement: 'hexerei:mandrake_root'},
    { target: 'hexalia:salt', replacement: '#forge:salt'},
    { target: 'farm_and_charm:chicken_parts', replacement: 'farmersdelight:chicken_cuts'},
    { target: 'farm_and_charm:raw_pasta', replacement: 'farmersdelight:raw_pasta'},
    { target: 'farm_and_charm:minced_beef', replacement: 'farmersdelight:minced_beef'},
    { target: 'farm_and_charm:lamb_ham', replacement: 'farmersdelight:mutton_chops'},
    { target: 'farm_and_charm:raw_bacon', replacement: 'farmersdelight:raw_bacon'},
    { target: 'farm_and_charm:dough', replacement: 'farmersdelight:wheat_dough'},
    { target: 'gtceu:dough', replacement: 'farmersdelight:wheat_dough'},
    { target: 'create:dough', replacement: 'farmersdelight:wheat_dough'},
    { target: 'farm_and_charm:flour', replacement: 'farmersdelight:wheat_flour'},
    { target: 'cornexpansion:corn_dough', replacement: 'culturaldelights:corn_dough'},
    { target: 'eidolon:withered_heart', replacement: "#forge:wither_heart"},
    { target: 'eidolon:wraith_heart', replacement: "#forge:frigid_heart"},
    { target: 'eidolon:zombie_heart', replacement: "#forge:zombie_heart"},
    { target: 'rusticdelight:roasted_coffee_beans', replacement: "farmersrespite:coffee_beans"},
    { target: 'rusticdelight:coffee', replacement: 'farmersrespite:coffee'},
    { target: 'create:wheat_flour', replacement: '#forge:flour/wheat'},
    { target: "enderio:wood_gear", replacement: "gtceu:andesite_alloy_gear"},
    { target: "enderio:stone_gear", replacement: "gtceu:bakelite_gear"},
    { target: "enderio:iron_gear", replacement: "gtceu:soul_stained_steel_gear"},
    { target: "enderio:energized_gear", replacement: "gtceu:energetic_alloy_gear"},
    { target: "enderio:vibrant_gear", replacement: "gtceu:vibrant_alloy_gear"},
    { target: "enderio:dark_bimetal_gear", replacement: "gtceu:dark_steel_gear"},
    { target: "tidesdelight:tuna_slice", replacement: "spawn:tuna_slice"},
    { target: "tide:grilled_tuna", replacement: "spawn:cooked_tuna_chunk"},
    { target: "#tidesdelight:cooked_tuna", replacement: "#forge:cooked_fishes/tuna"},
    { target: "sob:sculk_tendril", replacement: "dungeonsdelight:sculk_polyp"},
    //wire unification
    { target: "immersiveengineering:wire_copper", replacement: "gtceu:copper_single_wire"},
    { target: "immersiveengineering:wire_electrum", replacement: "gtceu:electrum_single_wire"},
    { target: "immersiveengineering:wire_aluminum", replacement: "gtceu:aluminium_single_wire"},
    { target: "immersiveengineering:wire_steel", replacement: "gtceu:steel_single_wire"},
    { target: "immersiveengineering:wire_lead", replacement: "gtceu:lead_single_wire"},
    { target: "createaddition:iron_wire", replacement: "gtceu:iron_single_wire"},
    { target: "createaddition:gold_wire", replacement: "gtceu:gold_single_wire"},
    //wire unification end
    { target: "iss_magicfromtheeast:red_string", replacement: "botania:red_string"},
    { target: "iss_magicfromtheeast:bottle_of_souls", replacement: "netherexp:wisp_bottle"},
    { target: "immersiveengineering:electron_tube", replacement: "gtceu:vacuum_tube"},
    { target: "collectorsreap:urchin", replacement: "#forge:urchin"},
    { target: "alexsmobs:fish_oil", replacement: "#rusticdelight:cooking_oil"},
    { target: "hexalia:silk_fiber", replacement: "betterend:silk_fiber"},
    { target: "goety:ice_cube", replacement: "neapolitan:ice_cubes"},
    { target: "create:bar_of_chocolate", replacement: "neapolitan:chocolate_bar"},
    { target: "twilightforest:cooked_venison", replacement: "#forge:cooked_venison"},
    { target: "scguns:pebbles", replacement: "twigs:pebble"},
    { target: "supplementaries:ash", replacement: "#forge:ash"},
    { target: "naturalist:venison", replacement: "environmental:venison"},
    { target: "cornexpansion:corn_dough", replacement: "culturaldelights:corn_dough"},
    { target: "moredelight:diced_potatoes", replacement: "cosmopolitan:cut_potatoes"},
    { target: "gtceu:treated_wood_planks", replacement: "immersiveengineering:treated_wood_horizontal"},
    { target: 'aether:enchanted_gravitite', replacement: "#forge:storage_blocks/gravitite"},
    { target: "#forge:gears/energized", replacement: "#forge:gears/energetic_alloy"},
    { target: "aquaculture:fish_fillet_raw", replacement: "tide:fish_slice"},
    { target: "aquaculture:fish_fillet_cooked", replacement: "tide:cooked_fish_slice"},
    { target: 'vampirism:injection_empty', replacement: 'scguns:syringe'}
	];

ServerEvents.recipes((event) => {

  const replaceInput = (from, to) => {event.replaceInput({}, from, to)};
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)};

  // Replace inputs / outputs by recipe ID.
  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)};
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)};

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)};
  const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)};

  bulkReplace.forEach((group) => {
      replaceOutput(group.target, group.replacement)
      replaceInput(group.target, group.replacement)
  });

  const COLORS = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];
const DYENAMICS_COLORS = [
    'honey',
    'lavender',
    'navy',
    'bubblegum',
    'amber',
    'conifer',
    'icy_blue',
    'ultramarine',
    'maroon',
    'rose',
    'fluorescent',
    'spring_green',
    'cherenkov',
    'aquamarine',
    'persimmon',
    'wine',
    'mint',
    'peach'
]

  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`));
  DYENAMICS_COLORS.forEach((color) => replaceInput(`dyenamics:${color}_dye`, `#forge:dyes/${color}`));

    // EnderIO
    event.remove({ output: ["enderio:conduit", "enderio:energy_conduit", "enderio:plant_matter_green", "enderio:plant_matter_brown", "enderio:clayed_glowstone", "enderio:flour", "enderio:organic_green_dye", "enderio:organic_brown_dye", "enderio:industrial_insulation_block"] })

    // EnderIO (grinding balls)
    event.remove({ output: ["enderio:soularium_grinding_ball", "enderio:conductive_alloy_grinding_ball", "enderio:pulsating_alloy_grinding_ball", "enderio:redstone_alloy_grinding_ball", "enderio:energetic_alloy_grinding_ball", "enderio:vibrant_alloy_grinding_ball", "enderio:copper_alloy_grinding_ball", "enderio:dark_steel_grinding_ball", "enderio:end_steel_grinding_ball"] })

    event.replaceInput({},  'oceanic_delight:egg_roll', 'culturaldelights:egg_roll')
    event.replaceOutput({}, 'oceanic_delight:egg_roll', 'culturaldelights:egg_roll')

    event.replaceInput({},  'rusticdelight:calamari_roll', 'culturaldelights:calamari_roll')
    event.replaceOutput({}, 'rusticdelight:calamari_roll', 'culturaldelights:calamari_roll')

    event.replaceOutput({input: 'spawn:tuna_slice', id: "spawn:cooked_tuna_slice"}, 'spawn:cooked_tuna_chunk', 'spawn:cooked_tuna_slice')


  console.log('Items sorted')
});
