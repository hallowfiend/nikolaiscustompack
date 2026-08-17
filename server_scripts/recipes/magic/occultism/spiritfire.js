ServerEvents.recipes(event =>{
    const removals = [
        'occultism:spirit_attuned_gem',
        'occultism:awakened_feather',
        'occultism:taboo_book',
        'occultism:purified_ink',
        'occultism:book_of_binding_empty',
        'occultism:otherstone'
    ]
    removals.forEach(item => {
        event.remove({ type: "occultism:spirit_fire", output: item })
    })
    //basic componence
    event.recipes.occultism.spirit_fire('occultism:awakened_feather', 'mna:animated_quill')
    event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'aether:zanite_gemstone')
    event.recipes.occultism.spirit_fire('occultism:taboo_book', 'evilcraft:blook')
    event.recipes.occultism.spirit_fire('occultism:purified_ink', 'irons_spellbooks:epic_ink')
    event.recipes.occultism.spirit_fire('occultism:otherstone', 'goety:shade_stone')
    //strumm tempering
    event.recipes.occultism.spirit_fire('gtceu:strumm_ingot', 'gtceu:frostsilver_ingot')
})