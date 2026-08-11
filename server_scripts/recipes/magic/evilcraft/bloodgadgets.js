ServerEvents.recipes(event => {
    //blood extractor
    event.remove({output: 'evilcraft:blood_extractor'})
    event.shaped('evilcraft:blood_extractor', [
        'sss',
        'prp',
        ' d '
    ],
    {
        s: 'evilcraft:spike',
        p: 'gtceu:pewter_plate',
        r: 'scguns:syringe',
        d: 'evilcraft:dark_gem'
    })
    //effortless ring
    event.remove({output: 'evilcraft:effortless_ring'})
    event.shaped('evilcraft:effortless_ring', [
        'pg ',
        'mrm',
        ' gs'
    ],
    {
        p: 'hexalia:earth_node',
        m: 'goety:mystic_core',
        r: 'gtceu:red_alloy_ring',
        g: 'irons_spellbooks:bloody_vellum',
        s: 'kubejs:bloodchannel_gem'
    })
})