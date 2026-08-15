ServerEvents.tags('damage_type', event => {
    //soul shatter compat
    event.add('malum:can_soul_shatter', [
        "goety:spike",
        "goety:hellfire",
        "goety:indirect_hellfire",
        "goety:fire_breath",
        "goety:magic_fire",
        "goety:frost_breath",
        "goety:magic_bolt",
        "goety:soul_leech",
        "goety:life_leech",
        "goety:choke",
        "#goety:magic_fire",
        "#goety:hellfire",
        "#goety:frost_attacks",
        "goety:shock",
        "goety:direct_shock",
        "goety:indirect_shock",
        "goety:lightning",
        "#goety:water_attacks",
        "ars_nouveau:spell"
    ])
    //inflictor gem blacklist
    event.add('embers:inflictor_gem_blacklist', [
        "hexcasting:overcast"
    ])
})