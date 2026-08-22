ServerEvents.recipes(event => {
    const yeet = [
        'mna:rune_clay_plate',
        'mna:stone_rune_blank'
    ]
    yeet.forEach(yeet => {
        event.remove({id: yeet})
    })
    //stone glyph
    event.shaped('mna:stone_rune_blank', [
        ' S ',
        'SCS',
        ' S '
    ], {
        S: '#forge:stone',
        C: 'elementalcraft:inert_crystal'
    })
    //unfired rune plate
    event.shaped('mna:rune_clay_plate', [
        ' C ',
        'CSC',
        ' C '
    ], {
        C: 'embers:raw_caminite_plate',
        S: '#mna:stone_runes'
    })
})