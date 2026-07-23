const blacklist = [
    
]

ServerEvent.recipes(event =>{
    event.forEachRecipe({ type: "gtceu:macerator" }, x => {
        let recipe = JSON.parse(x.json)
        if (recipe.category === 'gtceu:ore_crushing') {
            const input = recipe.itemInputs;
            const outputs = recipe.itemOutputs;
            if (!inputs || !outputs || inputs.length !== 1) return;
            if (!input?.ingredient?.tag) return;
            const oreTagSplit = input.ingredient.tag.split('/');
            if (oreTagSplit[0] === 'forge:raw_materials' && !blacklist.includes(oreTagSplit[1])) {
                const mainOutput = outputs.item[0].content;
                event.recipe.immersiveengineering.crusher(
                    `${mainOutput.count}x ${mainOutput.ingredient.item}`,
                    `1x #${input.ingredient.tag}`
                )
            }
        }
    })
})