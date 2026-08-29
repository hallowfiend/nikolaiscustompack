ServerEvents.recipes(event => {
    //ingredient replacement
    event.replaceInput({input: 'actuallyadditions:bats_wing'}, 'actuallyadditions:bats_wing', 'miners_delight:bat_wing')
    //canola oil
    //bottling
    event.recipes.create.filling('frycooks_delight:canola_oil', [Fluid.of('actuallyadditions:canola_oil').withAmount(250), 'minecraft:glass_bottle'])
    event.recipes.create.emptying([Fluid.of('actuallyadditions:canola_oil').withAmount(250), 'minecraft:glass_bottle'], 'frycooks_delight:canola_oil')
    event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {"amount": 250, "tag": "forge:canola_oil"},
    "input": {"item": "minecraft:glass_bottle"},
    "results": [{"item": "frycooks_delight:canola_oil"}]
    })
    //refining
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "actuallyadditions:canola_oil"
        },
        "experience": 1.0,
        "fermentingtime": 2400,
        "ingredients": [
          {
            "item": "gtceu:salt_dust"
          },
          {
            "item": "gtceu:salt_dust"
          }
        ],
        "recipe_book_tab": "misc",
        "result": {
          "count": 1000,
          "fluid": "actuallyadditions:refined_canola_oil"
        },
        "temperature": 3
    })
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "actuallyadditions:canola_oil", 
          "amount": 1000
        },
        "item_input": {
          "item": "gtceu:salt_dust"   
        },
        "temperature": {
          "min_temp": 373
        },
        "fluid_output": {
          "fluid": "actuallyadditions:refined_canola_oil",
          "amount": 1000
        },
        "pressure": 2
      }).id('kubejs:pneumaticcraft/tppn/refined_canola_oil')
    //empowered
    event.replaceInput({input: 'actuallyadditions:canola'}, 'actuallyadditions:canola', 'frycooks_delight:canola')
    event.replaceInput({input: 'actuallyadditions:canola_seeds'}, 'actuallyadditions:canola_seeds', 'frycooks_delight:canola_seeds')
})