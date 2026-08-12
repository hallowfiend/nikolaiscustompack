ServerEvents.recipes((event) => {
    event.remove({ output: "immersiveeengineering:insulating_glass"})
    event.remove({ id: "immersiveengineering:alloy_smelter/rose_gold"})
    //insulating glass
    event.recipes.immersiveengineeringAlloy('2x immersiveengineering:insulating_glass', '2x malum:earthen_spirited_glass', '#forge:dusts/iron')
    .id('kubejs:immersive_engineering/alloy_kiln/insulating_glass');
    event.recipes.immersiveengineeringArcFurnace(
        '2x immersiveengineering:insulating_glass',
        '2x malum:earthen_spirited_glass',
        ['#forge:dusts/iron']
    ).id('kubejs:immersive_engineering/arc_furnace/insulating_glass');
    // Basic Alloy Kiln alloys
    function alloyKiln(input1, input2, output){
        event.recipes.immersiveengineeringAlloy(output, input1, input2)
        .id(`kubejs/immersive_engineering/alloy_kiln/${output.split(":")[1]}`);
    }
    alloyKiln('#forge:ingots/bronze', 'minecraft:amethyst_shard', 'tconstruct:amethyst_bronze_ingot')
    alloyKiln('#forge:ingots/lead', '#forge:ingots/iron', '2x eidolon:pewter_ingot')
    alloyKiln('#forge:ingots/copper', '4x #forge:ingots/gold', '4x gtceu:rose_gold_ingot')
    alloyKiln('#forge:ingots/copper', '4x forge:ingots/silver', '4x gtceu:sterling_silver_ingot')
    alloyKiln('#forge:dusts/redstone', '#forge:ingots/iron', 'enderio:conductive_alloy_ingot')
    alloyKiln('#forge:dusts/redstone', '#forge:ingots/copper', 'gtceu:red_alloy_ingot')
    //Arc Furnace alloys
    function arcFurnace(mainInput, mainInputCount, additives, output, outputCount) {
        event.recipes.immersiveengineeringArcFurnace(
            `${outputCount}x ${output}`,
            `${mainInputCount}x ${mainInput}`,
            additives
        ).id(`kubejs:immersive_engineering/arc_furnace/${output.split(":")[1]}`);
    }
    arcFurnace(
        'gtceu:ruby_gem',
        1,
        ['kubejs:blood_slime_ball'],
        'kubejs:bloodchannel_gem',
        1
    )
    event.recipes.gtceu.alloy_smelter(`bloodchannel_gem`)
        .itemInputs([`gtceu:ruby_gem`, `kubejs:blood_slime_ball`])
        .itemOutputs(`kubejs:bloodchannel_gem`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    arcFurnace(
        'gtceu:bronze_ingot',
        1,
        ['minecraft:amethyst_shard'],
        'tconstruct:amethyst_bronze_ingot',
        1
    )
    arcFurnace(
        'minecraft:iron_ingot',
        1,
        ['#forge:ingots/lead'],
        'eidolon:pewter_ingot',
        2
    )
    arcFurnace(
        'minecraft:gold_ingot',
        4,
        ['#forge:ingots/copper'],
        'gtceu:rose_gold_ingot',
        4
    )
    arcFurnace(
        'gtceu:silver_ingot',
        4,
        ['#forge:ingots/copper'],
        'gtceu:sterling_silver_ingot',
        4
    )
    arcFurnace(
        'gtceu:bronze_ingot',
        2,
        ['#forge:ingots/lead'],
        'gtceu:potin_ingot',
        3
    )
    arcFurnace(
        'gtceu:tin_ingot',
        1,
        ['minecraft:iron_ingot'],
        'gtceu:tin_alloy_ingot',
        2
    )
    arcFurnace(
        'minecraft:copper_ingot',
        1,
        ['minecraft:redstone'],
        'gtceu:red_alloy_ingot',
        1
    )
    arcFurnace(
        'minecraft:iron_ingot',
        1,
        ['minecraft:redstone'],
        'enderio:conductive_alloy_ingot',
        1
    )
    arcFurnace(
        'gtceu:tin_ingot',
        2,
        ['#forge:ingots/cadmium', '#forge:ingots/lead'],
        'cosmere:bendalloy_ingot',
        4
    )
    arcFurnace(
        'gtceu:aluminium_ingot',
        3,
        ['#forge:ingots/copper'],
        'cosmere:duralumin_ingot',
        4
    )
    arcFurnace(
        'irons_spellbooks:mithril_ingot',
        1,
        ['2x #forge:dusts/vinteum', '2x #forge:dusts/apatite'],
        'gtceu:twilit_mithril_ingot',
        1
    )
    const nicrosilMaterials = [
        'quartzite',
        'nether_quartz'
    ]
    nicrosilMaterials.forEach(material => {
        event.recipes.immersiveengineeringArcFurnace(
            '4x cosmere:nicrosil_ingot',
            '2x #forge:ingots/nickel',
            ['#forge:ingots/chromium', `#forge:dusts/${material}`]
        ).id(`kubejs:immersive_engineering/arc_furnace/nicrosil_from_${material}`);
    })
})