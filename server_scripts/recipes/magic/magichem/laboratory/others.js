ServerEvents.recipes(event => {
    magichemicalLaboratory.fireUpAlembics(event);

    magichemicalLaboratory.distillItem('irons_spellbooks:lightning_bottle',
        [
            {'item': 'magichem:admixture_storm', 'count': 8},
            {'item': 'magichem:admixture_crystal', 'count': 1},
            {'item': 'magichem:admixture_sorcery', 'count': 1}
        ],
        1.0, 1, 3
    )
})