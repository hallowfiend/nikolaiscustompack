ServerEvents.recipes((event) => {
    event.remove({id:'botania:pure_daisy/livingrock'})
    event.remove({id:'botania:pure_daisy/livingwood'})

    //Livingrock
    event.recipes.botania.pure_daisy("botania:livingrock", "aether:holystone") //output, input
    event.recipes.botania.pure_daisy("botania:livingrock", "goety:marble")
    event.recipes.botania.pure_daisy("botania:livingrock", "gtceu:marble")
    event.recipes.botania.pure_daisy("botania:livingrock", "create:asurine")
    event.recipes.botania.pure_daisy("botania:livingrock", "create:ochrum")
    event.recipes.botania.pure_daisy("botania:livingrock", "create:veridium")
    event.recipes.botania.pure_daisy("botania:livingrock", "create:crimsite")
    event.recipes.botania.pure_daisy("botania:livingrock", "create:limestone")
    event.recipes.botania.pure_daisy("botania:livingrock", "undergarden:shiverstone")
    event.recipes.botania.pure_daisy("botania:livingrock", "cataclysm:azure_seastone")
    event.recipes.botania.pure_daisy("botania:livingrock", "arts_and_crafts:soapstone")
    event.recipes.botania.pure_daisy("botania:livingrock", "twigs:rhyolite")
    event.recipes.botania.pure_daisy("botania:livingrock", "spawn:reefstone")
    event.recipes.botania.pure_daisy("botania:livingrock", "scguns:phosphorite")

    //Livingwood
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#forge:logs/archwood")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#malum:runewood_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#malum:soulwood_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#environmental:willow_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#hexalia:cottonwood_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#hibernalherbs:myqueste_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#eidolon:illwood_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#undergarden:smogstem_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#undergarden:grongle_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#undergarden:wigglewood_logs")
    event.recipes.botania.pure_daisy("botania:livingwood_log", "#twilightforest:logs")

})