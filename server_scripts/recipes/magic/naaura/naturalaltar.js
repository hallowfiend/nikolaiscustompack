ServerEvents.recipes(event => {
    event.remove({id:/naturesaura:altar\/infused_iron/})
    event.remove({id:/naturesaura:altar\/tainted_gold/})
    function catalystlessAltar(input, output, count, aura, time){
        event.custom({
            "type": "naturesaura:altar",
            "input": {
                "item": input
            },
            "output": {
                "item": output,
                "count": count
            },
            "aura": aura,
            "time": time
    }).id(`kubejs:natures_aura/natural_altar/infusion/${output.split(":")[1]}`)
    }
    function conversion(input, output, count, aura, time){
        event.custom({
            "type": "naturesaura:altar",
            "input": {
                "item": input
            },
            "output": {
                "item": output,
                "count": count
            },
            "catalyst": {
                "item": "naturesaura:conversion_catalyst"
            },
            "aura": aura,
            "time": time
    }).id(`kubejs:natures_aura/natural_altar/conversion/${output.split(":")[1]}`)
    }
    function crushing(input, output, count, aura, time){
        event.custom({
            "type": "naturesaura:altar",
            "input": {
                "item": input
            },
            "output": {
                "item": output,
                "count": count
            },
            "catalyst": {
                "item": "naturesaura:crushing_catalyst"
            },
            "aura": aura,
            "time": time
    }).id(`kubejs:natures_aura/natural_altar/crushing/${output.split(":")[1]}`)
    }
    //ingots
    catalystlessAltar(
        'gtceu:twilit_mithril_ingot',
        'naturesaura:infused_iron',
        1,
        9000,
        80
    )
    catalystlessAltar(
        'gtceu:twilit_mithril_block',
        'naturesaura:infused_iron_block',
        1,
        81000,
        700
    )
    catalystlessAltar(
        'malum:hallowed_gold_ingot',
        'naturesaura:tainted_gold',
        1,
        3000,
        30
    )
    catalystlessAltar(
        'malum:block_of_hallowed_gold',
        'naturesaura:tainted_gold_block',
        1,
        27000,
        2625
    )
    catalystlessAltar(
        'minecraft:iron_ingot',
        'twilightforest:ironwood_ingot',
        1,
        5000,
        40
    )
    catalystlessAltar(
        'minecraft:iron_block',
        'twilightforest:ironwood_block',
        1,
        45000,
        360
    )
    //conversion
    conversion(
        'kubejs:treated_leather',
        'irons_spellbooks:hogskin',
        1,
        4000,
        30
    )
    conversion(
        'supplementaries:soap',
        'arts_and_crafts:bleachdew',
        1,
        8000,
        40
    )
    conversion(
        'gtceu:charcoal_block',
        'minecraft:coal_block',
        1,
        120000,
        400
    )
    conversion(
        'gtceu:calcite_dust',
        'minecraft:sugar',
        1,
        4000,
        10
    )
    conversion(
        'gtceu:tricalcium_phosphate_dust',
        'minecraft:glowstone_dust',
        1,
        4000,
        10
    )
    conversion(
        'cosmopolitan:tuber',
        'twilightforest:liveroot',
        1,
        8000,
        50
    )
    conversion(
        'immersiveengineering:seed',
        'spawn:sunflower_seeds',
        1,
        5000,
        40
    )
    conversion(
        'gtceu:treated_wood_rod',
        'minecraft:bamboo',
        1,
        5000,
        40
    )
    conversion(
        'minecraft:ender_pearl',
        'integrateddynamics:proto_chorus',
        1,
        5000,
        20
    )
    conversion(
        'minecraft:lily_pad',
        'environmental:duckweed',
        1,
        1500,
        20
    )
    conversion(
        'farmersdelight:organic_compost',
        'farmersdelight:rich_soil',
        1,
        25000,
        60
    )
    conversion(
        'mynethersdelight:letios_compost',
        'mynethersdelight:resurgent_soil',
        1,
        25000,
        60
    )
    conversion(
        'dungeonsdelight:embedded_eggs',
        'dungeonsdelight:heap_of_ancient_eggs',
        1,
        25000,
        60
    )
    conversion(
        'twilightforest:huge_water_lily',
        'minecraft:spore_blossom',
        1,
        5000,
        60
    )
    conversion(
        'tconstruct:sky_slime_crystal',
        'hexalia:celestial_crystal',
        1,
        4000,
        80
    )
    conversion(
        'tconstruct:sky_slime_crystal_block',
        'hexalia:celestial_crystal_block',
        1,
        16000,
        240
    )
    conversion(
        'biomancy:fertilizer',
        'botania:fertilizer',
        16,
        8000,
        160
    )
    conversion(
        'minecraft:warped_fungus',
        'netherexp:warped_wart',
        1,
        30000,
        250
    )
    //crushing
    crushing(
        'minecraft:warped_wart_block',
        'netherexp:warped_wart',
        1,
        40000,
        400
    )
    crushing(
        'kubejs:blood_soaked_nutrient_bar',
        'kubejs:hemauric_nutrient_pellets',
        1,
        8000,
        200
    )
    crushing(
        'kubejs:rune_time',
        'twilighttweaks:time_powder',
        8,
        2000,
        30
    )
})