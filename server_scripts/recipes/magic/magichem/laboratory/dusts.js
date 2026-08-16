ServerEvents.recipes(event =>{
    magichemicalLaboratory.fireUpAlembics(event);
    magichemicalLaboratory.distillItem('gtceu:electrotine_dust',
        [
            { "item": "magichem:admixture_dust", "count": 2 },
            { "item": "magichem:admixture_storm", "count": 1 },
            { "item": "magichem:admixture_potential", "count": 1 }
        ],
        1.0, 16, 1
    )   
})