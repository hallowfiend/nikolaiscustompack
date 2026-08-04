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
    .removeLoot([
      'farm_and_charm:bacon',
      'farm_and_charm:beetroot_bag',
      'farm_and_charm:carrot_bag',
      'farm_and_charm:chicken_parts',
      'farm_and_charm:dough',
      'farm_and_charm:fertilized_farmland',
      'farm_and_charm:fertilized_soil',
      'farm_and_charm:lamb_ham',
      'farm_and_charm:minced_beef',
      'farm_and_charm:nettle_tea_cup',
      'farm_and_charm:onion',
      'farm_and_charm:onion_bag',
      'farm_and_charm:plow',
      'farm_and_charm:potato_bag',
      'farm_and_charm:raw_pasta',
      'farm_and_charm:rotten_tomato',
      'farm_and_charm:supply_cart',
      'farm_and_charm:tomato',
      'farm_and_charm:tomato_bag',
      'farm_and_charm:tomato_seeds',
      'farm_and_charm:wild_onions',
      'farm_and_charm:wild_tomatoes',
      'create:crafting_blueprint',
      /enderio:.*gear/,
      'culturaldelights:squid',
      'oceanic_delight:squid_tentacles',
      'crabbersdelight:cooked_squid_tentacles',
      'crabbersdelight:raw_squid_tentacles',
      'rusticdelight:calamari'
    ])
});