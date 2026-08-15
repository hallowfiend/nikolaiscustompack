LootJS.modifiers((event) => {

	//alex's mobs
    event.addEntityLootModifier('alexsmobs:hammerhead_shark')
		.pool(pool => {
			pool.rolls(1);
			pool.addLoot(
				LootEntry.of('alexsmobs:shark_tooth')
					.limitCount([1, 2])
					.applyLootingBonus([0, 1])
					.when(c => c.randomChanceWithLooting(0.9, 0.1))
			);
		});

	event.addEntityLootModifier('alexsmobs:frilled_shark')
		.pool(pool => {
			pool.rolls(1);
			pool
				.addLoot(
					LootEntry.of('alexsmobs:shark_tooth')
						.limitCount([1, 2])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				);
		});
	
	//zirconia from mimic
	event.addEntityLootModifier("artifacts:mimic").randomChance(0.5).addLoot("caverns_and_chasms:zirconia");

	//aether
	event.addEntityLootModifier('aether:blue_swet')
    	.randomChance(0.1)
		.addLoot('aether:blue_gummy_swet')
  	event.addEntityLootModifier('aether:golden_swet')
    	.randomChance(0.1)
		.addLoot('aether:golden_gummy_swet')


	//GENERAL BOSS LOOT - apotheotic materials, anyone?
	//uncommon
	const uncommonMaterialBosses = [
		'twilightforest:naga'
	]
	uncommonMaterialBosses.forEach(boss => {
		event.addEntityLootModifier(boss)
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(3);
			pool
				.addLoot(
					LootEntry.of('apotheosis:uncommon_material')
						.limitCount([1, 3])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			});
	})
	//rare
	const rareMaterialBosses = [
		'irons_spellbooks:archevoker',
		'vampirism:vampire_baron',
		'twilightforest:lich',
		'twilightforest:minoshroom'
	]
	rareMaterialBosses.forEach(boss => {
		event.addEntityLootModifier(boss)
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(3);
			pool
				.addLoot(
					LootEntry.of('apotheosis:rare_material')
						.limitCount([1, 3])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			});
	})
	//epic
	const epicMaterialBosses = [
		'minecraft:wither',
		'minecraft:warden',
		'irons_spellbooks:dead_king',
		'irons_spellbooks:citadel_keeper',
		'goety:vizier',
		'goety:crone',
		'goety:wight',
		'ars_nouveau:wilden_boss',
		'twilightforest:alpha_yeti',
		'twilightforest:snow_queen',
		'twilightforest:hydra',
		'twilightforest:ur_ghast'
	]
	epicMaterialBosses.forEach(boss => {
		event.addEntityLootModifier(boss)
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(3);
			pool
				.addLoot(
					LootEntry.of('apotheosis:epic_material')
						.limitCount([1, 3])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			});
	})
	//mythic
	const mythicMaterialBosses = [
		'minecraft:ender_dragon',
		'cataclysm:nether_monstrosity'
	]
	mythicMaterialBosses.forEach(boss => {
		event.addEntityLootModifier(boss)
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(3);
			pool
				.addLoot(
					LootEntry.of('apotheosis:mythic_material')
						.limitCount([1, 3])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			});
	})
	//ancient

	//CUSTOM BOSS LOOT
	//TF Lich - drops grave dust and ink, low chance to drop a Forbidden Fragment
	event.addEntityLootModifier('twilightforest:lich')
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(4)
			pool.addLoot(
					LootEntry.of('irons_spellbooks:common_ink')
						.limitCount([1, 3])
						.applyLootingBonus([0, 3])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			pool.addLoot(
					LootEntry.of('irons_spellbooks:uncommon_ink')
						.limitCount([1, 3])
						.applyLootingBonus([0, 3])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			pool.addLoot(
					LootEntry.of('irons_spellbooks:rare_ink')
						.limitCount([1, 3])
						.applyLootingBonus([0, 3])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			})
		.pool(pool => {
			pool.rolls(2)
			pool.addLoot(
					LootEntry.of('goety:grave_dust')
						.limitCount([1, 4])
						.applyLootingBonus([0, 2])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
		})
	event.addEntityLootModifier('twilightforest:lich')
		.randomChance(0.1)
		.addLoot('goety:forbidden_fragment')
	//TF Naga - drops toxin glands, snakeskin and naga fangs
	event.addEntityLootModifier('twilightforest:naga')
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(2);
			pool
				.addLoot(
					LootEntry.of('biomancy:toxin_gland')
						.limitCount([1, 2])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			})
		.pool(pool => {
			pool.rolls(2);
			pool
				.addLoot(
					LootEntry.of('mowziesmobs:naga_fang')
						.limitCount([1, 4])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			});
	event.addEntityLootModifier('twilightforest:naga')
		.killedByPlayer()
		.addLoot('alexsmobs:shed_snake_skin')
		.randomChance(0.5);
	//TF Alpha Yeti - drops froststalker horns and fangs
	event.addEntityLootModifier('twilightforest:alpha_yeti')
		.killedByPlayer()
		.pool(pool => {
			pool.rolls(2);
			pool
				.addLoot(
					LootEntry.of('alexsmobs:froststalker_horn')
						.limitCount([1, 2])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			})
		.pool(pool => {
			pool.rolls(4);
			pool
				.addLoot(
					LootEntry.of('biomancy:mob_fang')
						.limitCount([1, 4])
						.applyLootingBonus([0, 1])
						.when(c => c.randomChanceWithLooting(0.5, 0.1))
				)
			});
	//TF Snow Queen - guaranteed to drop the Codex Arcana, drops random ice scrolls or runes
	event.addEntityLootModifier('twilightforest:snow_queen')
		.killedByPlayer()
		.addLoot('mna:guide_book')
	event.addEntityLootModifier('twilightforest:snow_queen')
		.killedByPlayer()
		.pool(pool => {
      		pool.rolls(1);
      		pool.addLoot(LootEntry.of('irons_spellbooks:ice_rune'))
				.limitCount([1, 1])
				.applyLootingBonus([0, 1])
				.when(c => c.randomChanceWithLooting(0.2, 0.4));
    	})
		.pool(pool => {
      		pool.rolls(2);
      		pool.addLoot(
				LootEntry.of('irons_spellbooks:scroll')).customFunction({
        			function: 'irons_spellbooks:randomize_spell',
        			quality: {
          				min: 0.25,
          				max: 0.85
        			},
        			school: 'irons_spellbooks:ice'
      	});
    });

});