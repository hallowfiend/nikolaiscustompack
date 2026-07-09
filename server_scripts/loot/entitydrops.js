LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/born_in_chaos_v1:.*/)
        .replaceLoot("born_in_chaos_v1:river_mint", "neapolitan:mint_leaves");
    event
        .addLootTableModifier(/born_in_chaos_v1:.*/)
        .replaceLoot("born_in_chaos_v1:mint_candy", "neapolitan:mint_candies");
    event
        .addLootTableModifier(/born_in_chaos_v1:.*/)
        .replaceLoot("born_in_chaos_v1:coffee_candy", "collectorsreap:coffee_gummy");
    event
        .addLootTableModifier(/born_in_chaos_v1:.*/)
        .replaceLoot("born_in_chaos_v1:mint_ice_cream", "neapolitan:mint_ice_cream");
});