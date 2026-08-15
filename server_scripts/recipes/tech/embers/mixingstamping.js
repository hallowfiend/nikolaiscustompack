ServerEvents.recipes(event => {
    function metalMixing(firstMetal, firstRatio, secondMetal, secondRatio, outputAlloy, alloyAmount){
        event.custom({
            "type": "embers:mixing",
            "inputs": [
                {
                "amount": firstRatio,
                "tag": `forge:${firstMetal}`
            },
            {
            "amount": secondRatio,
                "tag": `forge:${secondMetal}`
            }
        ],
        "output": {
            "amount": alloyAmount,
            "tag": `forge:${outputAlloy}`
        }
        }).id(`kubejs:embers/mixing/${outputAlloy}`)
    }
    metalMixing("gold", 16, "copper", 4, "rose_gold", 20)
    metalMixing("silver", 16, "copper", 4, "sterling_silver", 20)
    metalMixing("lead", 2, "iron", 2, "pewter", 4)
    metalMixing("copper", 2, "aluminium", 6, "duralumin", 8)
    //crowley silver
    event.custom(
    {
      "type": "embers:mixing",
      "inputs": [
        {
          "amount": 144,
          "tag": "forge:silver"
        },
        {
          "amount": 144,
          "fluid": "gtceu:iesnium"
        }
      ],
      "output": {
        "amount": 144,
        "fluid": "gtceu:crowley_silver"
      }
    })
    event.recipes.gtceu.mixer("kubejs:crowley_silver")
        .itemInputs("2x #forge:dusts/silver", "2x #forge:dusts/iesnium", "#forge:dusts/ember")
        .itemOutputs("gtceu:crowley_silver_dust")
        .duration(80)
        .EUt(320)
    //dawnstone
    event.remove({ id: 'embers:mixing/molten_dawnstone' })
    event.custom(
    {
      "type": "embers:mixing",
      "inputs": [
        {
          "amount": 144,
          "tag": "forge:copper"
        },
        {
          "amount": 80,
          "fluid": "tcompat:molten_cthonic_gold"
        }
      ],
      "output": {
        "amount": 288,
        "tag": "forge:molten_dawnstone"
      }
    })
    event.recipes.gtceu.mixer("kubejs:dawnstone_mixer")
        .itemInputs("2x #forge:dusts/copper", "2x #forge:dusts/cthonic_gold", "#forge:dusts/ember")
        .itemOutputs("gtceu:dawnstone_dust")
        .duration(80)
        .EUt(320)
    //livingbronze
    event.custom({
        "type": "embers:melting",
        "input": [
            {
                "item": 'kubejs:hemauric_nutrient_pellets'
            }
        ],
        "output": {
            "amount": 1000,
            "fluid": "kubejs:hemauric_nutrients"
        }
    })
    event.custom({
            "type": "embers:mixing",
            "inputs": [
                {
                "amount": 144,
                "tag": `forge:molten_cloggrum`
            },
            {
            "amount": 200,
                "fluid": 'kubejs:hemauric_nutrients'
            }
        ],
        "output": {
            "amount": 144,
            "fluid": 'gtceu:dormant_livingbronze'
        }
        }).id(`kubejs:embers/mixing/dormant_livingbronze`)
    
    //stamping it so good rn
    event.custom({
            "type": "embers:stamping",
            "fluid": {
                "amount": 144,
                "fluid": "gtceu:crowley_silver"
            },
            "output": {
                "item": 'gtceu:crowley_silver_ingot'
            },
            "stamp": {
                "item": "embers:ingot_stamp"
        }
        }).id(`kubejs:embers/stamping/dormant_livingbronze`)
    event.custom({
            "type": "embers:stamping",
            "fluid": {
                "amount": 144,
                "fluid": "gtceu:dormant_livingbronze"
            },
            "output": {
                "item": 'gtceu:dormant_livingbronze_ingot'
            },
            "stamp": {
                "item": "embers:ingot_stamp"
        }
        }).id(`kubejs:embers/stamping/dormant_livingbronze`)
    const customAspectiMetals = [
        'tin',
        'zinc',
        'aluminium',
        'gold',
        'rose_gold',
        'sterling_silver',
        'electrum',
        'constantan',
        'invar',
        'pewter',
        'bronze',
        'brass',
        'duralumin'
    ]
    customAspectiMetals.forEach(metal =>{
        event.custom({
            "type": "embers:stamping",
            "fluid": {
                "amount": 144,
                "tag": `forge:${metal}`
            },
            "input": {
                "item": "embers:ember_shard"
            },
            "output": {
                "item": `kubejs:aspectus_${metal}`
            },
            "stamp": {
                "item": "embers:ingot_stamp"
        }
        }).id(`kubejs:embers/stamping/aspectus_${metal}`)
    })
})