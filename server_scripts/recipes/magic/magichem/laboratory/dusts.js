ServerEvents.recipes(event =>{
    magichemicalLaboratory.fireUpAlembics(event);
    magichemicalLaboratory.distillItem('gtceu:electrotine_dust',
        [
            { "item": "magichem:admixture_dust", "count": 2 },
            { "item": "magichem:admixture_storm", "count": 1 },
            { "item": "magichem:admixture_potential", "count": 1 }
        ],
        1.0, 6, 1
    )
    magichemicalLaboratory.distillItem('gtceu:salt_dust',
        [
            { "item": "magichem:admixture_dust", "count": 2 },
            { "item": "magichem:essentia_water", "count": 1 },
            { "item": "magichem:admixture_protection", "count": 1 }
        ],
        0.5, 6, 1
    )
    magichemicalLaboratory.distillItem('gtceu:stone_dust',
        [
            { "item": "magichem:admixture_dust", "count": 3 },
            { "item": "magichem:admixture_stone", "count": 3 }
        ],
        0.3125, 4, 0
    )
    magichemicalLaboratory.distillItemWithRequirement('gtceu:netherrack_dust',
        [
            { "item": "magichem:admixture_dust", "count": 3 },
            { "item": "magichem:admixture_stone", "count": 1 },
            { "item": "magichem:admixture_hells", "count": 3 },
        ],
        0.3125, 4, 0,
        "minecraft:story/enter_the_nether"
    )
    magichemicalLaboratory.distillItem('gtceu:deepslate_dust',
        [
            { "item": "magichem:admixture_dust", "count": 3 },
            { "item": "magichem:admixture_stone", "count": 1 },
            { "item": "magichem:admixture_darkness", "count": 1 },
            { "item": "magichem:admixture_mountains", "count": 1 }
        ],
        0.3125, 4, 0
    )
})