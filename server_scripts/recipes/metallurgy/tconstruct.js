ServerEvents.recipes((event) => {
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