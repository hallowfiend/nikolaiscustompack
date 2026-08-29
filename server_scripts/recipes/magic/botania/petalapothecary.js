
ServerEvents.recipes(event => {
    const yeets = [
        'botania:petal_apothecary/rosa_arcana',
        'botania:petal_apothecary/entropinnyum',
        'botania:petal_apothecary/fallen_kanade',
        'botania:petal_apothecary/bubbell',
        'botania:petal_apothecary/vinculotus',
        'botania:petal_apothecary/pollidisiac',
        'botania:petal_apothecary/pure_daisy'
    ]
    yeets.forEach(yeet => {
        event.remove({id: yeet})
    })
    //pure daisy
    event.recipes.botania.petal_apothecary("botania:pure_daisy", [
        '#botania:petals/white',
        '#botania:petals/white',
        '#botania:petals/white',
        '#botania:petals/white',
        'kubejs:lifecrystal'
    ]).id('botania:petal_apothecary/pure_daisy')
    //rosa arcana (nerfed slightly bc xp farms)
    event.recipes.botania.petal_apothecary("botania:rosa_arcana", [
        '#botania:petals/pink',
        '#botania:petals/pink',
        '#botania:petals/purple',
        '#botania:petals/purple',
        '#botania:petals/lime',
        'botania:rune_mana',
        'kubejs:rune_mind'
    ]).id('botania:petal_apothecary/rosa_arcana')
    //entropinnyum (im sorry dear i have to nerf you)
    event.recipes.botania.petal_apothecary("botania:entropinnyum", [
        '#botania:petals/red',
        '#botania:petals/red',
        '#botania:petals/gray',
        '#botania:petals/gray',
        '#botania:petals/white',
        '#botania:petals/white',
        'botania:rune_wrath',
        'kubejs:rune_force',
        'botania:rune_fire'
    ]).id('botania:petal_apothecary/entropinnyum')
    //fallen kanade (nerfed for bm)
    event.recipes.botania.petal_apothecary("botania:fallen_kanade", [
        '#botania:petals/white',
        '#botania:petals/white',
        '#botania:petals/yellow',
        '#botania:petals/yellow',
        '#botania:petals/orange',
        'kubejs:rune_heart',
        'botania:rune_spring',
        'kubejs:rune_temperance',
        'kubejs:whiff_of_vitality'
    ]).id('botania:petal_apothecary/fallen_kanade')
    //bubbell (why the hell is this gated behind alfheim)
    event.recipes.botania.petal_apothecary("botania:bubbell", [
        '#botania:petals/cyan',
        '#botania:petals/cyan',
        '#botania:petals/light_blue',
        '#botania:petals/light_blue',
        '#botania:petals/blue',
        '#botania:petals/blue',
        'botania:rune_water',
        'kubejs:rune_space'
    ]).id('botania:petal_apothecary/bubbell')
    //vinculotus
    event.recipes.botania.petal_apothecary("botania:vinculotus", [
        '#botania:petals/black',
        '#botania:petals/black',
        '#botania:petals/purple',
        '#botania:petals/purple',
        '#botania:petals/green',
        'botania:rune_water',
        'botania:rune_sloth',
        'kubejs:rune_chastity',
        'botania:redstone_root'
    ]).id('botania:petal_apothecary/vinculotus')
    //pollidisiac
    event.recipes.botania.petal_apothecary("botania:pollidisiac", [
        '#botania:petals/red',
        '#botania:petals/red',
        '#botania:petals/pink',
        '#botania:petals/pink',
        '#botania:petals/orange',
        'botania:rune_lust',
        'kubejs:rune_heart'
    ]).id('botania:petal_apothecary/pollidisiac')
})