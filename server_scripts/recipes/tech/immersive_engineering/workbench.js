ServerEvents.recipes(event => {
    //scorched bullets (bulk alternative to mechanical crafting)
    //basics
    const basicBullets = [
        {ingredients: [
            '4x scguns:small_copper_casing',
            '4x scguns:gunpowder_dust',
            '4x #scguns:stan_bullet_tips'
        ],
        output: '4x scguns:compact_copper_round'},
        { ingredients: [
            '4x scguns:small_copper_casing',
            '4x minecraft:paper',
            '4x scguns:buckshot'
        ],
        output: '4x scguns:shotgun_shell'},
        {ingredients: [
            '4x scguns:medium_copper_casing',
            '4x scguns:gunpowder_dust',
            '4x #scguns:stan_bullet_tips'
        ],
        output: '4x scguns:standard_copper_round'},
        {ingredients: [
            '4x scguns:medium_brass_casing',
            '4x scguns:gunpowder_dust',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:advanced_round'},
        {ingredients: [
            '4x scguns:small_brass_casing',
            '4x scguns:gunpowder_dust',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:compact_advanced_round'},
        {ingredients: [
            '4x scguns:medium_brass_casing',
            '4x scguns:gunpowder_dust',
            '4x scguns:flechette'
        ],
        output: '4x scguns:shatter_round'},
        {ingredients: [
            '4x scguns:large_brass_casing',
            '4x minecraft:blaze_powder',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:fire_grenade_round'},
        {ingredients: [
            '4x scguns:large_brass_casing',
            '4x gtceu:sulfur_dust',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:gas_grenade_round'},
        {ingredients: [
            '4x scguns:small_iron_casing',
            '4x scguns:gunpowder_dust',
            '4x scguns:needle'
        ],
        output: '4x scguns:frog_dart'},
        {ingredients: [
            '4x scguns:small_iron_casing',
            '4x minecraft:gunpowder',
            '4x #scguns:stan_bullet_tips'
        ],
        output: '4x scguns:microjet'}
    ]
    basicBullets.forEach(pew => {
        event.recipes.immersiveengineering.blueprint(
            pew.output,
            pew.ingredients,
            'bullet'
        ).id(`kubejs:immersive_engineering/workbench/${pew.output.split(":")[1]}`)
    })
    //advanceds (sheol/peal/nitro/cells)
    const advancedBullets = [
        {ingredients: [
            '4x scguns:small_iron_casing',
            '4x scguns:sheol_dust',
            '4x minecraft:gold_nugget'
        ],
        output: '4x scguns:hog_round'},
        {ingredients: [
            '4x scguns:large_brass_casing',
            '4x scguns:nitro_powder_dust',
            '4x scguns:anthralite_nugget'
        ],
        output: '4x scguns:krahg_round'},
        {ingredients: [
            '4x scguns:medium_brass_casing',
            '4x minecraft:paper',
            '4x scguns:nitro_buckshot'
        ],
        output: '4x scguns:bearpack_shell'},
        {ingredients: [
            '4x scguns:small_diamond_steel_casing',
            '4x scguns:nitro_powder_dust',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:beowulf_round'},
        {ingredients: [
            '4x scguns:medium_diamond_steel_casing',
            '4x scguns:sheol_dust',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:gibbs_round'},
        {ingredients: [
            '4x scguns:large_brass_casing',
            '4x scguns:sheol',
            '4x #forge:slime_balls'
        ],
        output: '4x scguns:bouncy_grenade_round'},
        {ingredients: [
            '4x scguns:large_brass_casing',
            '4x scguns:sheol',
            '4x #scguns:advanced_bullet_tips'
        ],
        output: '4x scguns:he_grenade_round'},
        {ingredients: [
            '4x scguns:empty_cell',
            '4x scguns:plasma_nugget',
            '4x #scguns:stan_bullet_tips'
        ],
        output: '4x scguns:energy_cell'},
        {ingredients: [
            '4x scguns:empty_core',
            '4x minecraft:redstone_block',
            '4x scguns:charged_amethyst_shard'
        ],
        output: '4x scguns:energy_core'}
    ]
    advancedBullets.forEach(pow => {
        event.recipes.immersiveengineering.blueprint(
            pow.output,
            pow.ingredients,
            'specialBullet'
        ).id(`kubejs:immersive_engineering/workbench${pow.output.split(":")[1]}`)
    })
    //mechanical components
    event.remove({ id: 'immersiveengineering:crafting/component_iron' })
    event.remove({ id: 'immersiveengineering:crafting/component_steel' })
    event.remove({ id: 'immersiveengineering:blueprint/component_iron' })
    event.remove({ id: 'immersiveengineering:blueprint/component_steel' })
    event.recipes.immersiveengineering.blueprint(
        '2x immersiveengineering:component_iron',
        [
            '2x #forge:plates/iron',
            '#forge:rods/copper',
            '#forge:screws/sterling_silver',
            'gtceu:brass_gear'
        ],
        'components'
    ).id('kubejs:immersive_engineering/workbench/iron_component')
    event.recipes.immersiveengineering.blueprint(
        '2x immersiveengineering:component_steel',
        [
            '2x #forge:plates/steel',
            '#forge:rods/bronze',
            '#forge:screws/electrum',
            'gtceu:invar_gear'
        ],
        'components'
    ).id('kubejs:immersive_engineering/workbench/steel_component')
    event.recipes.immersiveengineering.blueprint(
        '2x kubejs:aerilated_pneumatic_component',
        [
            '4x #forge:plates/compressed_iron',
            '2x #forge:plates/duralumin',
            '#forge:screws/potin',
            '4x malum:aerial_spirit',
            'deep_aether:skyjade',
        ],
        'components'
    ).id('kubejs:immersive_engineering/workbench/pneumatic_component')
    //vacuum tube
    event.remove({ id: 'immersiveengineering:blueprint/electron_tube' })
    event.recipes.immersiveengineering.blueprint(
        '2x gtceu:vacuum_tube',
        [
            '2x #forge:glass',
            '2x gtceu:steel_bolt',
            '2x gtceu:copper_single_wire'
        ],
        'components'
    ).id('kubejs:immersive_engineering/workbench/vacuum_tube')
    //AE2 components
    const circuittypes = [
        "logic",
        "calculation",
        "engineering"
    ]
    circuittypes.forEach(type =>{
        event.recipes.immersiveengineering.blueprint(
        `ae2:${type}_processor`,
        [
            `ae2:printed_${type}_processor`,
            'gtceu:red_alloy_single_wire',
            'ae2:printed_silicon'
        ],
        'components'
    ).id(`kubejs:immersive_engineering/workbench/${type}_processor`)
    })
});