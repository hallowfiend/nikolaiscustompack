
ServerEvents.recipes(event => {

  // arcane charcoal coking
  event.recipes.gtceu.coke_oven('arcane_charcoal_coking')
    .itemInputs('#malum:soulwood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .duration(900)

  event.recipes.gtceu.coke_oven('arcane_charcoal_coking2')
    .itemInputs('#malum:runewood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .duration(900)
  
  event.recipes.immersiveengineering.coke_oven(
    'malum:arcane_charcoal', '#malum:runewood_logs', 1000, 2000
  )

  event.recipes.immersiveengineering.coke_oven(
    'malum:arcane_charcoal', '#malum:soulwood_logs', 1000, 2000
  )

  //blast furnace fuel
  event.recipes.immersiveengineering.blast_furnace_fuel('malum:arcane_charcoal', 600)
  event.recipes.immersiveengineering.blast_furnace_fuel('malum:block_of_arcane_charcoal', 6000)
  
  // soulstained bronze
  event.remove({ id: 'malum:spirit_infusion/soul_stained_steel_ingot' })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "tconstruct:amethyst_bronze_ingot",
      "count": 4
    },
    "output": {
      "item": "malum:soul_stained_steel_ingot",
      "count": 4
    },
    "extra_items": [
      {
      "item": "malum:processed_soulstone",
      "count": 2
      }
    ],
    "spirits": [
      {
        "type": "wicked",
        "count": 3
      },
      {
        "type": "earthen",
        "count": 1
      },
      {
        "type": "arcane",
        "count": 1
      }
    ]
  })
})