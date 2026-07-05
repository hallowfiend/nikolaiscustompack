GTCEuStartupEvents.registry('gtceu:world_gen_layer', (event) => {
    event
        .create('underrock')
        .targets('undergarden:depthrock', 'undergarden:shiverstone')
        .dimensions('undergarden:undergarden');
    event
        .create('undersediment')
        .targets('undergarden:sediment')
        .dimensions('undergarden:undergarden');
    event
        .create('sand')
        .targets('minecraft:sand')
        .dimensions('minecraft:overworld');
    event
        .create('create_overworld_stones')
        .targets('create:limestone', 'create:asurine', 'create:crimsite', 'create:ochrum', 'create:veridium')
        .dimensions('minecraft:overworld');
    event
        .create('nether_stones')
        .targets('minecraft:netherrack', 'create:scorchia', 'create:scoria')
        .dimensions('minecraft:the_nether');
    event
        .create('nether_sediment')
        .targets('minecraft:gravel', 'minecraft:soul_sand', 'minecraft:soul_soil')
        .dimensions('minecraft:the_nether');
    event
        .create('twiforest')
        .targets('minecraft:stone')
        .dimensions('twilightforest:twilight_forest');
    
    event.create('aether_islands')
        .targets('aether:holystone','aether:mossy_holystone','aether:icestone')
        .dimensions('aether:the_aether') 
});