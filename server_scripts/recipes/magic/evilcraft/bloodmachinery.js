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
        }).id(`kubejs/immersive_engineering/squeezer/blood_from_${squeezable.item.split(":")[1]}`)

        event.recipes.gtceu.extractor(`kubejs:gtceu/extractor/blood_from_${squeezable.item.split(":")[1]}`)
        .itemInputs(squeezable.item)
        .outputFluids(`evilcraft:blood ${squeezable.amount}`)
        .itemOutputs('biomancy:organic_matter')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV]);

        event.recipes.create.compacting(
            [Fluid.of('evilcraft:blood').withAmount(squeezable.amount), 'biomancy:organic_matter'],
            squeezable.item).id(`kubejs:create/compacting/blood_from_${squeezable.item.split(":")[1]}`);

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
    //purifier
    event.remove({output: 'evilcraft:purifier'})
    event.custom({
    "type": "malum:spirit_infusion",
    "input": {
      "item": 'evilcraft:blood_infusion_core',
      "count": 1
    },
    "output": {
      "item": 'evilcraft:purifier',
      "count": 1
    },
    "extra_items": [
      {
        "item": "evilcraft:dark_gem",
        "count": 8
      },
      {
        "item": "kubejs:bloodchannel_gem",
        "count": 4
      },
      {
        "item": "kubejs:vengeful_node",
        "count": 1
      },
      {
        "item": "eidolon:pewter_inlay",
        "count": 1
      }
    ],
    "spirits": [
      {
        "type": "arcane",
        "count": 16
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 4
      }
    ]
    })
    //blood chest
    //spiked plate
    //sanguinary pedestal
    //box of eternal closure
    //spirit reanimator
    //spirit furnace
})