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
            "ingredient": {item: input}, //item
            "soulIncrease": value, //int
            "cookingtime": absorbTime //int in ticks
        }).id(`kubejs:goety/soul_absorption/${input.split(":")[1]}`)
    }
    const principleCrystals = [
        'malum:arcane_spirit',
        'malum:wicked_spirit',
        'malum:sacred_spirit',
        'malum:eldritch_spirit',
        'malum:aerial_spirit',
        'malum:earthen_spirit',
        'malum:aqueous_spirit',
        'malum:infernal_spirit',
        'bloodmagic:defaultcrystal',
        'bloodmagic:destructivecrystal',
        'bloodmagic:vengefulcrystal',
        'bloodmagic:corrosivecrystal',
        'bloodmagic:steadfastcrystal'
    ]
    principleCrystals.forEach(crystal => {
        event.custom({
            "type": "goety:soul_absorber_recipes",
            "ingredient": {item: crystal}, //item or tag
            "soulIncrease": 30, //int
            "cookingtime": 50 //int in ticks
        }).id(`kubejs:goety/soul_absorption/${crystal.split(":")[1]}`)
    })
    soulAbsorption(
        "netherexp:wisp_bottle",
        80,
        200
    )
    soulAbsorption(
        "netherexp:banshee_powder",
        15,
        20
    )
})