ServerEvents.recipes(event => {
    //Empty Upgrade Orb
    event.remove({output: 'irons_spellbooks:upgrade_orb'})
    event.shaped(
        Item.of('irons_spellbooks:upgrade_orb', 1),
        [
            'mcm',
            'coc',
            'mcm'
        ],
        {
            m: 'gtceu:mithril_plate',
            c: 'irons_spellbooks:cinder_essence',
            o: 'magichem:glass_orb'
        }
    ).id('kubejs:shaped/upgrade_orb')
})