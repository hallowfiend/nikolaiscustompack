addVein("mercury_uranium_vein", 'mercury_stone', 20, 40, 10, 30, 'uraninite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('uraninite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('plutonium')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('pitchblende')
      .size(1, 3));
});

addVein("caesium_vein", 'mercury_stone', 20, 40, 10, 30, 'pollucite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('pollucite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('lepidolite')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('castorite')
      .size(1, 3));
});

addVein("phyllosilicate_vein", 'mercury_stone', 20, 40, 10, 30, 'mica', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('mica')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('talc')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('asbestos')
      .size(1, 3));
});

addVein("quicksilver_vein", 'mercury_stone', 20, 40, 10, 30, 'stibnite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('stibnite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('cinnabar')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('realgar')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('barite')
      .size(1, 3));
});

addVein("mercury_calorite_vein", 'mercury_stone', 20, 40, 10, 30, 'calorite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('calorite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('naquadah')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('utherium')
      .size(1, 3));
});

addVein("mercurial_iron", 'mercury_stone', 20, 80, -65, 20, 'pyrite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('pyrite')
      .size(3, 5))
    .layer((l) => l.weight(2)
      .mat('invar')
      .size(3, 5))
    .layer((l) => l.weight(1)
      .mat('cooperite')
      .size(1, 3));
});