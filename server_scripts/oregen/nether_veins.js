addVein("nether_certus_vein", 'nether_stones', 20, 30, 80, 120, 'certus_quartz', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('certus_quartz')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('quartzite')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('barite')
      .size(1, 1));
});

addVein("nether_saltpeter_vein", 'nether_stones', 20, 30, 5, 45, 'saltpeter', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('saltpeter')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('diatomite')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('electrotine')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('alunite')
      .size(1, 1));
});

addVein("pyrite_vein", 'nether_stones', 100, 40, 80, 120, 'pyrite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('pyrite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('sphalerite')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('blazing_quartz')
      .size(1, 1));
});

addVein("beryllium_vein", 'nether_stones', 30, 20, 5, 30, 'beryllium', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('beryllium')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('emerald')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('thorium')
      .size(1, 1));
});

addVein("manganese_vein", 'nether_stones', 20, 20, 20, 30, 'grossular', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('grossular')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('pyrolusite')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('tantalite')
      .size(1, 1));
});

addVein("monazite_vein", 'nether_stones', 15, 18, 20, 30, 'monazite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('monazite')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('bastnasite')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('neodymium')
      .size(1, 1));
});

addVein("nether_quartz_vein", 'nether_stones', 60, 80, 20, 30, 'nether_quartz', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('nether_quartz')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('quartzite')
      .size(1, 1));
});

addVein("cobaltite_vein", 'nether_stones', 20, 40, 20, 30, 'cobaltite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('cobaltite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('electrotine')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('vinteum')
      .size(1, 1));
});

addVein("tetrahedrite_vein", 'nether_stones', 70, 20, 80, 120, 'tetrahedrite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('tetrahedrite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('copper')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('stibnite')
      .size(1, 1));
});

addVein("nether_nickel_vein", 'nether_stones', 20, 60, 20, 30, 'garnierite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('garnierite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('nickel')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('cobaltite')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('pentlandite')
      .size(1, 1));
});

addVein("seething_brimstone", 'nether_stones', 10, 20, 40, 120, 'blazing_quartz', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('sulfur')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('blazing_quartz')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('ember')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('vehement_coal')
      .size(1, 1));
});

addVein("condensed_brimstone", 'nether_stones', 10, 20, 40, 120, 'tricalcium_phosphate', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('tricalcium_phosphate')
      .size(4, 8))
    .layer((l) => l.weight(2)
      .mat('anthralite')
      .size(1, 2))
    .layer((l) => l.weight(2)
      .mat('vehement_coal')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('blazing_quartz')
      .size(1, 1));
});

addVein("lost_obols", 'nether_sediment', 10, 20, 5, 120, 'gold', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('gold')
      .size(4, 8))
    .layer((l) => l.weight(2)
      .mat('silver')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('electrum')
      .size(1, 1));
});

addVein("loose_brimstone", 'nether_sediment', 20, 60, 40, 120, 'gold', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('sulfur')
      .size(4, 8))
    .layer((l) => l.weight(2)
      .mat('blazing_quartz')
      .size(1, 2))
    .layer((l) => l.weight(1)
      .mat('vehement_coal')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('tricalcium_phosphate')
      .size(1, 1));
});