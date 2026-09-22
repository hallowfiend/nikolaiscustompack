ServerEvents.recipes(event => {
    //BetterEnd infusion altar
    event.recipes.goety.ritual('betterend:crystalite_helmet', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_helmet')
    .craftType('end')
    .soulCost(10)
    .duration(7)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_helmet');
    event.recipes.goety.ritual('betterend:crystalite_chestplate', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_chestplate')
    .craftType('end')
    .soulCost(10)
    .duration(15)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_chestplate');
    event.recipes.goety.ritual('betterend:crystalite_leggings', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_leggings')
    .craftType('end')
    .soulCost(10)
    .duration(11)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_leggings');
    event.recipes.goety.ritual('betterend:crystalite_boots', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:terminite_boots')
    .craftType('end')
    .soulCost(10)
    .duration(7)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_boots');
    event.recipes.goety.ritual('betterend:enchanted_membrane', 'goety:craft', [
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards',
    'betterend:crystal_shards'
    ])
    .activationItem('minecraft:phantom_membrane')
    .craftType('end')
    .soulCost(10)
    .duration(4)
    .id('kubejs:goety/dark_ritual/voidwork/enchanted_membrane');
    event.recipes.goety.ritual('betterend:elytra_crystalite', 'goety:craft', [
        '#forge:gems/amber',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:enchanted_membrane',
        'betterend:enchanted_membrane',
        'betterend:enchanted_membrane'
    ])
    .activationItem('minecraft:elytra')
    .craftType('end')
    .soulCost(25)
    .duration(25)
    .id('kubejs:goety/dark_ritual/voidwork/crystalite_elytra');
    event.recipes.goety.ritual('betterend:flavolite_runed', 'goety:craft', [
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards'
    ])
    .activationItem('betterend:flavolite_polished')
    .craftType('end')
    .soulCost(10)
    .duration(5)
    .id('kubejs:goety/dark_ritual/voidwork/runed_flavolite');
    event.recipes.goety.ritual('betterend:eternal_crystal', 'goety:craft', [
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        'betterend:crystal_shards',
        '#forge:dusts/ender_pearl',
        '#forge:dusts/ender_pearl',
        '#forge:dusts/ender_pearl',
        '#forge:dusts/ender_pearl'
    ])
    .activationItem('minecraft:end_crystal')
    .craftType('end')
    .soulCost(25)
    .duration(25)
    .id('kubejs:goety/dark_ritual/voidwork/eternal_crystal');
})