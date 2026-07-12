addVein("bismuthinite_vein", 'venus_stone', 20, 30, 20, 45, 'bismuthinite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('bismuthinite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('cassiterite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('cinnabar')
      .size(1, 3));
});

addVein("hadalite_vein", 'venus_stone', 15, 40, 20, 45, 'hadalite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('wolframite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('scheelite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('hadalite')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('calcite')
      .size(1, 3));
});

addVein("naumannite_vein", 'venus_stone', 15, 40, 10, 30, 'naumannite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('naumannite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('wulfenite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('lepidolite')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('spodumene')
      .size(1, 3));
});

addVein("venus_calorite_vein", 'venus_stone', 15, 40, 10, 30, 'calorite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('calorite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('redstone')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('cinnabar')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('pyrope')
      .size(1, 3));
});

addVein("venus_graphite_vein", 'venus_stone', 15, 40, 10, 30, 'graphite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('graphite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('diamond')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('diatomite')
      .size(1, 3));
});