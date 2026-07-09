//priority 900

const bulkReplace = [
    { target: 'eidolon:magic_ink', replacement: 'irons_spellbooks:common_ink'},
    { target: 'mna:bone_ash', replacement: 'eidolon:enchanted_ash'},
    { target: 'irons_spellbooks:blood_vial', replacement: 'hexerei:blood_bottle'},
    { target: 'eidolon:parchment', replacement: 'mna:vellum'},
    { target: 'hexalia:mandrake', replacement: 'hexerei:mandrake_root'},
    { target: 'eidolon:withered_heart', replacement: "#forge:wither_heart"},
    { target: 'eidolon:wraith_heart', replacement: "#forge:frigid_heart"},
    { target: 'eidolon:zombie_heart', replacement: "#forge:zombie_heart"},
    { target: 'rusticdelight:roasted_coffee_beans', replacement: "farmersrespite:coffee_beans"},
    { target: 'rusticdelight:coffee', replacement: 'farmersrespite:coffee'},
    { target: 'create:wheat_flour', replacement: '#forge:flour/wheat'},
    { target: "immersiveengineering:ingot_constantan", replacement: "#forge:ingots/cupronickel"},
    { target: "immersiveengineering:nugget_constantan", replacement: "#forge:nuggets/cupronickel"},
    { target: "immersiveengineering:plate_constantan", replacement: "#forge:plates/cupronickel"}
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

  console.log('Items sorted')
});
