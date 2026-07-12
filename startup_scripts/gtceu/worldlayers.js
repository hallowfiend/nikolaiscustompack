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
        .targets('minecraft:netherrack', 'minecraft:blackstone', 'create:scorchia', 'create:scoria')
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
        .dimensions('aether:the_aether');
    
    event.create('starlight_underground')
        .targets('eternal_starlight:grimstone', 'eternal_starlight:eternal_ice')
        .dimensions('eternal_starlight:starlight');
    
    event.create('starlight_depths')
        .targets('eternal_starlight:voidstone', 'eternal_starlight:haze_ice')
        .dimensions('eternal_starlight:starlight')

    event.create('end_barrens')
        .targets('minecraft:end_stone', 'minecraft:blackstone', 'minecraft:basalt', 'minecraft:smooth_basalt', 'betterend:umbralith')
        .dimensions('minecraft:the_end')

    event.create('end_lushlands')
        .targets('minecraft:end_stone', 'betterend:flavolite', 'betterend:violecite', 'betterend:sulphuric_rock')
        .dimensions('minecraft:the_end')
    
    event.create('moon_stone')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon')
    
    event.create('venus_stone')
        .targets('ad_astra:venus_stone')
        .dimensions('ad_astra:venus')

    event.create('mars_stone')
        .targets('ad_astra:mars_stone')
        .dimensions('ad_astra:mars')
    
    event.create('glacio_stone')
        .targets('ad_astra:glacio_stone')
        .dimensions('ad_astra:glacio')
});