ServerEvents.recipes((event) => {
    // making the ammy bronze recipe accurate
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_amethyst_bronze' })
    event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
            { "name": "gtceu:bronze", "amount": 144 },
            { "name": "gtceu:molten_amethyst", "amount": 100 }
        ],
        "result": {
            "fluid": "tconstruct:amethyst_bronze",
            "amount": 144
        },
        "temperature": 820
    })
});