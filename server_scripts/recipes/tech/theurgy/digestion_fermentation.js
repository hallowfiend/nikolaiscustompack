ServerEvents.recipes(event => {
    //aluminum from bauxite
    event.custom({
  "type": "theurgy:digestion",
  "fluid": {
    "tag": "forge:redstone_acid"
  },
  "fluidAmount": 10,
  "ingredients": [
    {
      "count": 8,
      "item": "theurgy:alchemical_sulfur_bauxite"
    },
    {
        "count": 4,
        "item": "gtceu:salt_dust"
    },
    {
        "count": 4,
        "item": "gtceu:sal_ammoniac_dust"
    }
  ],
  "result": {
    "Count": 4,
    "id": "theurgy:alchemical_sulfur_aluminum"
  },
  "time": 400
})
  //cobalt from cobaltite
  event.custom({
  "type": "theurgy:digestion",
  "fluid": {
    "tag": "forge:redstone_acid"
  },
  "fluidAmount": 10,
  "ingredients": [
    {
      "count": 8,
      "item": "theurgy:alchemical_sulfur_cobaltite"
    },
    {
        "count": 4,
        "item": "gtceu:rock_salt_dust"
    },
    {
        "count": 4,
        "item": "gtceu:sal_ammoniac_dust"
    }
  ],
  "result": {
    "Count": 4,
    "id": "theurgy:alchemical_sulfur_cobalt"
  },
  "time": 400
})
})