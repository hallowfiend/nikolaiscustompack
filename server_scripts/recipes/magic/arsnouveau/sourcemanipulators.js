ServerEvents.recipes(event => {
    const yeet = [
        /ars_nouveau:.*_sourcelink/,
        'ars_nouveau:source_jar',
        'ars_nouveau:relay',
        'ars_nouveau:relay_splitter',
        'ars_nouveau:relay_deposit',
        'ars_nouveau:relay_collector',
        'ars_nouveau:relay_warp',
        'ars_nouveau:dominion_wand'
    ]
    yeet.forEach(item => {
        event.remove({id: item})
    })
    //SOURCE STORAGE/MANIPULATION
    //dominion wand
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'malum:hallowed_gold_ingot',
            'malum:soul_stained_steel_ingot',
            'malum:block_of_cthonic_gold',
            'eidolon:gold_inlay',
            'mna:chimerite_gem',
            'botania:mana_powder',
            '#forge:gems/source',
            '#forge:gems/source'
        ],
        'botania:livingwood_twig',             
        'ars_nouveau:dominion_wand',   
        0                       
    ).id('kubejs:ars_nouveau/enchanting_apparatus/dominion_wand')
    //source jar
    event.shaped('ars_nouveau:source_jar', [
        'G',
        'J',
        'A'
    ], {
        G: 'gtceu:arcane_gold_plate',
        J: 'supplementaries:jar',
        A: 'ars_nouveau:archwood_slab'
    }).id('kubejs:shaped/source_jar')
    //source relay
    event.shaped('ars_nouveau:relay', [
        'A A',
        'CBC',
        'A A'
    ], {
        A: 'gtceu:arcane_gold_rod',
        B: 'ars_nouveau:source_gem_block',
        C: 'gtceu:hallowed_gold_plate'
    }).id('kubejs:shaped/source_relay')
    //splitter relay
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:prism',
            'malum:soul_stained_steel_ingot',
            'minecraft:prismarine_crystals',
            '#forge:gems/certus_quartz'
        ],
        'ars_nouveau:relay',             
        'ars_nouveau:relay_splitter',   
        0                       
    ).id('kubejs:ars_nouveau/enchanting_apparatus/splitter_relay')
    //collector relay
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'goety:hunger_core',
            'malum:hallowed_gold_ingot',
            'minecraft:lapis_lazuli',
            'hexalia:air_node'
        ],
        'ars_nouveau:relay',             
        'ars_nouveau:relay_collector',   
        0                       
    ).id('kubejs:ars_nouveau/enchanting_apparatus/collector_relay')
    //deposit relay
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'create:chute',
            'evilcraft:bowl_of_promises_empty',
            'hexcasting:charged_amethyst',
            'malum:processed_soulstone'
        ],
        'ars_nouveau:relay',             
        'ars_nouveau:relay_deposit',   
        0                       
    ).id('kubejs:ars_nouveau/enchanting_apparatus/deposit_relay')
    //warp relay
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:lens_warp',
            'malum:warp_flux',
            'integrateddynamics:proto_chorus',
            'goety:ectoplasm'
        ],
        'ars_nouveau:relay',             
        'ars_nouveau:relay_warp',   
        0                       
    ).id('kubejs:ars_nouveau/enchanting_apparatus/warp_relay')
    //SOURCELINKS
    //agronomic
    event.shaped('ars_nouveau:agronomic_sourcelink', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:arcane_gold_rod',
        C: 'kubejs:ecologists_distillation',
        D: 'malum:cthonic_gold'
    }).id('kubejs:shaped/agronomic_sourcelink')
    //volcanic
    event.shaped('ars_nouveau:volcanic_sourcelink', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:arcane_gold_rod',
        C: 'kubejs:seething_nethersblood',
        D: 'malum:cthonic_gold'
    }).id('kubejs:shaped/volcanic_sourcelink')
    //alchemical
    event.shaped('ars_nouveau:alchemical_sourcelink', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:arcane_gold_rod',
        C: 'kubejs:caustic_oil',
        D: 'malum:cthonic_gold'
    }).id('kubejs:shaped/alchemical_sourcelink')
    //vitalic
    event.shaped('ars_nouveau:vitalic_sourcelink', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:arcane_gold_rod',
        C: 'kubejs:whiff_of_vitality',
        D: 'malum:cthonic_gold'
    }).id('kubejs:shaped/vitalic_sourcelink')
    //mycelial
    event.shaped('ars_nouveau:mycelial_sourcelink', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'ggtceu:arcane_gold_rod',
        C: 'kubejs:shifting_tincture',
        D: 'malum:cthonic_gold'
    }).id('kubejs:shaped/mycelial_sourcelink')
})