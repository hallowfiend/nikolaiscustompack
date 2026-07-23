ServerEvents.recipes(event => {
    // Garden Cloche
    event.remove({ output: 'immersiveengineering:cloche' })
    event.custom({
      "type": "naturesaura:tree_ritual",
      "ingredients": [
          {
              "item": "immersiveengineering:light_bulb"
            },
            {
              "item": "create:fluid_tank"
            },
            {
              "item": "immersiveengineering:component_iron"
            },
            {
              "item": "reliquary:fertile_essence"
            },
            {
              "item": "immersiveengineering:slag_glass"
            },
            {
              "tag": "forge:treated_wood"
            },
            {
              "item": "immersiveengineering:slag_glass"
            },
            {
              "tag": "forge:treated_wood"
            }
          ],
          "sapling": {
            "item": "hexerei:mahogany_sapling"
          },
          "output": {
            "item": "immersiveengineering:cloche",
            "count": 1
          },
          "time": 100
        })
})