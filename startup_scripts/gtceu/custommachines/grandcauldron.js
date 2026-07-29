GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('grand_cauldron_mixing')
        .category('hexerei')
        .setMaxIOSize(9, 1, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.BREWER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('grand_cauldron', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:inert_machine_casing'))
        .recipeType('grand_cauldron_mixing')
        .noRecipeModifier()
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("0a00000a0", "0a00000a0", "0a0ddd0a0", "0addddda0", "0addddda0", "0allllla0", "0amdddma0")
            .aisle("a00b0b00a", "a00ddd00a", "a0ddddd0a", "addhhhdda", "addkkkdda", "all000lla", "amm000mma")
            .aisle("000000000", "00ddddd00", "0ddhhhdd0", "ddjkkkjdd", "ddkkkkkdd", "ll00000ll", "mm00000mm")
            .aisle("0b00000b0", "0ddfffdd0", "ddhhhhhdd", "dhkkkkkhd", "dkkkkkkkd", "l0000000l", "d0000000d")
            .aisle("000000000", "0ddfgfdd0", "ddhhihhdd", "dhkkikkhd", "dkkkkkkkd", "l0000000l", "d0000000d")
            .aisle("0b00000b0", "0ddfffdd0", "ddhhhhhdd", "dhkkkkkhd", "dkkkkkkkd", "l0000000l", "d0000000d")
            .aisle("000000000", "00ddddd00", "0ddhhhdd0", "ddjkkkjdd", "ddkkkkkdd", "ll00000ll", "mm00000mm")
            .aisle("a00b0b00a", "a00ddd00a", "a0ddddd0a", "addhhhdda", "addkkkdda", "all000lla", "amm000mma")
            .aisle("0a00000a0", "0a00000a0", "0a0dcd0a0", "0addddda0", "0addddda0", "0allllla0", "0amdddma0")

            .where("a", Predicates.blocks("eidolon:polished_planks_fence"))
            .where("b", Predicates.blocks("eidolon:wooden_altar"))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.blocks("gtceu:inert_machine_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1).setPreviewCount(1)))
            .where("f", Predicates.blocks("create:railway_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(2).setPreviewCount(1)))
            .where("g", Predicates.blocks("botania:alchemy_catalyst"))
            .where("h", Predicates.blocks("malum:block_of_alchemical_calx"))
            .where("i", Predicates.blocks("embers:dawnstone_block"))
            .where("j", Predicates.blocks("malum:block_of_auric_embers"))
            .where("k", Predicates.blocks("biomancy:water_gel_block"))
            .where("l", Predicates.blocks("create:railway_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1)))
            .where("m", Predicates.blocks("malum:block_of_hallowed_gold"))
            .where("0", Predicates.any())

            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/machines/brewery"
        )
})