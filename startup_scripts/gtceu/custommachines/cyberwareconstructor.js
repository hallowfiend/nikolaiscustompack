GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('cyberware_constructor')
        .category('cyberware')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('human_augmentation_plant', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("Nice chrome, choom")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['cyberware_constructor'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
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
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("b", Predicates.controller(Predicates.blocks(definition.get())))
            .where("c", Predicates.blocks("gtceu:stainless_steel_frame"))

            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )

    event.create('cyberware_constructor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .langValue(`${GTValues.VLVH[tier]} Cyberware Constructor`)
                .recipeType('cyberware_constructor')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        }
    );
})