addVein("copper_vein", GTWorldGenLayers.DEEPSLATE, 25, 80, -40, -10, GTMaterials.Copper, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(5)
      .mat(GTMaterials.Chalcopyrite)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Iron)
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Pyrite)
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Copper)
      .size(1, 1));
});

addVein("diamond_vein", GTWorldGenLayers.DEEPSLATE, 25, 40, -65, -20, GTMaterials.Diamond, "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Graphite)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Diamond)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Coal)
      .size(1, 1));
});

addVein("lapis_vein", GTWorldGenLayers.DEEPSLATE, 25, 40, -60, -10, GTMaterials.Lapis, "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Lazurite)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Sodalite)
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Lapis)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Calcite)
      .size(1, 1));
});

addVein("manganese_vein", GTWorldGenLayers.DEEPSLATE, 30, 20, -30, -10, GTMaterials.Grossular, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Grossular)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Spessartine)
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Pyrolusite)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Tantalite)
      .size(1, 1));
});

addVein("mica_vein", GTWorldGenLayers.DEEPSLATE, 25, 20, -40, -10, GTMaterials.Mica, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Kyanite)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Mica)
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Bauxite)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Pollucite)
      .size(1, 1));
});

addVein("olivine_vein", GTWorldGenLayers.DEEPSLATE, 25, 20, -30, -10, GTMaterials.Olivine, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Bentonite)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Magnetite)
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Olivine)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.GlauconiteSand)
      .size(1, 1));
});

addVein("redstone_vein", GTWorldGenLayers.DEEPSLATE, 25, 60, -65, -10, GTMaterials.Redstone, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Redstone)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Ruby)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Cinnabar)
      .size(1, 1));
});

addVein("redchrome_vein", GTWorldGenLayers.DEEPSLATE, 10, 40, -65, -10, GTMaterials.Redstone, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Redstone)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Chromite)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Cinnabar)
      .size(1, 1));
});

addVein("sapphire_vein", GTWorldGenLayers.DEEPSLATE, 20, 60, -40, -10, GTMaterials.Sapphire, "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.Almandine)
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Pyrope)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Sapphire)
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.GreenSapphire)
      .size(1, 1));
});

addVein("deepslate_jade_vein", GTWorldGenLayers.DEEPSLATE, 10, 20, -40, -10, 'jade', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('jade')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('brilliance')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('quartzite')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('chromite')
      .size(1, 1));
});

addVein("fossilized_mind", GTWorldGenLayers.DEEPSLATE, 20, 20, -65, -20, 'calcite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('calcite')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('soulstone')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('brilliance')
      .size(1, 1));
});

addVein("deposited_mana", GTWorldGenLayers.DEEPSLATE, 30, 40, -65, -20, 'vinteum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('vinteum')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('inert_crystal')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('lapis')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('mithril')
      .size(1, 1));
});

addVein("cthonic_gold_vein", GTWorldGenLayers.DEEPSLATE, 60, 20, -65, -10, 'gold', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('cthonic_gold')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('gold')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('cinnabar')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('electrum')
      .size(1, 1));
});

addVein("malignant_vein", GTWorldGenLayers.DEEPSLATE, 40, 20, -65, -10, 'soulstone', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('soulstone')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('quartzite')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('galena')
      .size(1, 1));
});

addVein("mithril_vein", GTWorldGenLayers.DEEPSLATE, 20, 20, -30, -10, 'mithril', "above", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('mithril')
      .size(2, 2))
    .layer((l) => l.weight(2)
      .mat('silver')
      .size(1, 1))
    .layer((l) => l.weight(2)
      .mat('platinum')
      .size(1, 1))
    .layer((l) => l.weight(1)
      .mat('nickel')
      .size(1, 1));
});