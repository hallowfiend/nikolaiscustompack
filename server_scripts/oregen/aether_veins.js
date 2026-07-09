addVein("zanite_vein", 'aether_islands', 25, 25, 16, 128, 'zanite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('zanite')
      .size(2, 5))
    .layer((l) => l.weight(2)
      .mat('barite')
      .size(2, 3))
    .layer((l) => l.weight(1)
      .mat('trona')
      .size(1, 3));
});

addVein("ambrosium_vein", 'aether_islands', 30, 25, 16, 128, 'ambrosium', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('ambrosium')
      .size(2, 5))
    .layer((l) => l.weight(2)
      .mat('diamond')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('grossular')
      .size(2, 5))
    .layer((l) => l.weight(1)
      .mat('inert_crystal')
      .size(1, 3));
})

addVein("bauxite_vein", 'aether_islands', 30, 15, 16, 128, 'bauxite', "surface", (pattern) => {
  pattern
    .layer(l => l.weight(3)
        .mat(GTMaterials.Bauxite)
        .size(2, 4))
    .layer(l => l.weight(2)
        .mat(GTMaterials.Aluminium)
        .size(1, 3))
    .layer(l => l.weight(2)
        .mat(GTMaterials.Sphalerite)
        .size(1, 3))
    .layer(l => l.weight(2)
        .mat(GTMaterials.Cinnabar)
        .size(1, 3))
})

addVein("skyjade_vein", 'aether_islands', 30, 15, 80, 128, 'skyjade', "surface", (pattern) => {
  pattern
    .layer(l => l.weight(3)
        .mat('skyjade')
        .size(2, 4))
    .layer(l => l.weight(2)
        .mat('jade')
        .size(1, 3))
    .layer(l => l.weight(2)
        .mat('chromite')
        .size(1, 3))
    .layer(l => l.weight(2)
        .mat('bauxite')
        .size(1, 3));
})

addVein("gravitite_vein", 'aether_islands', 40, 20, 80, 128, 'gravitite', "surface", (pattern) => {
  pattern
    .layer(l => l.weight(3)
        .mat('gravitite')
        .size(2, 4))
    .layer(l => l.weight(2)
        .mat('aluminium')
        .size(1, 3))
    .layer(l => l.weight(1)
        .mat('source')
        .size(1, 3));
})

addVein("aether_nickel_vein", 'aether_islands', 40, 60, 30, 70, 'garnierite', 'surface', (pattern) => {
    pattern
    .layer(l => l.weight(3)
        .mat(GTMaterials.Garnierite)
        .size(2, 4))
    .layer(l => l.weight(1)
        .mat(GTMaterials.Pentlandite)
        .size(1, 3))
    .layer(l => l.weight(2)
        .mat(GTMaterials.Nickel)
        .size(1, 3))
    .layer(l => l
        .weight(2)
        .mat(GTMaterials.Cobaltite)
        .size(1, 3));
})