ServerEvents.recipes(event => {
    function grandCauldronItemMixing(ingredients, fluidInput, fluidAmount, itemOutput, duration, sourceCost){
        event.recipes.gtceu.grand_cauldron_mixing(`grand_cauldron_mixing_${itemOutput.split(":")[1]}`)
        .itemInputs(ingredients)
        .inputFluid(`${fluidAmount} ${fluidInput}`)
        .inputFluid(`${sourceCost} gtceu:source_boosted_dieselixir`)
        .duration(duration)
        .itemOutputs(itemOutput)
    }
    function grandCauldronFluidMixing(ingredients, fluidInput, fluidAmount, fluidOutput, duration, sourceCost){
        event.recipes.gtceu.grand_cauldron_mixing(`grand_cauldron_mixing_${itemOutput.split(":")[1]}`)
        .itemInputs(ingredients)
        .inputFluid(`${fluidAmount} ${fluidInput}`)
        .inputFluid(`${sourceCost} gtceu:source_boosted_dieselixir`)
        .duration(duration)
        .outputFluid(`${fluidAmount} ${fluidOutput}`)
    }
})