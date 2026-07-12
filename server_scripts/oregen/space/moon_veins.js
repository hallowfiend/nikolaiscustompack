addVein("rutile_vein", 'moon_stone', 30, 30, 35, 60, 'rutile', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('rutile')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('ilmenite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('hematite')
      .size(1, 3));
});

addVein("anorthite_vein", 'moon_stone', 30, 30, 35, 60, 'anorthite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('anorthite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('sapphire')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('olivine')
      .size(1, 3));
});

addVein("cheese_vein", 'moon_stone', 20, 50, 40, 90, 'moon_cheese', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('moon_cheese')
      .size(2, 8))
    .layer((l) => l.weight(2)
      .mat('calcite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('salt')
      .size(1, 3));
});

addVein("desh_vein", 'moon_stone', 30, 50, -20, 40, 'desh', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('desh')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('alunite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('vanadium_magnetite')
      .size(1, 3));
});

addVein("luminite_vein", 'moon_stone', 10, 30, -50, 20, 'luminite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('luminite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('mithril')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('electrotine')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('thorianite')
      .size(1, 3));
});

addVein("meteoric_iron_vein", 'moon_stone', 10, 30, 20, 80, 'meteoric_iron', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('meteoric_iron')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('nickel')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('iron')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('invar')
      .size(1, 3));
});

addVein("moon_fluorite_vein", 'moon_stone', 10, 30, -40, 50, 'fluorite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('fluorite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('blue_topaz')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('topaz')
      .size(1, 3));
});