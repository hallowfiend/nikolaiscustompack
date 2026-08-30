ServerEvents.recipes(event => {
    event.remove({output: 'splendid_slimes:slime_heart', id: /.*from_fusion/})
    function brewSlimeHeart(crystalType, item1, item2, item3, slimeType){
        event.custom({
  "type": "biomancy:bio_brewing",
  "ingredients": [
    {
    "item": `tconstruct:${crystalType}_slime_crystal_block`
    },
    {
    "item": item1
    },
    {
    "item": item2
    },
    {
    "item": item3
    }
  ],
  "nutrientsCost": 40,
  "processingTime": 120,
  "reactant": {
    "item": "biomancy:gelling_agent"
  },
  "result": {
    item: "splendid_slimes:slime_heart",
    nbt: {
          slime: {
            id: slimeType,
          }
        }
  }
})
    }
    brewSlimeHeart(
        'earth',
        'minecraft:pink_wool',
        'gtceu:rock_salt_dust',
        'collectorsreap:strawberry_gummy',
        'splendid_slimes:slimy'
    )
    brewSlimeHeart(
        'ichor',
        'goety:spider_nest',
        'vampiresdelight:human_eye',
        'dungeonsdelight:spider_salmagundi',
        'splendid_slimes:all_seeing'
    )
    brewSlimeHeart(
        'earth',
        'actuallyadditions:restonia_crystal_block',
        'create:rose_quartz',
        'farmersrespite:black_tea',
        'splendid_slimes:bitwise'
    )
    brewSlimeHeart(
        'ichor',
        'botania:blaze_mesh',
        'twilightforest:torchberries',
        'arsdelight:bombegranate_jam',
        'splendid_slimes:blazing'
    )
    brewSlimeHeart(
        'earth',
        'malum:block_of_grim_talc',
        'reliquary:rib_bone',
        'brewinandchewin:flaxen_cheese_wedge',
        'splendid_slimes:bony'
    )
    brewSlimeHeart(
        'earth',
        'caverns_and_chasms:tmt',
        'savage_and_ravage:creeper_spores',
        'cosmopolitan:paw_cookie',
        'splendid_slimes:boomcat'
    )
    brewSlimeHeart(
        'ender',
        'minecraft:purpur_block',
        'eidolon:ender_calx',
        'ends_delight:bubble_tea',
        'splendid_slimes:ender'
    )
    brewSlimeHeart(
        'ichor',
        'malum:block_of_cthonic_gold',
        'eidolon:magic_ink',
        'minecraft:golden_apple',
        'splendid_slimes:gold'
    )
    brewSlimeHeart(
        'ichor',
        'minecraft:glowstone',
        'netherexp:lightspores',
        'miners_delight:glow_ink_pasta',
        'splendid_slimes:luminous'
    )
    brewSlimeHeart(
        'ender',
        'neapolitan:mint_ice_cream_block',
        'apotheosis:infused_dragon_breath',
        'alexsmobsdelight:rainbow_custard',
        'splendid_slimes:minty'
    )
    brewSlimeHeart(
        'earth',
        'create:experience_block',
        'experienceobelisk:bibliophage',
        'sob:exp_candy',
        'splendid_slimes:orby'
    )
    brewSlimeHeart(
        'sky',
        'malum:block_of_astral_weave',
        'biomancy:insomnia_cure',
        'dungeonsdelight:ghast_roll',
        'splendid_slimes:phantom'
    )
    brewSlimeHeart(
        'sky',
        'minecraft:sea_lantern',
        'create:rose_quartz',
        'delightful:rock_candy',
        'splendid_slimes:prisma'
    )
    brewSlimeHeart(
        'sky',
        'minecraft:sea_lantern',
        'create:andesite_alloy',
        'farmersdelight:melon_juice',
        'splendid_slimes:puddle'
    )
    brewSlimeHeart(
        'earth',
        'minecraft:mud',
        'malum:rotting_essence',
        'dungeonsdelight:rubaboo',
        'splendid_slimes:rotting'
    )
    brewSlimeHeart(
        'ender',
        'minecraft:obsidian',
        'minecraft:chorus_fruit',
        'ends_delight:shulker_soup',
        'splendid_slimes:shulking'
    )
    brewSlimeHeart(
        'sky',
        'supplementaries:sugar_cube',
        'minecraft:honey_bottle',
        'minecraft:cake',
        'splendid_slimes:sweet'
    )
    brewSlimeHeart(
        'sky',
        'minecraft:quartz_block',
        'goety:venomous_fang',
        'dungeonsdelight:spider_donut',
        'splendid_slimes:webby'
    )
    brewSlimeHeart(
        'ichor',
        'malum:block_of_living_flesh',
        'kubejs:shifting_tincture',
        'mynethersdelight:bread_loaf',
        'splendid_slimes:weeping'
    )
})