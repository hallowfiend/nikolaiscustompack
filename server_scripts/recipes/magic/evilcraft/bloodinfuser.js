ServerEvents.recipes(event => {
    event.remove({ type: 'evilcraft:blood_infuser', output: 'minecraft:redstone' })
    event.remove({ output: 'evilcraft:dull_dust' })
    event.shapeless(
        'evilcraft:dull_dust',
        ['goety:grave_dust', 'minecraft:gunpowder', 'minecraft:sugar', '#forge:dusts/ash', 'occultism:burnt_otherstone', 'mna:bone_ash']
    )
    event.custom({
        "type": "evilcraft:blood_infuser",
        "input_item": {
            "item": "evilcraft:dull_dust"
        },
        "input_fluid": {
            "FluidName": "evilcraft:blood",
            "Amount": 10000
        },
        "output_item": {
            "item": "kubejs:bloodied_dust"
        },
        "duration": 100,
        "xp": 0.2,
        "tier": 2
    })
})