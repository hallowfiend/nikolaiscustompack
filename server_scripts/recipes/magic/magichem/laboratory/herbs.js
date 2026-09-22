ServerEvents.recipes(event => {
    magichemicalLaboratory.fireUpAlembics(event);

    magichemicalLaboratory.distillItem('hexalia:dreamshroom',
        [
            {'item': 'magichem:admixture_fungus', 'count': 2},
            {'item': 'magichem:admixture_sleep', 'count': 1},
            {'item': 'magichem:admixture_motion', 'count': 1},
            {'item': 'magichem:admixture_sight', 'count': 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('hexalia:spirit_bloom',
        [
            {'item': 'magichem:admixture_plant', 'count': 2},
            {'item': 'magichem:admixture_spirit', 'count': 1},
            {'item': 'magichem:admixture_breath', 'count': 1},
            {'item': 'magichem:admixture_color', 'count': 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('hexalia:ghost_fern',
        [
            {'item': 'magichem:admixture_plant', 'count': 2},
            {'item': 'magichem:admixture_spirit', 'count': 1},
            {'item': 'magichem:admixture_lies', 'count': 1},
            {'item': 'magichem:essentia_air', 'count': 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('hexalia:siren_kelp',
        [
            {'item': 'magichem:admixture_plant', 'count': 2},
            {'item': 'magichem:essentia_water', 'count': 1},
            {'item': 'magichem:admixture_protection', 'count': 1},
            {'item': 'magichem:admixture_depths', 'count': 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('hexalia:witchweed',
        [
            {'item': 'magichem:admixture_plant', 'count': 2},
            {'item': 'magichem:admixture_witchcraft', 'count': 1},
            {'item': 'magichem:admixture_poison', 'count': 1},
            {'item': 'magichem:admixture_color', 'count': 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('hexalia:lotus_blossom',
        [
            {'item': 'magichem:admixture_plant', 'count': 2},
            {'item': 'magichem:essentia_water', 'count': 1},
            {'item': 'magichem:admixture_healing', 'count': 1},
            {'item': 'magichem:admixture_light', 'count': 1}
        ],
        1.0, 4, 1
    )
    magichemicalLaboratory.distillItem('hexalia:celestial_blossom',
        [
            {'item': 'magichem:admixture_plant', 'count': 2},
            {'item': 'magichem:admixture_firmament', 'count': 2},
            {'item': 'magichem:admixture_light', 'count': 1}
        ],
        1.0, 4, 1
    )
})