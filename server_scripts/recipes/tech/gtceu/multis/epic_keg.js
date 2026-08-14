//priority -100

ServerEvents.recipes(event => {
    event.forEachRecipe({type: 'brewinandchewin:fermenting'}, r =>{
        let recipe = JSON.parse(r.json)
        let ingredience = []
        recipe.ingredients.forEach(i => {
            if (i.tag) ingredience.push(`#${i.tag}`)
            if (i.item) ingredience.push(`${i.item}`)
        })
        if (recipe?.basefluid & recipe?.result?.fluid){
            event.recipes.gtceu.epic_keg(`${recipe.result.fluid.split(":")[1]}`)
            .itemInputs(ingredience)
            .inputFluids(`${recipe.basefluid.fluid} ${recipe.basefluid.count}`)
            .outputFluids(`${recipe.result.fluid} ${recipe.result.count}`)
            .duration(recipe.fermentingTime)
        }
        else {
            event.recipes.gtceu.epic_keg(`${recipe.result.item.split(":")[1]}`)
            .itemInputs(ingredience)
            .itemOutputs(`${recipe.result.count}x ${recipe.result.item}`)
            .duration(recipe.fermentingTime)
        }
    })
})