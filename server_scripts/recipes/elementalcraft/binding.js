ServerEvents.recipes(event => {
    elementalcraftRecipes.initialize(event);
    
    event.remove({ id: 'bloodmagic:weak_activation_crystal' })
    elementalcraftRecipes.bind(
        "bloodmagic:activationcrystalweak",
        [
            "bloodmagic:lava_crystal",
            "goety:animation_core",
            "deep_aether:skyjade",
            "botania:mana_powder",
            "ars_nouveau:conjuration_essence"
        ],
        2000,
        "air"
    )
    elementalcraftRecipes.bind(
        "bloodmagic:activationcrystalawakened",
        [
            "bloodmagic:activationcrystalweak",
            "malum:mnemonic_fragment",
            "magichem:thunderstone",
            "eternal_starlight:unrealium_ingot",
            "naturesaura:sky_ingot"
        ],
        4000,
        "water"
    )
})