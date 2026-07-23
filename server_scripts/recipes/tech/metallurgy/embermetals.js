ServerEvents.recipes(event => {
    [
        ["embers:molten_iron", "gtceu:iron"],
        ["embers:molten_gold", "gtceu:gold"],
        ["embers:molten_copper", "gtceu:copper"],
        ["embers:molten_lead", "gtceu:lead"],
        ["embers:molten_silver", "gtceu:silver"],
        ["embers:molten_nickel", "gtceu:nickel"],
        ["embers:molten_tin", "gtceu:tin"],
        ["embers:molten_aluminum", "gtceu:aluminium"],
        ["embers:molten_zinc", "gtceu:zinc"],
        ["embers:molten_platinum", "gtceu:platinum"],
        ["embers:molten_uranium", "gtceu:uranium"],
        ["embers:molten_bronze", "gtceu:bronze"],
        ["embers:molten_electrum", "gtceu:electrum"],
        ["embers:molten_brass", "gtceu:brass"],
        ["embers:molten_constantan", "tconstruct:constantan"],
        ["embers:molten_invar", "gtceu:invar"]
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "embers"}, recipe => {
            let changedFlag = false;

            // output
            if (recipe.json 
                && recipe.json.get("output")
                && recipe.json.get("output").get("fluid")
                && recipe.json.get("output").get("fluid").asString === fluid) {
                recipe.json.get("output").addProperty("fluid", replacement);
                //console.info(`match o: ${replacement}`);
                changedFlag = true;
            }

            // bonus
            if (recipe.json 
                && recipe.json.get("bonus")
                && recipe.json.get("bonus").get("fluid")
                && recipe.json.get("bonus").get("fluid").asString === fluid) {
                recipe.json.get("bonus").addProperty("fluid", replacement);
                //console.info(`match b: ${replacement}`);
                changedFlag = true;
            }

            if (changedFlag) {
                recipe.save();
            }
        });
    });
    //Dawnstone stuff
    event.remove({ id: 'embers:mixing/molten_dawnstone' })
    event.custom(
    {
      "type": "embers:mixing",
      "inputs": [
        {
          "amount": 2,
          "tag": "forge:copper"
        },
        {
          "amount": 2,
          "fluid": "tcompat:molten_cthonic_gold"
        }
      ],
      "output": {
        "amount": 4,
        "tag": "forge:molten_dawnstone"
      }
    })
    event.recipes.gtceu.mixer("kubejs:dawnstone_mixer")
        .itemInputs("2x #forge:dusts/copper", "2x #forge:dusts/cthonic_gold", "#forge:dusts/ember")
        .itemOutputs("gtceu:dawnstone_dust")
        .duration(80)
        .EUt(320)
})