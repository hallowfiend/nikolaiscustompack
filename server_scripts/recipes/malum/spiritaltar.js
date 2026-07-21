
ServerEvents.recipes((event) => {

  // arcane charcoal coking
  event.recipes.gtceu.coke_oven('arcane_charcoal_coking')
    .itemInputs('#malum:soulwood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .outputFluids(Fluid.of('gtceu:creosote', 1000))
    .duration(900);

  event.recipes.gtceu.coke_oven('arcane_charcoal_coking2')
    .itemInputs('#malum:runewood_logs')
    .itemOutputs('malum:arcane_charcoal')
    .outputFluids(Fluid.of('gtceu:creosote', 1000))
    .duration(900);
  
  event.recipes.immersiveengineering.coke_oven(
    'malum:arcane_charcoal', '#malum:runewood_logs', 1000, 2000
  );

  event.recipes.immersiveengineering.coke_oven(
    'malum:arcane_charcoal', '#malum:soulwood_logs', 1000, 2000
  );

  //blast furnace fuel
  event.recipes.immersiveengineering.blast_furnace_fuel('malum:arcane_charcoal', 600)
  event.recipes.immersiveengineering.blast_furnace_fuel('malum:block_of_arcane_charcoal', 6000)

  //chimerite
  const chimeriteSeeds = [
    {nugget: "palladium", mult: "1"}, //4
    {nugget: "mithril", mult: "4"}, //16
    {nugget: "sterling_silver", mult: "8"}, //32
    {nugget: "iesnium", mult: "16"} //64
  ]
  chimeriteSeeds.forEach(seed => {
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "tag": `forge:nuggets/${seed.nugget}`,
      "count": 1
    },
    "output": {
      "item": "mna:chimerite_gem",
      "count": 4*seed.mult
    },
    "extra_items": [
      {
      "item": "experienceobelisk:cognitive_flux",
      "count": 1
      },
      {
      "item": "mna:purified_vinteum_dust",
      "count": 1
      },
      {
      "item": "cold_sweat:chameleon_molt",
      "count": 1
      },
      {
      "item": "cosmopolitan:aurora_kohakutou",
      "count": 1
      },
      {
      "tag": "forge:gems/spinel",
      "count": 1
      },
      {
      "tag": "forge:gems/opal",
      "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "earthen",
        "count": 8
      }
    ]
  })
  })
  // soulstained bronze
  event.remove({ id: "malum:spirit_infusion/soul_stained_steel_ingot" })
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
      "count": 4
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
  //malignant pewter
  event.remove({ id: "malum:spirit_infusion/malignant_pewter_ingot" })
  event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": "eidolon:pewter_ingot",
      "count": 4
    },
    "output": {
      "item": "malum:malignant_pewter_ingot",
      "count": 4
    },
    "extra_items": [
      {
      "item": "malum:null_slate",
      "count": 8
      },
      {
        "item": "malum:malignant_lead",
        "count": 1
      },
      {
        "item": "gtceu:cursed_alloy_plate",
        "count": 3
      }
    ],
    "spirits": [
      {
        "type": "earthen",
        "count": 16
      },
      {
        "type": "eldritch",
        "count": 4
      }
    ]
  })
})