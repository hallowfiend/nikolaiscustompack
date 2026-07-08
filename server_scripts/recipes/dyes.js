// Colors
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

ServerEvents.recipes((event) => {

  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`));
  DYENAMICS_COLORS.forEach((color) => replaceInput(`dyenamics:${color}_dye`, `#forge:dyes/${color}`));

  console.log('Items sorted')
});