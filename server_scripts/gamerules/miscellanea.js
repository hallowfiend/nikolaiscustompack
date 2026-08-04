EntityEvents.spawned(event => {
    const disabledGravity = [
        'eidolon:shadow_gem',
        'eidolon:lesser_soul_gem',
        'eidolon:soul_shard',
        'malum:astral_weave',
        'malum:arcane_spirit',
        'malum:wicked_spirit',
        'malum:sacred_spirit',
        'malum:earthen_spirit',
        'malum:infernal_spirit',
        'malum:aerial_spirit',
        'malum:aqueous_spirit',
        'malum:eldritch_spirit',
        'malum:umbral_spirit',
        'bloodmagic:defaultcrystal',
        'bloodmagic:destructivecrystal',
        'bloodmagic:vengefulcrystal',
        'bloodmagic:corrosivecrystal',
        'bloodmagic:steadfastcrystal'
    ]
    if (event.entity.type == 'minecraft:item') {
      let itemEntity = event.entity
      let itemStack = itemEntity.item

      disabledGravity.forEach(item => {
      if (itemStack.id == item) {
        // Disable gravity for this item entity
        itemEntity.setNoGravity(true)
      }})
    }
  })
