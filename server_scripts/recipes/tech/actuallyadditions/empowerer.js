ServerEvents.recipes(event => {
    const yeet = [
        'actuallyadditions:empowering/diamatine',
        'actuallyadditions:empowering/enori',
        'actuallyadditions:empowering/void',
        'actuallyadditions:empowering/palis',
        'actuallyadditions:empowering/emeradic',
        'actuallyadditions:empowering/restonia',
        /actuallyadditions:empowering.*block/
    ]
    yeet.forEach(yote => {
        event.remove({id: yote})
    })
    function empowerCrystal(type, color, inputs){
        event.custom({
            "type": "actuallyadditions:empowering",
            "base": {
                "item": `actuallyadditions:${type}_crystal`
            },
            "color": color,
            "energy": 5000,
            "modifiers": inputs,
            "result": {
                "item": `actuallyadditions:empowered_${type}_crystal`
            },
            "time": 50
            }).id(`actuallyadditions:empowering/${type}`)
    }
    empowerCrystal(
        'enori',
        13421772,
        [
            {'item': 'gtceu:calcite_dust'},
            {'tag': 'forge:gems/certus_quartz'},
            {'item': 'gtceu:tin_alloy_ingot'},
            {'item': 'embers:caminite_brick'}
        ]
    )
    empowerCrystal(
        'void',
        3355443,
        [
            {'item': 'malum:processed_soulstone'},
            {'tag': 'forge:gems/zanite'},
            {'item': 'minecraft:flint'},
            {'item': 'goety:nightshade_blossom'}
        ]
    )
    empowerCrystal(
        'restonia',
        10365735,
        [
            {'item': 'enderio:conductive_alloy_ingot'},
            {'item': 'gtceu:garnet_gem'},
            {'item': 'gtceu:netherrack_dust'},
            {'item': 'minecraft:beetroot'}
        ]
    )
    empowerCrystal(
        'palis',
        2437779,
        [
            {'item': 'hexalia:siren_paste'},
            {'item': 'mna:vinteum_dust'},
            {'item': 'tconstruct:sky_slime_crystal_block'},
            {'item': 'minecraft:prismarine_shard'}
        ]
    )
    empowerCrystal(
        'diamatine',
        6522834,
        [
            {'item': 'minecraft:clay'},
            {'item': 'hexalia:galeberries'},
            {'tag': 'forge:ingots/mithril'},
            {'item': 'gtceu:apatite_gem'}
        ]
    )
    empowerCrystal(
        'emeradic',
        3492376,
        [
            {'item': 'gtceu:soapstone_dust'},
            {'item': 'ars_nouveau:mendosteen_pod'},
            {'item': 'goety:jade'},
            {'item': 'minecraft:moss_block'}
        ]
    )
})