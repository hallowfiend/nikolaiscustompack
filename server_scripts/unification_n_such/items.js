const bulkReplace = [
	{ target: 'enlightened_end:bismuth_ingot', replacement: '#forge:ingots/bismuth'},
    { target: 'eidolon:magic_ink', replacement: 'irons_spellbooks:common_ink'},
    { target: 'mna:bone_ash', replacement: 'eidolon:enchanted_ash'},
    {target: 'hexalia:salt', replacement: '#forge:dusts/salt'},
    { target: 'eidolon:parchment', replacement: 'mna:vellum'},
    { target: 'hexalia:mandrake', replacement: 'hexerei:mandrake_root'},
    { target: 'hexalia:tree_resin', replacement: '#forge:resins'},
    { target: 'meadow:salt', replacement: "#forge:dusts/salt"},
    { target: 'eidolon:withered_heart', replacement: "#forge:wither_heart"},
    { target: 'eidolon:wraith_heart', replacement: "#forge:frigid_heart"},
    { target: 'eidolon:zombie_heart', replacement: "#forge:zombie_heart"},
    { target: 'rusticdelight:roasted_coffee_beans', replacement: "farmersrespite:coffee_beans"},
    { target: 'rusticdelight:coffee', replacement: 'farmersrespite:coffee'}
	];

ServerEvents.recipes((event) => {

  bulkReplace.forEach((group) => {
      event.replaceOutput({output: `${group.target}`}, `${group.target}`, `${group.replacement}`);
      event.replaceInput({input: `${group.target}`}, `${group.target}`, `${group.replacement}`);
  });

  console.log('Items sorted')
});

LootJS.modifiers((event) => {
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
