//priority -100

ServerEvents.recipes(event => {
    event.forEachRecipe({type: 'brewinandchewin:fermenting'}, r =>{
        let recipe = JSON.parse(r.json)
        let ingredience = []
        recipe.ingredients.forEach(i => {
            if (i.tag) ingredience.push(`#${i.tag}`)
            if (i.item) ingredience.push(`${i.item}`)
        })
        if (recipe?.basefluid){
            event.recipes.gtceu.epic_keg(`${recipe.result.fluid.split(":")[1]}`)
            .itemInputs(ingredience)
            .outputFluids(`${recipe.result.count}x ${recipe.result.fluid}`)
            .duration(recipe.fermentingTime)
        }
        else {
            event.recipes.gtceu.epic_keg(`${recipe.result.fluid.split(":")[1]}`)
            .itemInputs(ingredience)
            .itemOutputs(`${recipe.result.count}x ${recipe.result.item}`)
            .duration(recipe.fermentingTime)
        }
    })
})