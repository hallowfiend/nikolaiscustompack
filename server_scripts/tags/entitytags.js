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

  event.add("scguns:red_blood", [
    /vampirism.*/,
    'goety:envioker',
    'goety:sorcerer',
    'goety:warlock',
    'goety:heretic',
    'goety:crone',
    'goety:vizier',
    'goety:storm_caster',
    'goety:cryologer',
    'irons_spellbooks:archevoker',
    'irons_spellbooks:cryomancer',
    'irons_spellbooks:priest',
    'irons_spellbooks:pyromancer',
    "irons_spellbooks:apothecarist",
    "irons_spellbooks:cultist",
    'twilightforest:naga',
    'twilightforest:hydra',
    'twilightforest:ur_ghast',
  ]);

  event.add("scguns:yellow_blood", [
    'goety:wildfire',
    'goety:inferno'
  ])

  event.add("scguns:black_blood", [
    'irons_spellbooks:dead_king',
    'irons_spellbooks:necromancer',
    'goety:wight',
    'irons_spellbooks:citadel_keeper',
  ])

  event.add("scguns:white_blood", [
    /goety.*bound/,
    'irons_spellbooks:necromancer',
    "irons_spellbooks:catacombs_zombie",
    'twilightforest:lich',
    'twilightforest:skeleton_druid',
  ])

  event.add("scguns:purple_blood", [
    "cataclysm:ender_guardian",
    "cataclysm:ender_golem",
    "alexsmobs:void_worm",
		"alexsmobs:void_worm_part",
    "alexsmobs:spectre",
    "alexsmobs:cosmaw",
    "alexsmobs:cosmic_cod",
    "alexsmobs:endergrade",
    "alexsmobs:farseer",
    "alexsmobs:mimicube",
    "alexsmobs:enderiophage"
  ])

  event.add('scguns:blue_blood', [
    'twilightforest:alpha_yeti',
    'twilightforest:snow_queen',
    'alexsmobs:warped_mosco',
    'twilightforest:hedge_spider',
    'twilightforest:swarm_spider',
    /.*crab.*/,
    /.*shrimp.*/
  ])

  event.add("scguns:undead", [
    'irons_spellbooks:necromancer',
    "irons_spellbooks:catacombs_zombie",
    'twilightforest:lich',
    'twilightforest:skeleton_druid',
    'irons_spellbooks:dead_king',
    'irons_spellbooks:necromancer',
    'goety:wight',
    'vampirism:vampire',
    'vampirism:vampire_baron',
    'vampirism:advanced_vampire',
    /vampirism:converted.*/,
    'goety:damned',
    'goety:haunt',
    "graveyard:reaper",
    "graveyard:revenant",
    "graveyard:wraith",
    'twilightforest:wraith',
    "goety:border_wraith",
    "goety:wraith",
    "goety:reaper",
    'goety:muck_wraith',
    /goety:.*necromancer/,
    "cataclysm:ancient_remnant",
    'cataclysm:maledictus',
    'eidolon:wraith',
    "alexsmobs:bone_serpent_part",
    "alexsmobs:bone_serpent",
    "goety:bone_lord",
    "goety:skeleton_pillager",
    "goety:skull_lord",
    "graveyard:skeleton_creeper",
    "cataclysm:koboleton",
    "cataclysm:kobolediator",
    "cataclysm:wadjet",
    "goety:zombie_vindicator",
  ])

  event.add("scguns:illager", [
    'goety:envioker',
    'goety:sorcerer',
    'goety:warlock',
    'goety:heretic',
    'goety:crone',
    'goety:vizier',
    'goety:storm_caster',
    'goety:cryologer',
    'irons_spellbooks:archevoker',
    'goety:piker',
    'goety:conquillager',
    'goety:preacher',
    'goety:inquillager',
    'goety:minister',
    "goety:reprobate",
    'goety:heresiarch',
    "goety:ripper",
    "goety:trampler",
    "goety:crusher",
    'goety:maverick',
    'goety:irk'
  ])

  event.add('scguns:fire', [
    'goety:wildfire',
    'goety:inferno',
    'cataclysm:ignis',
    "cataclysm:ignited_revenant",
  ])

  event.add('scguns:bot', [
    'embers:ancient_golem',
    'cataclysm:ender_golem',
    'cataclysm:nether_monstrosity',
    "cataclysm:the_harbringer",
    "cataclysm:the_prowler",
    "goety:haunted_armor",
    "irons_spellbooks:citadel_keeper"
  ])

  event.add('scguns:water', [
    "cataclysm:coralssus",
    'cataclysm:the_leviathan',
    /aquamirae.*/,
    "alexsmobs:blobfish",
    "alexsmobs:skelewag",
    "alexsmobs:catfish",
    "alexsmobs:comb_jelly",
    "alexsmobs:devils_hole_pupfish",
    "alexsmobs:flying_fish",
    "alexsmobs:frilled_shark",
    "alexsmobs:hammerhead_shark",
    "alexsmobs:mudskipper",
    "alexsmobs:seal",
    "cataclysm:lionfish",
    "cataclysm:the_baby_leviathan",
    "alexsmobs:cachalot_whale",
    "alexsmobs:orca",
    "alexsmobs:mantis_shrimp",
    "alexsmobs:giant_squid",
    "alexsmobs:mimic_octopus",
    "cataclysm:deepling",
    "cataclysm:deepling_angler",
    "cataclysm:deepling_brute",
    "cataclysm:deepling_priest",
    "cataclysm:deepling_warlock"
  ])

  event.add('scguns:heavy', [
    "alexsmobs:mantis_shrimp",
    "cataclysm:ignited_revenant",
    "cataclysm:ender_guardian",
    "alexsmobs:bone_serpent_part",
    "alexsmobs:bone_serpent",
    "cataclysm:kobolediator",
    "cataclysm:wadjet",
  ])

  event.add('scguns:very_heavy', [
    "cataclysm:coralssus",
    'cataclysm:the_leviathan',
    "alexsmobs:cachalot_whale",
    "alexsmobs:giant_squid",
    'cataclysm:ender_golem',
    'cataclysm:nether_monstrosity',
    "cataclysm:the_harbringer",
    'cataclysm:ancient_remnant',
    'cataclysm:the_leviathan',
    'cataclysm:ignis',
    'cataclysm:maledictus',
    'twilightforest:naga',
    'twilightforest:hydra',
    'twilightforest:ur_ghast',
    "alexsmobs:void_worm",
		"alexsmobs:void_worm_part",
    'alexsmobs:warped_mosco',
  ])

})