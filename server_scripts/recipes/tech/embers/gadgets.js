ServerEvents.recipes(event => {
    const yeet = [
        'embers:tinker_lens',
        'embers:smoky_tinker_lens',
        'embers:atmospheric_gauge',
        'embers:tinker_hammer',
        'embers:glimmer_lamp',
        'embers:ember_ring',
        'embers:ember_belt',
        'embers:ember_amulet'
    ]
    yeet.forEach(item => {
        event.remove({output: item})
    })
    //Tinker's Lenses
    event.shaped(
        Item.of('embers:tinker_lens', 1),
        [
            'il ',
            'lsr',
            'ilh'
        ],
        {
            i: 'gtceu:pewter_plate',
            l: 'gtceu:lead_plate',
            s: 'malum:spectral_optic',
            r: 'mna:ritual_focus_minor',
            h: '#forge:tools/screwdrivers'
        }
    ).damageIngredient('#forge:tools/screwdrivers').id('kubejs:shaped/tinker_lens')
    event.shaped(
        Item.of('embers:smoky_tinker_lens', 1),
        [
            'ba ',
            'ala',
            ' a '
        ],
        {
            a: 'embers:ash',
            l: 'embers:tinker_lens',
            b: 'minecraft:brush'
        }
    ).damageIngredient('minecraft:brush').id('kubejs:shaped/smoky_tinker_lens')
    //Curios
    event.shaped(
        Item.of('embers:ember_ring', 1),
        [
            'e  ',
            'hrf',
            ' ud'
        ],
        {
            r: 'malum:ornate_ring',
            e: 'embers:ember_crystal_cluster',
            d: 'embers:dawnstone_plate',
            h: '#forge:tools/wire_cutters',
            f: '#forge:tools/screwdrivers',
            u: 'kubejs:blacksmithing_resin'
        }
    ).damageIngredient('#forge:tools/wire_cutters')
    .damageIngredient('#forge:tools/screwdrivers')
    .id('kubejs:shaped/ember_ring')
    event.shaped(
        Item.of('embers:ember_amulet', 1),
        [
            'hrf',
            'ded',
            ' u '
        ],
        {
            r: 'malum:ornate_necklace',
            e: 'embers:ember_crystal_cluster',
            d: 'embers:dawnstone_plate',
            h: '#forge:tools/wire_cutters',
            f: '#forge:tools/screwdrivers',
            u: 'kubejs:blacksmithing_resin'
        }
    ).damageIngredient('#forge:tools/wire_cutters')
    .damageIngredient('#forge:tools/screwdrivers')
    .id('kubejs:shaped/ember_amulet')
    event.shaped(
        Item.of('embers:ember_belt', 1),
        [
            'df ',
            'erh',
            'd u'
        ],
        {
            r: 'malum:gilded_belt',
            e: 'embers:ember_crystal_cluster',
            d: 'embers:dawnstone_plate',
            h: '#forge:tools/wire_cutters',
            f: '#forge:tools/screwdrivers',
            u: 'kubejs:blacksmithing_resin'
        }
    ).damageIngredient('#forge:tools/wire_cutters')
    .damageIngredient('#forge:tools/screwdrivers')
    .id('kubejs:shaped/ember_belt')
})