ServerEvents.recipes(event => {
    //cardboard
    event.recipes.gtceu.mixer()
        .itemInputs('4x #create:pulpifiable')
        .itemOutputs('create:pulp')
        .inputFluids('250x minecraft:water')
        .EUt(16, 1)
        .duration(100)
    event.recipes.gtceu.compressor()
        .itemInputs('create:pulp')
        .itemOutputs('create:cardboard')
        .EUt(16, 1)
        .duration(100)
})