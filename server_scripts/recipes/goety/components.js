ServerEvents.recipes(event => {
    //Cursed Alloy is now made with Brass instead
    event.remove({ id: 'goety:cursed_ingot_craft' })
    event.remove({ id: 'goety:cursed_ingot_burner' })
    event.recipes.goety.cursed_infuser_recipes('#forge:ingots/brass', 'goety:cursed_ingot') .cookingTime(60);
});