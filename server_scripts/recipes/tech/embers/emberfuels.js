ServerEvents.recipes(event => {
    //Catalysis & combustion
    function emberCatalysis(input, burntime, mult) {
      event.custom({
      "type": "embers:catalysis_combustion",
      "burn_time": burntime, //int
      "input": input, //item or tag
      "machine": {
          "item": "embers:catalysis_chamber"
      },
      "multiplier": mult //float
      })
    }
    function emberCombustion(input, burntime, mult) {
      event.custom({
      "type": "embers:catalysis_combustion",
      "burn_time": burntime, //int
      "input": input, //item or tag
      "machine": {
          "item": "embers:combustion_chamber"
      },
      "multiplier": mult //float
      })
    }
    emberCatalysis({"tag": "forge:dusts/sulfur"}, 200, 1.5)
    emberCatalysis({"tag": "forge:dusts/saltpeter"}, 200, 1.5)
    emberCatalysis({"tag": "forge:dusts/netherrack"}, 100, 1.1)
    emberCatalysis({"item": "sons_of_sins:ether_ashes"}, 333, 3.3)
    emberCatalysis({"item": "occultism:otherworld_ashes"}, 444, 2.5)
    emberCatalysis({"item": "mna:vinteum_dust"}, 100, 2.0)
    emberCatalysis({"item": "mna:purified_vinteum_dust"}, 200, 3.0)
    emberCatalysis({"item": "evilcraft:dark_gem_crushed"}, 300, 2.5)
    emberCatalysis({"item": "evilcraft:dull_dust"}, 500, 4.0)
    emberCatalysis({"item": "kubejs:bloodied_dust"}, 1200, 8.8)
    emberCombustion({"item": "malum:blazing_quartz"}, 100, 2.0)
    emberCombustion({"item": "malum:infernal_spirit"}, 200, 2.0)
    emberCombustion({"item": "malum:auric_embers"}, 300, 4.0)
    emberCombustion({"item": "scguns:vehement_coal"}, 100, 6.6)
    emberCombustion({"item": "ars_nouveau:fire_essence"}, 400, 6.0)
    emberCombustion({"item": "elementalcraft:firecrystal"}, 2400, 8.8)
    //Gaseous fuel
    function gaseousFuel(input, burntime, mult){
        event.custom({
            "type": "embers:gaseous_fuel",
            "burn_time": burntime, //int
                "input": {
                "amount": 1,
                "fluid": input //id
            },
            "power_multiplier": mult //float
        })
    }
})