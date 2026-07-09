// priority: -150
// Fetch from global store
let itemsToRemove = global.removedItems;

global.removedItems.forEach((item) => {
	// Remove all recipes that output the items in the list
	ServerEvents.recipes((event) => {
		event.remove({ output: item });
	});
	// Remove all tags from the items in the list
	ServerEvents.tags("item", (event) => {
		event.removeAllTagsFrom(item);
		event.add("c:hidden_from_recipe_viewers", item);
	});
});

ServerEvents.recipes((event) => {
	event.remove({ input: `gtceu:tools/crafting_mortars`})
	event.remove({ input: "hexalia:mortar_and_pestle"})
})

global.removedFluids.forEach((fluid) => {
	// Remove all recipes that output the fluids in the list
	ServerEvents.recipes((event) => {
		event.remove({ output: fluid });
	});
	// Remove all tags from the fluids in the list
	ServerEvents.tags("fluid", (event) => {
		event.removeAllTagsFrom(fluid);
		event.add("c:hidden_from_recipe_viewers", fluid);
	});
});

global.removedRecipeIds.forEach((id) => {
	// Remove all recipes that match the id
	ServerEvents.recipes((event) => {
		event.remove({ id: id });
	});
});

global.removedRecipeTypes.forEach((type) => {
	// Remove all recipes that match the id
	ServerEvents.recipes((event) => {
		event.remove({ type: type });
	});
});