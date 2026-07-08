LootJS.modifiers((event) => {

    // Remove Demon's Dream
    event.addBlockLootModifier("minecraft:grass").removeLoot("occultism:datura_seeds");
    event.addBlockLootModifier("minecraft:tall_grass").removeLoot("occultism:datura_seeds");

});