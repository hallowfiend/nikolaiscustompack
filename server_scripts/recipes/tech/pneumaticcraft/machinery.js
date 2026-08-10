ServerEvents.recipes(event => {
    //pnc is gated behind create like IE is, but its also itself gated behind a lil bit of IE, together they gate greg
    //harder glass and shit
    event.remove({ output: "immersiveeengineering:insulating_glass"})
    //insulating glass
    event.recipes.immersiveengineering.alloy('2x immersiveeengineering:insulating_glass', '2x malum:earthen_spirited_glass', '#forge:dusts/iron')
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
            "base_ingredient": {
                "item": "malum:earthen_spirited_glass"
            },
            "count": 2
        },
        "results": [
        {
            "count": 2,
            "id": "immersiveengineering:insulating_glass"
            }
        ],
        "time": 100
    }).id('kubejs:immersive_engineering/arc_furnace/insulating_glass');
    event.replaceInput({ mod: "pneumaticcraft"}, '#forge:glass', 'immersiveengineering:insulating_glass')
    event.replaceInput({ mod: "pneumaticcraft"}, 'minecraft:iron_bars', 'undergarden:cloggrum_bars')
    //pressure tubes and associated gizmos
    event.remove({ output: "pneumaticcraft:pressure_tube"})
    event.shaped(
        Item.of('pneumaticcraft:pressure_tube', 2),
        [
            'aga'
        ],
        {
            a: '#forge:plates/compressed_iron',
            g: 'immersiveengineering:insulating_glass',
        }
    ).id('kubejs:shaped/pressure_tube')
})