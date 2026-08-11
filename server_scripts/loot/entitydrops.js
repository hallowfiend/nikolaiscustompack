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

	//aether
	event.addEntityLootModifier('aether:blue_swet')
    	.randomChance(0.1)
		.addLoot('aether:blue_gummy_swet')
  	event.addEntityLootModifier('aether:golden_swet')
    	.randomChance(0.1)
		.addLoot('aether:golden_gummy_swet')


	//BOSSES - source of apotheosis materials
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
		'twilightforest:hydra'
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
		'ars_nouveau:wilden_boss'
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

});