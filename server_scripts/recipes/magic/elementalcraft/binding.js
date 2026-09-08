ServerEvents.recipes(event => {
    elementalcraftRecipes.initialize(event);
    
    //springaline
    event.remove({id: 'elementalcraft:binding/springaline_shard'})
    elementalcraftRecipes.bind(
        "elementalcraft:springaline_shard",
        [
            {"item": "gtceu:apatite_gem"},
            {"item": "mna:vinteum_dust"},
            {"item": "eidolon:enchanted_ash"},
            {"item": "tconstruct:sky_slime_crystal"},
            {'item': "elementalcraft:watercrystal"}
        ],
        2500,
        "water",
        'elementalcraft:binding/springaline_shard'
    )
    //swift alloy
    event.remove({id: 'elementalcraft:binding/swift_alloy_ingot'})
    elementalcraftRecipes.bind(
        "elementalcraft:swift_alloy_ingot",
        [
            {"item": "malum:cthonic_gold"},
            {"tag": "forge:ingots/drenched_iron"},
            {"tag": "forge:ingots/tin"},
            {"item": "enderio:photovoltaic_composite"},
            {"item": "elementalcraft:aircrystal"}
        ],
        1250,
        "air",
        'elementalcraft:binding/swift_alloy_ingot'
    )
    //hardened handle
    event.remove({id: 'elementalcraft:binding/hardened_handle'})
    elementalcraftRecipes.bind(
        "elementalcraft:hardened_handle",
        [
            {"item": "gtceu:steel_rod"},
            {"item": "elementalcraft:whiterock"},
            {"item": "elementalcraft:air_silk"},
            {"item": "botania:livingwood_twig"},
            {"item": "elementalcraft:earthcrystal"}
        ],
        1250,
        "earth",
        'elementalcraft:binding/hardened_handle'
    )
    //fireite ingot
    event.remove({id: 'elementalcraft:binding/fireite_ingot'})
    elementalcraftRecipes.bind(
        "elementalcraft:fireite_ingot",
        [
            {"tag": "forge:ingots/netherite"},
            {"tag": "forge:ingots/swift_alloy"},
            {"tag": "forge:ingots/tungsten"},
            {"item": "magichem:catalytic_carbon"},
            {"item": "embers:ember_crystal_cluster"},
            {"item": "elementalcraft:purecrystal"}
        ],
        30000,
        "fire",
        'elementalcraft:binding/fireite_ingot'
    )
    //activation crystals
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
        "air",
        'kubejs:elementalcraft/binding/weak_activation_crystal'
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
        "water",
        'kubejs:elementalcraft/binding/woke_activation_crystal'
    )
})