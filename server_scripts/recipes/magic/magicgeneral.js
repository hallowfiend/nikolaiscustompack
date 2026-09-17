ServerEvents.recipes(event => {
    //Broken spawner salvaging
    event.shapeless('goety:cursed_cage', ['enderio:broken_spawner'])
    //bone ash pls work
    event.replaceOutput({output: 'mna:bone_ash'}, 'mna:bone_ash', 'eidolon:enchanted_ash')
    //Wisp bottle crafting
    event.shapeless('5x netherexp:wisp_bottle', [
        'netherexp:ectoplasm_bucket',
        'netherexp:banshee_powder',
        'hexalia:ghost_powder',
        'mna:animus_dust',
        'minecraft:glass_bottle',
        'minecraft:glass_bottle',
        'minecraft:glass_bottle',
        'minecraft:glass_bottle',
        'minecraft:glass_bottle'
    ]).id('kubejs:shapeless/wisp_crafting')
})