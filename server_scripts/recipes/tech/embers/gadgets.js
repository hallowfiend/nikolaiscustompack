ServerEvents.recipes(event => {
    const yeet = [
        'embers:tinker_lens',
        'embers:smoky_tinker_lens',
        'embers:atmospheric_gauge'
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
            'il '
        ],
        {
            i: 'gtceu:pewter_plate',
            l: 'gtceu:lead_plate',
            s: 'malum:spectral_optic',
            r: 'mna:ritual_focus_minor'
        }
    ).id('kubejs:shaped/tinker_lens')
    event.shaped(
        Item.of('embers:smoky_tinker_lens', 1),
        [
            ' a ',
            'ala',
            ' a '
        ],
        {
            a: 'embers:ash',
            l: 'embers:tinker_lens'
        }
    ).id('kubejs:shaped/smoky_tinker_lens')
})