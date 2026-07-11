ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator(`delightful:matcha`)
        .itemInputs('farmersrespite:green_tea_leaves')
        .itemOutputs('minecraft:green_dye')
        .chancedOutput('delightful:matcha', '2/5', 200)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);
})