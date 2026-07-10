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
    .replaceLoot("born_in_chaos_v1:mint_ice_cream", "neapolitan:mint_ice_cream", true)
    .replaceLoot("born_in_chaos_v1:mint_candy", "neapolitan:mint_candies", true)
    .replaceLoot("born_in_chaos_v1:river_mint", "neapolitan:mint_leaves", true)
    .replaceLoot("born_in_chaos_v1:coffee_candy", "collectorsreap:coffee_gummy", true);
});