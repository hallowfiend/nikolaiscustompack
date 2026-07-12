addVein("ostrum_vein", 'mars_stone', 30, 30, 35, 60, 'ostrum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('ostrum')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('gypsum')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('hematite')
      .size(1, 3));
});

addVein("mars_basaltic_mineral_sand", 'mars_stone', 30, 30, 35, 60, 'ostrum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('basaltic_mineral_sand')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('kyanite')
      .size(1, 3))
    .layer((l) => l.weight(2)
      .mat('chromite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('ilmenite')
      .size(1, 3));
});

addVein("mars_dark_gem_vein", 'mars_stone', 30, 40, -10, 60, 'dark', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('dark')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('thorianite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('tantalite')
      .size(1, 3));
});

addVein("mars_phosphor_vein", 'mars_stone', 30, 40, 35, 50, 'pyrochlore', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('tricalcium_phosphate')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('pyrochlore')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('apatite')
      .size(1, 3));
});

addVein("accursed_vein", 'mars_stone', 40, 40, -10, 60, 'demonite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('iesnium')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('demonite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('soulstone')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('dark')
      .size(1, 3));
});

addVein("mars_borax_vein", 'mars_stone', 40, 40, -10, 60, 'borax', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('borax')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('salt')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('rock_salt')
      .size(1, 3));
});

addVein("mars_sands", 'mars_stone', 40, 40, 15, 80, 'basaltic_mineral_sand', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('basaltic_mineral_sand')
      .size(2, 4))
    .layer((l) => l.weight(3)
      .mat('granitic_mineral_sand')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('garnet_sand')
      .size(2, 3))
    .layer((l) => l.weight(3)
      .mat('cassiterite_sand')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('fullers_earth')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('gypsum')
      .size(2, 3));
});

addVein("mars_naquadah_vein", 'mars_stone', 20, 30, 20, 45, 'naquadah', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('naquadah')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('plutonium')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('beryllium')
      .size(2, 3));
});