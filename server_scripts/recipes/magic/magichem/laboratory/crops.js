ServerEvents.recipes(event => {
    magichemicalLaboratory.fireUpAlembics(event);

    //Goety
    magichemicalLaboratory.distillItemWithRequirement('goety:henbane_flower',
        [
        { "item": "magichem:admixture_witchcraft", "count": 3 },
        { "item": "magichem:essentia_air", "count": 3 },
        { "item": "magichem:admixture_plant", "count": 1 },
        { "item": "magichem:admixture_poison", "count": 1 },
        { "item": "magichem:admixture_odors", "count": 1 }
        ],
    1.0, 8, 1, "goety:goety/craft_witch_cauldron")
    magichemicalLaboratory.distillItemWithRequirement('goety:nightshade_blossom',
        [
        { "item": "magichem:admixture_witchcraft", "count": 3 },
        { "item": "magichem:admixture_darkness", "count": 3 },
        { "item": "magichem:admixture_plant", "count": 1 },
        { "item": "magichem:admixture_poison", "count": 1},
        { "item": "magichem:admixture_curse", "count": 1 }
        ],
    1.0, 8, 1, "goety:goety/craft_witch_cauldron")
    //Hexalia
    magichemicalLaboratory.distillItem('hexalia:saltsprout',
        [
        { "item": "magichem:admixture_plant", "count": 2 },
        { "item": "magichem:admixture_wastes", "count": 1 },
        { "item": "magichem:essentia_mineral", "count": 1 }
        ],
    1.0, 16, 1)
    magichemicalLaboratory.distillItem('hexalia:chillberries',
        [
        { "item": "magichem:admixture_nectar", "count": 1 },
        { "item": "magichem:admixture_cold", "count": 2 },
        { "item": "magichem:essentia_verdant", "count": 1 }
        ],
    1.0, 16, 1)
    magichemicalLaboratory.distillItemWithRequirement('hexalia:rabbage',
        [
        { "item": "magichem:essentia_earth", "count": 1 },
        { "item": "magichem:admixture_violence", "count": 1 },
        { "item": "magichem:essentia_verdant", "count": 2 }
        ],
    1.0, 16, 1, "hexalia:table_manners")
    magichemicalLaboratory.distillItemWithRequirement('hexalia:galeberries',
        [
        { "item": "magichem:admixture_nectar", "count": 1 },
        { "item": "magichem:essentia_air", "count": 2 },
        { "item": "magichem:essentia_verdant", "count": 1 }
        ],
    1.0, 16, 1, "hexalia:star_power")
    magichemicalLaboratory.distillItem('hexalia:sunfire_tomato',
        [
        { "item": "magichem:essentia_fire", "count": 2 },
        { "item": "magichem:admixture_motion", "count": 1 },
        { "item": "magichem:essentia_nourishing", "count": 1 }
        ],
    1.0, 16, 1)
})