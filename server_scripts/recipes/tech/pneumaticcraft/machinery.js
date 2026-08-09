ServerEvents.recipes(event => {
    //pnc is gated behind create like IE is, but its also itself gated behind a lil bit of IE, together they gate greg
    //harder glass and shit
    event.replaceInput({ output: "immersiveeengineering:insulating_glass"}, '#forge:glass', 'malum:earthen_spirited_glass')
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