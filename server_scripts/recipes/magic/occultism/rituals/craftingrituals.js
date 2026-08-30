ServerEvents.recipes(event => {
    //Undergarden catalyst
    event.remove({ output: 'undergarden:catalyst'})
    event.recipes.occultism.ritual(
      'undergarden:catalyst',
      [
        'occultism:iesnium_pickaxe',
        'eidolon:pewter_inlay',
        'eidolon:gold_inlay',
        'embers:dawnstone_aspectus',
        'twilightforest:knightmetal_ingot',
        'kubejs:deepbore_tar'
      ],
      'botania:mana_diamond',
      'occultism:craft_foliot'
    ).dummy("kubejs:ritual_dummy/undergarden_catalyst").useItem('kubejs:book_of_invocations')
    //Codex Arcana
    event.recipes.occultism.ritual(
      'mna:guide_book',
      [
        'mna:vinteum_dust',
        'mna:vinteum_dust',
        'gtceu:iron_plate',
        'gtceu:iron_plate',
        'eidolon:magic_ink',
        'occultism:otherworld_essence'
      ],
      'minecraft:writable_book',
      'occultism:craft_foliot'
    ).dummy('kubejs:ritual_dummy/codex_arcana').useItem('minecraft:experience_bottle')
    //Dimensional Storage
    //Controller Base
    event.remove({ id: 'occultism:ritual/craft_storage_controller_base' })
    event.recipes.occultism.ritual(
      'occultism:storage_controller_base',
      [
        'occultism:otherstone_pedestal',
        'eidolon:lesser_soul_gem',
        'eidolon:lesser_soul_gem',
        'gtceu:double_gold_plate',
        'gtceu:double_gold_plate',
        'create:item_vault',
        'magichem:materia_jar'
      ],
      'occultism:book_of_binding_bound_foliot',
      'occultism:craft_foliot'
    ).dummy("occultism:ritual_dummy/craft_storage_controller_base")
})