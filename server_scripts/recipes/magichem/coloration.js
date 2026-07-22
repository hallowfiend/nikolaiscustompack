const VANILLA_COLORS = [
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
        'pink',
        'brown',
        'black',
        'gray',
        'light_gray',
        'white'
    ]
ServerEvents.recipes(event => {
     let buildColorRecipe = (pattern, colorless) => {
        let recipe = {
            type: 'magichem:coloration',
            charge_usage: 1,
            crafting_time_multiplier: 1.0,
            valid_on_cauldron: true,
            valid_on_variegator: true,
            colorless_default: {
                item: colorless,
            },
            outputs: [],
        }
        for (let color of VANILLA_COLORS) {
            recipe.outputs.push({
                color: color,
                item: pattern.replace('@', color),
            })
        }

        return recipe;
    }

    let recipesToAdd = []
    for (let type of ['glass', 'smart', 'dense', 'smart_dense', 'covered', 'covered_dense']) {
            let template = `ae2:@_${type}_cable`
            recipesToAdd.push(buildColorRecipe(template, template.replace('@', 'fluix')))
        }
        recipesToAdd.push(buildColorRecipe('ae2:@_paint_ball', 'ae2:matter_ball'))
        recipesToAdd.push(buildColorRecipe('ae2:@_lumen_paint_ball', 'ae2:white_lumen_paint_ball'))
        recipesToAdd.push(buildColorRecipe('minecraft:@_harness', 'minecraft:white_harness'))
        recipesToAdd.push(buildColorRecipe('minecraft:@_bundle', 'minecraft:white_bundle'))
        recipesToAdd.push(buildColorRecipe('ad_astra:@_flag', 'ad_astra:white_flag'))
        recipesToAdd.push(buildColorRecipe('ad_astra:@_industrial_lamp', 'ad_astra:white_industrial_lamp'))
        recipesToAdd.push(buildColorRecipe('ad_astra:small_@_industrial_lamp', 'ad_astra:small_white_industrial_lamp'))
        recipesToAdd.push(buildColorRecipe('caverns_and_chasms:@_sparkler', 'caverns_and_chasms:sparkler'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_bricks', 'clayworks:terracotta_bricks'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_brick_stairs', 'clayworks:terracotta_brick_stairs'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_brick_slab', 'clayworks:terracotta_brick_slab'))
        recipesToAdd.push(buildColorRecipe('clayworks:chiseled_@_terracotta_bricks', 'clayworks:chiseled_terracotta_bricks'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_stairs', 'clayworks:terracotta_stairs'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_slab', 'clayworks:terracotta_slab'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_wall', 'clayworks:terracotta_wall'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_terracotta_brick_wall', 'clayworks:terracotta_brick_wall'))
        recipesToAdd.push(buildColorRecipe('clayworks:@_decorated_pot', 'minecraft:decorated_pot'))
        recipesToAdd.push(buildColorRecipe('comforts:sleeping_bag_@', 'comforts:sleeping_bag_white'))
        recipesToAdd.push(buildColorRecipe('comforts:hammock_@', 'comforts:hammock_white'))
        recipesToAdd.push(buildColorRecipe('interiors:@_floor_chair', 'interiors:white_floor_chair'))
        recipesToAdd.push(buildColorRecipe('interiors:@_chair', 'interiors:white_chair'))
        recipesToAdd.push(buildColorRecipe('interiors:@_cushion', 'interiors:white_cushion'))
        recipesToAdd.push(buildColorRecipe('handcrafted:@_cushion', 'handcrafted:white_cushion'))
        recipesToAdd.push(buildColorRecipe('handcrafted:@_sheet', 'handcrafted:white_sheet'))
        recipesToAdd.push(buildColorRecipe('hearth_and_home:@_paper_lantern', 'hearth_and_home:white_paper_lantern'))
        recipesToAdd.push(buildColorRecipe('hearth_and_home:@_stained_barred_glass', 'hearth_and_home:barred_glass'))
        recipesToAdd.push(buildColorRecipe('hexcasting:dye_colorizer_@', 'hexcasting:dye_colorizer_white'))
        recipesToAdd.push(buildColorRecipe('immersiveengineering:sheetmetal_colored_@', 'immersiveengineering:sheetmetal_colored_white'))
        recipesToAdd.push(buildColorRecipe('immersiveengineering:slab_sheetmetal_colored_@', 'immersiveengineering:slab_sheetmetal_colored_white'))
        recipesToAdd.push(buildColorRecipe('pneumaticcraft:plastic_brick_@', 'pneumaticcraft:plastic_brick_white'))
        recipesToAdd.push(buildColorRecipe('pneumaticcraft:smooth_plastic_brick_@', 'pneumaticcraft:smooth_plastic_brick_white'))
        recipesToAdd.push(buildColorRecipe('pneumaticcraft:wall_lamp_inverted_@', 'pneumaticcraft:wall_lamp_inverted_white'))
        recipesToAdd.push(buildColorRecipe('pneumaticcraft:wall_lamp_@', 'pneumaticcraft:wall_lamp_white'))
        recipesToAdd.push(buildColorRecipe('scguns:@_niter_glass', 'scguns:niter_glass'))
        recipesToAdd.push(buildColorRecipe('graveyard:@_urn', 'graveyard:white_urn'))
        recipesToAdd.push(buildColorRecipe('tide:@_bobber', 'tide:white_bobber'))
        recipesToAdd.push(buildColorRecipe('upgrade_aquatic:@_bedroll', 'upgrade_aquatic:bedroll'))
        recipesToAdd.push(buildColorRecipe('windswept:@_pinecone_shingles', 'windswept:pinecone_shingles'))
        recipesToAdd.push(buildColorRecipe('windswept:@_pinecone_shingle_stairs', 'windswept:pinecone_shingle_stairs'))
        recipesToAdd.push(buildColorRecipe('windswept:@_pinecone_shingle_slab', 'windswept:pinecone_shingle_slab'))
        recipesToAdd.push(buildColorRecipe('gtceu:@_dye_bucket', 'gtceu:white_dye_bucket'))
        recipesToAdd.push(buildColorRecipe('gtceu:@_metal_sheet', 'gtceu:white_metal_sheet'))
        recipesToAdd.push(buildColorRecipe('gtceu:@_large_metal_sheet', 'gtceu:white_large_metal_sheet'))
        recipesToAdd.push(buildColorRecipe('botania_seeds:@_mystical_flower_seed', 'botania_seeds:white_mystical_flower_seed'))
        recipesToAdd.push(buildColorRecipe('gtceu:@_studs', 'gtceu:black_studs'))
        recipesToAdd.push(buildColorRecipe('gtceu:@_dye_spray_can', 'gtceu:white_dye_spray_can'))
        recipesToAdd.push(buildColorRecipe('vampiresdelight:@_bar_stool', 'vampiresdelight:white_bar_stool'))
        recipesToAdd.push(buildColorRecipe('vampirism:coffin_@', 'vampirism:coffin_white'))
        recipesToAdd.push(buildColorRecipe('compressedcreativity:@_plastic_bracket', 'compressedcreativity:white_plastic_bracket'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_flower_pot', 'minecraft:flower_pot'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_chalk', 'arts_and_crafts:white_chalk'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_plaster', 'arts_and_crafts:plaster'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone', 'arts_and_crafts:soapstone'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_stairs', 'arts_and_crafts:soapstone_stairs'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_slab', 'arts_and_crafts:soapstone_slab'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_wall', 'arts_and_crafts:soapstone_wall'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_polished_soapstone', 'arts_and_crafts:polished_soapstone'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_polished_soapstone_stairs', 'arts_and_crafts:polished_soapstone_stairs'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_polished_soapstone_slab', 'arts_and_crafts:polished_soapstone_slab'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_polished_soapstone_wall', 'arts_and_crafts:polished_soapstone_wall'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_bricks', 'arts_and_crafts:soapstone_bricks'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_brick_stairs', 'arts_and_crafts:soapstone_brick_stairs'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_brick_slab', 'arts_and_crafts:soapstone_brick_slab'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_soapstone_brick_wall', 'arts_and_crafts:soapstone_brick_wall'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_mud_bricks', 'minecraft:mud_bricks'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_mud_brick_stairs', 'minecraft:mud_brick_stairs'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_mud_brick_slab', 'minecraft:mud_brick_slab'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_mud_brick_wall', 'minecraft:mud_brick_wall'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_paintbrush', 'minecraft:brush'))
        recipesToAdd.push(buildColorRecipe('arts_and_crafts:@_chalk_stick', 'arts_and_crafts:white_chalk_stick'))
        recipesToAdd.push(buildColorRecipe('twigs:@_packed_silt', 'twigs:packed_silt'))
        recipesToAdd.push(buildColorRecipe('twigs:@_silt_pot', 'twigs:silt_pot'))
        recipesToAdd.push(buildColorRecipe('twigs:@_silt_shingles', 'twigs:silt_shingles'))
        recipesToAdd.push(buildColorRecipe('twigs:@_silt_shingle_stairs', 'twigs:silt_shingle_stairs'))
        recipesToAdd.push(buildColorRecipe('twigs:@_silt_shingle_slab', 'twigs:silt_shingle_slab'))
        recipesToAdd.push(buildColorRecipe('twigs:@_silt_shingle_wall', 'twigs:silt_shingle_wall'))
        recipesToAdd.push(buildColorRecipe('tconstruct:@_clear_stained_glass', 'tconstruct:clear_glass'))
        recipesToAdd.push(buildColorRecipe('tconstruct:@_clear_stained_glass_pane', 'tconstruct:clear_glass_pane'))
        recipesToAdd.push(buildColorRecipe('eternal_starlight:@_yeti_fur', 'eternal_starlight:white_yeti_fur'))
        recipesToAdd.push(buildColorRecipe('eternal_starlight:@_yeti_fur_carpet', 'eternal_starlight:white_yeti_fur_carpet'))
        recipesToAdd.push(buildColorRecipe('betterend:hydralux_petal_block_@', 'betterend:hydralux_petal_block'))
        recipesToAdd.push(buildColorRecipe('betterend:thallasium_bulb_lantern_@', 'betterend:thallasium_bulb_lantern'))
        recipesToAdd.push(buildColorRecipe('betterend:terminite_bulb_lantern_@', 'betterend:terminite_bulb_lantern'))
        recipesToAdd.push(buildColorRecipe('betterend:iron_bulb_lantern_@', 'betterend:iron_bulb_lantern'))
        recipesToAdd.push(buildColorRecipe('enderio:clear_glass_@', 'enderio:clear_glass'))
        recipesToAdd.push(buildColorRecipe('enderio:fused_quartz_@', 'enderio:fused_quartz'))

    for (let r of recipesToAdd) {
        event.custom(r)
    }

})