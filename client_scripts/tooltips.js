ItemEvents.tooltip(event => {

  //curios
  event.addAdvanced('eidolon:warded_mail', (item, advanced, text) => {
    text.add(1, Text.blue('+4 Soul Ward Capacity'))
  })
  event.addAdvanced('embers:dawnstone_mail', (item, advanced, text) => {
    text.add(1, Text.blue('+2 Armor'))
  })
  event.addAdvanced('embers:ember_ring', (item, advanced, text) => {
    text.add(1, Text.blue('+5% Holy Spell Power'))
    text.add(2, Text.blue('+5% Fire Spell Power'))
    text.add(3, Text.blue('+5% Geo Spell Power'))
  })
  event.addAdvanced('embers:ember_belt', (item, advanced, text) => {
    text.add(1, Text.blue('+5% Holy Spell Power'))
    text.add(2, Text.blue('+5% Fire Spell Power'))
    text.add(3, Text.blue('+5% Geo Spell Power'))
  })
  event.addAdvanced('embers:ember_amulet', (item, advanced, text) => {
    text.add(1, Text.blue('+5% Holy Spell Power'))
    text.add(2, Text.blue('+5% Fire Spell Power'))
    text.add(3, Text.blue('+5% Geo Spell Power'))
  })
  event.addAdvanced('ars_elemental:water_bangle', (item, advanced, text) => {
    text.add(1, Text.blue('+15% Ice Spell Power'))
    text.add(2, Text.blue('+15% Abyssal Spell Power'))
  })
  event.addAdvanced('ars_elemental:fire_bangle', (item, advanced, text) => {
    text.add(1, Text.blue('+15% Fire Spell Power'))
    text.add(2, Text.blue('+15% Technomancy Spell Power'))
  })
  event.addAdvanced('ars_elemental:earth_bangle', (item, advanced, text) => {
    text.add(1, Text.blue('+15% Geo Spell Power'))
    text.add(2, Text.blue('+15% Nature Spell Power'))
  })
  event.addAdvanced('ars_elemental:air_bangle', (item, advanced, text) => {
    text.add(1, Text.blue('+15% Wind Spell Power'))
    text.add(2, Text.blue('+15% Lightning Spell Power'))
  })
  event.addAdvanced('ars_elemental:summon_bangle', (item, advanced, text) => {
    text.add(1, Text.blue('+15% Holy Spell Power'))
    text.add(2, Text.blue('+15% Summon Damage'))
  })

  //drop locations
  event.addAdvanced('gtceu:palladium_nugget', (item, advanced, text) => {
    text.add(1, Text.gray('Drops from Illagers'))
  })

  //crop locations
  event.addAdvanced(['hexalia:dreamshroom'], (item, advanced, text) => {
    text.add(1, Text.gray('Found in taigas'))
  })
  event.addAdvanced(['collectorsreap:portobello'], (item, advanced, text) => {
    text.add(1, Text.gray('Found only in meadows'))
  })
  event.addAdvanced(['hexalia:spirit_bloom', 'farmersrespite:tea_seeds', 'mna:tarma_root'], (item, advanced, text) => {
    text.add(1, Text.gray('Found in swamps'))
  })
  event.addAdvanced('netherexp:warped_wart', (item, advanced, text) => {
    text.add(1, Text.cyan('Found only in Sanctums'))
  })
  event.addAdvanced('explorerscompass:explorers_compass', (item, advanced, text) => {
    text.add(1, Text.gray("Created through the Ritual of the Map's Edge"))
  })

  //ars ritual tablets
  event.addAdvanced(['ars_nouveau:ritual_animal_summon', 'ars_nouveau:ritual_wilden_summon'], (item, advanced, text) => {
      text.remove(1)
      text.add(1, Text.red("Deprecated, use Eidolon's Brazier Summoning instead!").bold())
  })

  //misc tips
  event.addAdvanced(['malum:encyclopedia_arcana', 'malum:encyclopedia_esoterica'], (item, advanced, text) => {
    text.add(1, Text.red('Recipes may be incorrect, check JEI!'))
  })
  event.addAdvanced('hexalia:infused_dirt', (item, advanced, text)=> {
    text.add(1, Text.gray('Hexalia herbs placed atop this block can be duplicated with bone meal'))
  })

  //greg

   event.addAdvanced('kubejs:manaweave_processor', (item, advanced, text) => {
     text.add(1, Text.gray('Archmagus-on-Chip'))
     text.add(2, Text.lightPurple('ZPM-Tier Circuit').bold())
    })

    event.addAdvanced('kubejs:manaweave_processor_assembly', (item, advanced, text) => {
     text.add(1, Text.gray('Not the installation wizard you were expecting'))
     text.add(2, Text.lightPurple('UV-Tier Circuit').bold())
    })

    event.addAdvanced('kubejs:manaweave_processor_computer', (item, advanced, text) => {
     text.add(1, Text.gray('HEX would be proud'))
     text.add(2, Text.lightPurple('UHV-Tier Circuit').bold())
    })

    event.addAdvanced('kubejs:manaweave_processor_mainframe', (item, advanced, text) => {
     text.add(1, Text.gray('Magitech at its finest'))
     text.add(2, Text.lightPurple('UEV-Tier Circuit').bold())
    })

    event.addAdvanced('gtceu:drunken_terraprismatic_fluxinator', (item, advanced, text) => {
     text.add(1, Text.green("Don't order your DTPF from Temu").italic().bold())
     text.add(2, Text.gray("Generates EU from alcoholic drinks"))
     text.add(3, Text.gray("More complex or expensive drinks produce more energy"))
     text.add(4, Text.gray("(check JEI for exact values)"))
    })

    event.addAdvanced('gtceu:thermomechanical_ember_extractor', (item, advanced, text) => {
     text.add(1, Text.gold("Peak Dawi Engineering").italic().bold())
     text.add(2, Text.gray("Uses Steam and alchemically pure fuels to extract infinite Ember"))
     text.add(3, Text.gray("(and/or other materials, depending on dimension)"))
    })

    event.addAdvanced('gtceu:grand_cauldron', (item, advanced, text) => {
     text.add(1, Text.darkPurple("Exalted Thaumocombinator").italic().bold())
     text.add(2, Text.gray("Performs Mixing Cauldron and Cauldron Crafting recipes very quickly"))
     text.add(3, Text.gray("Requires 0 EU; operated by Wixies paid in Source-Boosted Dieselixir"))
    })

    event.addAdvanced('gtceu:epic_keg', (item, advanced, text) => {
     text.add(1, Text.gold("Glory to S. Cerevisiae").italic().bold())
     text.add(2, Text.gray("Ferments food and drink with great speed and efficiency"))
     text.add(3, Text.gray("Can run parallel recipes and automatically provides the optimal temperature for fermenting"))
     text.add(4, Text.gray("Requires 0 EU"))
    })
})
