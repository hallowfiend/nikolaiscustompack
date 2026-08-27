ServerEvents.recipes(event => {
    function spiritrepair(repairMaterial, spirits, validItems){
        event.custom({
  "type": "malum:spirit_repair",
  "repairMaterial": repairMaterial,
  "spirits": spirits,
  "validItems": validItems
    })
    }
    spiritrepair(
        {
        "count": 8,
        "item": "gtceu:calcite_dust"
        },
        [
    {
      "type": "malum:earthen",
      "count": 8
    },
    {
      "type": "malum:arcane",
      "count": 8
    },
  ],
  ['mna:wizard_chalk']
    )
})