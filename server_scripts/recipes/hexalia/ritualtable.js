ServerEvents.recipes((event) => {
    //Ritual Table
    function ritualtable(ingredients, output) {
        event.custom({
            "type": "hexalia:ritual_table",
            "ingredients": ingredients, //max 5
            "output": output
        })
    }
    // OCCULTISM - demon's dream seeds
    ritualtable(
        [
            {"item": "hexalia:spirit_powder"},
            {"item": "goety:ectoplasm"},
            {"item": "hexerei:sage_seeds"},
            {"item": "elementalcraft:inert_crystal"},
            {"tag": "#forge:essences/death"}
        ],
        "occultism:datura_seeds"
    )
    // HIBERNAL HERBS - unifying herbal conjuration
    //singed leaves (replaces singed grimoire in ritual table recipes)
    event.shapeless(
        '3x kubejs:singed_leaves',
        ['hibernalherbs:singed_grimoire','#forge:dusts/ash','hexalia:ghost_powder','farmersrespite:yellow_tea_leaves','hexerei:yellow_dock_leaves','twigs:bamboo_leaves']
    ).keepIngredient({item:'hibernalherbs:singed_grimoire'})
    //herbs
    ritualtable(
        [
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:dried_thyocielle"},
            {"item": "hibernalherbs:pounded_essitte"},
            {"item": "minecraft:magma_cream"},
            {"item": "farmersrespite:green_tea_leaves"}
        ],
        "3x hibernalherbs:sin_petals"
    )
    ritualtable(
        [
            {"item": "hibernalherbs:sin_petals"},
            {"item": "hibernalherbs:sin_petals"},
            {"item": "hibernalherbs:pounded_fennkystral"},
            {"item": "minecraft:gold_ingot"},
            {"item": "farmersrespite:yellow_tea_leaves"}
        ],
        "3x hibernalherbs:lumbinetrik_petals"
    )
    ritualtable(
        [
            {"tag": "hibernalherbs:sinful_herbs"},
            {"item": "hibernalherbs:sigil_configuration_adv"},
            {"item": "hibernalherbs:sigil_mastery_adv"},
            {"item": "hibernalherbs:lumbinetrik_petals"},
            {"item": "farmersrespite:black_tea_leaves"}
        ],
        "3x hibernalherbs:juilisium_petals"
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
        `2x hibernalherbs:${sin}_herb`
    )
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
})