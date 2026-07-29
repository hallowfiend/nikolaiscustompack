ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', [
    'artifacts:mimic',
    'aquamirae:captain_cornelia',
    'irons_spellbooks:citadel_keeper',
    'irons_spellbooks:dead_king',
    "alexsmobs:void_worm",
		"alexsmobs:void_worm_part",
    'alexsmobs:warped_mosco',
    "minecraft:evoker",
    'minecraft:ender_dragon',
    /.*possessed.*/,
    'twilightforest:alpha_yeti',
    'twilightforest:hydra',
    'twilightforest:lich',
    'twilightforest:naga',
    'twilightforest:snow_queen',
    'twilightforest:ur_ghast',
    'ars_nouveau:animated_block',
    "evilcraft:vengeance_spirit",
    'twilightforest:hedge_spider',
    'twilightforest:swarm_spider',
    'create:package',
    "cataclysm:ender_guardian",
    "cataclysm:ender_golem",
    "cataclysm:nether_monstrosity",
    "cataclysm:ignis",
    "cataclysm:the_harbringer",
    "cataclysm:the_leviathan",
    "cataclysm:ancient_remnant",
    "cataclysm:maledictus",
    "cataclysm:ignited_revenant",
    "cataclysm:the_prowler",
    "cataclysm:the_baby_leviathan",
    "cataclysm:coralssus",
    "cataclysm:amethyst_crab",
    "cataclysm:modern_remnant",
    /goety:.*servant/
  ])
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  event.add('ars_nouveau:drygmy_blacklist', '#kubejs:mob_blacklist')
  event.add('ars_nouveau:jar_blacklist', '#kubejs:mob_blacklist')
  event.add('ars_nouveau:jar_release_blacklist', '#kubejs:mob_blacklist')
  event.add('apothic_spawners:blacklisted_from_spawners', '#kubejs:mob_blacklist')
  event.add('enderio:spawner_blacklist', '#kubejs:mob_blacklist')
  event.add('ars_additions:source_spawner_denylist', '#kubejs:mob_blacklist')

  event.add("apothic_spawners:blacklisted_from_spawners", "minecraft:wither");
  event.add("enderio:spawner_blacklist", "minecraft:wither");
  event.add("ars_additions:source_spawner_denylist", "minecraft:wither");

  event.add('ars_nouveau:magic_find', [
    'artifacts:mimic',
    'irons_spellbooks:archevoker',
    'irons_spellbooks:cryomancer',
    'irons_spellbooks:dead_king',
    'irons_spellbooks:necromancer',
    'irons_spellbooks:priest',
    'irons_spellbooks:pyromancer',
    "irons_spellbooks:catacombs_zombie",
	  "irons_spellbooks:apothecarist",
	  "irons_spellbooks:citadel_keeper",
	  "irons_spellbooks:cultist",
    'minecraft:evoker',
    'minecraft:illusioner',
    'minecraft:witch',
    'minecraft:allay',
    'minecraft:vex',
    'twilightforest:death_tome',
    'twilightforest:lich',
    'twilightforest:skeleton_druid',
    'twilightforest:wraith',
    "goety:border_wraith",
    "goety:wraith",
    "goety:reaper",
    'goety:muck_wraith',
    /goety:.*necromancer/,
    'goety:storm_caster',
    'goety:cryologer',
    /goety:haunted.*/,
    'goety:envioker',
    'goety:sorcerer',
    'goety:warlock',
    'goety:heretic',
    'goety:crone',
    'goety:haunt',
    'goety:wight',
    'goety:vizier',
    'goety:damned',
    'goety:wildfire',
    'goety:inferno',
    "graveyard:reaper",
    "graveyard:revenant",
    "graveyard:wraith"
  ]);

})