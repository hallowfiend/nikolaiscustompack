ServerEvents.recipes(event => {
    //Effect arrays
    const effectArrays = [
        {id: 'bounce', base: '#forge:slimeballs', reagent: 'gtceu:soapstone_dust'},
        {id: 'movement', base: '#forge:feathers', reagent: 'minecraft:redstone'},
        {id: 'night', base: 'minecraft:lapis_lazuli', reagent: '#forge:dusts/dark'},
        {id: 'spike', base: 'evilcraft:dark_spike', reagent: '#forge:dusts/silver'},
        {id: 'updraft', base: 'goety:jade', reagent: 'minecraft:glowstone_dust'}
    ]
    effectArrays.forEach(array => {
        event.remove({id: `bloodmagic:array/${array.id}`})
        if (array.id.equals('night')){
        event.recipes.bloodmagic
        .array('minecraft:bedrock', array.base, array.reagent)
        .texture(`bloodmagic:textures/models/alchemyarrays/moonarray.png`)
        .id(`bloodmagic:array/${array.id}`);
        }
        else {
        event.recipes.bloodmagic
        .array('minecraft:bedrock', array.base, array.reagent)
        .texture(`bloodmagic:textures/models/alchemyarrays/${array.id}array.png`)
        .id(`bloodmagic:array/${array.id}`);
        }
    })
    //Runewood variant conversion
    event.recipes.bloodmagic
    .array('malum:runewood_sapling', 'malum:azure_runewood_sapling', 'gtceu:tricalcium_phosphate_dust')
    .texture('bloodmagic:textures/models/alchemyarrays/growthsigil.png');
    event.recipes.bloodmagic
    .array('malum:azure_runewood_sapling', 'malum:runewood_sapling', 'gtceu:apatite_gem')
    .texture('bloodmagic:textures/models/alchemyarrays/growthsigil.png');
    //Acacia flowering
    event.recipes.bloodmagic
    .array('windswept:flowering_acacia_sapling', 'minecraft:acacia_sapling', 'windswept:mimosa')
    .texture('bloodmagic:textures/models/alchemyarrays/growthsigil.png');
    //Living equipment
    event.remove({id: /bloodmagic:.*array.*living_.*/})
    event.recipes.bloodmagic
    .array('bloodmagic:livinghelmet', 'bloodmagic:reagentbinding', 'naturesaura:infused_iron_helmet')
    .texture('bloodmagic:textures/models/alchemyarrays/bindingarray.png')
    .id('bloodmagic:array/living_helmet');
    event.recipes.bloodmagic
    .array('bloodmagic:livingplate', 'bloodmagic:reagentbinding', 'naturesaura:infused_iron_chest')
    .texture('bloodmagic:textures/models/alchemyarrays/bindingarray.png')
    .id('bloodmagic:array/living_plate');
    event.recipes.bloodmagic
    .array('bloodmagic:livingleggings', 'bloodmagic:reagentbinding', 'naturesaura:infused_iron_pants')
    .texture('bloodmagic:textures/models/alchemyarrays/bindingarray.png')
    .id('bloodmagic:array/living_leggings');
    event.recipes.bloodmagic
    .array('bloodmagic:livingboots', 'bloodmagic:reagentbinding', 'naturesaura:infused_iron_shoes')
    .texture('bloodmagic:textures/models/alchemyarrays/bindingarray.png')
    .id('bloodmagic:array/living_boots');
    event.recipes.bloodmagic
    .array('bloodmagic:upgradetrainer', 'bloodmagic:reagentbinding', 'gtceu:infused_iron_ring')
    .texture('bloodmagic:textures/models/alchemyarrays/bindingarray.png')
    .id('bloodmagic:array/living_trainer');
})