ServerEvents.recipes((event) => {
    // making cataclysm's black steel useful
    event.remove({ id: 'botania:mana_infusion/manasteel' })
    event.remove({ id: 'botania:mana_infusion/manasteel_block' })
    event.recipes.botania.mana_infusion('botania:manasteel_ingot', '#forge:ingots/black_steel', 2000)
    event.recipes.botania.mana_infusion('botania:manasteel_block', '#forge:storage_blocks/black_steel', 16000)

    // mana sapphires
    event.remove({ id: 'botania:mana_infusion/mana_diamond' })
    event.remove({ id: 'botania:mana_infusion/mana_diamond_block' })
    event.recipes.botania.mana_infusion('botania:mana_diamond', '#forge:gems/sapphire', 5000)
    event.recipes.botania.mana_infusion('botania:mana_diamond_block', 'gtceu:sapphire_block', 8000)
    event.recipes.botania.mana_infusion(Item.of("botania:mana_diamond",2), '#forge:flawless_gems/sapphire', 9000)
    event.recipes.botania.mana_infusion(Item.of("botania:mana_diamond",4), '#forge:exquisite_gems/sapphire', 15000)
})