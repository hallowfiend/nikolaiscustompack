ServerEvents.recipes(event => {
    //straw
    const driesToOneStraw = [
        'minecraft:wheat',
        'minecraft:grass',
        'minecraft:short_dry_grass',
    ]
    driesToOneStraw.forEach(item => {
        event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": item}],
            "output": {"item": 'farmersdelight:straw', "count": 1},
            "dryingTimeInTicks": 2000
        })
    })
    const driesToTwoStraw = [
        'minecraft:tall_grass'
    ]
    driesToTwoStraw.forEach(item => {
        event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": item}],
            "output": {"item": 'farmersdelight:straw', "count": 2},
            "dryingTimeInTicks": 4000
        })
    })
    //kelp
    const kelpDrying = [
        'minecraft:kelp',
        'undergarden:glitterkelp',
        'hexalia:siren_kelp',
        'eternal_starlight:spiral_kelp'
    ]
    kelpDrying.forEach(item => {
        event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": item}],
            "output": {"item": 'minecraft:dried_kelp', "count": 1},
            "dryingTimeInTicks": 500
        })
    })
    //vanilla pod, nanners, chorus flower, mite meat
    event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": 'neapolitan:vanilla_pods'}],
            "output": {"item": 'neapolitan:dried_vanilla_pods', "count": 1},
            "dryingTimeInTicks": 1000
        })
    event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"tag": 'forge:fruits/banana'}],
            "output": {"item": 'neapolitan:dried_banana', "count": 1},
            "dryingTimeInTicks": 1000
        })
    event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": 'minecraft:chorus_flower'}],
            "output": {"item": 'ends_delight:dried_chorus_flower', "count": 1},
            "dryingTimeInTicks": 1000
        })
    event.custom({
            "type": "hexerei:drying_rack",
            "ingredients":[{"item": 'ends_delight:raw_ender_mite_meat'}],
            "output": {"item": 'ends_delight:dried_endermite_meat', "count": 1},
            "dryingTimeInTicks": 2000
        })
    
})