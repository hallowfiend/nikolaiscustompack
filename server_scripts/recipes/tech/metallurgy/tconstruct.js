ServerEvents.recipes((event) => {
	// fuck the melter
	event.remove({ output: 'tconstruct:smeltery_controller' })
	event.shaped(
        Item.of('tconstruct:smeltery_controller', 1),
        [
            'sss',
            'bfb',
            'sss'
        ],
        {
            s: '#tconstruct:seared_blocks',
			b: 'minecraft:copper_block',
			f: "minecraft:blast_furnace"
        }
    ).id('kubejs:smeltery_controller')
    // making the ammy bronze recipe accurate
    event.remove({ id: 'tconstruct:smeltery/alloys/amethyst_bronze' })
    event.custom({
        "type": "tconstruct:alloy",
        inputs: [
			{
				amount: 144,
				fluid: 'gtceu:bronze'
			},
			{
				amount: 144,
				fluid: 'tconstruct:amethyst'
			}
		],
		result: {
			amount: 144,
			fluid: 'tconstruct:amethyst_bronze'
		},
        "temperature": 820
    })
});