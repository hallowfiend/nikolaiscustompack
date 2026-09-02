ServerEvents.recipes(event => {
    //Broken spawner salvaging
    event.shapeless('goety:cursed_cage', ['enderio:broken_spawner'])
    //bone ash pls work
    event.replaceOutput({output: 'mna:bone_ash'}, 'mna:bone_ash', 'eidolon:enchanted_ash')
})