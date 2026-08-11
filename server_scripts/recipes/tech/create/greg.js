const createMillableIngots = [
    'clay',
    'brick',
    'iron',
    'gold',
    'nickel',
    'chromium',
    'cadmium',
    'brass',
    'lead',
    'tin',
    'aluminium',
    'duralumin',
    'bendalloy',
    'nicrosil',
    'steel',
    'electrum',
    'silver',
    'copper',
    'pewter',
    'invar'
]

const createMillableGems = [
    'lapis',
    'diamond',
    'emerald',
    'flint',
    'quartzite',
    'amethyst',
    'coal',
    'charcoal',
    'coke',
    'jade',
    'nether_quartz'
]

const createSmashableIngots = [
    'nicrosil',
    'bendalloy',
    'pewter',
    'invar',
    'duralumin',
    'compressed_iron',
    'potin'
]

const createCuttableGemBlocks = [
    /* 'solid_aerialis',
    'solid_terrae',
    'solid_aqua',
    'solid_infernalis',
    'solid_arkanum',
    'solid_profanum',
    'solid_sacrum',
    'solid_xenorhast',
    'raw_will',
    'corrosive_will',
    'destructive_will',
    'vengeful_will',
    'steadfast_will', */
]

ServerEvents.recipes(event => {
    createMillableIngots.forEach(ingot => {
    event.recipes.create.milling(`gtceu:${ingot}_dust`, `#forge:ingots/${ingot}`)
    })
    createMillableGems.forEach(ingot => {
    event.recipes.create.milling(`gtceu:${ingot}_dust`, `#forge:gems/${ingot}`)
    })
    createSmashableIngots.forEach(ingot => {
    event.recipes.create.pressing(`gtceu:${ingot}_plate`, `#forge:ingots/${ingot}`)
    })
    /* event.forEachRecipe({ type: "gtceu:mixer" }, x => {
        let recipe = JSON.parse(x.json)
        let simple = {
            inputs: [],
            outputs: [],
            voltage: recipe.tickInputs.eu[0].content
        }
        if (simple.voltage <= 32) {
            if (recipe.inputs.item) {
                recipe.inputs.item.forEach(b => {
                    if (!b.content.ingredient) {
                        return
                    }
                    if (!b.content.ingredient.item) {
                        simple.inputs.push(`${Math.trunc(b.content.count)}x #${b.content.ingredient.tag}`)
                    } else {
                        simple.inputs.push(`${Math.trunc(b.content.count)}x ${b.content.ingredient.item}`)
                    }
                })
            }
            
            if (recipe.outputs.item) {
                recipe.outputs.item.forEach(b => {
                    simple.outputs.push(`${Math.trunc(b.content.count)}x ${b.content.ingredient.item}`)
                })
            }
            let fICount = 0
            let fOCount = 0
            if (recipe.inputs.fluid) {
                recipe.inputs.fluid.forEach(b => {
                    if (b.content.value) {
                        if (!b.content.value[0].fluid) {
                            simple.inputs.push({fluidTag: b.content.value[0].tag, amount: b.content.amount})
                        } else {
                            simple.inputs.push(Fluid.of(`${b.content.value[0].fluid}`,b.content.amount))
                        }
                    }
                    fICount++
                })
            }
            if (recipe.outputs.fluid) {
                recipe.outputs.fluid.forEach(b => {
                    simple.outputs.push(Fluid.of(`${b.content.value[0].fluid}`,b.content.amount))
                    fOCount++
                })
            }
            if (fICount <= 2 && fOCount <= 2) {
                event.recipes.create.mixing(simple.outputs, simple.inputs)
            }
        }    
    })
    event.forEachRecipe({ type: "gtceu:ore_washer" }, x => {
        let recipe = JSON.parse(x.json)
        if (recipe.inputs.fluid[0].content.value[0].tag == "forge:water") {
            let simple = {
                input: Ingredient.of(`#${recipe.inputs.item[0].content.ingredient.tag}`),
                outputs: []
            }
            recipe.outputs.item.forEach(b => {
                simple.outputs.push(Item.of(`${b.content.ingredient.item}`).withChance(b.chance / 10000))
            })
            event.recipes.create.splashing(simple.outputs, simple.input)
        }
    }) */
})