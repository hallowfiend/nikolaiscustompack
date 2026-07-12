ItemEvents.tooltip(event => {
  // Hexalia 
  event.add('hexalia:sage_pendant', '§7Increases experience gain.')
  event.add('hexalia:athame', '§7Can extract tree resin, harvest Lotus Blossoms and carve ritual braziers.')
  event.add('hexalia:briar_sickle', '§7Cuts vegetation in a wide area.')
  event.add('hexalia:spiritroot_tether', '§7Can capture creatures.')
  event.add('hexalia:kelpweave_blade', '§7Can hurl its wielder forward in water or rain.')
  event.add('hexalia:foul_sac', '§7Releases a poisonous and paralyzing mixture.')
  event.add('hexalia:frost_sac', '§7Releases a weakening and paralyzing mixture.')
  event.add('hexalia:searing_sac', '§7Releases a burning mixture.')
  event.add('hexalia:earplugs', '§7Protects from mandrake screams.')
  event.add('hexalia:ghostveil', '§7Provides stealth to hostiles.')
  event.add('hexalia:bogshade', '§7Grants agility when swimming and on mud.')
  event.add('hexalia:bloomwrap_hat', '§7Grants knockback and stun resistance.')
  event.add('hexalia:bloomwrap_robes', '§7Reflects a portion of incoming damage.')
  event.add('hexalia:bloomwrap_leggings', '§7Grants regeneration nearby flowers.')
  event.add('hexalia:bloomwrap_boots', '§7Increases speed when walking on leaves.')

  event.addAdvanced('malum:encyclopedia_arcana', (item, advanced, text) => {
    text.add(1, Text.of('Recipes may be incorrect, check JEI!').red())
  })
  event.addAdvanced('malum:encyclopedia_esoterica', (item, advanced, text) => {
    text.add(1, Text.of('Recipes may be incorrect, check JEI!').red())
  })

  //greg

   event.addAdvanced('kubejs:manaweave_processor', (item, advanced, text) => {
     text.add(1, Text.gray('Magus-on-Chip'))
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
     text.add(1, Text.green("Don't order your DTPF from TEMU").italic().bold())
     text.add(2, Text.green("Generates EU from alcoholic drinks."))
     text.add(3, Text.green("More complex or expensive drinks produce more energy."))
     text.add(4, Text.green("Check JEI for exact values."))
    })
})
