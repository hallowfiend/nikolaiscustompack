ServerEvents.recipes(event => {
    function cauldronBrew(ingredient, effect, soulCost, capCost, duration){
        event.custom({"type": "goety:brewing",
        "ingredient": {
        "item": ingredient
        },
        "effect": effect,
        "soulCost": soulCost,
        "capacityExtra": capCost,
        "duration": duration
    })
    }
    cauldronBrew(
        'malum:concentrated_gluttony',
        'malum:gluttony',
        50,
        3,
        120
    )
    cauldronBrew(
        'malum:null_slate',
        'malum:silenced',
        50,
        3,
        120
    )
})