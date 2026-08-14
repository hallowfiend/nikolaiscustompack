ServerEvents.recipes(event => {
    magichemicalLaboratory.fireUpAlembics(event);
    //bnc
    //1 stage drinks - 30 essentia max
    magichemicalLaboratory.distillFluid('brewinandchewin:beer',
        [
          { "item": "magichem:admixture_alcohol", "count": 20 },
          { "item": "magichem:admixture_delight", "count": 7 },
          { "item": "magichem:essentia_earth", "count": 2 },
          { "item": "magichem:essentia_rotten", "count": 1 }
        ],
        1.0,
        8,
        6
    )
    magichemicalLaboratory.distillFluid('brewinandchewin:vodka',
        [
          { "item": "magichem:admixture_alcohol", "count": 20 },
          { "item": "magichem:admixture_crystal", "count": 8 },
          { "item": "magichem:essentia_air", "count": 2 }
        ],
        1.0,
        8,
        6
    )
    magichemicalLaboratory.distillFluid('brewinandchewin:mead',
        [
          { "item": "magichem:admixture_alcohol", "count": 20 },
          { "item": "magichem:admixture_nectar", "count": 8 },
          { "item": "magichem:essentia_nourishing", "count": 2 },
        ],
        1.0,
        8,
        6
    )
})