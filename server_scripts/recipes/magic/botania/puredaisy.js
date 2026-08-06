ServerEvents.recipes((event) => {
    event.remove({id:'botania:pure_daisy/livingrock'})
    event.remove({id:'botania:pure_daisy/livingwood'})

    //Livingrock
    const livingrockMaterials = [
        'aether:holystone',
        'create:asurine',
        'create:ochrum',
        'create:veridium',
        'create:crimsite',
        'create:limestone',
        'undergarden:depthrock',
        'undergarden:shiverstone',
        'cataclysm:azure_seastone',
        'arts_and_crafts:soapstone',
        'twigs:rhyolite',
        'spawn:reefstone',
        'scguns:phosphorite'
    ]
    livingrockMaterials.forEach(rock => {
        event.recipes.botania.pure_daisy("botania:livingrock", rock)
        .id(`kubejs:botania/pure_daisy/livingrock_from_${rock.split(":")[1]}`)
    })
    event.recipes.botania.pure_daisy("botania:livingrock", "goety:marble")
        .id('kubejs:botania/pure_daisy/livingrock_from_cursed_marble')
    event.recipes.botania.pure_daisy("botania:livingrock", "gtceu:marble")
        .id('kubejs:botania/pure_daisy/livingrock_from_mundane_marble')

    //Livingwood
    const livingwoodMaterials = [
        '#malum:runewood_logs',
        '#malum:soulwood_logs',
        '#hexalia:cottonwood_logs',
        '#hibernalherbs:myqueste_logs',
        '#eidolon:illwood_logs',
        '#environmental:willow_logs',
        '#undergarden:smogstem_logs',
        '#undergarden:grongle_logs',
        '#undergarden:wigglewood_logs',
        '#deep_aether:roseroot_logs',
        '#deep_aether:yagroot_logs',
        '#deep_aether:cruderoot_logs',
        '#deep_aether:conberry_logs',
        '#deep_aether:sunroot_logs',
        '#aether:skyroot_logs'
    ]
    livingwoodMaterials.forEach(wood => {
        event.recipes.botania.pure_daisy("botania:livingwood_log", wood)
        .id(`kubejs:botania/pure_daisy/livingwood_from_${wood.split(":")[1]}`)
    })
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#forge:logs/archwood")
        .id('kubejs:botania/pure_daisy/livingwood_from_archwood')
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#forge:logs/mahogany")
        .id('kubejs:botania/pure_daisy/livingwood_from_mahogany')
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#twilightforest:logs")
        .id('kubejs:botania/pure_daisy/livingwood_from_tf_logs')

})