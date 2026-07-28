ServerEvents.recipes(event => {
    event.remove({ output: "bloodmagic:blankslate" })
    event.recipes.bloodmagic
            .altar('bloodmagic:blankslate', 'kubejs:prepared_stone')
            .upgradeLevel(1)
            .altarSyphon(1000)
            .id('kubejs:blank_slate');
})