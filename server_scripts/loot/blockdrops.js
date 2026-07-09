LootJS.modifiers((event) => {

    // Remove Demon's Dream
    event.addBlockLootModifier("minecraft:grass").removeLoot("occultism:datura_seeds");
    event.addBlockLootModifier("minecraft:tall_grass").removeLoot("occultism:datura_seeds");

    event.addBlockLootModifier("farm_and_charm:wild_onions")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([3,5], [
        Item.of("farmersdelight:onion").withChance(50),
    ]);

    event.addBlockLootModifier("farm_and_charm:wild_tomatoes")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([3,5], [
        Item.of("farmersdelight:tomato").withChance(50),
    ]);

    event.addBlockLootModifier("farm_and_charm:wild_lettuce")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([3,5], [
        Item.of("farmersdelight:cabbage").withChance(10),
        Item.of("farmersdelight:cabbage_seeds").withChance(50)
        
    ]);

});
    