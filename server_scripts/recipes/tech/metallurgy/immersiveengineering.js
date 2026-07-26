ServerEvents.recipes((event) => {
    // Basic Alloy Kiln alloys
    event.remove({ id: "immersiveengineering:alloy_smelter/rose_gold"})
    event.recipes.immersiveengineering.alloy('tconstruct:amethyst_bronze_ingot', 'gtceu:bronze_ingot', 'minecraft:amethyst_shard')
    event.recipes.immersiveengineering.alloy('eidolon:pewter_ingot', '#forge:ingots/lead', 'minecraft:iron_ingot')
    event.recipes.immersiveengineering.alloy('4x gtceu:rose_gold_ingot', '4x #forge:ingots/gold', 'minecraft:copper_ingot')
    //Metal Press recipes
    //Crusher oreproc
})