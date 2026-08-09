ServerEvents.recipes(event => {
    event.remove({ type: 'evilcraft:blood_infuser', output: 'minecraft:redstone' })
    event.remove({ output: 'evilcraft:dull_dust' })
    event.remove({ output: 'evilcraft:blood_orb_filled' })
    event.shapeless(
        'evilcraft:dull_dust',
        ['goety:grave_dust', 'minecraft:gunpowder', 'minecraft:sugar', '#forge:dusts/ash', 'occultism:burnt_otherstone', 'mna:bone_ash']
    ).id('kubejs/shapeless/dull_dust')
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "evilcraft:dull_dust",
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": 10000
        },
        "result": {
            "item": "kubejs:bloodied_dust"
        },
        "duration": 100,
        "xp": 4,
        "tier": 2
    }).id('kubejs:evilcraft/blood_infusion/bloodied_dust')
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "magichem:glass_orb",
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": 10000
        },
        "result": {
            "item": "evilcraft:blood_orb_filled"
        },
        "duration": 20,
        "xp": 4,
        "tier": 1
    }).id('kubejs:evilcraft/blood_infusion/blood_orb')
})