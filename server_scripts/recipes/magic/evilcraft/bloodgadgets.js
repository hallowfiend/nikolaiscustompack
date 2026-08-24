ServerEvents.recipes(event => {
    event.remove({output: 'evilcraft:bound_blood_drop'})
    //alt spike recipe
    event.shaped('8x evilcraft:dark_spike', [
        'b',
        'd'
    ],
    {
        b: 'biomancy:bone_fragments',
        d: '#forge:gems/dark'
    }).id('kubejs:shaped/alt_dark_spike')
    //dark stick
    event.remove({output: 'evilcraft:dark_stick'})
    event.shaped('evilcraft:dark_stick', [
        'd',
        'r',
        'd'
    ],
    {
        d: '#forge:dusts/dark',
        r: '#forge:rods/potin'
    }).id('kubejs:shaped/dark_stick')
    //blood extractor
    event.remove({output: 'evilcraft:blood_extractor'})
    event.shaped('evilcraft:blood_extractor', [
        'sss',
        'prp',
        ' d '
    ],
    {
        s: 'evilcraft:dark_spike',
        p: 'gtceu:pewter_plate',
        r: 'scguns:syringe',
        d: 'evilcraft:dark_gem'
    }).id('kubejs:shaped/blood_extractor')
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
    }).id('kubejs:shaped/effortless_ring')
    //invigorating pendant
    event.remove({output: 'evilcraft:invigorating_pendant'})
    event.shaped('evilcraft:invigorating_pendant', [
        ' g ',
        'fsf',
        'grg'
    ],
    {
        f: 'naturesaura:gold_fiber',
        g: 'naturesaura:token_anger',
        s: 'kubejs:bloodchannel_gem',
        r: 'malum:rune_of_aliment_cleansing',
        g: 'irons_spellbooks:bloody_vellum'
    }).id('kubejs:shaped/invigorating_pendant')
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
    event.remove({ id: 'evilcraft:crafting/kineticator' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " tr",
            "dfd",
            "st "
        ],
        "reagents": [
            "ggcc"
        ],
        "key" : {
            "t": {
                "item" : "gtceu:tainted_gold_rod"
            },
            "s": {
                "item": "botania:mana_diamond"
            },
            "d": {
                "item": "evilcraft:dark_stick"
            },
            "r": {
                "item": "kubejs:bloodchannel_gem"
            },
            "f": {
                "item": "evilcraft:promise_acceptor_gold"
            },
            "g":{
                "item": "gtceu:gravitite_gem"
            },
            "c": {
                "item": "undergarden:cloggrum_block"
            }
        },
        "result" : {
            "item": "evilcraft:kineticator"
        }
    }).id('kubejs:eidolon/worktable/staves/kineticator')
    event.remove({ id: 'evilcraft:crafting/kineticator_repelling' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " ts",
            "dfd",
            "rt "
        ],
        "reagents": [
            "ggcc"
        ],
        "key" : {
            "t": {
                "item" : "gtceu:tainted_gold_rod"
            },
            "s": {
                "item": "botania:mana_diamond"
            },
            "d": {
                "item": "evilcraft:dark_stick"
            },
            "r": {
                "item": "kubejs:bloodchannel_gem"
            },
            "f": {
                "item": "evilcraft:promise_acceptor_gold"
            },
            "g":{
                "item": "gtceu:gravitite_block"
            },
            "c": {
                "item": "undergarden:cloggrum_ingot"
            }
        },
        "result" : {
            "item": "evilcraft:kineticator_repelling"
        }
    }).id('kubejs:eidolon/worktable/staves/repelling_kineticator')
    //mace of distortion
    event.remove({ id: 'evilcraft:mace_of_distortion' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " ts",
            " ft",
            "r  "
        ],
        "reagents": [
            "ggcc"
        ],
        "key" : {
            "t": {
                "item" : "evilcraft:dark_power_gem_block"
            },
            "s": {
                "item": "evilcraft:inverted_potentia_empowered"
            },
            "r": {
                "item": "gtceu:long_compressed_iron_rod"
            },
            "f": {
                "item": "evilcraft:dark_stick"
            },
            "g":{
                "item": "kubejs:bloodchannel_gem"
            },
            "c": {
                "item": "gtceu:red_alloy_bolt"
            }
        },
        "result" : {
            "item": "evilcraft:mace_of_distortion"
        }
    }).id('kubejs:eidolon/worktable/weapons/mace_of_distortion')
    //mace of destruction
    event.remove({ id: 'evilcraft:mace_of_destruction' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " ts",
            " ft",
            "r  "
        ],
        "reagents": [
            "ggcc"
        ],
        "key" : {
            "t": {
                "item" : "evilcraft:garmonbozia"
            },
            "s": {
                "item": "evilcraft:inverted_potentia_empowered"
            },
            "r": {
                "item": "gtceu:long_compressed_iron_rod"
            },
            "f": {
                "item": "evilcraft:dark_stick"
            },
            "g":{
                "item": "malum:void_salts"
            },
            "c": {
                "item": "gtceu:malignant_pewter_bolt"
            }
        },
        "result" : {
            "item": "evilcraft:mace_of_destruction"
        }
    }).id('kubejs:eidolon/worktable/weapons/mace_of_destruction')
    //promise stuff
})