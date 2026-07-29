ServerEvents.recipes((event) => {
    const pureFuels = [
        {fuel: "#forge:storage_blocks/charcoal", mult: 1},
        {fuel: "#forge:storage_blocks/coke", mult: 2},
        {fuel: "#forge:storage_blocks/arcane_charcoal", mult: 4},
        {fuel: "#forge:storage_blocks/ichorfuel", mult: 12}
    ]
    /* pureFuels.forEach(fuel => {
        var identifier = fuel.fuel.replace("#forge:storage_blocks/", "")
        //Overworld
        event.recipes.gtceu.ember_extraction(`kubejs:emberextractor/overworld_ember_with_${identifier}`)
        .itemInputs(fuel.fuel)
        .itemOutputs(
            
        )
        .chancedOutput('minecraft:oak_sapling', 1500, 0)
        .chancedOutput('minecraft:apple', 1500, 0)
        .duration(4000/fuel.mult)
        .dimension("minecraft:overworld")
        .posY(-65, -20)
        .EUt(GTValues.VA[GTValues.LV]);
        //Nether
        //Undergarden
        //Twilight Forest
        //Aether
        //Venus
    }) */
})