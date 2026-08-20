ServerEvents.recipes((event) => {
    event.remove({ output: "immersiveeengineering:insulating_glass"})
    event.remove({ id: "immersiveengineering:alloy_smelter/rose_gold"})
    //insulating glass
    event.recipes.immersiveengineeringAlloy(Item.of('immersiveengineering:insulating_glass', 2), '2x malum:earthen_spirited_glass', '#forge:dusts/iron')
    .id('kubejs:immersive_engineering/alloy_kiln/insulating_glass');
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "tag": "forge:dusts/iron"
            }
            ],
        "energy": 51200,
        "input": {
            "item": "malum:earthen_spirited_glass",
            "count": 2
            },
        "results": [
            {
            "count": 2,
            "item": "immersiveengineering:insulating_glass"
            }
        ],
        "time": 100
    }).id('kubejs:immersive_engineering/arc_furnace/insulating_glass');
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
        event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": additives, //list
        "energy": 51200,
        "input": {
            "base_ingredient":{
            'item': mainInput
            },
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
        'gtceu:ruby_gem',
        4,
        [{'item': 'kubejs:blood_slime_ball'}, {'item': 'kubejs:vengeful_node'}],
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
    arcFurnace(
        'minecraft:gold_ingot',
        4,
        [{'tag': 'forge:ingots/copper'}],
        'gtceu:rose_gold_ingot',
        4
    )
    arcFurnace(
        'gtceu:silver_ingot',
        4,
        [{'tag': 'forge:ingots/copper'}],
        'gtceu:sterling_silver_ingot',
        4
    )
    arcFurnace(
        'gtceu:bronze_ingot',
        2,
        [{'tag': 'forge:ingots/lead'}],
        'gtceu:potin_ingot',
        3
    )
    arcFurnace(
        'gtceu:tin_ingot',
        1,
        [{'item': 'minecraft:iron_ingot'}],
        'gtceu:tin_alloy_ingot',
        2
    )
    arcFurnace(
        'minecraft:copper_ingot',
        1,
        [{'item': 'minecraft:redstone'}],
        'gtceu:red_alloy_ingot',
        1
    )
    arcFurnace(
        'minecraft:iron_ingot',
        1,
        [{'item': 'minecraft:redstone'}],
        'enderio:conductive_alloy_ingot',
        1
    )
    arcFurnace(
        'gtceu:tin_ingot',
        2,
        [{'tag': 'forge:ingots/cadmium'}, {'tag': 'forge:ingots/lead'}],
        'cosmere:bendalloy_ingot',
        4
    )
    arcFurnace(
        'gtceu:aluminium_ingot',
        3,
        [{'tag': 'forge:ingots/copper'}],
        'cosmere:duralumin_ingot',
        4
    )
    arcFurnace(
        'irons_spellbooks:mithril_ingot',
        1,
        [{'tag': 'forge:dusts/vinteum', 'count': 2}, {'tag': 'forge:dusts/apatite', 'count': 2}],
        'gtceu:twilit_mithril_ingot',
        1
    )
    arcFurnace(
        'undergarden:froststeel_ingot',
        1,
        [{'tag': 'forge:ingots/deepsilver', 'count': 1}],
        'gtceu:frostsilver_ingot',
        1
    )
    event.recipes.gtceu.alloy_smelter(`frostsilver_ingot`)
        .itemInputs([`undergarden:froststeel_ingot`, `eternal_starlight:deepsilver_ingot`])
        .itemOutputs(`gtceu:frostsilver_ingot`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV]);
    const nicrosilMaterials = [
        'quartzite',
        'nether_quartz'
    ]
    nicrosilMaterials.forEach(material => {
        event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {'tag': 'forge:ingots/chromium'},
            {'tag': `forge:dusts/${material}`}
        ],
        "energy": 51200,
        "input": {
            'tag': 'forge:ingots/nickel',
            "count": 2
            },
        "results": [
            {
            "count": 4,
            "item": 'cosmere:nicrosil_ingot'
            }
        ],
        "time": 100
    }).id(`kubejs:immersive_engineering/arc_furnace/nicrosil_from_${material}`);
    })
})