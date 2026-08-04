ServerEvents.recipes(event => {
    function brewingWithItemsOnly(item1, item2, result, xp, brewingTime, needWater){
        event.custom({
            type: "farmersrespite:brewing",
            ingredients: [
                item1, //item or tag
                item2 //item or tag
            ],
            result: result, //item
            experience: xp, //float
            brewingTime: brewingTime, //int
            needWater: needWater //bool
        })
    }
    function specialContainerBrewing(item1, item2, result, xp, brewingTime, container){
        event.custom({
            type: "farmersrespite:brewing",
            ingredients: [
                item1, //item or tag
                item2 //item or tag
            ],
            container: container, //item
            result: result, //item
            experience: xp, //float
            brewingTime: brewingTime, //int
            needWater: false
        })
    }
    function brewingWithFluid(base, item1, item2, result, xp, brewingTime) {
        event.custom({
            type: "farmersrespite:brewing",
            base: {
                count: 1000,
                fluid: base //id
            },
            ingredients: [
                item1, //item or tag
                item2 //item or tag
            ],
            result: {
                count: 1000,
                fluid: result //id
            },
            experience: xp, //float
            cookingTime: brewingTime //int
        })
    }
    function pouring(result, fluid, container, amount) {
        let ingr = Ingredient.of(result)
        let con = container || "minecraft:glass_bottle"
        amount = amount || 250
        let c = Ingredient.of(con)
        event.custom({
            "type": "farmersrespite:kettle_pouring",
            "amount": amount,
            "container": c,
            "fluid": fluid,
            "output": ingr
        })
    }
})