ServerEvents.recipes(event => {
    //Cursed Metal is now made with Brass instead
    event.remove({ id: 'goety:cursed_ingot_craft' })
    event.remove({ id: 'goety:cursed_ingot_burner' })
    event.remove({ id: 'goety:cursed_metal_block_burner' })
    event.recipes.goety.cursed_infuser_recipes('goety:cursed_ingot', 'gtceu:brass_ingot')
        .cookingTime(60)
        .id('kubejs:goety/cursed_infuser/cursed_ingot');
    event.recipes.goety.cursed_infuser_recipes('goety:cursed_metal_block', 'gtceu:brass_block')
        .cookingTime(360)
        .id('kubejs:goety/cursed_infuser/cursed_block');
    //Haunting as an alternative to cursed infusion
    const hauntInBulk = [
        {input: 'gtceu:brass_ingot', output: 'goety:cursed_metal_ingot'},
        {input: 'gtceu:brass_block', output: 'goety:cursed_metal_block'},
        {input: 'minecraft:emerald', output: 'goety:magic_emerald'},
        {input: 'minecraft:emerald_block', output: 'goety:awakened_emerald_block'},
        {input: 'minecraft:spore_blossom', output: 'goety:corpse_blossom'},
        {input: '#forge:obsidian', output: 'goety:crypt_stone'},
        {input: 'minecraft:bone_block', output: 'goety:savage_tooth'},
        {input: 'minecraft:calcite', output: 'goety:marble'},
        {input: '#forge:sandstone', output: 'goety:siltstone'},
        {input: '#forge:storage_blocks/gold', output: 'goety:indented_gold'},
        {input: '#forge:gems/amethyst', output: 'goety:empty_focus'},
        {input: '#goety:steepable_wood', output: 'goety:steep_wood'},
        {input: 'goety:ominous_stone', output: 'goety:shade_stone'},
        {input: '#minecraft:saplings', output: 'goety:haunted_sapling'}
    ]
    hauntInBulk.forEach(recipe => {
        event.recipes.create.haunting(recipe.output, recipe.input).id(`kubejs:create/haunting/${recipe.output.split(":")[1]}`)
    })
    //Philo stone (citation needed)
    event.remove({id:'goety:philosophers_stone'})
    event.custom({
        "type": "goety:brazier",
        "soulCost": 50000,
        "ingredients": [
            {
                "tag": "forge:ingots/uranium"
            },
            {
                "item": 'magichem:essentia_nigredo'
            },
            {
                "item": "magichem:essentia_albedo"
            },
            {
                "item": "magichem:essentia_citrinitas"
            },
            {
                "item": "magichem:essentia_rubedo"
            },
            {
                "item": "botania:rune_greed"
            },
            {
                "item": "embers:glimmer_crystal"
            },
            {
                "item": "goety:unholy_blood"
            },
            {
                "item": "bloodmagic:strengthenedcatalyst"
            }
        ],
        "result": {
            "item": "goety:philosophers_stone"
        }
    }).id('goety:philosophers_stone')
});