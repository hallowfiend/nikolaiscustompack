ServerEvents.recipes((event) => {
    event.custom({
        //offering to nature
        "type": "eidolon:worktable",
        "pattern": [
            "abc",
            "def",
            "ghi"
        ],
        "reagents": [
            "jjjj"
        ],
        "key": {
            "a": {
                "item": "mna:tarma_root"
            },
            "b":{
                "item": "hexerei:yellow_dock_flowers"
            },
            "c":{
                "item": "immersive_weathering:moss_clump"
            },
            "d":{
                "item": "minecraft:lily_pad"
            },
            "e":{
                "tag": "forge:gems/jade"
            },
            "f":{
                "item": "botania:lime_petal"
            },
            "g":{
                "item": "farmersrespite:green_tea_leaves"
            },
            "h":{
                "item": "hexalia:spirit_bloom"
            },
            "i":{
                "item": "minecraft:glow_lichen"
            },
            "j":{
                "tag": "forge:dusts/amethyst"
            }
        },
        "result": {
            "item": "kubejs:nature_offering",
            "count": 2
        }
    });
    //hex focus
    event.remove({ id: 'hexalia:hex_focus' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " ba",
            " db",
            "c  "
        ],
        "reagents": [
            "jjjj"
        ],
        "key": {
            "a": {
                "item": "hexcasting:charged_amethyst"
            },
            "b":{
                "item": "gtceu:wood_bolt"
            },
            "c":{
                "item": "gtceu:long_wood_rod"
            },
            "d":{
                "item": "kubejs:nature_offering"
            },
            "j":{
                "tag": "minecraft:leaves"
            }
        },
        "result": {
            "item": "hexalia:hex_focus"
        }
    });
    //ritual table
    event.remove({ id: 'hexalia:ritual_table' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "dmd",
            " n ",
            "dcd"
        ],
        "reagents": [
            "jjjj"
        ],
        "key": {
            "d": {
                "tag": "forge:deepslate"
            },
            "m":{
                "tag": "forge:moss"
            },
            "c":{
                "tag": "forge:storage_blocks/charcoal"
            },
            "n":{
                "item": "kubejs:nature_offering"
            },
            "j":{
                "tag": "forge:dusts/salt"
            }
        },
        "result": {
            "item": "hexalia:ritual_table"
        }
    });
    //silkweave armor
    event.remove({id: /hexalia:silkweave.*/})
    event.shaped('hexalia:silkweave_helmet', [
        ' S ',
        'SLS',
        ' W '
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    W: '#minecraft:wool'
    }).id('kubejs:shaped/silkweave_helmet')
    event.shaped('hexalia:silkweave_mantle', [
        'TWT',
        'SLS',
        ' W '
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    T: 'immersiveengineering:hemp_fiber',
    W: '#minecraft:wool'
    }).id('kubejs:shaped/silkweave_mantle')
    event.shaped('hexalia:silkweave_bindings', [
        ' S ',
        'SLS',
        'TWT'
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    T: 'immersiveengineering:hemp_fiber',
    W: '#minecraft:wool'
    }).id('kubejs:shaped/silkweave_bindings')
    event.shaped('hexalia:silkweave_bindings', [
        ' S ',
        'SLS',
        'TST'
        ], {
    S: 'kubejs:woven_silk',
    L: 'minecraft:leather',
    T: 'immersiveengineering:hemp_fiber'
    }).id('kubejs:shaped/silkweave_footwraps')
});