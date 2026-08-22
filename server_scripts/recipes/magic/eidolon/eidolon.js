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
    ).id('kubejs:shaped/pewter_inlay')
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
    ).id('kubejs:shaped/gold_inlay')
    //Censer
    event.remove({output: 'eidolon:censer'})
    event.shaped('eidolon:censer',[
        ' o ',
        'bsb',
        'pup'
    ], {
        o: 'gtceu:arcane_gold_ring',
        b: 'gtceu:silver_plate',
        p: 'gtceu:pewter_plate',
        s: 'kubejs:sacred_node',
        u: 'malum:hallowed_gold_ingot'
    }).id('kubeks:shaped/eidolon_censer')
    //Wicked weave
    event.remove({output: 'eidolon:wicked_weave'})
    event.custom({
    "type": "eidolon:worktable",
    "pattern": [
    "www",
    "wsw",
    "www"
    ],
    "reagents": "u b ",
    "key": {
    "w": {
      "item": "malum:spirit_fabric"
    },
    "s": {
      "item": "eidolon:shadow_gem"
    },
    "u": {
      "item": "eidolon:unholy_symbol"
    },
    "b": {
      "tag": "forge:dyes/blue"
    }
    },
    "result": {
    "item": "eidolon:wicked_weave",
    "count": 8
    }
    }).id('kubejs:eidolon/worktable/components/wicked_weave')
})