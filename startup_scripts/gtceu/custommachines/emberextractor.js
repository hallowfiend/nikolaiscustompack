/* GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('ember_extraction')
        .category('embers')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_BRONZE)
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
            .aisle("d###d", "dbbbd", "dhhhd", "dhhhd", "jjkjj", "m###m")
            .aisle("#aba#", "bfffb", "hiiih", "hiiih", "jjjjj", "#####")
            .aisle("#bbb#", "bfgfb", "higih", "higih", "kjjjk", "#####")
            .aisle("#aba#", "bfffb", "hiiih", "hiiih", "jjjjj", "#####")
            .aisle("d###d", "dblbd", "dhhhd", "dhhhd", "jjkjj", "m###m")

            .where("a", Predicates.blocks("botania:glimmering_livingwood"))
            .where("b", Predicates.blocks("kubejs:mana_reinforced_livingwood_casing")
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1).setPreviewCount(1)))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.blocks("botania:stripped_livingwood_log"))
            .where("f", Predicates.blocks("biomancy:fibrous_flesh"))
            .where("g", Predicates.blocks("biomancy:tubular_flesh"))
            .where("h", Predicates.blocks("botania:bifrost_perm"))
            .where("i", Predicates.blocks("botania:terrasteel_block"))
            .where("j", Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1)))
            .where("k", Predicates.blocks("botania:stripped_livingwood_stairs"))
            .where('l', Predicates.controller(Predicates.blocks(definition.get())))
            .where("m", Predicates.blocks("botania:prism"))
            .where("#", Predicates.any())

            .build()
        )
        .workableCasingModel(
            "embers:block/ashen_brick",
            "gtceu:block/machines/rock_crusher"
        )
}) */