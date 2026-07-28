ServerEvents.recipes(event => {
    event.remove({ id: 'sons_of_sins:soul_steel_recipe_5' })
    event.remove({ id: 'create:soul_steel_sheet_1' })
    event.remove({ id: 'create:mixing/compat/sons_of_sins/soul_steel' })

    event.recipes.create.mixing(
        '2x sons_of_sins:soul_steel', //output
        [
            'malum:processed_soulstone',
            'sons_of_sins:ether_ashes',
            '#forge:ingots/steel',
            'goety:cursed_ingot',
        ]
    ).heated()

})