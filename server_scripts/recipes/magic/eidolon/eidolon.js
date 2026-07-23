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
    )
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
    )
    
})