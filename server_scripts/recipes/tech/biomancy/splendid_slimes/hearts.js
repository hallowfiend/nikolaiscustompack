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
        'minecraft:pink_dye',
        'gtceu:rock_salt_dust',
        'collectorsreap:strawberry_gummy',
        'slimy'
    )
    brewSlimeHeart(
        'ichor',
        'minecraft:fermented_spider_eye',
        'vampiresdelight:human_eye',
        'goetydelight:spider_egg_bubble_tea',
        'all-seeing'
    )
    brewSlimeHeart(
        'earth',
        'minecraft:redstone_block',
        'create:rose_quartz',
        'farmersrespite:black_tea',
        'bitwise'
    )
    brewSlimeHeart(
        'ichor',
        'botania:blaze_mesh',
        'twilightforest:torchberries',
        'arsdelight:bombegranate_jam',
        'blazing'
    )
    brewSlimeHeart(
        'earth',
        'malum:block_of_grim_talc',
        'reliquary:rib_bone',
        'brewinandchewin:flaxen_cheese_wedge',
        'bony'
    )
    brewSlimeHeart(
        'earth',
        'caverns_and_chasms:tmt',
        'savage_and_ravage:creeper_spores',
        'cosmopolitan:paw_cookie',
        'boomcat'
    )
    brewSlimeHeart(
        'ender',
        'minecraft:purpur_block',
        'eidolon:ender_calx',
        'ends_delight:bubble_tea',
        'ender'
    )
    brewSlimeHeart(
        'ichor',
        'malum:block_of_cthonic_gold',
        'eidolon:magic_ink',
        'minecraft:golden_apple',
        'gold'
    )
    brewSlimeHeart(
        'ichor',
        'minecraft:glowstone',
        'netherexp:lightspores',
        'miners_delight:glow_ink_pasta',
        'luminous'
    )
    brewSlimeHeart(
        'ender',
        'neapolitan:mint_ice_cream_block',
        'apotheosis:infused_dragon_breath',
        'alexsmobsdelight:rainbow_custard',
        'minty'
    )
    brewSlimeHeart(
        'earth',
        'create:experience_block',
        'experienceobelisk:bibliophage',
        'sob:exp_candy',
        'orby'
    )
    brewSlimeHeart(
        'sky',
        'malum:block_of_astral_weave',
        'biomancy:insomnia_cure',
        'dungeonsdelight:ghast_roll',
        'phantom'
    )
    brewSlimeHeart(
        'sky',
        'minecraft:sea_lantern',
        'create:rose_quartz',
        'delightful:rock_candy',
        'prisma'
    )
    brewSlimeHeart(
        'sky',
        'minecraft:sea_lantern',
        'create:andesite_alloy',
        'farmersdelight:melon_juice',
        'puddle'
    )
    brewSlimeHeart(
        'earth',
        'minecraft:dirt',
        'malum:rotting_essence',
        'dungeonsdelight:rubaboo',
        'rotting'
    )
    brewSlimeHeart(
        'ender',
        'minecraft:obsidian',
        'minecraft:chorus_fruit',
        'ends_delight:shulker_soup',
        'shulking'
    )
    brewSlimeHeart(
        'sky',
        'supplementaries:sugar_cube',
        'minecraft:honey_bottle',
        'minecraft:cake',
        'sweet'
    )
    brewSlimeHeart(
        'sky',
        'minecraft:white_wool',
        'goety:venomous_fang',
        'dungeonsdelight:spider_donut',
        'webby'
    )
    brewSlimeHeart(
        'ichor',
        'malum:block_of_living_flesh',
        'kubejs:shifting_tincture',
        'mynethersdelight:bread_loaf',
        'weeping'
    )
})