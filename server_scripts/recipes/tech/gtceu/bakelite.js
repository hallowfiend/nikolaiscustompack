ServerEvents.recipes((event) => {

//early co2
event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "gtceu:oxygen", 
          "amount": 100
        },
        "item_input": {
          "item": "minecraft:charcoal"   
        },
        "temperature": {
          "min_temp": 373
        },
        "fluid_output": {
          "fluid": "gtceu:carbon_dioxide",
          "amount": 50
        },
        "pressure": 1
      }).id('kubejs:pneumaticcraft/tppn/carbon_dioxide')
//early methanol
event.custom({
	"type": "immersiveengineering:refinery",
	"energy": 120,
	"input0": {
		"amount": 16,
		"fluid": "gtceu:hydrogen"
		},
        "input1": {
                "amount": 4,
                "fluid": "gtceu:carbon_dioxide"
        },
	"result": {
		"amount": 4,
		"fluid": "gtceu:methanol"
		}
	}).id('kubejs:immersive_engineering/refinery/methanol')
//early formaldehyde
event.custom({
	"type": "immersiveengineering:refinery",
	"catalyst": {
                "item": "gtceu:silver_dust"
        },
	"energy": 120,
	"input0": {
		"amount": 8,
		"fluid": "gtceu:methanol"
		},
        "input1": {
                "amount": 8,
                "fluid": "gtceu:oxygen"
        },
	"result": {
		"amount": 8,
		"fluid": "gtceu:formaldehyde"
		}
	}).id('kubejs:immersive_engineering/refinery/formaldehyde')
//early phenol
event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "fluid_input": {
          "type": "pneumaticcraft:fluid",
          "fluid": "gtceu:creosote", 
          "amount": 100
        },
        "temperature": {
          "min_temp": 373
        },
        "fluid_output": {
          "fluid": "gtceu:phenol",
          "amount": 50
        },
        "pressure": 3
      }).id('kubejs:pneumaticcraft/tppn/phenol')
//refinery (inefficient)
event.custom({
	"type": "immersiveengineering:refinery",
	"catalyst": Ingredient.of("#forge:plates/aluminum").toJson(),
	"energy": 120,
	"input0": {
		"amount": 8,
		"fluid": "gtceu:phenol"
		},
        "input1": {
                "amount": 8,
                "fluid": "gtceu:formaldehyde"
        },
	"result": {
		"amount": 8,
		"fluid": "gtceu:bakelite"
		}
	}).id('kubejs:immersive_engineering/refinery/bakelite')
//chemical reactor (efficient)
event.recipes.gtceu.chemical_reactor('kubejs:gtceu/chemical_reactor//bakelite')
        .inputFluids('gtceu:phenol 1000', 'gtceu:formaldehyde 1000')
        .outputFluids('gtceu:bakelite 1000')
        .duration(30).EUt(16);

//actually using the bakelite
event.remove({id: 'immersiveengineering:refinery/resin'})
event.remove({id: 'immersivepetroleum:hydrotreater/pneumaticcraft_plastic'})
event.remove({id: /pneumaticcraft:thermo_plant.*plastic.*/})
event.remove({id: 'immersiveengineering:bottling/empty_shell'})
event.remove({id: 'immersiveengineering:bottling/duroplast_block'})
event.remove({id: 'immersiveengineering:bottling/duroplast_plate'})
event.replaceInput({input: 'immersiveengineering:plate_duroplast'}, 'immersiveengineering:plate_duroplast', 'gtceu:bakelite_plate')
event.replaceInput({input: 'pneumaticcraft:plastic_sheet'}, 'pneumaticcraft:plastic_sheet', 'gtceu:bakelite_plate')
event.replaceInput({input: 'pneumaticcraft:plastic'}, 'pneumaticcraft:plastic', 'gtceu:bakelite')
event.custom({
  "type": "immersiveengineering:bottling_machine",
  "fluid": {
    "amount": 144,
    "fluid": "gtceu:bakelite"
  },
  "input": {
    "item": "immersiveengineering:mold_plate"
  },
  "results": [
    {
      "id": "gtceu:bakelite_plate"
    },
    {
      "id": "immersiveengineering:mold_plate"
    }
  ]
})
event.custom({
  "type": "immersiveengineering:bottling_machine",
  "fluid": {
    "amount": 144,
    "fluid": "gtceu:bakelite"
  },
  "input": {
    "item": "immersiveengineering:mold_rod"
  },
  "results": [
    {
      "id": "gtceu:bakelite_rod"
    },
    {
      "id": "immersiveengineering:mold_rod"
    }
  ]
})
event.custom({
  "type": "immersiveengineering:bottling_machine",
  "fluid": {
    "amount": 576,
    "fluid": "gtceu:bakelite"
  },
  "input": {
    "item": "immersiveengineering:mold_gear"
  },
  "results": [
    {
      "id": "gtceu:bakelite_gear"
    },
    {
      "id": "immersiveengineering:mold_gear"
    }
  ]
})
event.custom({
  "type": "immersiveengineering:bottling_machine",
  "fluid": {
    "amount": 1296,
    "fluid": "gtceu:bakelite"
  },
  "input": {
    "item": "immersiveengineering:mold_packing_4"
  },
  "results": [
    {
      "id": "gtceu:bakelite_block"
    },
    {
      "id": "immersiveengineering:mold_packing_4"
    }
  ]
})
})
