ServerEvents.recipes((event) => {
    //Ritual Table
    function ritualtable(ingredients, output) {
        event.custom({
            "type": "hexalia:ritual_table",
            "ingredients": ingredients, //max 5
            "output": output
        })
    }
    // OCCULTISM - demon's dream seeds
    ritualtable(
        [
            {"item": "hexalia:spirit_powder"},
            {"item": "goety:ectoplasm"},
            {"item": "hexerei:sage_seeds"},
            {"item": "elementalcraft:inert_crystal"},
            {"tag": "#forge:essences/death"}
        ],
        { "item": "occultism:datura_seeds"}
    )
    // HIBERNAL HERBS - unifying herbal conjuration
})