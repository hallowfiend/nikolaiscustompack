ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('farmersdelight:wheat_dough')
        .itemInputs('#forge:eggs', '3x minecraft:wheat')
        .itemOutputs('farmersdelight:wheat_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('farmersdelight:wheat_dough_2')
        .itemInputs('3x minecraft:wheat')
        .inputFluids(`minecraft:water 100`)
        .itemOutputs('farmersdelight:wheat_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('farmersdelight:pie_crust')
        .itemInputs('3x minecraft:wheat')
        .inputFluids(`minecraft:milk 100`)
        .itemOutputs('farmersdelight:pie_crust')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.mixer('delightful:nut_dough')
        .itemInputs('2x #forge:nut_butter', 'minecraft:bone_meal', 'minecraft:egg')
        .itemOutputs('2x delightful:nut_dough')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu.macerator(`delightful:matcha`)
        .itemInputs('#forge:tea_leaves')
        .itemOutputs('minecraft:green_dye')
        .chancedOutput('delightful:matcha', '2/5', 200)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);
})