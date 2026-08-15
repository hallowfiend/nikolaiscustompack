
    function ritualtable(ingredients, output) {
        
    ServerEvents.recipes((event) => {
        event.custom({
            "type": "hexalia:ritual_table",
            "ingredients": ingredients, //max 5
            "output": { "item": output }
        }).id(`kubejs:hexalia/ritual_table/${output.split(":")[1]}`)
    })
    }
    //woven silk
    event.shaped('kubejs:woven_silk', [
        'SS',
        'SS',
        ], {
    S: 'betterend:silk_fiber'
    }).id('kubejs:shaped/woven_silk')
    //bloomwrap cloth - alt crafting component for bloomwrap armor n other things
    ritualtable(
        [
            {'item': 'kubejs:treated_leather'},
            {'item': 'twigs:azalea_flowers'},
            {'item': 'hexerei:infused_fabric'},
            {'item': 'hexalia:mutavis'}
        ],
        'kubejs:bloomwrap_cloth'
    )
    //bloomwrap armor
    event.remove({id: /hexalia:bloomwrap_.*_from_ritual_table/})
    ritualtable(
        [
            {'item': 'kubejs:bloomwrap_cloth'},
            {'item': 'minecraft:pink_tulip'},
            {'item': 'hexerei:mandrake_root'},
            {'item': 'cosmopolitan:tuber'}
        ],
        'hexalia:bloomwrap_hat'
    )
    ritualtable(
        [
            {'item': 'kubejs:bloomwrap_cloth'},
            {'item': 'hexalia:earth_node'},
            {'item': 'minecraft:moss_block'},
            {'item': 'minecraft:iron_nugget'}
        ],
        'hexalia:bloomwrap_robes'
    )
    ritualtable(
        [
            {'item': 'kubejs:bloomwrap_cloth'},
            {'item': 'minecraft:honeycomb'},
            {'item': 'hexalia:spirit_bloom'},
            {'item': 'minecraft:peony'}
        ],
        'hexalia:bloomwrap_leggings'
    )
    ritualtable(
        [
            {'item': 'kubejs:bloomwrap_cloth'},
            {'item': 'hexalia:air_node'},
            {'item': 'minecraft:dandelion'},
            {'item': 'minecraft:sugar'}
        ],
        'hexalia:bloomwrap_boots'
    )
    //ancient seed - it can be DIABOLICALLY hard to find an actual goddamn jungle temple in this pack, sooooo
    ritualtable(
        [
            {'item': 'eidolon:sildrian_seed'},
            {'item': 'twilightforest:transformation_powder'},
            {'item': 'embers:archaic_brick'}
        ],
        'hexalia:ancient_seed'
    )
    //DUNGEON'S DELIGHT
    ritualtable(
        [
            {'item': 'minecraft:poisonous_potato'},
            {'item': 'hexalia:witchweed'},
            {'item': 'farmersdelight:rotten_tomato'},
            {'item': 'malum:wicked_spirit'},
            {'item': 'dungeonsdelight:rotten_tripe'}
        ],
        'dungeonsdelight:rotbulb'
    )
    //OCCULTISM
    ritualtable(
        [
            {"item": "hexalia:rabbage_seeds"},
            {"item": "hexerei:mandrake_root"},
            {"item": "goety:ectoplasm"},
            {"item": "malum:hex_ash"},
            {"tag": "forge:essences/death"}
        ],
        "occultism:datura_seeds"
    )
    //GOETY
    ritualtable(
        [
            {"item": "immersiveengineering:seed"},
            {"item": "windswept:yellow_petals"},
            {"item": "hexerei:mandrake_flowers"},
            {"item": "eidolon:fungus_sprouts"},
            {"item": "malum:runic_sapball"}
        ],
        "goety:henbane_seeds"
    )
    ritualtable(
        [
            {"item": "immersiveengineering:seed"},
            {"item": "hexerei:belladonna_berries"},
            {"item": "eidolon:tattered_cloth"},
            {"item": "environmental:violet"},
            {"item": "malum:warp_flux"}
        ],
        "goety:nightshade_seeds"
    )
    //EIDOLON
    ritualtable(
        [
            {"item": "hexalia:ghost_fern"},
            {"item": "eidolon:soul_shard"},
            {"item": "farmersrespite:green_tea_leaves"},
            {"item": "goety:jade"},
            {"item": "tconstruct:earth_slime_congealed"}
        ],
        "eidolon:avennian_sprig"
    )
    ritualtable(
        [
            {"item": "minecraft:cocoa_beans"},
            {"item": "eidolon:soul_shard"},
            {"item": "farmersrespite:coffee_beans"},
            {"item": "gtceu:pyrochlore_dust"},
            {"item": "hexalia:rabbage_seeds"}
        ],
        "eidolon:sildrian_seed"
    )
    ritualtable(
        [
            {"item": "minecraft:oxeye_daisy"},
            {"item": "eidolon:soul_shard"},
            {"item": "minecraft:blaze_powder"},
            {"tag": "forge:resins"},
            {"item": "miners_delight:cave_carrot"}
        ],
        "eidolon:merammer_root"
    )
    ritualtable(
        [
            {"item": "hexalia:lotus_flower"},
            {"item": "eidolon:soul_shard"},
            {"item": "minecraft:pink_petals"},
            {"item": "gtceu:electrum_dust"},
            {"item": "ars_nouveau:sourceberry_bush"}
        ],
        'eidolon:oanna_bloom'
    )
    ritualtable(
        [
            {'item': 'minecraft:warped_fungus'},
            {"item": "eidolon:soul_shard"},
            {"tag": "forge:essences/death"},
            {'item': 'dungeonsdelight:rotbulb'},
            {'item': 'minecraft:ink_sac'}
        ],
        'eidolon:mirecap'
    )
    //HIBERNAL HERBS - unifying herbal conjuration
    //singed leaves (replaces singed grimoire in ritual table recipes)
    ServerEvents.recipes((event) => {
    event.shapeless(
        '3x kubejs:singed_leaves',
        ['hibernalherbs:singed_grimoire','#forge:dusts/ash','hexalia:ghost_powder','farmersrespite:yellow_tea_leaves','hexerei:yellow_dock_leaves','twigs:bamboo_leaves']
    ).keepIngredient({item:'hibernalherbs:singed_grimoire'})
    //petal duping
    event.shapeless(
        '3x hibernalherbs:sin_petals',
        ['hibernalherbs:sin_petals','#botania:petals','#botania:petals','hexalia:mutavis']
    )
    event.shapeless(
        '3x hibernalherbs:lumbinetrik_petals',
        ['hibernalherbs:lumbinetrik_petals','hibernalherbs:sin_petals','hibernalherbs:sin_petals','hexalia:mutavis']
    )
    event.shapeless(
        '3x hibernalherbs:julisium_petals',
        ['hibernalherbs:julisium_petals','hibernalherbs:lumbinetrik_petals','hibernalherbs:lumbinetrik_petals','hexalia:mutavis']
    )
    })
    //herbs
    ritualtable(
        [
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:pounded_essitte"},
            {"item": "minecraft:magma_cream"},
            {"item": "farmersrespite:green_tea_leaves"}
        ],
        "hibernalherbs:sin_petals"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:sin_petals"},
            {"item": "hibernalherbs:sin_petals"},
            {"item": "hibernalherbs:pounded_fennkystral"},
            {"item": "minecraft:gold_ingot"},
            {"item": "farmersrespite:yellow_tea_leaves"}
        ],
        "hibernalherbs:lumbinetrik_petals"
    )
    ritualtable(
        [
            {"tag": "hibernalherbs:sinful_herbs"},
            {"item": "hibernalherbs:sigil_configuration_adv"},
            {"item": "hibernalherbs:sigil_mastery_adv"},
            {"item": "hibernalherbs:lumbinetrik_petals"},
            {"item": "farmersrespite:black_tea_leaves"}
        ],
        "hibernalherbs:julisium_petals"
    )
    ritualtable(
        [
            {"tag": "forge:andesite"},
            {"tag": "forge:andesite"},
            {"tag": "forge:gems/amethyst"},
            {"item": "hibernalherbs:fennsel"},
            {"item": "hibernalherbs:marjoram"},
        ],
        "hibernalherbs:fennkystral"
    )
    ritualtable(
        [
            {"tag": "forge:andesite"},
            {"tag": "forge:andesite"},
            {"tag": "forge:gems/amethyst"},
            {"item": "hibernalherbs:chamomile"},
            {"item": "hibernalherbs:thyme"},
        ],
        "hibernalherbs:thyocielle"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:tarragon"},
            {"item": "minecraft:end_stone"},
            {"item": "minecraft:end_stone"},
            {"item": "minecraft:shulker_shell"},
            {"item": "minecraft:chorus_fruit"}
        ],
        "hibernalherbs:sage"
    )
    //sigils
    ritualtable(
        [
            {"item": "hibernalherbs:dried_sage"},
            {"item": "hibernalherbs:dried_sage"},
            {"item": "hibernalherbs:dried_calendula"},
            {"item": "hibernalherbs:dried_calendula"},
            {"item": "minecraft:smooth_stone"}
        ],
        "hibernalherbs:sigil"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:verbena"},
            {"item": "hibernalherbs:dried_punuel"},
            {"item": "hibernalherbs:dried_essitte"},
            {"item": "hibernalherbs:dried_essitte"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_wrath"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:verbena"},
            {"item": "hibernalherbs:dried_punuel"},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_sloth"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:rosemary"},
            {"item": "hibernalherbs:dried_verbena"},
            {"item": "hibernalherbs:dried_fennsel"},
            {"item": "hibernalherbs:dried_fennsel"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_pride"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:calendula"},
            {"item": "hibernalherbs:dried_thyme"},
            {"item": "hibernalherbs:dried_chives"},
            {"item": "hibernalherbs:dried_marjoram"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_envy"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:fennsel"},
            {"item": "hibernalherbs:dried_ceillis"},
            {"item": "hibernalherbs:dried_sorrel"},
            {"item": "hibernalherbs:dried_marjoram"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_lust"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:thyocielle"},
            {"item": "hibernalherbs:dried_chervil"},
            {"item": "hibernalherbs:dried_marjoram"},
            {"item": "hibernalherbs:dried_fennkystral"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_greed"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:thyocielle"},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:dried_verbena"},
            {"item": "hibernalherbs:dried_rosemary"},
            {"item": "hibernalherbs:sigil"}
        ],
        "hibernalherbs:sigil_gluttony"
    )
    ritualtable(
        [
            {"tag": "hibernalherbs:sigil/greed"},
            {"tag": "hibernalherbs:sigil/pride"},
            {"tag": "hibernalherbs:sigil/envy"},
            {"item": "hibernalherbs:dried_tarragon"},
            {"item": "hibernalherbs:dried_rosemary"}
        ],
        "hibernalherbs:sigil_mastery"
    )
    ritualtable(
        [
            {"tag": "hibernalherbs:sigil/lust"},
            {"tag": "hibernalherbs:sigil/pride"},
            {"item": "hibernalherbs:sigil_mastery"},
            {"item": "hibernalherbs:dried_chamomile"},
            {"item": "hibernalherbs:dried_essitte"}
        ],
        "hibernalherbs:sigil_mastery_adv"
    )
    ritualtable(
        [
            {"tag": "hibernalherbs:sigil/lust"},
            {"tag": "hibernalherbs:sigil/pride"},
            {"tag": "hibernalherbs:sigil/gluttony"},
            {"item": "hibernalherbs:dried_marjoram"},
            {"item": "hibernalherbs:dried_rosemary"}
        ],
        "hibernalherbs:sigil_configuration"
    )
    ritualtable(
        [
            {"tag": "hibernalherbs:sigil/lust"},
            {"tag": "hibernalherbs:sigil/pride"},
            {"item": "hibernalherbs:sigil_configuration"},
            {"item": "hibernalherbs:dried_thyme"},
            {"item": "hibernalherbs:dried_ceillis"}
        ],
        "hibernalherbs:sigil_configuration_adv"
    )
    //misc items
    ritualtable(
        [
            {"item": "gtceu:gold_ring"},
            {"tag": "hibernalherbs:sigil/gluttony"},
            {"item": "hibernalherbs:dried_fennsel"},
            {"item": "hibernalherbs:dried_fennsel"},
            {"item": "hibernalherbs:fennkystral"}
        ],
        "hibernalherbs:gluttonous_ring"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:gluttonous_ring"},
            {"item": "hibernalherbs:dried_marjoram"},
            {"item": "hibernalherbs:dried_marjoram"},
            {"item": "minecraft:netherite_ingot"},
            {"item": "hibernalherbs:sigil_mastery_adv"}
        ],
        "hibernalherbs:gluttonous_ring_adv"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:grimoire"},
            {"item": "hibernalherbs:sin_petals"},
            {"item": "hibernalherbs:sin_petals"},
            {"item": "minecraft:magma_block"},
            {"item": "supplementaries:flint_block"}
        ],
        "hibernalherbs:singed_grimoire"
    )
    const sins = [
        "pride",
        "envy",
        "greed",
        "lust",
        "gluttony",
        "wrath",
        "sloth"
    ]
    sins.forEach(sin => {
        ritualtable(
        [
            {"item": `hibernalherbs:${sin}_herb`},
            {"item": "hibernalherbs:sin_petals"},
            {"item": "hibernalherbs:sin_petals"},
            {"item": "minecraft:iron_ingot"},
            {"tag": `hibernalherbs:sigil/${sin}`}
        ],
        `hibernalherbs:padlock_${sin}`
    )
        ritualtable(
        [
            {"item": "hibernalherbs:sigil_mastery_adv"},
            {"item": "hibernalherbs:julisium_petals"},
            {"item": "hibernalherbs:julisium_petals"},
            {"item": "minecraft:netherite_ingot"},
            {"item": `hibernalherbs:padlock_${sin}`}
        ],
        `hibernalherbs:bound_padlock_${sin}`
    )
        ritualtable(
        [
            {"tag": `hibernalherbs:sigil/${sin}`},
            {"item": "hibernalherbs:ground_herbs"},
            {"item": "kubejs:singed_leaves"},
            {"item": "hibernalherbs:lumbinetrik_petals"},
            {"item": "hibernalherbs:lumbinetrik_petals"}
        ],
        `hibernalherbs:${sin}_herb`
    )
    ServerEvents.recipes((event) => {
    event.shapeless(
        `2x hibernalherbs:${sin}_herb`,
        [`hibernalherbs:${sin}_herb`,'hibernalherbs:herb_humus_myqueste', 'botania:fertilizer']
    )
    })
    })
    //herbal blends
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_ceillis"},
            {"item": "hibernalherbs:pounded_sorrel"},
            {"item": "hibernalherbs:pounded_chervil"},
            {"item": "hibernalherbs:pounded_chervil"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_mining_fatigue"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_ceillis"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_fennkystral"},
            {"item": "hibernalherbs:pounded_fennkystral"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_night_vision"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_ceillis"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_sorrel"},
            {"item": "hibernalherbs:pounded_sorrel"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_regen_speed_weak"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_ceillis"},
            {"item": "hibernalherbs:pounded_sorrel"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_chives"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_slowness"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_ceillis"},
            {"item": "hibernalherbs:pounded_fennsel"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_chives"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_speed"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_tarragon"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_chives"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_blindness"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_verbena"},
            {"item": "hibernalherbs:pounded_sorrel"},
            {"item": "hibernalherbs:pounded_chamomile"},
            {"item": "hibernalherbs:pounded_chamomile"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_weakness"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_chamomile"},
            {"item": "hibernalherbs:pounded_marjoram"},
            {"item": "hibernalherbs:pounded_punuel"},
            {"item": "hibernalherbs:pounded_punuel"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_poison"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_essitte"},
            {"item": "hibernalherbs:pounded_verbena"},
            {"item": "hibernalherbs:pounded_punuel"},
            {"item": "hibernalherbs:pounded_punuel"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_fire"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_verbena"},
            {"item": "hibernalherbs:pounded_thyme"},
            {"item": "hibernalherbs:pounded_rosemary"},
            {"item": "hibernalherbs:pounded_rosemary"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_regeneration"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_verbena"},
            {"item": "hibernalherbs:pounded_rosemary"},
            {"item": "hibernalherbs:pounded_chives"},
            {"item": "hibernalherbs:pounded_thyocielle"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_regen_slow"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_chamomile"},
            {"item": "hibernalherbs:pounded_sorrel"},
            {"item": "hibernalherbs:pounded_marjoram"},
            {"item": "hibernalherbs:pounded_marjoram"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_haste"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:pounded_chamomile"},
            {"item": "hibernalherbs:pounded_rosemary"},
            {"item": "hibernalherbs:pounded_ceillis"},
            {"item": "hibernalherbs:pounded_ceillis"},
            {"tag": "forge:bowls"}
        ],
        "hibernalherbs:blend_wither"
    )
    const effectBlends = [
        "regeneration",
        "blindness",
        "fire",
        "regen_slow",
        "poison",
        "slowness",
        "mining_fatigue",
        "haste",
        "speed",
        "wither",
        "night_vision",
        "weakness",
        "regen_speed_weak"
    ]

    effectBlends.forEach(effect => {
        ritualtable(
        [
            {"item": `hibernalherbs:blend_${effect}`},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:dried_fennkystral"},
            {"item": "malum:blazing_quartz"}
        ],
        `hibernalherbs:blend_${effect}_smoked`
    )
    })