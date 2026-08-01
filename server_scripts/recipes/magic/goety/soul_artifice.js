ServerEvents.recipes(event => {
    //TOTEM OF ROOTS
    event.remove({ id: 'goety:totem_of_roots' })
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            "blb",
            "lll",
            "blb"
        ],
        "reagents": [
            "eeee"
        ],
        "key" : {
            "l": {
                "tag" : "forge:gems/lapis_lazuli"
            },
            "b": {
                "tag": "farmersdelight:barks"
            },
            "e": {
                "item": "goety:ectoplasm"
            }
        },
        "result" : Item.of('goety:totem_of_roots', '{"Max Souls":100,Souls:0}')
    })
    //SOUL ABSORBER
    //removals
    event.remove({id: "goety:soul_sand_souls"}) //as someone who's used it can attest: the sand -> soulsand (thru create haunting) -> SE exploit is OP, and this pack has a lot more ways of making a zillion soulsand
    event.remove({id: "goety:ectoplasm_souls"}) //could get a little silly with apothic spawners
    //additions
    function soulAbsorption (input, value, absorbTime) {
        event.custom({
            "type": "goety:soul_absorber_recipes",
            "ingredient": input, //item or tag
            "soulIncrease": value, //int
            "cookingtime": absorbTime //int in ticks
        })
    }
    soulAbsorption(
        {"tag": "malum:aspected_spirits"},
        30,
        50
    )
    soulAbsorption(
        {"tag": "bloodmagic:crystals/demon"},
        30,
        50
    )
    soulAbsorption(
        {"item": "netherexp:wisp_bottle"},
        80,
        200
    )
    soulAbsorption(
        {"item": "netherexp:banshee_powder"},
        15,
        20
    )
})