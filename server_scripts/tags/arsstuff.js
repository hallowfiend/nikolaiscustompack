ServerEvents.tags('item', event => {
  //Amethyst Golem
    event.add("ars_nouveau:golem/shard", [
        "hexcasting:amethyst_dust",
        "hexcasting:charged_amethyst",
        'minecraft:amethyst_shard',
        "ae2:certus_quartz_crystal",
        "ae2:certus_quartz_dust",
        /tconstruct:.*_slime_crystal/,
        'galosphere:allurite_shard',
        'galosphere:lumiere_shard',
        'galosphere:pink_salt_shard',
        'quark:red_corundum_cluster',
        'quark:orange_corundum_cluster',
        'quark:yellow_corundum_cluster',
        'quark:green_corundum_cluster',
        'quark:blue_corundum_cluster',
        'quark:indigo_corundum_cluster',
        'quark:violet_corundum_cluster',
        'quark:white_corundum_cluster',
        'quark:black_corundum_cluster'
    ])
})

ServerEvents.tags('block', event =>{

  //Amethyst Golem

  event.add("ars_nouveau:golem/budding", [
    /ae2:.*_budding_quartz/,
    /tconstruct:budding_.*_slime_crystal/
  ])

  event.add("ars_nouveau:golem/cluster", [
    'minecraft:amethyst_cluster',
    "ae2:quartz_cluster",
    /tconstruct:.*_slime_crystal_cluster/,
    'galosphere:allurite_cluster',
    'galosphere:glinted_allurite_cluster',
    'galosphere:glinted_amethyst_cluster',
    'galosphere:glinted_lumiere_cluster',
    'galosphere:lumiere_cluster',
    'galosphere:pink_salt_cluster',
    'quark:red_corundum_cluster',
    'quark:orange_corundum_cluster',
    'quark:yellow_corundum_cluster',
    'quark:green_corundum_cluster',
    'quark:blue_corundum_cluster',
    'quark:indigo_corundum_cluster',
    'quark:violet_corundum_cluster',
    'quark:white_corundum_cluster',
    'quark:black_corundum_cluster'
  ])

  //Whirlisprig

  event.add('ars_nouveau:whirlisprig/denied_drop', [
    'minecraft:netherrack',
    'aether:aether_dirt',
  ]);

  event.add('ars_nouveau:whirlisprig/greatly_likes', [
        'twilightforest:liveroot_block',
        'twilightforest:firefly',
        'twilightforest:cicada',
        'naturesaura:aura_bloom',
        'naturesaura:aura_cactus',
        'naturesaura:warped_aura_mushroom',
        'naturesaura:crimson_aura_mushroom',
        'naturesaura:aura_mushroom'
    ]);

    event.add('ars_nouveau:whirlisprig/kinda_likes', [
      'minecraft:cactus',
      'minecraft:melon',
      'minecraft:pumpkin'
    ]);

})