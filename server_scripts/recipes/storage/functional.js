ServerEvents.recipes(event => {
    //upgradesssssssssssss
    const yote = [
        'functionalstorage:copper_upgrade',
        'functionalstorage:gold_upgrade',
        'functionalstorage:diamond_upgrade'
    ]
    yote.forEach(yeet => {
        event.remove({id: yeet})
    })
    //copper
    event.shaped('functionalstorage:copper_upgrade', [
        'ibi',
        'eue',
        'ibi'
    ], {
        i: 'minecraft:copper_ingot',
        b: '#forge:storage_blocks/copper',
        e: 'embers:bin',
        u: 'sophisticatedstorage:upgrade_base'
    })
    //gold
    event.shaped('functionalstorage:gold_upgrade', [
        'ibi',
        'eue',
        'ibi'
    ], {
        i: 'minecraft:gold_ingot',
        b: '#forge:storage_blocks/gold',
        e: 'embers:bin',
        u: 'functionalstorage:copper_upgrade'
    })
    //diamond
    event.shaped('functionalstorage:diamond_upgrade', [
        'ibi',
        'eue',
        'ibi'
    ], {
        i: 'minecraft:diamond',
        b: '#forge:storage_blocks/diamond',
        e: 'embers:bin',
        u: 'functionalstorage:gold_upgrade'
    })
    //void
    //redstone
    //pusher
    //puller
})