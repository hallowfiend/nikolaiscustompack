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
    }).id('kubejs/shaped/blood_extractor')
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
    }).id('kubejs/shaped/effortless_ring')
    //invigorating pendant
    //primed pendant (GIGAnerfed for its gamebreak potential)
    event.remove({ output: "evilcraft:primed_pendant" })
    event.recipes.botania.runic_altar('evilcraft:primed_pendant',
        [
            'evilcraft:garmonbozia',
            'tinkers_things:hematite_block',
            'kubejs:bloodied_dust',
            'kubejs:bloodied_dust',
            'kubejs:bloodied_dust',
            'naturesaura:gold_fiber',
            'naturesaura:gold_fiber',
            'gtceu:iv_emitter'
        ],
        60000
    ).id('kubejs:botania/runic_altar/primed_pendant')
    //kineticators
    //mace of destruction
    //mace of distortion
    //promise stuff
})