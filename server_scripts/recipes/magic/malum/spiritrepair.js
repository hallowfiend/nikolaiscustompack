ServerEvents.recipes(event => {
    function spiritrepair(repairMaterial, spirits, validItems){
        event.custom({
          "type": "malum:spirit_repair",
          "repairMaterial": repairMaterial,
          "spirits": spirits,
          "validItems": validItems
    })}
    //Arts & Crafts chalk
    spiritrepair(
      {
        "count": 4,
        "item": "gtceu:gypsum_dust"
      },
      [
        {
          "type": "malum:earthen",
          "count": 4
        }
      ],
    [
      'arts_and_crafts:bleached_chalk_stick',
      'arts_and_crafts:white_chalk_stick',
      'arts_and_crafts:light_gray_chalk_stick',
      'arts_and_crafts:gray_chalk_stick',
      'arts_and_crafts:black_chalk_stick',
      'arts_and_crafts:red_chalk_stick',
      'arts_and_crafts:orange_chalk_stick',
      'arts_and_crafts:yellow_chalk_stick',
      'arts_and_crafts:lime_chalk_stick',
      'arts_and_crafts:light_blue_chalk_stick',
      'arts_and_crafts:blue_chalk_stick',
      'arts_and_crafts:purple_chalk_stick',
      'arts_and_crafts:magenta_chalk_stick',
      'arts_and_crafts:pink_chalk_stick',
      'arts_and_crafts:brown_chalk_stick'
    ])
    //MnA wizard chalk
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
    ['mna:wizard_chalk'])
    //Blood Magic arcane ashes
    spiritrepair(
      {
        "count": 4,
        "item": "eidolon:enchanted_ash"
      },
      [
        {
          "type": "malum:arcane",
          "count": 8
        },
        {
          "type": "malum:infernal",
          "count": 4
        },
        {
          "type": "malum:aerial",
          "count": 4
        }
      ],
    ['bloodmagic:arcaneashes'])
})