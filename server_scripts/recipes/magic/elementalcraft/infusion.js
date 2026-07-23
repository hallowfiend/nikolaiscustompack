ServerEvents.recipes(event => {
    elementalcraftRecipes.initialize(event);
    
    event.remove({ id: 'elementalcraft:infusion/drenched_iron_ingot' })
    event.remove({ id: 'elementalcraft:infusion/burnt_glass' })
    event.remove({ id: 'elementalcraft:infusion/air_silk' })
    elementalcraftRecipes.infuse(
        "elementalcraft:drenched_iron_ingot",
        "#forge:ingots/invar",
        500,
        "water"
    )
    elementalcraftRecipes.infuse(
        "elementalcraft:air_silk",
        "mna:infused_silk",
        500,
        "air"
    )
    elementalcraftRecipes.infuse(
        "elementalcraft:burnt_glass",
        "tconstruct:seared_glass",
        500,
        "fire"
    )
})