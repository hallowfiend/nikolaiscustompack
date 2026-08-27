//Special ritual type for Apotheosis-exclusive enchantments

GoetyEvents.registerRitual(event => {
    event.create('brilliant', ritual => {
        ritual.blocks = [
            'apotheosis:reforging_table',
            '4x apotheosis:echoing_sculkshelf',
            '4x malum:block_of_brilliance',
            'apotheosis:treasure_shelf'
        ];
        ritual.setJeiIcon('apotheosis:mythic_material');
        ritual.setOnFinish((world, darkAltarPos, tileEntity, castingPlayer, activationItem) => {
            let x = darkAltarPos.getX ? darkAltarPos.getX() : darkAltarPos.x; let y = darkAltarPos.getY ? darkAltarPos.getY() : darkAltarPos.y; let z = darkAltarPos.getZ ? darkAltarPos.getZ() : darkAltarPos.z;
            let server = world.getServer ? world.getServer() : null; if (server) { server.runCommandSilent(`playsound apotheosis:reforge block @a ${x} ${y} ${z} 1 1`); }
        });
    });
});

ServerEvents.recipes(event => {
    function enchant(enchant, soulCost, xpCostPerLevel, inputs){
        var identifier = enchant.replace(":", "_")
        event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:enchant",
        "activation_item": {
            "item": "minecraft:book"
        },
        "craftType": "magic",
        "soulCost": soulCost, //int
        "duration": 10,
        "enchantment": enchant, //id
        "xpLevelCost": xpCostPerLevel, //int
        "ingredients": inputs, //list of items/tags
        "result": {
            "item": "minecraft:enchanted_book"
        }
        }).id(`kubejs:goety/dark_ritual/mysticism/enchant/${identifier}`)
    }
    //ARS ENCHANTS
    enchant(
        "ars_nouveau:reactive",
        50,
        3,
        [
            {"item": "ars_nouveau:spell_parchment"},
            {"item": "malum:rune_of_reactive_shielding"},
            {"item": "ars_nouveau:source_gem_block"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ars_elemental:mirror_shield",
        100,
        10,
        [
            {"item": "ars_elemental:spell_mirror"},
            {"item": "ars_nouveau:abjuration_essence"},
            {"item": "ars_nouveau:source_gem_block"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ars_nouveau:mana_boost",
        50,
        5,
        [
            {"item": "cosmopolitan:source_berry_ice_cream_cone"},
            {"item": "immersiveengineering:capacitor_hv"},
            {"item": "ars_nouveau:source_gem_block"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ars_nouveau:mana_regen",
        50,
        5,
        [
            {"item": "arsdelight:source_berry_cupcake"},
            {"item": "immersiveengineering:fluid_pump"},
            {"item": "ars_nouveau:source_gem_block"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    //ENSORCELLATION ENCHANTS
    enchant(
        "ensorcellation:soulbound",
        100,
        10,
        [
            {"item": "eidolon:lesser_soul_gem"},
            {"item": "minecraft:echo_shard"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:xp_boost",
        25,
        5,
        [
            {"item": "sob:exp_candy"},
            {"item": "experienceobelisk:astute_assembly"},
            {"item": "twilightforest:steeleaf_ingot"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:reach",
        25,
        3,
        [
            {"item": "sob:builder_smoothie"},
            {"item": "create:deployer"},
            {"item": "eidolon:ender_calx"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:vitality",
        50,
        10,
        [
            {"item": "brewinandchewin:saccharine_rum"},
            {"item": "tconstruct:jeweled_apple"},
            {"tag": "extra_sins:living_flesh"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:damage_illager",
        10,
        3,
        [
            {"item": "goety:pale_steel_ingot"},
            {"item": "gtceu:palladium_ingot"},
            {"item": "scguns:diamond_steel_ingot"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:frost_aspect",
        10,
        5,
        [
            {"item": "hexalia:spirit_powder"},
            {"item": "minecraft:powder_snow_bucket"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:leech",
        250,
        10,
        [
            {"item": "goety:leeching_focus"},
            {"item": "botania:blood_pendant"},
            {"item": "alexsmobs:soul_heart"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:vorpal",
        250,
        10,
        [
            {"item": "botania:elementium_sword"},
            {"tag": "forge:heads"},
            {"item": "eidolon:cleaving_axe"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:excavating",
        25,
        5,
        [
            {"item": "create:mechanical_drill"},
            {"item": "embers:excavation_buckets"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:hunter",
        25,
        3,
        [
            {"item": "ars_nouveau:wilden_horn"},
            {"tag": "forge:tools/knives"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:quick_draw",
        100,
        3,
        [
            {"item": "mna:transmuted_silver"},
            {"item": "embers:clockwork_attenuator"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:true_shot",
        50,
        5,
        [
            {"item": "minecraft:target"},
            {"item": "botania:lens_damage"},
            {"item": "ars_nouveau:glyph_pierce"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:volley",
        100,
        5,
        [
            {"item": "create:schematicannon"},
            {"item": "caverns_and_chasms:scatterer"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "ensorcellation:angler",
        25,
        5,
        [
            {"item": "cosmopolitan:green_beer"},
            {"item": "aquaculture:neptunium_ingot"},
            {"tag": "forge:corals/alive"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:bulwark",
        200,
        5,
        [
            {"item": "gtceu:lead_block"},
            {"item": "species:kinetic_core"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:phalanx",
        10,
        3,
        [
            {"item": "alexsmobs:straddlite"},
            {"item": "scguns:anthralite_ingot"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:curse_fool",
        10,
        3,
        [
            {"item": "minecraft:glass_bottle"},
            {"item": "minecraft:glass_bottle"},
            {"item": "minecraft:paper"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "ensorcellation:curse_mercy",
        10,
        3,
        [
            {"item": "minecraft:feather"},
            {"item": "minecraft:poppy"},
            {"item": "malum:sacred_spirit"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    //GOETY ENCHANTS
    enchant(
        "goetydelight:soul_mending",
        200,
        10,
        [
            {"item": "goety:dark_metal_block"},
            {"item": "botania:manasteel_block"},
            {"item": "malum:mending_diffuser"},
            {"item": "experienceobelisk:mending_neurogel"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "goetydelight:soul_affix",
        100,
        10,
        [
            {"item": "goety:cursed_metal_block"},
            {"item": "occultism:spirit_attuned_gem"},
            {"item": "malum:block_of_soulstone"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "goetydelight:soul_drain",
        100,
        10,
        [
            {"item": "bloodmagic:dungeon_metal"},
            {"item": "occultism:iesnium_ingot"},
            {"item": "malum:block_of_null_slate"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "goety:wanting",
        100,
        5,
        [
            {"item": "botania:rune_greed"},
            {"item": "goety:soul_emerald"},
            {"item": "embers:dawnstone_ingot"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    //MALUM ENCHANTS
    enchant(
        "malum:animated",
        25,
        3,
        [
            {"item": "goety:animation_core"},
            {"item": "mna:animus_dust"},
            {"item": "malum:aerial_spirit"},
            {"item": "malum:chunk_of_brilliance"}
        ]
    )
    enchant(
        "malum:haunted",
        25,
        3,
        [
            {"item": "goety:mystic_core"},
            {"item": "mna:arcane_ash"},
            {"item": "malum:eldritch_spirit"},
            {"item": "malum:chunk_of_brilliance"}
        ]
    )
    enchant(
        "malum:spirit_plunder",
        50,
        5,
        [
            {"item": "malum:arcane_spirit"},
            {"item": "malum:wicked_spirit"},
            {"item": "malum:eldritch_spirit"},
            {"item": "malum:soul_stained_steel_ingot"},
            {"item": "malum:chunk_of_brilliance"}
        ]
    )
    enchant(
        "malum:rebound",
        50,
        3,
        [
            {"item": 'alexsmobs:elastic_tendon'},
            {"item": "alexsmobs:elastic_tendon"},
            {"item": "alexsmobs:elastic_tendon"},
            {"item": "malum:chunk_of_brilliance"}
        ]
    )
    enchant(
        "malum:ascension",
        50,
        3,
        [
            {"item": "goety:wind_core"},
            {"tag": "aether:aerclouds"},
            {"item": "minecraft:rabbit_foot"},
            {"item": "malum:chunk_of_brilliance"}
        ]
    )
    enchant(
        "malum:replenishing",
        100,
        3,
        [
            {"item": "minecraft:glistering_melon_slice"},
            {"item": "scguns:netherite_bayonet"},
            {"item": "malum:chunk_of_brilliance"}
        ]
    )
    //ALLUREMENT ENCHANTS
    enchant(
        "allurement:alleviating",
        200,
        10,
        [
            {"item": "malum:block_of_living_flesh"},
            {"item": "botania:incense_stick"},
            {"item": "twilightforest:carminite_block"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "allurement:launch",
        50,
        3,
        [
            {"item": "minecraft:firework_rocket"},
            {"item": "create:weighted_ejector"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "allurement:obedience",
        10,
        3,
        [
            {"item": "minecraft:lead"},
            {"item": "farmersdelight:horse_feed"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "allurement:reeling",
        50,
        3,
        [
            {"tag": "forge:rod/tools/fishing"},
            {"item": "minecraft:chain"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "allurement:reforming",
        200,
        10,
        [
            {"item": "biomancy:healing_additive"},
            {"item": "minecraft:grindstone"},
            {"item": "ars_nouveau:imbuement_chamber"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "allurement:shockwave",
        25,
        3,
        [
            {"item": "create:mechanical_press"},
            {"item": "scguns:stun_grenade"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "allurement:spread_of_aliments",
        50,
        5,
        [
            {"item": "malum:mass_of_blighted_gunk"},
            {"item": "dungeonsdelight:poisonous_poutine"},
            {"item": "dungeonsdelight:shiokara"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "allurement:vengeance",
        100,
        10,
        [
            {"item": "bloodmagic:vengefulcrystal"},
            {"item": "evilcraft:dark_spike"},
            {"item": "hexalia:brew_of_spikeskin"},
            {"item": "minecraft:lapis_block"}
        ]
    )
    enchant(
        "allurement:ascension_curse",
        10,
        3,
        [
            {"item": "gtceu:gravitite_gem"},
            {"item": "malum:wicked_spirit"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchant(
        "allurement:fleeting_curse",
        10,
        3,
        [
            {"item": "dungeonsdelight:rancid_reduction"},
            {"item": "farmersdelight:rotten_tomato"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    //SCORCHED GUNS ENCHANTS
    enchant(
        "scguns:quick_hands",
        25,
        5,
        [
            {"item": "scguns:speed_mag"},
            {"item": "malum:accelerating_inlay"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:trigger_finger",
        25,
        5,
        [
            {"item": "scguns:bump_stock"},
            {"item": "malum:warping_engine"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:lightweight",
        25,
        5,
        [
            {"item": "scguns:light_grip"},
            {"item": "gtceu:gravitite_block"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:collateral",
        100,
        10,
        [
            {"item": "collectorsreap:urchin_dart"},
            {"item": "scguns:flechette"},
            {"item": "embers:diffraction_barrel"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:reclaimed",
        200,
        5,
        [
            {"item": "apotheosis:common_material"},
            {"item": "minecraft:netherite_scrap"},
            {"item": "irons_spellbooks:mithril_scrap"},
            {"item": "embers:intelligent_apparatus"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:accelerator",
        50,
        5,
        [
            {"item": "irons_spellbooks:energized_core"},
            {"item": "farmersrespite:strong_coffee"},
            {"item": "embers:catalytic_plug"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:puncturing",
        50,
        5,
        [
            {"item": "biomancy:bone_fragments"},
            {"item": "scguns:gibbs_round"},
            {"item": "embers:resonating_bell"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:heavy_shot",
        50,
        5,
        [
            {"tag": "forge:storage_blocks/lead"},
            {"item": "malum:intricate_assembly"},
            {"item": "embers:flame_barrier"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:shell_catcher",
        100,
        5,
        [
            {"item": "alexsmobs:rocky_shell"},
            {"item": "minecraft:nautilus_shell"},
            {"item": "embers:intelligent_apparatus"},
            {"item": "scguns:peal"}
        ]
    )
    enchant(
        "scguns:banzai",
        100,
        5,
        [
            {"item": "biomancy:frenzy_serum"},
            {"item": "goety:berserk_fungus"},
            {"item": "embers:cinder_jet"},
            {"item": "scguns:peal"}
        ]
    )
    //ALEX'S MOBS ENCHANTS
    //DUNGEON'S DELIGHT ENCHANTS
    //BIOMANCY ENCHANTS
    //MANA AND ARTIFICE ENCHANTS
    //APOTHEOSIS ENCHANTS
    function enchantApotheosis(enchant, soulCost, xpCostPerLevel, inputs){
        var identifier = enchant.replace(":", "_")
        event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:enchant",
        "activation_item": {
            "item": "minecraft:book"
        },
        "craftType": "brilliant",
        "soulCost": soulCost, //int
        "duration": 30,
        "enchantment": enchant, //id
        "xpLevelCost": xpCostPerLevel, //int
        "ingredients": inputs, //list of items/tags
        "result": {
            "item": "minecraft:enchanted_book"
        }
        }).id(`kubejs:goety/dark_ritual/apothic_mysticism/enchant/${identifier}`)
    }
    enchantApotheosis(
        "apotheosis:berserkers_fury",
        100,
        3,
        [
            {"item": "biomancy:frenzy_serum"},
            {"item": "hexerei:blood_bottle"},
            {"item": "bloodmagic:vengefulcrystal"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:chainsaw",
        50,
        10,
        [
            {"item": "gtceu:iron_buzzsaw_blade"},
            {"item": "botania:terrasteel_nugget"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:chromatic",
        10,
        3,
        [
            {"item": "twilightforest:aurora_block"},
            {"item": "mna:chimerite_gem"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:crescendo",
        100,
        10,
        [
            {"item": "scguns:rapid_firing_unit"},
            {"item": "botania:prism"},
            {"item": "embers:winding_gears"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:earths_boon",
        200,
        10,
        [
            {"item": "embers:wildfire_core"},
            {"item": "botania:rune_earth"},
            {"item": "naturesaura:token_euphoria"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:endless_quiver",
        100,
        5,
        [
            {"item": "supplementaries:quiver"},
            {"item": "enderio:grains_of_infinity"},
            {"item": "reliquary:void_tear"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:exploitation",
        10,
        3,
        [
            {"item": "biomancy:mob_claw"},
            {"item": "evilcraft:dark_spike"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:growth_serum",
        50,
        3,
        [
            {"item": "biomancy:rejuvenation_serum"},
            {"item": "reliquary:fertile_essence"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:icy_thorns",
        25,
        5,
        [
            {"item": "windswept:icicles"},
            {"item": "caverns_and_chasms:necromium_ingot"},
            {"item": "ars_nouveau:frostaya_pod"},
            {"item": "ars_nouveau:wilden_spike"},
            {"item": "minecraft:lapis_lazuli"}
        ]
    )
    enchantApotheosis(
        "apotheosis:knowledge",
        25,
        10,
        [
            {"item": "embers:mnemonic_inscriber"},
            {"item": "malum:block_of_mnemonic_fragment"},
            {"item": "experienceobelisk:memory_tablet"},
            {"item": "mna:crystal_of_memories"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:life_mending",
        25,
        5,
        [
            {"item": "goety:hunger_core"},
            {"item": "vampirism:vampire_fang"},
            {"item": "bloodmagic:sacrificial_dagger"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:miners_fervor",
        25,
        5,
        [
            {"item": "undergarden:froststeel_block"},
            {"item": "aether:zanite_block"},
            {"item": "scguns:vehement_coal_block"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:natures_blessing",
        100,
        5,
        [
            {"item": "naturesaura:ancient_sapling"},
            {"item": "naturesaura:infused_iron_block"},
            {"item": "botania:agricarnation"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:obliteration",
        10,
        3,
        [
            {"item": "malum:void_salts"},
            {"item": "malum:malignant_lead"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:splitting",
        10,
        3,
        [
            {"item": "malum:null_slate"},
            {"item": "malum:malignant_lead"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:rebounding",
        25,
        3,
        [
            {"item": "minecraft:piston"},
            {"item": "minecraft:slime_block"},
            {"item": "ars_nouveau:glyph_bounce"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:reflective",
        100,
        3,
        [
            {"item": "goety:haunted_mirror"},
            {"item": "magichem:chiaroscuro"},
            {"item": "ars_nouveau:abjuration_essence"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:scavenger",
        200,
        5,
        [
            {"item": "dungeonsdelight:stained_cleaver"},
            {"item": "collectorsreap:straw_brush"},
            {"item": "alexsmobsdelight:crocodile_knife"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:shield_bash",
        50,
        3,
        [
            {"tag" : "forge:storage_blocks/steel"},
            {"item": "create:mechanical_press"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:spearfishing",
        50,
        3,
        [
            {"item": "mowziesmobs:spear"},
            {"item": "aquaculture:neptunium_ingot"},
            {"item": "tide:bait"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:stable_footing",
        10,
        5,
        [
            {"item": "gtceu:gravitite_gem"},
            {"item": "aether:aerogel"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:tempting",
        10,
        5,
        [
            {"item": "botania:pollidisiac"},
            {"item": "cosmopolitan:generic_romance"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    enchantApotheosis(
        "apotheosis:capturing",
        100,
        5,
        [
            {"item": "ars_nouveau:mob_jar"},
            {"item": "apotheosis:ender_lead"},
            {"tag": "minecraft:eggs"},
            {"item": "apotheosis:gem_dust"}
        ]
    )
    
    
})