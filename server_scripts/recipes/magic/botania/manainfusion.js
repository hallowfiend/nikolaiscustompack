ServerEvents.recipes((event) => {
    // making cataclysm's black steel useful
    event.remove({ id: 'botania:mana_infusion/manasteel' })
    event.remove({ id: 'botania:mana_infusion/manasteel_block' })
    event.recipes.botania.mana_infusion('botania:manasteel_ingot', '#forge:ingots/black_steel', 2000)
        .id('kubejs:botania/mana_infusion/manasteel_ingot')
    event.recipes.botania.mana_infusion('botania:manasteel_block', '#forge:storage_blocks/black_steel', 16000)
        .id('kubejs:botania/mana_infusion/manasteel_block')

    // mana sapphires
    event.remove({ id: 'botania:mana_infusion/mana_diamond' })
    event.remove({ id: 'botania:mana_infusion/mana_diamond_block' })
    event.recipes.botania.mana_infusion('botania:mana_diamond', '#forge:gems/sapphire', 5000)
        .id('kubejs:botania/mana_infusion/mana_sapphire')
    event.recipes.botania.mana_infusion('botania:mana_diamond_block', 'gtceu:sapphire_block', 8000)
        .id('kubejs:botania/mana_infusion/mana_sapphire_block')
    event.recipes.botania.mana_infusion(Item.of("botania:mana_diamond",2), '#forge:flawless_gems/sapphire', 9000)
        .id('kubejs:botania/mana_infusion/mana_sapphire_from_flawless')
    event.recipes.botania.mana_infusion(Item.of("botania:mana_diamond",4), '#forge:exquisite_gems/sapphire', 15000)
        .id('kubejs:botania/mana_infusion/mana_sapphire_from_exquisite')

    //more mana powder options
    event.remove({ id: 'botania:mana_infusion/mana_powder_dye' })
    event.recipes.botania.mana_infusion('botania:mana_powder', '#forge:dusts/electrotine', 500)
        .id('kubejs:botania/mana_infusion/mana_powder_from_electrotine')
    event.recipes.botania.mana_infusion('botania:mana_powder', '#forge:dusts/mundus', 500)
        .id('kubejs:botania/mana_infusion/mana_powder_from_mundus')
    event.recipes.botania.mana_infusion('botania:mana_powder', '#forge:dusts/amethyst', 500)
        .id('kubejs:botania/mana_infusion/mana_powder_from_amethyst')
    event.recipes.botania.mana_infusion('4x botania:mana_powder', 'scguns:sheol', 500)
        .id('kubejs:botania/mana_infusion/mana_powder_from_sheol')
    event.recipes.botania.mana_infusion('4x botania:mana_powder', 'scguns:peal', 500)
        .id('kubejs:botania/mana_infusion/mana_powder_from_peal')
})