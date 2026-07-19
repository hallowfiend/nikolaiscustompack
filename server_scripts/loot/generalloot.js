LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*/)
    .replaceLoot('eidolon:sulfur', 'immersiveengineering:sulfur_dust', true)
    .replaceLoot('caverns_and_chasms:tin_ingot', 'gtceu:tin_ingot', true)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true) //#FARMERSDELIGHTROPEHATEGANG
    .replaceLoot('supplementaries:pancake', 'rusticdelight:pancake', true)
    .replaceLoot('galosphere:silver_nugget', 'gtceu:silver_nugget', true)
    .replaceLoot('immersiveengineering:nugget_lead', 'gtceu:lead_nugget', true)
    .replaceLoot('immersiveengineering:nugget_silver', 'gtceu:silver_nugget', true)
    .removeLoot(/enderio:.*gear/)
    //removing duplicate calamari
    .removeLoot('rusticdelight:calamari')
    .removeLoot('crabbersdelight:raw_squid_tentacles')
    .removeLoot('crabbersdelight:cooked_squid_tentacles')
    .removeLoot('oceanicdelight:squid_tentacles')
    .removeLoot('culturaldelights:squid')
    //replacing venison
    .replaceLoot(/.*:raw_venison/, "environmental:venison", true)
    .replaceLoot(/.*:cooked_venison/, "environmental:venison", true)
});