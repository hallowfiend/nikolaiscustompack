addVein("rutile_vein", 'moon_stone', 30, 30, 35, 50, 'bauxite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('bauxite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('ilmenite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('hematite')
      .size(1, 3));
});