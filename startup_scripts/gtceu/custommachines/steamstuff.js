GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('clockwork_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:industrial_steam_casing'))
        .recipeType('sifter')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true).recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("cbcccbc", "cbcccbc", "cbcccbc", "cbcccbc")
            .aisle("bdddddb", "beeeeeb", "befffeb", "befffeb")
            .aisle("cdgggdc", "cehhhec", "cfiiifc", "cfcccfc")
            .aisle("cdgggdc", "cehhhec", "cfiiifc", "cfcccfc")
            .aisle("cdgggdc", "cehhhec", "cfiiifc", "cfcccfc")
            .aisle("cdgggdc", "cehhhec", "cfiiifc", "cfcccfc")
            .aisle("bdddddb", "beeaeeb", "befffeb", "befffeb")
            .aisle("cbcccbc", "cbcccbc", "cbcccbc", "cbcccbc")
            
            .where("a", Predicates.controller(Predicates.blocks(definition.get())))
            .where("b", Predicates.blocks("gtceu:dawnstone_frame"))
            .where("c", Predicates.any())
            .where("d", Predicates.blocks("create:brass_casing")
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1)))
            .where("e", Predicates.blocks("immersiveengineering:sheetmetal_electrum"))
            .where("f", Predicates.blocks("gtceu:industrial_steam_casing"))
            .where("g", Predicates.blocks("gtceu:bronze_gearbox"))
            .where("h", Predicates.blocks("immersiveengineering:heavy_engineering"))
            .where("i", Predicates.blocks("caverns_and_chasms:waxed_copper_grate"))


            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/gcym/industrial_steam_casing",
            "gtceu:block/machines/sifter"
        );

        event.create('clockwork_centrifuge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:industrial_steam_casing'))
        .recipeType('centrifuge')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true).recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaaaa", "aabbbaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aabbbaa", "aaaaaaa")
.aisle("aadddaa", "abeeeba", "aafgfaa", "aafgfaa", "aafgfaa", "abeeeba", "aadddaa")
.aisle("addddda", "behiheb", "afaaafa", "afhihfa", "afaaafa", "beaaaeb", "addddda")
.aisle("addddda", "beijieb", "agajaga", "agijiga", "agajaga", "beajaeb", "addddda")
.aisle("addddda", "behiheb", "afaaafa", "afhihfa", "afaaafa", "beaaaeb", "addddda")
.aisle("aadcdaa", "abeeeba", "aafgfaa", "aafgfaa", "aafgfaa", "abeeeba", "aadddaa")
.aisle("aaaaaaa", "aabbbaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aabbbaa", "aaaaaaa")

.where("a", Predicates.any())
.where("b", Predicates.blocks("gtceu:dawnstone_frame"))
.where("c", Predicates.controller(Predicates.blocks(definition.get())))
.where("d", Predicates.blocks("gtceu:industrial_steam_casing")
.or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1)))
.where("e", Predicates.blocks("create:brass_casing"))
.where("f", Predicates.blocks("immersiveengineering:sheetmetal_electrum"))
.where("g", Predicates.blocks("immersiveengineering:insulating_glass"))
.where("h", Predicates.blocks("immersiveengineering:light_engineering"))
.where("i", Predicates.blocks("immersivetechnology:barrel_steel"))
.where("j", Predicates.blocks("magichem:signalite_block"))


            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/gcym/industrial_steam_casing",
            "gtceu:block/machines/centrifuge"
        );
})