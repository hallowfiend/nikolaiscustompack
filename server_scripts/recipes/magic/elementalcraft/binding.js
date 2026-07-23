ServerEvents.recipes(event => {
    elementalcraftRecipes.initialize(event);
    
    event.remove({ id: 'bloodmagic:weak_activation_crystal' })
    elementalcraftRecipes.bind(
        "bloodmagic:activationcrystalweak",
        [
            {"item": "bloodmagic:lavacrystal"},
            {"item": "goety:hunger_core"},
            {"item": "deep_aether:skyjade"},
            {"item": "kubejs:bloodied_dust"},
            {"item": "ars_nouveau:conjuration_essence"}
        ],
        2000,
        "air"
    )
    elementalcraftRecipes.bind(
        "bloodmagic:activationcrystalawakened",
        [
            {"item": "bloodmagic:activationcrystalweak"},
            {"item": "malum:mnemonic_fragment"},
            {"item": "magichem:thunderstone"},
            {"item": "botania:mana_powder"},
            {"item": "naturesaura:sky_ingot"}
        ],
        4000,
        "water"
    )
})