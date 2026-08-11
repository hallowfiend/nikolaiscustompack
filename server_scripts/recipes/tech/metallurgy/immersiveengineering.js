ServerEvents.recipes((event) => {
    // Basic Alloy Kiln alloys
    event.remove({ id: "immersiveengineering:alloy_smelter/rose_gold"})
    event.recipes.immersiveengineering.alloy('tconstruct:amethyst_bronze_ingot', 'gtceu:bronze_ingot', 'minecraft:amethyst_shard')
    .id('kubejs/immersive_engineering/alloy_kiln/amethyst_bronze');
    event.recipes.immersiveengineering.alloy('2x eidolon:pewter_ingot', '#forge:ingots/lead', 'minecraft:iron_ingot')
    .id('kubejs/immersive_engineering/alloy_kiln/pewter');
    event.recipes.immersiveengineering.alloy('4x gtceu:rose_gold_ingot', '4x #forge:ingots/gold', 'minecraft:copper_ingot')
    .id('kubejs/immersive_engineering/alloy_kiln/rose_gold');
    //Arc Furnace alloys
    function arcFurnace(mainInput, mainInputCount, additives, output, outputCount) {
        event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": additives, //list
        "energy": 51200,
        "input": {
            'item': mainInput, //item or tag
            "count": mainInputCount
            },
        "results": [
            {
            "count": outputCount,
            "item": output
            }
        ],
        "time": 100
    }).id(`kubejs:immersive_engineering/arc_furnace/${output.split(":")[1]}`);
    }
    arcFurnace(
        'gtceu:bronze_ingot',
        1,
        [{'item': 'minecraft:amethyst_shard'}],
        'tconstruct:amethyst_bronze_ingot',
        1
    )
    arcFurnace(
        'minecraft:iron_ingot',
        1,
        [{'tag': 'forge:ingots/lead'}],
        'eidolon:pewter_ingot',
        2
    )
})