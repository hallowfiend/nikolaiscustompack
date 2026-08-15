ServerEvents.recipes(event => {
    //melting
    function metalMelting(metal){
    event.custom({
        "type": "embers:melting",
        "input": [
            {
                "tag": `forge:ingots/${metal}`
            }
        ],
        "output": {
            "amount": 144,
            "tag": `forge:${metal}`
        }
    }).id(`kubejs:embers/melting/${metal}_ingot`)
    event.custom({
        "type": "embers:melting",
        "input": [
            {
                "tag": `forge:plates/${metal}`
            }
        ],
        "output": {
            "amount": 144,
            "tag": `forge:${metal}`
        }
    }).id(`kubejs:embers/melting/${metal}_plate`)
    event.custom({
        "type": "embers:melting",
        "input": [
            {
                "tag": `forge:nuggets/${metal}`
            }
        ],
        "output": {
            "amount": 16,
            "tag": `forge:${metal}`
        }
    }).id(`kubejs:embers/melting/${metal}_nugget`)
    }
    metalMelting('cloggrum')
    metalMelting('iesnium')
    //mixing
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
    //simple alloys
    metalMixing("gold", 16, "copper", 4, "rose_gold", 20)
    metalMixing("silver", 16, "copper", 4, "sterling_silver", 20)
    metalMixing("lead", 2, "iron", 2, "pewter", 4)
    metalMixing("copper", 2, "aluminium", 6, "duralumin", 8)
    //crowley silver
    metalMixing('silver', 2, 'iesnium', 2, 'crowley_silver', 4)
    event.recipes.gtceu.mixer("kubejs:gtceu/mixer/crowley_silver")
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
    }).id('kubejs:embers/mixing/dawnstone')
    event.recipes.gtceu.mixer("kubejs:gtceu/mixer/dawnstone_mixer")
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
    }).id('kubejs:embers/melting/hemauric_nutrients')
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
    event.recipes.gtceu.extractor(`kubejs:gtceu/extractor/hemauric_nutrients`)
        .itemInputs('kubejs:hemauric_nutrient_pellets')
        .outputFluids(`kubejs:hemauric_nutrients 1000`)
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.mixer("kubejs:gtceu/mixer/dormant_livingbronze_mixer")
        .itemInputs("#forge:dusts/cloggrum", "#forge:dusts/ember")
        .inputFluids('kubejs:hemauric_nutrients 200')
        .itemOutputs("gtceu:dormant_livingbronze_dust")
        .duration(80)
        .EUt(320)
    //stamping it so good rn
    function metalStamping(metal){
        event.custom({
            "type": "embers:stamping",
            "fluid": {
                "amount": 144,
                "tag": `forge:${metal}`
            },
            "output": {
                "tag": `forge:ingots/${metal}`
            },
            "stamp": {
                "item": "embers:ingot_stamp"
        }
        }).id(`kubejs:embers/stamping/${metal}_ingot`)
    }
    metalStamping('crowley_silver')
    metalStamping('dormant_livingbronze')
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