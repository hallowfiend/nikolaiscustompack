addVein("banded_iron_vein", 'underrock', 50, 40, 20, 40, 'goethite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('goethite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('yellow_limonite')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('hematite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('gold')
      .size(1, 3))
});

addVein("undergarden_saltpeter_vein", 'underrock', 20, 60, -65, 45, 'saltpeter', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('saltpeter')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('diatomite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('electrotine')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('alunite')
      .size(1, 3))
});

addVein("molybdenum_vein", 'underrock', 10, 20, 20, 50, 'wulfenite', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('wulfenite')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('molybdenite')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('molybdenum')
      .size(1, 4))
    .layer((l) => l.weight(1)
      .mat('tantalite')
      .size(1, 1));
});

addVein("cloggrum_vein", 'underrock', 20, 35, 5, 45, 'cloggrum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('cloggrum')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('anthralite')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('calcite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('silver')
      .size(1, 3))
});

addVein("froststeel_vein", 'underrock', 10, 20, 5, 45, 'froststeel', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('froststeel')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('bauxite')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('mica')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('pollucite')
      .size(1, 3))
});

addVein("utherium_vein", 'underrock', 20, 10, 0, 120, 'utherium', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('utherium')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('almandine')
      .size(3, 4))
    .layer((l) => l.weight(1)
      .mat('ruby')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('dark')
      .size(1, 2))
});

addVein("undergarden_cthonic_gold_vein", 'underrock', 60, 20, -65, -10, 'electrum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('cthonic_gold')
      .size(3, 4))
    .layer((l) => l.weight(2)
      .mat('electrum')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('regalium')
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat('petzite')
      .size(1, 2));
});

addVein("native_gold", 'undersediment', 40, 20, -65, -10, 'electrum', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('electrum')
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat('gold')
      .size(1, 3))
    .layer((l) => l.weight(2)
      .mat('silver')
      .size(1, 3));
});

addVein("undergarden_salts_vein", 'undersediment', 40, 80, 30, 70, GTMaterials.Salt, "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat(GTMaterials.RockSalt)
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Salt)
      .size(2, 4))
    .layer((l) => l.weight(2)
      .mat(GTMaterials.Lepidolite)
      .size(1, 3))
    .layer((l) => l.weight(1)
      .mat(GTMaterials.Spodumene)
      .size(1, 3));
});

addVein("reactive_remnants", 'undersediment', 40, 80, 0, 70, 'sal_ammoniac', "surface", (pattern) => {
  pattern
    .layer((l) => l.weight(3)
      .mat('sal_ammoniac')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('salt')
      .size(2, 3))
    .layer((l) => l.weight(2)
      .mat('trona')
      .size(2, 4))
    .layer((l) => l.weight(1)
      .mat('sodalite')
      .size(1, 4));
});

addVein("undergarden_oilsands_vein", 'undersediment', 40, 60, 0, 70, GTMaterials.Oilsands, "surface", (pattern) => {
  pattern.layer((l) => l.weight(3)
    .mat(GTMaterials.Oilsands)
      .size(4, 8))
    .layer((l) => l.weight(4)
      .mat(GTMaterials.Oilsands)
      .size(2, 2))
    .layer((l) => l.weight(1)
      .mat('coal')
      .size(1, 3));
});