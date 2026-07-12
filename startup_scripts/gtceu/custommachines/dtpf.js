GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('dtpf')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('drunken_terraprismatic_fluxinator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:mana_reinforced_livingwood_casing'))
        .recipeType('dtpf')
        .generator(true)
        .noRecipeModifier()
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
            "kubejs:block/mana_reinforced_livingwood_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})