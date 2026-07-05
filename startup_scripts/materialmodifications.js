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
    ingot('forgotten', 'undergarden:forgotten_ingot')
    ingot('ostrum', 'ad_astra:ostrum_ingot')
    ingot('calorite', 'ad_astra:calorite_ingot')
    ingot('experience', 'create:experience_nugget')
    ingot('manasteel', 'botania:manasteel_ingot')
    ingot('elementium', 'botania:elementium_ingot')
    ingot('terrasteel', 'botania:terrasteel_ingot')
    ingot('mithril', 'irons_spellbooks:mithril_ingot')
    ingot('bismuth', 'enlightened_end:bismuth_ingot')
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

//Hot ingots
    ingotHot('vinteum_alloy', 'mna:superheated_vinteum_ingot')
    ingotHot('purified_vinteum_alloy', 'mna:superheated_purified_vinteum_ingot')

//Blocks
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
    block('utherium', 'undergarden:utherium_block')
    block('source', 'ars_nouveau:source_gem_block')
    block('mana_diamond', 'botania:mana_diamond_block')
    block('mithril', 'constructs_casting:mithril_block')
    block('bismuth', 'enlightened_end:bismuth_block')
    block('compressed_iron', 'pneumaticcraft:compressed_iron_block')
    block('black_steel', 'cataclysm:black_steel_block')
    block('demonite', 'bloodmagic:dungeon_metal')
    block('soul_stained_steel', 'malum:block_of_soul_stained_steel')
    block('hallowed_gold', 'malum:block_of_hallowed_gold')
    block('vinteum', 'mna:vinteum_dust_block')
    block('soulstone', 'malum:block_of_soulstone')
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

//Nuggets
    nugget('desh', 'ad_astra:desh_nugget')
    nugget('ostrum', 'ad_astra:ostrum_nugget')
    nugget('calorite', 'ad_astra:calorite_nugget')
    nugget('manasteel', 'botania:manasteel_nugget')
    nugget('elementium', 'botania:elementium_nugget')
    nugget('terrasteel', 'botania:terrasteel_nugget')
    nugget('cloggrum', 'undergarden:cloggrum_nugget')
    nugget('forgotten', 'undergarden:forgotten_nugget')
    nugget('mithril', 'constructs_casting:mithril_nugget')
    nugget('bismuth', 'enlightened_end:bismuth_nugget')
    nugget('black_steel', 'cataclysm:black_steel_nugget')
    nugget('soul_stained_steel', 'malum:soul_stained_steel_nugget')
    nugget('hallowed_gold', 'malum:hallowed_gold_nugget')
    nugget('bendalloy', 'cosmere:bendalloy_nugget')
    nugget('nicrosil', 'cosmere:nicrosil_nugget')
    nugget('duralumin', 'cosmere:duralumin_nugget')

//Plates
    plate('desh', 'ad_astra:desh_plate')
    plate('ostrum', 'ad_astra:ostrum_plate')
    plate('calorite', 'ad_astra:calorite_plate')

//Dusts
    dust('certus_quartz', 'ae2:certus_quartz_dust')
    dust('ether', 'sons_of_sins:ether_ashes')
    dust('arcane_essence', 'irons_spellbooks:arcane_essence')
    dust('vinteum', 'mna:vinteum_dust')
    dust('purified_vinteum', 'mna:purified_vinteum_dust')
    dust('demonite', 'bloodmagic:sand_hellforged')
    dust('dark', 'evilcraft:dark_gem_crushed')
    dust('hex_ash', 'malum:hex_ash')

//Small dusts
    dustSmall('ember', 'embers:ember_grit')

//Gems
    gem('malachite', 'enlightened_end:malachite')
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

//Flawless gems
    gemFlawless('ember', 'embers:ember_crystal')

//Chipped gems
    gemChipped('ember', 'embers:ember_shard')

//Raw ores
    rawOre('brilliance', 'malum:cluster_of_brilliance')
    rawOre('soulstone', 'malum:raw_soulstone')
    rawOre('desh', 'ad_astra:raw_desh')
    rawOre('ostrum', 'ad_astra:raw_ostrum')
    rawOre('calorite', 'ad_astra:raw_calorite')
    rawOre('mithril', 'irons_spellbooks:raw_mithril')
    rawOre('cloggrum', 'undergarden:raw_cloggrum')
    rawOre('bismuth', 'enlightened_end:raw_bismuth')
    rawOre('vinteum', 'mna:raw_vinteum')
    rawOre('demonite', 'bloodmagic:raw_demonite')

//Raw ore blocks
    rawOreBlock('desh', 'ad_astra:raw_desh_block')
    rawOreBlock('ostrum', 'ad_astra:raw_ostrum_block')
    rawOreBlock('calorite', 'ad_astra:raw_calorite_block')
    rawOreBlock('bismuth', 'enlightened_end:raw_bismuth_block')
    rawOreBlock('demonite', 'bloodmagic:rawdemoniteblock')
    rawOreBlock('cloggrum', 'undergarden:raw_cloggrum_block')
    rawOreBlock('soulstone', 'malum:block_of_raw_soulstone')
    rawOreBlock('brilliance', 'malum:block_of_brilliance')

//Crushed ores
    crushed('brilliance', 'malum:crushed_brilliance')
    crushed('soulstone', 'malum:crushed_soulstone')
    crushed('mithril', 'create_wizardry:crushed_mithril')
    crushed('bismuth', 'create_enlightend:crushed_raw_bismuth')


//Byproducts


//Formulas
    //GTMaterials.get('').setFormula('', true)
    GTMaterials.get('glowstone').setFormula('Si(FeS2)5(CrAl2O3)Hg3AuP4', true)

//Iconsets
    GTMaterials.Neutronium.setMaterialIconSet(GTMaterialIconSet.RADIOACTIVE)

    console.log('Materials modified')
})