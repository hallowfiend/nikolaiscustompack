/* GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('dtpf')
        .category('powergen')
        .setEUIO('out')
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('drunken_terraprismatic_fluxinator', 'multiblock')
        ["tooltips(java.util.List)"]
        ([Component.literal("Don't order your DTPF from Temu")])
        ([Component.literal("Generates EU from alcoholic drinks. More complex alcohols are more efficient.")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => GTBlocks.CASING_STAINLESS_CLEAN.get())
        .recipeTypes(['dtpf'])
        .recipeModifiers([
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaa", "aaa", "aaa")
            .aisle("aaa", "aca", "aaa")
            .aisle("aaa", "aca", "aaa")
            .aisle("aaa", "aca", "aaa")
            .aisle("aaa", "aca", "aaa")
            .aisle("aaa", "aca", "aaa")
            .aisle("aaa", "aba", "aaa")

            .where("a", Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(1)))
            .where("b", Predicates.controller(Predicates.blocks(definition.get())))
            .where("c", Predicates.blocks("gtceu:stainless_steel_frame"))

            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
}) */