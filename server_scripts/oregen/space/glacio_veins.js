addVein("mixed_isogen_vein", 'glacio_stone', 40, 30, 10, 30, 'froststeel', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('froststeel')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('lemite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('electrotine')
      .size(1, 3));
});

addVein("pure_isogen_vein", 'glacio_stone', 10, 40, 10, 40, 'lemite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('lemite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('fluorite')
      .size(1, 3));
});

addVein("gypsum_vein", 'glacio_stone', 50, 45, 10, 30, 'gypsum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('gypsum')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('sulfur')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('zeolite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('trona')
      .size(1, 3));
});

addVein("glacio_platinum_vein", 'glacio_stone', 20, 50, -10, 30, 'cooperite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('nickel')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('platinum')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('cooperite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('palladium')
      .size(1, 3));
});

addVein("glacio_naquadah_vein", 'glacio_stone', 30, 60, -45, 20, 'naquadah', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('naquadah')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('inert_crystal')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('barite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('vanadium_magnetite')
      .size(1, 3));
});