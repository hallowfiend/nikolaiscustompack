ServerEvents.recipes(event => {
    event.replaceInputID(/elementalcraft:element_holder_.*/, "elementalcraft:small_container", "ars_nouveau:mob_jar")
    event.replaceInputID(/elementalcraft:element_holder_.*/, "minecraft:gold_ingot", "#forge:plates/gold")
    event.replaceInputID(/elementalcraft:element_holder_.*/, "elementalcraft:drenched_iron_ingot", "#forge:plates/drenched_iron")

    event.remove({ output: "elementalcraft:small_container" });
})

ServerEvents.tags("item", (event) => {
		event.removeAllTagsFrom("elementalcraft:small_container");
		event.add("c:hidden_from_recipe_viewers", "elementalcraft:small_container");
});