ServerEvents.recipes((event) => {
    //Inlays
    event.remove({ output: 'eidolon:pewter_inlay' })
    event.remove({ output: 'eidolon:gold_inlay' })
    event.shaped(
        Item.of('eidolon:pewter_inlay', 1),
        [
            ' r ',
            'rfr',
            ' r '
        ],
        {
            r: 'gtceu:pewter_ring',
            f: '#forge:tools/files'
        }
    ).damageIngredient('#forge:tools/files').id('kubejs:shaped/pewter_inlay')
    event.shaped(
        Item.of('eidolon:gold_inlay', 1),
        [
            ' r ',
            'rfr',
            ' r '
        ],
        {
            r: 'gtceu:arcane_gold_ring',
            f: '#forge:tools/files'
        }
    ).damageIngredient('#forge:tools/files').id('kubejs:shaped/gold_inlay')
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
    }).id('eidolon:censer')
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
    }).id('eidolon:wicked_weave')
    //Book of Invocations
    event.shaped('kubejs:book_of_invocations', [
        'RBG',
        'DOL',
        'PNU'
    ], {
        R: 'eidolon:shadow_gem',
        U: 'eidolon:crimson_gem',
        G: 'eidolon:gold_inlay',
        P: 'eidolon:pewter_inlay',
        O: 'eidolon:wicked_weave',
        B: Item.of('eidolon:chant_scroll', '{Damage:0,spell:[{id:"eidolon:sacred"},{id:"eidolon:soul"},{id:"eidolon:sacred"},{id:"eidolon:soul"}]}').strongNBT(),
        N: Item.of('eidolon:chant_scroll', '{Damage:0,spell:[{id:"eidolon:wicked"},{id:"eidolon:soul"},{id:"eidolon:wicked"},{id:"eidolon:soul"}]}').strongNBT(),
        L: Item.of('eidolon:chant_scroll', '{Damage:0,spell:[{id:"eidolon:sacred"},{id:"eidolon:sacred"},{id:"eidolon:sacred"}]}').strongNBT(),
        D: Item.of('eidolon:chant_scroll', '{Damage:0,spell:[{id:"eidolon:wicked"},{id:"eidolon:wicked"},{id:"eidolon:wicked"}]}').strongNBT()
    }).id('kubejs:shaped/book_of_invocations')
    //Goblet
    event.remove({output: 'eidolon:goblet'})
    event.shaped('eidolon:goblet', [
        'PHP',
        ' P ',
        'PRP'
    ], {
        P: 'gtceu:arcane_gold_plate',
        R: 'gtceu:arcane_gold_rod',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
})