addVein("starlight_saltpeter_vein", 'starlight_underground', 30, 80, 10, 80, 'saltpeter', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('saltpeter')
      .size(2, 5))
    .layer((l) => l.weight(2)
      .mat('diatomite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('electrotine')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('alunite')
      .size(1, 1));
});

addVein("starlit_iron_vein", 'starlight_underground', 30, 40, 10, 120, 'meteoric_iron', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('magnetite')
      .size(2, 5))
    .layer((l) => l.weight(2)
      .mat('meteoric_iron')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('vanadium_magnetite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('garnierite')
      .size(1, 1));
});

addVein("starlight_aluminium_vein", 'starlight_underground', 40, 20, 10, 80, 'kyanite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('kyanite')
      .size(2, 5))
    .layer((l) => l.weight(2)
      .mat('blue_topaz')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('scheelite')
      .size(1, 1));
});

addVein("redchrome_vein", 'starlight_depths', 80, 40, -65, -10, GTMaterials.Redstone, "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Redstone)
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Chromite)
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Cinnabar)
      .size(1, 3));
});

addVein("starcore_vein", 'starlight_depths', 20, 20, -65, -10, 'starcore', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('starcore')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('vehement_coal')
      .size(1, 3))
    .layer((l) => l.weight(2)
      .mat('spessartine')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('ember')
      .size(1, 2))
});

addVein("malarite_vein", 'starlight_depths', 5, 20, -65, -10, 'malarite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('malarite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('dark')
      .size(1, 4))
    .layer((l) => l.weight(1)
      .mat('naquadah')
      .size(1, 2));
});

addVein("deepsilver_vein", 'starlight_depths', 20, 40, -30, 0, 'deepsilver', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('deepsilver')
      .size(2, 6))
    .layer((l) => l.weight(2)
      .mat('silver')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('galena')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('molybdenum')
      .size(1, 3));
});

addVein("starlit_diamond_vein", 'starlight_depths', 40, 20, -65, -10, 'starlit_diamond', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('starlit_diamond')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('diamond')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('opal')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('inert_crystal')
      .size(1, 3));
});