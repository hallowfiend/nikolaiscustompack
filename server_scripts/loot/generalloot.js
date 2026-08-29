//priority 200

LootJS.modifiers((event) => {
  event
    .addLootTableModifier(/.*/)
    .replaceLoot('culturaldelights:squid', 'miners_delight:squid', true)
    .replaceLoot('culturaldelights:glow_squid', 'miners_delight:glow_squid', true)
    .replaceLoot('eidolon:sulfur', 'gtceu:sulfur_dust', true)
    .replaceLoot('caverns_and_chasms:tin_ingot', 'gtceu:tin_ingot', true)
    .replaceLoot('caverns_and_chasms:silver_ingot', 'gtceu:silver_ingot', true)
    .replaceLoot('farmersdelight:rope', 'supplementaries:rope', true) //#FARMERSDELIGHTROPEHATEGANG
    .replaceLoot('supplementaries:pancake', 'rusticdelight:pancake', true)
    .replaceLoot('immersiveengineering:nugget_lead', 'gtceu:lead_nugget', true)
    .replaceLoot('immersiveengineering:nugget_silver', 'gtceu:silver_nugget', true)
    .replaceLoot(/.*:raw_venison/, "environmental:venison", true)
    .replaceLoot('actuallyadditions:bats_wing', 'miners_delight:bat_wing', true)
    .replaceLoot(/.*:cooked_venison/, "environmental:cooked_venison", true)
    .replaceLoot('galosphere:palladium_nugget', 'gtceu:palladium_nugget', true)
    .replaceLoot(/.*copper_nugget/, 'gtceu:copper_nugget', true)
    .replaceLoot(/.*silver_nugget/, 'gtceu:silver_nugget', true)
    .replaceLoot(/.*silver_ingot/, 'gtceu:silver_ingot', true)
    .replaceLoot(/.*tin_ingot/, 'gtceu:tin_ingot', true)
    .replaceLoot(/.*tin_nugget/, 'gtceu:tin_nugget', true)
    .replaceLoot('hexalia:salt', 'gtceu:salt_dust', true)
    .replaceLoot('aquaculture:driftwood', 'upgrade_aquatic:driftwood_log', true)
    .replaceLoot('scguns:pebbles', 'twigs:pebble', true)
    .replaceLoot('supplementaries:ash', 'embers:ash', true)
    .replaceLoot('mna:bone_ash', 'eidolon:enchanted_ash', true)
    .replaceLoot('irons_spellbooks:blood_vial', 'hexerei:blood_bottle', true)
    .replaceLoot('iss_magicfromtheeast:red_string', 'botania:red_string', true)
    .replaceLoot('iss_magicfromtheeast:bottle_of_souls', 'netherexp:wisp_bottle', true)
    .replaceLoot('scguns:niter_dust', 'gtceu:saltpeter_dust', true)
    .replaceLoot('scguns:sulfur_dust', 'gtceu:sulfur_dust', true)
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
      'oceanic_delight:squid_tentacles',
      'crabbersdelight:cooked_squid_tentacles',
      'crabbersdelight:raw_squid_tentacles',
      'rusticdelight:calamari',
      'actuallyadditions:flax_seeds',
      'actuallyadditions:rice_seeds',
      'actuallyadditions:canola_seeds'
    ])
});