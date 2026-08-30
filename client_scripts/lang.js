ClientEvents.lang('en_us', event => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //MnA
    event.renameItem('mna:vinteum_ingot', 'Vinteum Alloy Ingot')
    event.renameItem('mna:infused_silk', 'Patternfused Silk')
    event.renameItem('mna:infused_thread', 'Patternfused Thread')
    //Eidolon
    event.renameItem('eidolon:censer', "Hermetic Censer")
    event.renameItem('eidolon:parchment', 'Hallowed Parchment')
    event.renameItem('eidolon:magic_ink', 'Blessed Ink')
    //Hexalia
    event.renameItem('hexalia:censer', 'Hedge Censer')
    //Blood Magic
    event.renameItem('bloodmagic:arcaneashes', 'Arraywork Powders')
    //Occultism
    event.renameItem('occultism:spirit_attuned_gem', 'Xithricite Gem')
    //Goety
    event.renameItem('goety:spirit_fabric', 'Ensouled Tough Fabric')
    event.renameItem('goety:dark_fabric', 'Darkened Tough Fabric')
    event.renameItem('goety:magic_fabric', 'Gilded Tough Fabric')
    event.renameItem('goety:gale_fabric', 'Jadewoven Tough Fabric')
    event.renameItem('goety:occult_fabric', 'Occulted Tough Fabric')
    event.renameItem('goety:chill_fabric', 'Chilled Tough Fabric')
    //Living flesh dedup
    event.renameItem('malum:living_flesh', 'Revitalized Flesh')
    event.renameItem('malum:block_of_living_flesh', 'Block of Revitalized Flesh')
    event.renameItem('caverns_and_chasms:living_flesh', 'Quasianimate Flesh')
    //Crystal ball dedup (also, no ball allowed in block game)
    event.renameItem('hexerei:crystal_ball', "Crystal Cube")
    event.renameItem('goety:crystal_ball', "Scryer's Crystal Cube")
    //Quark
    event.renameItem('quark:dragon_crystal', 'Dragonscale Chip')
    //Nature's Aura
    event.renameItem('naturesaura:infused_iron', 'Infused Mithril Ingot')
    event.renameItem('naturesaura:tainted_gold', 'Tainted Gold Ingot')
    event.renameItem('naturesaura:sky_ingot', 'Heavenly Metal Ingot')
    event.renameItem('naturesaura:infused_iron_block', 'Block of Infused Mithril')
    event.renameItem('naturesaura:tainted_gold_block', 'Block of Tainted Gold')
    event.renameItem('naturesaura:sky_ingot_block', 'Block of Heavenly Metal')
    //Elementalcraft
    event.renameItem('elementalcraft:drenched_iron_ingot', 'Drenched Invar Ingot')
    event.renameItem('elementalcraft:drenched_iron_block', 'Drenched Invar Block')
    event.renameItem('elementalcraft:drenched_iron_nugget', 'Drenched Invar Nugget')
    event.renameItem('elementalcraft:air_silk', 'Aerilated Silk')
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