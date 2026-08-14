ServerEvents.recipes(event => {
    function monsterCookingWithContainer(ingredients, container, category, result, cookTime, xp){
        event.custom({
        "type": "dungeonsdelight:monster_cooking",
        "container": container,
        "cookingtime": cookTime,
        "experience": xp,
        "ingredients": ingredients,
        "recipe_book_tab": category,
        "result": result
    }).id(`kubejs:dungeonsdelight/monster_cooking/${result.getId().split(":")[1]}`)
    }
    function monsterCooking(ingredients, category, result, cookTime, xp){
        event.custom({
        "type": "dungeonsdelight:monster_cooking",
        "cookingtime": cookTime,
        "experience": xp,
        "ingredients": ingredients,
        "recipe_book_tab": category,
        "result": result
    }).id(`kubejs:dungeonsdelight/monster_cooking/${result.getId().split(":")[1]}`)
    }
    //gummies with biomancy gellant
    const gummies = [
        {flavor: 'collectorsreap:lime', ingredient: 'collectorsreap:lime'},
        {flavor: 'collectorsreap:pomegranate', ingredient: 'collectorsreap:pomegranate_slice'},
        {flavor: 'collectorsreap:pink_dragon_fruit', ingredient: 'collectorsreap:pink_dragon_fruit'},
        {flavor: 'collectorsreap:lucuma', ingredient: 'collectorsreap:lucuma'},
        {flavor: 'collectorsreap:melon', ingredient: 'minecraft:melon_slice'},
        {flavor: 'collectorsreap:apple', ingredient: 'minecraft:apple'},
        {flavor: 'collectorsreap:glow_berry', ingredient: 'minecraft:glow_berries'},
        {flavor: 'collectorsreap:carrot', ingredient: 'minecraft:carrot'},
        {flavor: 'collectorsreap:green_tea', ingredient: 'farmersrespite:green_tea_leaves'},
        {flavor: 'collectorsreap:yellow_tea', ingredient: 'farmersrespite:yellow_tea_leaves'},
        {flavor: 'collectorsreap:black_tea', ingredient: 'farmersrespite:black_tea_leaves'},
        {flavor: 'collectorsreap:coffee', ingredient: 'farmersrespite:coffee_beans'},
        {flavor: 'collectorsreap:bullet_pepper', ingredient: 'mynethersdelight:bullet_pepper'},
        {flavor: 'collectorsreap:strawberry', ingredient: 'neapolitan:strawberries'},
        {flavor: 'collectorsreap:banana', ingredient: '#forge:fruits/banana'},
        {flavor: 'collectorsreap:vanilla', ingredient: 'neapolitan:dried_vanilla_pods'},
        {flavor: 'collectorsreap:mint', ingredient: 'neapolitan:mint_leaves'},
        {flavor: 'collectorsreap:adzuki', ingredient: 'neapolitan:roasted_adzuki_beans'},
        {flavor: 'collectorsreap:chocolate', ingredient: 'neapolitan:chocolate_bar'},
        {flavor: 'collectorsreap:passion_fruit', ingredient: 'atmospheric:passion_fruit'},
        {flavor: 'collectorsreap:yucca', ingredient: 'atmospheric:yucca_fruit'},
        {flavor: 'collectorsreap:aloe', ingredient: 'atmospheric:aloe_leaves'},
        {flavor: 'collectorsreap:wild_berry', ingredient: 'windswept:wild_berries'},
        {flavor: 'collectorsreap:pumpkin', ingredient: 'seasonals:pumpkin_puree'},
        {flavor: 'collectorsreap:sweet_berry', ingredient: 'minecraft:sweet_berries'},
        {flavor: 'collectorsreap:beetroot', ingredient: 'minecraft:beetroot'},
        {flavor: 'collectorsreap:prickly_pear', ingredient: 'sob:prickly_pear'},
        {flavor: 'collectorsreap:peanut', ingredient: 'sob:roasted_peanuts'},
        {flavor: 'delightful:salmonberry', ingredient: 'delightful:salmonberries'},
        {flavor: 'delightful:matcha', ingredient: 'delightful:matcha'},
        {flavor: 'delightful:cantaloupe', ingredient: 'delightful:cantaloupe_slice'},
        {flavor: 'delightful:source_berry', ingredient: 'ars_nouveau:sourceberry_bush'},
        {flavor: 'exquisito:chorus', ingredient: 'minecraft:chorus_fruit'},
        {flavor: 'exquisito:warzipan', ingredient: 'exquisito:warzipan'},
        {flavor: 'exquisito:ether_bulb', ingredient: '#exquisito:starcloud_ingredients'},
        {flavor: 'exquisito:nightshade_berry', ingredient: '#exquisito:midnight_ingredients'},
        {flavor: 'cosmopolitan:arbutus_berry', ingredient: 'cosmopolitan:arbutus_berries'},
        {flavor: 'cosmopolitan:boilberry', ingredient: 'cosmopolitan:boilberry'},
        {flavor: 'cosmopolitan:spinalberry', ingredient: 'cosmopolitan:spinalberry'},
        {flavor: 'cosmopolitan:berry_syrup', ingredient: 'cosmopolitan:berry_syrup_bottle'},
        {flavor: 'cosmopolitan:enchanted_fruit', ingredient: 'quark:enchanted_fruit'},
        {flavor: 'cosmopolitan:blisterberry', ingredient: 'undergarden:blisterberry'},
        {flavor: 'cosmopolitan:droopfruit', ingredient: 'undergarden:droopvine_item'},
        {flavor: 'cosmopolitan:mendosteen', ingredient: 'ars_nouveau:mendosteen_pod'},
        {flavor: 'cosmopolitan:bastion', ingredient: 'ars_nouveau:bastion_pod'}
    ]
    gummies.forEach(gummy => {
        event.recipes.farmersdelight.cooking(
            [gummy.ingredient, '2x minecraft:sugar', 'biomancy:gelling_agent'],
            `2x ${gummy.flavor}_gummy`,
            0.5,
            40
        ).id(`kubejs:farmersdelight/cooking/${gummy.flavor.split(":")[1]}_gummy_from_gellant`)
    })
})