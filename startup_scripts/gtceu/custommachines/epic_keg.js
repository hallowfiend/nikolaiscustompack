ItemEvents.modification(event => {
    event.modify('kubejs:mother_of_vinegar', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
        .effect(
            'collectorsreap:corrosion',
            20,
            2,
            1      
        ) 
    }
  })
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('epic_keg_fermentation')
        .category('brewinandchewin')
        .setMaxIOSize(4, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('epic_keg', 'multiblock')
        .rotationState(RotationState.ALL)
        .appearanceBlock(() => Block.getBlock('embers:sealed_planks'))
        .recipeType('epic_keg_fermentation')
        .noRecipeModifier()
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("0aaa0", "ad0da", "a000a", "ad0da", "0aaa0")
            .aisle("0bbb0", "baaab", "baaab", "baaab", "0bbb0")
            .aisle("0aaa0", "a000a", "a000a", "a000a", "0aaa0")
            .aisle("0bbb0", "bacab", "baaab", "baaab", "0bbb0")
            .aisle("0aaa0", "ad0da", "a000a", "ad0da", "0aaa0")

            .where("a", Predicates.blocks("embers:sealed_planks"))
            .where("b", Predicates.blocks("embers:reinforced_sealed_planks")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.blocks("magichem:silver_button"))
            .where("0", Predicates.any())

            .build()
        )
        .workableCasingModel(
            "embers:block/reinforced_sealed_planks",
            "gtceu:block/machines/canner"
        )
})