ServerEvents.recipes(event => {
    event.remove({ type: 'evilcraft:blood_infuser', output: 'minecraft:redstone' })
    event.remove({ output: 'evilcraft:dull_dust' })
    event.remove({ output: 'evilcraft:blood_orb_filled' })
    event.shapeless(
        'evilcraft:dull_dust',
        ['goety:grave_dust', 'minecraft:gunpowder', 'minecraft:sugar', '#forge:dusts/ash', 'occultism:burnt_otherstone', 'mna:bone_ash']
    ).id('kubejs/shapeless/dull_dust')
    function bloodInfuser(bloodCost, input, output, duration, tier){
        event.custom({
        "type": "evilcraft:blood_infuser",
        "item": input,
        "fluid": {
            "fluid": "evilcraft:blood",
            "amount": bloodCost
        },
        "result": {
            "item": output
        },
        "duration": duration,
        "xp": 0.5,
        "tier": tier
    }).id(`kubejs:evilcraft/blood_infusion/${output.split(":")[1]}`)
    }
    bloodInfuser(
        10000,
        'evilcraft:dull_dust',
        'kubejs:bloodied_dust',
        100,
        2
    )
    bloodInfuser(
        10000,
        'magichem:glass_orb',
        'evilcraft:blood_orb_filled',
        20,
        1
    )
    bloodInfuser(
        4000,
        'irons_spellbooks:hogskin',
        'irons_spellbooks:bloody_vellum',
        40,
        0
    )
})