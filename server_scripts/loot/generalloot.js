//priority 200

LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*/)
    .replaceLoot('eidolon:sulfur', 'gtceu:sulfur_dust', true)
    .replaceLoot('caverns_and_chasms:tin_ingot', 'gtceu:tin_ingot', true)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true) //#FARMERSDELIGHTROPEHATEGANG
    .replaceLoot('supplementaries:pancake', 'rusticdelight:pancake', true)
    .replaceLoot('immersiveengineering:nugget_lead', 'gtceu:lead_nugget', true)
    .replaceLoot('immersiveengineering:nugget_silver', 'gtceu:silver_nugget', true)
    .removeLoot(/enderio:.*gear/)
    //removing duplicate calamari
    .removeLoot('rusticdelight:calamari')
    .removeLoot('crabbersdelight:raw_squid_tentacles')
    .removeLoot('crabbersdelight:cooked_squid_tentacles')
    .removeLoot('oceanic_delight:squid_tentacles')
    .removeLoot('culturaldelights:squid')
    //replacing venison
    .replaceLoot(/.*:raw_venison/, "environmental:venison", true)
    .replaceLoot(/.*:cooked_venison/, "environmental:cooked_venison", true)
    .replaceLoot('scguns:pebbles', 'twigs:pebble')
    .replaceLoot('supplementaries:ash', 'embers:ash', true)
    .replaceLoot('irons_spellbooks:blood_vial', 'hexerei:blood_bottle')
    .replaceLoot('iss_magicfromtheeast:red_string', 'botania:red_string')
    .replaceLoot('iss_magicfromtheeast:bottle_of_souls', 'netherexp:wisp_bottle')
    .replaceLoot('scguns:niter_dust', 'gtceu:saltpeter_dust')
    .replaceLoot('scguns:sulfur_dust', 'gtceu:sulfur_dust')
});