LootJS.modifiers((event) => {

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

	event.addEntityLootModifier('aether:blue_swet')
    	.randomChance(0.1)
		.addLoot('aether:blue_gummy_swet')
  	event.addEntityLootModifier('aether:golden_swet')
    	.randomChance(0.1)
		.addLoot('aether:golden_gummy_swet')

});