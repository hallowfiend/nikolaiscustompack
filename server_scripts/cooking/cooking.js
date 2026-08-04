ServerEvents.recipes(event => {
    function monsterCookingWithContainer(ingredients, container, category, result, cookTime, xp){
        event.custom({
        "type": "dungeonsdelight:monster_cooking",
        "container": container,
        "cookingtime": cookTime,
        "experience": xp,
        "ingredients": ingredients,
        "recipe_book_tab": category,
        "result": result
    }).id(`kubejs:dungeonsdelight/monster_cooking/${result.getId().split(":")[1]}`)
    }
    function monsterCooking(ingredients, category, result, cookTime, xp){
        event.custom({
        "type": "dungeonsdelight:monster_cooking",
        "cookingtime": cookTime,
        "experience": xp,
        "ingredients": ingredients,
        "recipe_book_tab": category,
        "result": result
    }).id(`kubejs:dungeonsdelight/monster_cooking/${result.getId().split(":")[1]}`)
    }
    //Readding the aether food recipes
})