ServerEvents.recipes(event => {
    //Cursed Metal is now made with Brass instead
    event.remove({ id: 'goety:cursed_ingot_craft' })
    event.remove({ id: 'goety:cursed_ingot_burner' })
    event.remove({ id: 'goety:cursed_metal_block_burner' })
    event.recipes.goety.cursed_infuser_recipes('create:brass_ingot', 'goety:cursed_ingot') .cookingTime(60);
    event.recipes.goety.cursed_infuser_recipes('create:brass_block', 'goety:cursed_metal_block') .cookingTime(360);
});