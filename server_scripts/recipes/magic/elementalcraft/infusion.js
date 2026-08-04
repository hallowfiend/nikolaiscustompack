ServerEvents.recipes(event => {
    elementalcraftRecipes.initialize(event);
    
    event.remove({ id: 'elementalcraft:infusion/drenched_iron_ingot' })
    event.remove({ id: 'elementalcraft:infusion/burnt_glass' })
    event.remove({ id: 'elementalcraft:infusion/air_silk' })
    event.remove({ id: 'elementalcraft:infusion/whiterock' })
    elementalcraftRecipes.infuse(
        "elementalcraft:drenched_iron_ingot",
        {"tag": "forge:ingots/invar"},
        500,
        "water"
    ).id('kubejs:elementalcraft/infusion/drenched_invar')
    elementalcraftRecipes.infuse(
        "elementalcraft:air_silk",
        {"item": "mna:infused_silk"},
        500,
        "air"
    ).id('kubejs:elementalcraft/infusion/aerilated_silk')
    elementalcraftRecipes.infuse(
        "elementalcraft:burnt_glass",
        {"item": "tconstruct:scorched_glass"},
        500,
        "fire"
    ).id('kubejs:elementalcraft/infusion/burnt_glass')
    elementalcraftRecipes.infuse(
        "elementalcraft:whiterock",
        {"item": "aether:holystone"},
        500,
        "earth"
    ).id('kubejs:elementalcraft/infusion/cleanstone')
})