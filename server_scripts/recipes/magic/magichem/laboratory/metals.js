ServerEvents.recipes(event => {
    magichemicalLaboratory.fireUpAlembics(event);
    //INGOTS only im not distilling fucking everything :skull:
    //base metals
    magichemicalLaboratory.distillItem('gtceu:zinc_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_permanence", "count": 1 }
        ],
        1.0, 8, 0
    )
    magichemicalLaboratory.distillItem('gtceu:silver_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_trap", "count": 1 },
          { "item": "magichem:essentia_precious", "count": 2 }
        ],
        1.0, 8, 0
    )
    magichemicalLaboratory.distillItem('gtceu:tin_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_instrument", "count": 1 },
          { "item": "magichem:admixture_crystal", "count": 2 }
        ],
        1.0, 8, 0
    )
    magichemicalLaboratory.distillItem('gtceu:lead_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_poison", "count": 2 },
          { "item": "magichem:admixture_realm", "count": 1 }
        ],
        1.0, 8, 0
    )
    magichemicalLaboratory.distillItem('gtceu:platinum_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_industry", "count": 1 },
          { "item": "magichem:essentia_precious", "count": 4 }
        ],
        1.0, 8, 3
    )
    magichemicalLaboratory.distillItem('gtceu:aluminium_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_instrument", "count": 1 },
          { "item": "magichem:admixture_motion", "count": 1 }
        ],
        1.0, 8, 1
    )
    magichemicalLaboratory.distillItem('gtceu:chromium_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_potential", "count": 2 },
          { "item": "magichem:admixture_motion", "count": 1 }
        ],
        1.0, 8, 2
    )
    magichemicalLaboratory.distillItem('gtceu:antimony_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_protection", "count": 1 },
          { "item": "magichem:essentia_precious", "count": 1 }
        ],
        1.0, 8, 3
    )
    magichemicalLaboratory.distillItem('gtceu:nickel_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_change", "count": 1 }
        ],
        1.0, 8, 0
    )
    magichemicalLaboratory.distillItem('gtceu:osmium_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_stone", "count": 2 },
          { "item": "magichem:essentia_albedo", "count": 1 }
        ],
        1.0, 8, 3
    )
    magichemicalLaboratory.distillItem('gtceu:iridium_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:admixture_mountains", "count": 2 },
          { "item": "magichem:essentia_precious", "count": 8 },
          { "item": "magichem:essentia_albedo", "count": 1 }
        ],
        1.0, 8, 3
    )
    magichemicalLaboratory.distillItem('gtceu:sodium_dust',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:essentia_water", "count": 1 },
          { "item": "magichem:admixture_potential", "count": 1 },
          { "item": "magichem:admixture_acid", "count": 1 }
        ],
        1.0, 8, 0
    )
    magichemicalLaboratory.distillItem('gtceu:calcium_dust',
        [
          { "item": "magichem:admixture_metal", "count": 2 },
          { "item": "magichem:essentia_earth", "count": 1 },
          { "item": "magichem:admixture_permanence", "count": 1 },
          { "item": "magichem:admixture_bone", "count": 1 }
        ],
        1.0, 8, 0
    )
    //simple alloys
    magichemicalLaboratory.distillItem('gtceu:bronze_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_instrument", "count": 3 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('gtceu:red_alloy_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_signals", "count": 2 },
          { "item": "magichem:admixture_motion", "count": 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('gtceu:brass_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_permanence", "count": 2 },
          { "item": "magichem:admixture_instrument", "count": 1 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('gtceu:potin_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_vessel", "count": 3 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('gtceu:steel_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_industry", "count": 3 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('eidolon:pewter_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_realm", "count": 1 },
          { "item": "magichem:admixture_permanence", "count": 1 },
          { "item": "magichem:admixture_protection", "count": 1 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('gtceu:sterling_silver_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_industry", "count": 2 },
          { "item": "magichem:essentia_precious", "count": 1 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('gtceu:electrum_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_energy", "count": 2 },
          { "item": "magichem:essentia_precious", "count": 1 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('immersiveengineering:ingot_constantan',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_permanence", "count": 2 },
          { "item": "magichem:essentia_fire", "count": 1 }
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('cosmere:duralumin_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_comfort", "count": 2 },
          { "item": "magichem:admixture_energy", "count": 1 }
        ],
        1.0, 4, 1
    )
    //complex alloys
    magichemicalLaboratory.distillItem('cosmere:nicrosil_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 6 },
          { "item": "magichem:admixture_crystal", "count": 4 },
          { "item": "magichem:admixture_energy", "count": 2 }
        ],
        1.0, 2, 2
    )
    magichemicalLaboratory.distillItem('cosmere:bendalloy_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 6 },
          { "item": "magichem:essentia_nourishing", "count": 4 },
          { "item": "magichem:admixture_change", "count": 2 }
        ],
        1.0, 2, 2
    )
    magichemicalLaboratory.distillItem('gtceu:cupronickel_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_energy", "count": 1 },
          { "item": "magichem:essentia_fire", "count": 1 },
          { "item": "magichem:admixture_industry", "count": 1 }
        ],
        1.0, 2, 2
    )
    magichemicalLaboratory.distillItem('gtceu:stainless_steel_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 6 },
          { "item": "magichem:admixture_permanence", "count": 4 },
          { "item": "magichem:admixture_industry", "count": 2 }
        ],
        1.0, 2, 2
    )
    magichemicalLaboratory.distillItem('gtceu:tin_alloy_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 4 },
          { "item": "magichem:admixture_travel", "count": 2 },
          { "item": "magichem:admixture_breath", "count": 1 }
        ],
        1.0, 2, 2
    )
    magichemicalLaboratory.distillItem('embers:dawnstone_ingot',
        [
          { "item": "magichem:admixture_metal", "count": 6 },
          { "item": "magichem:essentia_fire", "count": 2 },
          { "item": "magichem:admixture_industry", "count": 2 },
          { "item": "magichem:admixture_light", "count": 2 }
        ],
        1.0, 2, 2
    )
})