ServerEvents.recipes(event => {
    event.remove({type: "immersiveengineering:mineral_mix"})
    function mineralMix(ore1, chance1, ore2, chance2, ore3, chance3, spoils1, spoils2, spoils3, dim, weight, name){
        event.custom({
        "type": "immersiveengineering:mineral_mix",
        "ores": [
            {
                "chance": chance1,
                "output": {
                    "item": ore1
                }
            },
            {
                "chance": chance2,
                "output": {
                    "item": ore2
                }
            },
            {
                "chance": chance3,
                "output": {
                    "item": ore3
                }
            }
        ],
        "spoils": [
            {
                "chance": 0.2,
                "output": {
                    "item": spoils1
                }
            },
            {
                "chance": 0.5,
                "output": {
                    "item": spoils2
                }
            },
            {
                "chance": 0.3,
                "output": {
                    "item": spoils3
                }
            }
        ],
        "dimensions": [
            dim
        ],
        "weight": weight,
        "fail_chance": 0.10
    }).id(`kubejs/immersivepetroengi/deposits/${name}_vein`)
    }
    //overworld
    mineralMix(
        'gtceu:raw_magnetite', 0.5,
        'gtceu:raw_nickel', 0.3,
        'gtceu:raw_hematite', 0.2,
        'minecraft:cobblestone',
        'minecraft:stone',
        'minecraft:cobbled_deepslate',
        'minecraft:overworld',
        80,
        'deep_iron'
    )
    mineralMix(
        'gtceu:raw_gold', 0.6,
        'gtceu:raw_silver', 0.3,
        'gtceu:raw_cthonic_gold', 0.1,
        'embers:ember_grit',
        'minecraft:cobbled_deepslate',
        'gtceu:electrum_dust',
        'minecraft:overworld',
        30,
        'deep_gold'
    )
    mineralMix(
        'minecraft:amethyst_block', 0.6,
        'mna:raw_vinteum', 0.3,
        'malum:chunk_of_brilliance', 0.1,
        'enderio:grains_of_infinity',
        'minecraft:smooth_basalt',
        'gtceu:calcite_dust',
        'minecraft:overworld',
        15,
        'buried_mental_conflux'
    )
    //nether
    mineralMix(
        'minecraft:blackstone', 0.4,
        'gtceu:raw_wolframite', 0.4,
        'minecraft:ancient_debris', 0.2,
        'minecraft:gilded_blackstone',
        'minecraft:basalt',
        'minecraft:gravel',
        'minecraft:the_nether',
        15,
        'ancient_debris'
    )
    //twiforest
    mineralMix(
        'gtceu:raw_electrum', 0.5,
        'minecraft:raw_gold', 0.4,
        'gtceu:raw_diamond', 0.1,
        'twilightforest:raw_ironwood',
        'twilightforest:mazestone',
        'create:veridium',
        'twilightforest:twilight_forest',
        20,
        'twilit_hoard'
    )
})