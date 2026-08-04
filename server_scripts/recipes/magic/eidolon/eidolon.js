ServerEvents.recipes((event) => {
    //Inlays
    event.remove({ output: 'eidolon:pewter_inlay' })
    event.remove({ output: 'eidolon:gold_inlay' })
    event.shaped(
        Item.of('eidolon:pewter_inlay', 1),
        [
            ' r ',
            'r r',
            ' r '
        ],
        {
            "r": 'gtceu:pewter_ring'
        }
    ).id('kubejs/shaped/pewter_inlay')
    event.shaped(
        Item.of('eidolon:gold_inlay', 1),
        [
            ' r ',
            'r r',
            ' r '
        ],
        {
            "r": 'gtceu:arcane_gold_ring'
        }
    ).id('kubejs/shaped/gold_inlay')
    
})