//priority: 97
GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

//Functions
    function rock (mat, item){
        TagPrefix.rock['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function ingot (mat, item){
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function ingotHot (mat, item){
        TagPrefix.ingotHot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function block (mat, item){
        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function nugget (mat, item){
        TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function plate (mat, item){
        TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function plateDouble (mat, item){
        TagPrefix.plateDouble['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function dust (mat, item){
        TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function dustSmall (mat, item){
        TagPrefix.dustSmall['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gem (mat, item){
        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gemChipped (mat, item){
        TagPrefix.gemChipped['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gemFlawless (mat, item){
        TagPrefix.gemFlawless['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function rawOre (mat, item){
        TagPrefix.rawOre['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function rawOreBlock (mat, item){
        TagPrefix.rawOreBlock['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function crushed (mat, item){
        TagPrefix.crushed['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }

//Rocks
    rock('limestone', 'create:limestone')

//Ingots
    ingot('desh', 'ad_astra:desh_ingot')
    ingot('cloggrum', 'undergarden:cloggrum_ingot')
    ingot('froststeel', 'undergarden:froststeel_ingot')
    ingot('forgotten', 'undergarden:forgotten_ingot')
    ingot('ostrum', 'ad_astra:ostrum_ingot')
    ingot('calorite', 'ad_astra:calorite_ingot')
    ingot('experience', 'create:experience_nugget')
    ingot('manasteel', 'botania:manasteel_ingot')
    ingot('elementium', 'botania:elementium_ingot')
    ingot('terrasteel', 'botania:terrasteel_ingot')
    ingot('mithril', 'irons_spellbooks:mithril_ingot')
    ingot('infused_iron', 'naturesaura:infused_iron')
    ingot('tainted_gold', 'naturesaura:tainted_gold')
    ingot('sky_ingot', "naturesaura:sky_ingot")
    ingot('compressed_iron', 'pneumaticcraft:ingot_iron_compressed')
    ingot('demonite', 'bloodmagic:ingot_hellforged')
    ingot('black_steel', 'cataclysm:black_steel_ingot')
    ingot('soul_stained_steel', 'malum:soul_stained_steel_ingot')
    ingot('hallowed_gold', 'malum:hallowed_gold_ingot')
    ingot('vinteum_alloy', 'mna:vinteum_ingot')
    ingot('purified_vinteum_alloy', 'mna:purified_vinteum_ingot')
    ingot('bendalloy', 'cosmere:bendalloy_ingot')
    ingot('nicrosil', 'cosmere:nicrosil_ingot')
    ingot('duralumin', 'cosmere:duralumin_ingot')
    ingot('anthralite', 'scguns:anthralite_ingot')
    ingot('dawnstone', 'embers:dawnstone_ingot')
    ingot('pewter', 'eidolon:pewter_ingot')
    ingot('deepsilver', 'eternal_starlight:deepsilver_ingot')
    ingot('oxidized_golem_steel', 'eternal_starlight:oxidized_golem_steel_ingot')
    ingot('golem_steel', 'eternal_starlight:golem_steel_ingot')
    ingot('unrealium', 'eternal_starlight:unrealium_ingot')
    ingot('andesite_alloy', 'create:andesite_alloy')
    ingot('arcane_gold', 'eidolon:arcane_gold_ingot')
    ingot('thallasium', 'betterend:thallasium_ingot')
    ingot('terminite', 'betterend:terminite_ingot')
    ingot('aeternium', 'betterend:aeternium_ingot')
    ingot('energetic_alloy', 'enderio:energetic_alloy_ingot')
    ingot('vibrant_alloy', 'enderio:vibrant_alloy_ingot')
    ingot('conductive_alloy', 'enderio:conductive_alloy_ingot')
    ingot('pulsating_alloy', 'enderio:pulsating_alloy_ingot')
    ingot('dark_steel', 'enderio:dark_steel_ingot')
    ingot('soularium', 'enderio:soularium_ingot')
    ingot('end_steel', 'enderio:end_steel_ingot')
    ingot('moon_cheese', 'ad_astra:cheese')
    ingot('iesnium', 'occultism:iesnium_ingot')

//Hot ingots
    ingotHot('vinteum_alloy', 'mna:superheated_vinteum_ingot')
    ingotHot('purified_vinteum_alloy', 'mna:superheated_purified_vinteum_ingot')

//Blocks
    block('iesnium', 'occultism:iesnium_block')
    block('arcane_gold', 'eidolon:arcane_gold_block')
    block('pewter', 'eidolon:pewter_block')
    block('desh', 'ad_astra:desh_block')
    block('skyjade', 'deep_aether:skyjade_block')
    block('zanite', 'aether:zanite_block')
    block('ambrosium', 'aether:ambrosium_block')
    block('ostrum', 'ad_astra:ostrum_block')
    block('calorite', 'ad_astra:calorite_block')
    block('experience', 'create:experience_block')
    block('certus_quartz', 'ae2:quartz_block')
    block('ether', 'extra_sins:crystallized_ether_block')
    block('manasteel', 'botania:manasteel_block')
    block('elementium', 'botania:elementium_block')
    block('terrasteel', 'botania:terrasteel_block')
    block('cloggrum', 'undergarden:cloggrum_block')
    block('forgotten', 'undergarden:forgotten_block')
    block('froststeel', 'undergarden:froststeel_block')
    block('utherium', 'undergarden:utherium_block')
    block('source', 'ars_nouveau:source_gem_block')
    block('mana_diamond', 'botania:mana_diamond_block')
    block('mithril', 'constructs_casting:mithril_block')
    block('compressed_iron', 'pneumaticcraft:compressed_iron_block')
    block('black_steel', 'cataclysm:black_steel_block')
    block('demonite', 'bloodmagic:dungeon_metal')
    block('soul_stained_steel', 'malum:block_of_soul_stained_steel')
    block('hallowed_gold', 'malum:block_of_hallowed_gold')
    block('vinteum', 'mna:vinteum_dust_block')
    block('soulstone', 'malum:block_of_soulstone')
    block('cthonic_gold', 'malum:block_of_cthonic_gold')
    block('vinteum_alloy', 'mna:vinteum_block')
    block('bendalloy', 'cosmere:bendalloy_block')
    block('nicrosil', 'cosmere:nicrosil_block')
    block('duralumin', 'cosmere:duralumin_block')
    block('infused_iron', 'naturesaura:infused_iron_block')
    block('tainted_gold', 'naturesaura:tainted_gold_block')
    block('sky_ingot', 'naturesaura:sky_ingot_block')
    block('inert_crystal', 'elementalcraft:inertcrystal_block')
    block('jade', 'goety:jade_block')
    block('turquoise', 'caverns_and_chasms:turquoise_block')
    block('spinel', 'caverns_and_chasms:spinel_block')
    block('vehement_coal', 'scguns:vehement_coal_block')
    block('anthralite', 'scguns:anthralite_block')
    block('regalium', 'undergarden:regalium_block')
    block('citrine', 'unusualend:citrine_block')
    block('dawnstone', 'embers:dawnstone_block')
    block('dark', 'evilcraft:dark_block')
    block('dark_power', 'evilcraft:dark_power_gem_block')
    block('malarite', 'eternal_starlight:malarite_block')
    block('starcore', 'eternal_starlight:starcore_block')
    block('starlit_diamond', 'eternal_starlight:starlit_diamond_block')
    block('deepsilver', 'eternal_starlight:deepsilver_block')
    block('unrealium', 'eternal_starlight:unrealium_block')
    block('oxidized_golem_steel', 'eternal_starlight:oxidized_golem_steel_block')
    block('golem_steel', 'eternal_starlight:golem_steel_block')
    block('andesite_alloy', 'create:andesite_alloy_block')
    block('thallasium', 'betterend:thallasium_block')
    block('terminite', 'betterend:terminite_block')
    block('aeternium', 'betterend:aeternium_block')
    block('amber', 'betterend:amber_block')
    block('energetic_alloy', 'enderio:energetic_alloy_block')
    block('vibrant_alloy', 'enderio:vibrant_alloy_block')
    block('conductive_alloy', 'enderio:conductive_alloy_block')
    block('pulsating_alloy', 'enderio:pulsating_alloy_block')
    block('dark_steel', 'enderio:dark_steel_block')
    block('soularium', 'enderio:soularium_block')
    block('end_steel', 'enderio:end_steel_block')
    block('moon_cheese', 'ad_astra:cheese_block')

//Nuggets
    nugget('arcane_gold', 'eidolon:arcane_gold_nugget')
    nugget('desh', 'ad_astra:desh_nugget')
    nugget('ostrum', 'ad_astra:ostrum_nugget')
    nugget('calorite', 'ad_astra:calorite_nugget')
    nugget('manasteel', 'botania:manasteel_nugget')
    nugget('elementium', 'botania:elementium_nugget')
    nugget('terrasteel', 'botania:terrasteel_nugget')
    nugget('cloggrum', 'undergarden:cloggrum_nugget')
    nugget('froststeel', 'undergarden:froststeel_nugget')
    nugget('forgotten', 'undergarden:forgotten_nugget')
    nugget('mithril', 'constructs_casting:mithril_nugget')
    nugget('black_steel', 'cataclysm:black_steel_nugget')
    nugget('soul_stained_steel', 'malum:soul_stained_steel_nugget')
    nugget('hallowed_gold', 'malum:hallowed_gold_nugget')
    nugget('bendalloy', 'cosmere:bendalloy_nugget')
    nugget('nicrosil', 'cosmere:nicrosil_nugget')
    nugget('duralumin', 'cosmere:duralumin_nugget')
    nugget('anthralite', 'scguns:anthralite_nugget')
    nugget('dawnstone', 'embers:dawnstone_nugget')
    nugget('pewter', 'eidolon:pewter_nugget')
    nugget('deepsilver', 'eternal_starlight:deepsilver_nugget')
    nugget('unrealium', 'eternal_stalight:unrealium_nugget')
    nugget('golem_steel', 'eternal_starlight:golem_steel_nugget')
    nugget('oxidized_golem_steel', 'eternal_starlight:oxidized_golem_steel_nugget')
    nugget('thallasium', 'betterend:thallasium_nugget')
    nugget('terminite', 'betterend:terminite_nugget')
    nugget('aeternium', 'betterend:aeternium_nugget')
    nugget('energetic_alloy', 'enderio:energetic_alloy_nugget')
    nugget('vibrant_alloy', 'enderio:vibrant_alloy_nugget')
    nugget('conductive_alloy', 'enderio:conductive_alloy_nugget')
    nugget('pulsating_alloy', 'enderio:pulsating_alloy_nugget')
    nugget('dark_steel', 'enderio:dark_steel_nugget')
    nugget('soularium', 'enderio:soularium_nugget')
    nugget('end_steel', 'enderio:end_steel_nugget')
    nugget('iesnium', 'occultism:iesnium_nugget')

//Plates
    plate('desh', 'ad_astra:desh_plate')
    plate('ostrum', 'ad_astra:ostrum_plate')
    plate('calorite', 'ad_astra:calorite_plate')
    plate('dawnstone', 'embers:dawnstone_plate')
    plate('thallasium', 'betterend:thallasium_forged_plate')
    plate('terminite', 'betterend:terminite_forged_plate')
    plate('aeternium', 'betterend:aeternium_forged_plate')

//Double plates


//Dusts
    dust('certus_quartz', 'ae2:certus_quartz_dust')
    dust('ether', 'sons_of_sins:ether_ashes')
    dust('arcane_essence', 'irons_spellbooks:arcane_essence')
    dust('vinteum', 'mna:vinteum_dust')
    dust('purified_vinteum', 'mna:purified_vinteum_dust')
    dust('demonite', 'bloodmagic:sand_hellforged')
    dust('dark', 'evilcraft:dark_gem_crushed')
    dust('hex_ash', 'malum:hex_ash')
    dust('anthralite', 'scguns:anthralite_dust')
    dust('endstone', 'occultism:crushed_end_stone')
    dust('ember', 'embers:ember_grit')
    dust('iesnium', 'occultism:iesnium_dust')

//Small dusts
    

//Gems
    gem('turquoise', 'caverns_and_chasms:turquoise')
    gem('spinel', 'caverns_and_chasms:spinel')
    gem('skyjade', 'deep_aether:skyjade')
    gem('zanite', 'aether:zanite_gemstone')
    gem('certus_quartz', 'ae2:certus_quartz_crystal')
    gem('mana_diamond', 'botania:mana_diamond')
    gem('mana_pearl', 'botania:mana_pearl')
    gem('solid_arkanum', 'malum:arcane_spirit')
    gem('solid_profanum', 'malum:wicked_spirit')
    gem('solid_sacrum', 'malum:sacred_spirit')
    gem('solid_aerialis', 'malum:aerial_spirit')
    gem('solid_terrae', 'malum:earthen_spirit')
    gem('solid_infernalis', 'malum:infernal_spirit')
    gem('solid_aqua', 'malum:aqueous_spirit')
    gem('solid_xenorhast', 'malum:eldritch_spirit')
    gem('ether', 'sons_of_sins:crystallized_ether')
    gem('source', 'ars_nouveau:source_gem')
    gem('utherium', 'undergarden:utherium_crystal')
    gem('inert_crystal', 'elementalcraft:inert_crystal')
    gem('dark', 'evilcraft:dark_gem')
    gem('dark_power', 'evilcraft:dark_power_gem')
    gem('quartzite', 'malum:natural_quartz')
    gem('soulstone', 'malum:processed_soulstone')
    gem('brilliance', 'malum:chunk_of_brilliance')
    gem('jade', 'goety:jade')
    gem('vehement_coal', 'scguns:vehement_coal')
    gem('regalium', 'undergarden:regalium_crystal')
    gem('citrine', 'unusualend:citrine_chunk')
    gem('spirit_gem', 'occultism:spirit_attuned_gem')
    gem('raw_will', 'bloodmagic:defaultcrystal')
    gem('corrosive_will', 'bloodmagic:corrosivecrystal')
    gem('vengeful_will', 'bloodmagic:vengefulcrystal')
    gem('steadfast_will', 'bloodmagic:steadfastcrystal')
    gem('destructive_will', 'bloodmagic:destructivecrystal')
    gem('malarite', 'eternal_starlight:malarite')
    gem('amber', 'betterend:amber_gem')
    gem('cthonic_gold', 'malum:cthonic_gold')

//Flawless gems
    gemFlawless('ember', 'embers:ember_crystal')

//Chipped gems
    gemChipped('ember', 'embers:ember_shard')
    gemChipped('cthonic_gold', 'malum:cthonic_gold_fragment')

//Raw ores
    rawOre('brilliance', 'malum:cluster_of_brilliance')
    rawOre('soulstone', 'malum:raw_soulstone')
    rawOre('desh', 'ad_astra:raw_desh')
    rawOre('ostrum', 'ad_astra:raw_ostrum')
    rawOre('calorite', 'ad_astra:raw_calorite')
    rawOre('mithril', 'irons_spellbooks:raw_mithril')
    rawOre('cloggrum', 'undergarden:raw_cloggrum')
    rawOre('vinteum', 'mna:raw_vinteum')
    rawOre('palladium', 'galosphere:raw_palladium')
    rawOre('demonite', 'bloodmagic:raw_demonite')
    rawOre('anthralite', 'scguns:raw_anthralite')
    rawOre('froststeel', 'undergarden:raw_froststeel')
    rawOre('tin', 'caverns_and_chasms:raw_tin')
    rawOre('iesnium', 'occultism:raw_iesnium')
    rawOre('deepsilver', 'eternal_starlight:raw_deepsilver')
    rawOre('thallasium', 'betterend:thallasium_raw')
    rawOre('amber', 'betterend:raw_amber')

//Raw ore blocks
    rawOreBlock('desh', 'ad_astra:raw_desh_block')
    rawOreBlock('ostrum', 'ad_astra:raw_ostrum_block')
    rawOreBlock('calorite', 'ad_astra:raw_calorite_block')
    rawOreBlock('demonite', 'bloodmagic:rawdemoniteblock')
    rawOreBlock('cloggrum', 'undergarden:raw_cloggrum_block')
    rawOreBlock('froststeel', 'undergarden:raw_froststeel_block')
    rawOreBlock('tin', 'caverns_and_chasms:raw_tin_block')
    rawOreBlock('palladium', 'galosphere:raw_palladium_block')
    rawOreBlock('soulstone', 'malum:block_of_raw_soulstone')
    rawOreBlock('brilliance', 'malum:block_of_brilliance')
    rawOreBlock('anthralite', 'scguns:raw_anthralite_block')
    rawOreBlock('bauxite', 'immersiveengineering:raw_block_aluminum')
    rawOreBlock('iesnium', 'occultism:raw_iesnium_block')
    rawOreBlock('deepsilver', 'eternal_starlight:raw_deepsilver_block')

//Crushed ores
    crushed('brilliance', 'malum:crushed_brilliance')
    crushed('soulstone', 'malum:crushed_soulstone')
    crushed('mithril', 'create_wizardry:crushed_mithril')
    crushed('anthralite', 'scguns:crushed_raw_anthralite')
    crushed('iron', 'create:crushed_raw_iron')
    crushed('gold', 'create:crushed_raw_gold')
    crushed('copper', 'create:crushed_raw_copper')
    crushed('silver', 'create:crushed_raw_silver')
    crushed('nickel', 'create:crushed_raw_nickel')
    crushed('tin', 'create:crushed_raw_tin')
    crushed('platinum', 'create:crushed_raw_platinum')
    crushed('aluminium', 'create:crushed_raw_aluminum')
    crushed('lead', 'create:crushed_raw_lead')

//Byproducts


//Formulas
    //GTMaterials.get('').setFormula('', true)
    GTMaterials.get('glowstone').setFormula('Si(FeS2)5(CrAl2O3)Hg3AuP4', true)

//Iconsets
    GTMaterials.Neutronium.setMaterialIconSet(GTMaterialIconSet.RADIOACTIVE)

    console.log('Materials modified')
})