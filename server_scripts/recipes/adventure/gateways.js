ServerEvents.recipes(event => {
    function gatewayShaped(pattern, key, gateway){
        event.custom({
        "type": "gateways:gate_recipe",
        "group": "gateways",
        "pattern": pattern,
        "key": key,
        "result": {
            "item": "gateways:gate_pearl"
        },
        "gateway": `gateways:${gateway}`
    })
    }

    gatewayShaped(
        [
            'fdf',
            'geg',
            'fdf'
        ],
        {
            f: {"item": "biomancy:flesh_bits"},
            d: {"item": "goety:grave_dust"},
            g: {"item": "evilcraft:dark_power_gem"},
            e: {"item": "mna:mote_ender"}
        },
        'vampire_1'
    )
    gatewayShaped(
        [
            'fdl',
            'vev',
            'ldf'
        ],
        {
            f: {"item": "kubejs:bloodchannel_gem"},
            d: {"item": "goety:shadow_essence"},
            v: {"item": "vampirism:vampire_blood_bottle"},
            l: {"item": "magichem:admixture_exanimate"},
            e: {"item": "mna:mote_ender"}
        },
        'vampire_2'
    )
})