ClientEvents.lang('en_us', event => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //Quark
    event.renameItem('quark:dragon_crystal', 'Dragonscale Chip')
    //Elementalcraft
    //BetterEnd
    event.renameItem('betterend:aurora_crystal', 'Shimmering Crystalix')
    event.renameItem('betterend:crystal_shards', 'Crystalix Fragment')
    event.renameItem('betterend:endstone_dust', 'Endstone Sand')
    //Scorched Guns
    event.renameItem('scguns:plasma', 'Overflux')
    event.renameItem('scguns:plasma_nugget', 'Overfluxed Nugget')
    event.renameItem('scguns:plasma_block', 'Overfluxed Block')
    event.renameItem('scguns:plasma_lantern', 'Overfluxed Lantern')
    event.renameItem('scguns:energy_cell', 'Overflux Cell')
    event.renameItem('scguns:plasma_core', 'Overfluxed Core')
    event.renameItem('scguns:plasmabuss', 'Fluxbuss')
    event.renameItem('scguns:plasgun', 'Flasgun')
    //Braziers
    event.renameItem('caverns_and_chasms:brazier', 'Silver Brazier')
    event.renameItem('caverns_and_chasms:soul_brazier', 'Silver Soul Brazier')
    event.renameItem('caverns_and_chasms:cupric_brazier', 'Silver Cupric Brazier')
    event.renameItem('eidolon:brazier', 'Pewter Ritual Brazier')
    event.renameItem('ars_nouveau:ritual_brazier', 'Sourcestone Ritual Anchor')
    event.renameItem('ars_nouveau:brazier_relay', 'Sourcestone Brazier Relay')
    event.renameItem('mna:brazier', "Wizard's Vinteum Brazier")
    //Soapstone
    event.renameItem(`arts_and_crafts:soapstone`, `Foamstone`)
    event.renameItem(`arts_and_crafts:soapstone_stairs`, `Foamstone Stairs`)
    event.renameItem(`arts_and_crafts:soapstone_slab`, `Foamstone Slab`)
    event.renameItem(`arts_and_crafts:soapstone_wall`, `Foamstone Wall`)
    event.renameItem(`arts_and_crafts:polished_soapstone`, `Polished Foamstone`)
    event.renameItem(`arts_and_crafts:polished_soapstone_stairs`, `Polished Foamstone Stairs`)
    event.renameItem(`arts_and_crafts:polished_soapstone_slab`, `Polished Foamstone Slab`)
    event.renameItem(`arts_and_crafts:polished_soapstone_wall`, `Polished Foamstone Wall`)
    event.renameItem(`arts_and_crafts:soapstone_bricks`, `Foamstone Bricks`)
    event.renameItem(`arts_and_crafts:soapstone_brick_stairs`, `Foamstone Brick Stairs`)
    event.renameItem(`arts_and_crafts:soapstone_brick_slab`, `Foamstone Brick Slab`)
    event.renameItem(`arts_and_crafts:soapstone_brick_wall`, `Foamstone Brick Wall`)
    function capitalizedColor(string) {
        if (string == "light_gray") {
            return "Light Gray"
        }
        if (string == "light_blue") {
            return "Light Blue"
        }
        return capitalizeFirstLetter(string)
    }
    const colors = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]
    colors.forEach(color => {
        var langName = capitalizedColor(color)
        event.renameItem(`arts_and_crafts:${color}_soapstone`, `${langName} Foamstone`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_stairs`, `${langName} Foamstone Stairs`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_slab`, `${langName} Foamstone Slab`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_wall`, `${langName} Foamstone Wall`)
        event.renameItem(`arts_and_crafts:${color}_polished_soapstone`, `${langName} Polished Foamstone`)
        event.renameItem(`arts_and_crafts:${color}_polished_soapstone_stairs`, `${langName} Polished Foamstone Stairs`)
        event.renameItem(`arts_and_crafts:${color}_polished_soapstone_slab`, `${langName} Polished Foamstone Slab`)
        event.renameItem(`arts_and_crafts:${color}_polished_soapstone_wall`, `${langName} Polished Foamstone Wall`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_bricks`, `${langName} Foamstone Bricks`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_brick_stairs`, `${langName} Foamstone Brick Stairs`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_brick_slab`, `${langName} Foamstone Brick Slab`)
        event.renameItem(`arts_and_crafts:${color}_soapstone_brick_wall`, `${langName} Foamstone Brick Wall`)
    })
})