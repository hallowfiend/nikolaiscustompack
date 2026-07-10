addVein("amber_vein", 'end_lushlands', 40, 30, 20, 55, 'amber', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('amber')
      .size(2, 6))
    .layer((l) => l.weight(2)
      .mat('graphite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('citrine')
      .size(1, 1));
});

addVein("thorianite_vein", 'end_lushlands', 20, 40, 20, 55, 'thorianite', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('thorianite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('uraninite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('thorium')
      .size(1, 1));
});

addVein("end_emerald_vein", 'end_lushlands', 40, 20, 20, 55, 'emerald', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('emerald')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('turquoise')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('beryllium')
      .size(1, 1));
});

addVein("end_magnetite_vein", 'end_lushlands', 60, 40, 20, 55, 'magnetite', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('magnetite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('vanadium_magnetite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('chromite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('gold')
      .size(1, 1));
});

addVein("end_bauxite_vein", 'end_lushlands', 20, 40, 20, 60, 'bauxite', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('bauxite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('kyanite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('neodymium')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('powellite')
      .size(1, 1));
});

addVein("end_fluorite_vein", 'end_lushlands', 40, 20, 20, 55, 'fluorite', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('fluorite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('calcite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('galena')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('sphalerite')
      .size(1, 1));
});

addVein("crystallized_void", 'end_barrens', 30, 20, 5, 60, 'dark', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('dark')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('vinteum')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('soulstone')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('source')
      .size(1, 1));
});

addVein("void_sediment", 'end_lushlands', 30, 20, 5, 60, 'redstone', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('redstone')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('electrotine')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('magnesite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('cooperite')
      .size(1, 1));
});

addVein("pitchblende_vein", 'end_barrens', 40, 30, 20, 55, 'pitchblende', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('pitchblende')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('cobaltite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('uraninite')
      .size(1, 1));
});

addVein("tungsten_vein", 'end_barrens', 30, 35, 15, 80, 'wolframite', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('wolframite')
      .size(3, 4))
    .layer((l) => l.weight(2)
      .mat('scheelite')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('tungstate')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('lithium')
      .size(1, 3));
});

addVein("thallium_vein", 'end_lushlands', 30, 35, 15, 80, 'thallasium', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('thallasium')
      .size(3, 4))
    .layer((l) => l.weight(2)
      .mat('hutchinsonite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('galena')
      .size(2, 3));
});

addVein("arsenic_vein", 'end_barrens', 20, 20, 20, 55, 'realgar', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('realgar')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('cobaltite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('cobalt')
      .size(1, 1));
});