ServerEvents.recipes(event => {
    //squeezing blood from stuff
    const bloodSqueezable = [
        {item: 'evilcraft:undead_sapling', amount: 100},
        {item: 'evilcraft:undead_leaves', amount: 50},
        {item: 'evilcraft:undead_log', amount: 100},
        {item: 'evilcraft:undead_log_stripped', amount: 100},
        {item: 'undergarden:blood_globule', amount: 100}
    ]
    bloodSqueezable.forEach(squeezable => {
        event.custom({
            "type": "immersiveengineering:squeezer",
            "energy": 6400,
            "fluid": {
                "amount": squeezable.amount,
                "fluid": "evilcraft:blood"
            },
            "input": {
                "item": squeezable.item
            },
            "result": {
                "item": "biomancy:organic_matter"
            }
        })

        event.recipes.gtceu.extractor(`blood_from_${squeezable.item}`)
        .itemInputs(squeezable.item)
        .outputFluids(`evilcraft:blood ${squeezable.amount}`)
        .itemOutputs('biomancy:organic_matter')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV]);

        event.recipes.create.compacting(
            [Fluid.of('evilcraft:blood').withAmount(squeezable.amount), 'biomancy:organic_matter'],
            squeezable.item);

    })
    //blood infuser
    event.remove({output: 'evilcraft:blood_infuser'})
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'evilcraft:blood_infusion_core',
      "count": 1
    },
    "output": {
      "item": 'evilcraft:blood_infuser',
      "count": 1
    },
    "extra_items": [
      {
        "item": "gtceu:red_alloy_plate",
        "count": 8
      },
      {
        "item": "malum:living_flesh",
        "count": 4
      },
      {
        "item": "quark:blackstone_furnace",
        "count": 1
      },
      {
        "item": 'immersiveengineering:component_iron',
        "count": 1,
      },
      {
        "item": "twilightforest:naga_scale",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "wicked",
        "count": 16
      },
      {
        "type": "arcane",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 4
      }
    ]
  })
})