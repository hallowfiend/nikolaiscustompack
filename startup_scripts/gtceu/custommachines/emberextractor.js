GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('ember_extraction')
        .category('embers')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.IN_SLOT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COKE_OVEN, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('thermomechanical_ember_extractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('embers:ashen_brick'))
        .recipeType('ember_extraction')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true).recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("dbd", "dfd", "0f0", "000", "000")
            .aisle("bab", "faf", "faf", "0g0", "0h0")
            .aisle("dbd", "dcd", "0f0", "000", "000")

            .where("a", Predicates.blocks("sons_of_sins:soul_steel_block"))
            .where("b", Predicates.blocks("gtceu:bronze_pipe_casing")
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1)))
            .where("d", Predicates.blocks("embers:caminite_bricks"))
            .where("f", Predicates.blocks("embers:ashen_brick"))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("g", Predicates.blocks("embers:dawnstone_block"))
            .where("h", Predicates.blocks("embers:ember_funnel"))
            .where("0", Predicates.any())

            .build()
        )
        .workableCasingModel(
            "embers:block/ashen_brick",
            "gtceu:block/machines/rock_crusher"
        )
})