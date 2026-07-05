ServerEvents.recipes((event) => {
    event.custom({
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
                "item": "hibernalherbs:herb_humus"
            },
            "b":{
                "item": "hexerei:yellow_dock_flowers"
            },
            "c":{
                "item": "immersiveweathering:moss_clump"
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
                "item": "hibernalherbs:pounded_rosemary"
            },
            "h":{
                "item": "hexalia:spirit_bloom"
            },
            "i":{
                "item": "brewincompatdelight:juniper_berries"
            },
            "j":{
                "tag": "forge:dusts/amethyst"
            }
        },
        "result": {
            "item": "kubejs:nature_offering"
        }
    });
    event.remove({ id: 'hexalia:hex_focus' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " ba",
            " db",
            "c "
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
});