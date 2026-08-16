//priority 100

function flipCoin(){
    return Math.random() < 0.5
}
global.flipCoin = () => flipCoin()

function weightedReplace(func, filter, map) {
        func.findLoot(filter).forEach(e => {
        let count = e.count
        let weightedList = new Map(map)
        let weights = Array.from(weightedList.values()).reduce((part, a) => part += a)
        func.removeLoot(e)
        let counts = []
        Array.from(weightedList.values()).forEach(e => counts.push(Math.round(e / weights * count)))
        let countedMap = Array.from(weightedList.keys()).map((e, i) => [e, counts[i]])
        countedMap.forEach(v => func.addLoot(Item.of(v[0]).limitCount(flipCoin() ? flipCoin() ? v[1] + 1 : v[1] - 1 : v[1])))
    })
}


LootJS.modifiers((event) => {
    //fishing
    event.addLootTableModifier(LootType.FISHING)
    .apply(context => {
        weightedReplace(context, 'minecraft:iron_nugget', [
            ['minecraft:iron_ingot', 8],
            ['minecraft:iron_nugget', 8],
            ['minecraft:raw_iron', 8],
            ['apotheosis:common_material', 6],
            ['minecraft:chain', 6],
            ['minecraft:raw_iron_block', 3],
            ['minecraft:iron_block', 2]
        ])
        weightedReplace(context, 'minecraft:gold_nugget', [
            ['minecraft:gold_ingot', 8],
            ['minecraft:gold_nugget', 8],
            ['minecraft:raw_gold', 8],
            ['apotheosis:rare_material', 4],
            ['minecraft:raw_gold_block', 3],
            ['minecraft:gold_block', 2]
        ])
    });
    //tide crates
    event.addLootTableModifier("tide:chests/crates/surface_saltwater")
        .pool(pool => {
            pool.rolls([2,5]);
            pool.randomChance(0.75).addWeightedLoot([
            Item.of('minecraft:kelp').withChance(80),
            Item.of('minecraft:seagrass').withChance(80),
            Item.of('minecraft:sea_pickle').withChance(60),
            Item.of('gtceu:salt_dust').withChance(30)
            ])
        })
        .pool(pool => {
            pool.rolls([0,4]);
            pool.randomChance(0.4).addWeightedLoot([
                Item.of('apotheosis:common_material').withChance(80),
                Item.of('apotheosis:uncommon_material').withChance(40),
                Item.of('gtceu:raw_sphalerite_block').withChance(40),
                Item.of('gtceu:raw_cassiterite_block').withChance(40)
            ])
        })
        .pool(pool => {
            pool.rolls([0,8])
			pool.addLoot(
				Item.of('upgrade_aquatic:driftwood_log')
			)
            pool.limitCount([2, 6])
		});
    event.addLootTableModifier("tide:chests/crates/surface_freshwater")
        .pool(pool => {
            pool.rolls([2,5])
            pool.randomChance(0.75).addWeightedLoot([
                Item.of('minecraft:clay').withChance(80),
                Item.of('minecraft:clay_ball').withChance(80)
            ])
        })
        .pool(pool => {
            pool.rolls([2,5])
			pool.randomChance(0.25).addWeightedLoot([
				LootEntry.of('oak_sapling').withChance(30).limitCount([1, 2]),
				LootEntry.of('birch_sapling').withChance(20).limitCount([1, 2]),
				LootEntry.of('jungle_sapling').withChance(4).limitCount([1, 1]),
				LootEntry.of('dark_oak_sapling').withChance(10).limitCount([1, 3]),
				LootEntry.of('acacia_sapling').withChance(8).limitCount([1, 2]),
				LootEntry.of('spruce_sapling').withChance(14).limitCount([1, 2]),
			])
        })
        .pool(pool => {
            pool.rolls([1,4])
            pool.randomChance(0.4).addWeightedLoot([
                Item.of('apotheosis:common_material').withChance(80),
                Item.of('apotheosis:uncommon_material').withChance(40),
                Item.of('minecraft:raw_iron_block').withChance(80),
                Item.of('minecraft:raw_gold_block').withChance(40)
            ])
        });
    event.addLootTypeModifier(LootType.CHEST)
    .apply(context => {
        //food replacement
        weightedReplace(context, 'minecraft:bread', [
            ['minecraft:bread', 8],
            ['vampiresdelight:rice_bread', 8],
            ['pneumaticcraft:sourdough_bread', 8],
            ['neapolitan:banana_bread', 5],
            ['autumnity:pumpkin_bread', 5],
            ['delightful:cantaloupe_bread', 5],
            ['bakery:crusty_bread', 4],
            ['cornexpansion:grandmas_cornbread', 4],
            ['cosmopolitan:bush_bread', 1]
        ])
        weightedReplace(context, ['minecraft:potato', 'minecraft:baked_potato'], [
            ['minecraft:potato', 8],
            ['minecraft:baked_potato', 6],
            ['farmersdelight:stuffed_potato', 4],
            ['cosmopolitan:potato_pancakes', 4],
            ['dungeonsdelight:bloated_baked_potato', 2]
        ])
        weightedReplace(context, ['minecraft:porkchop', 'minecraft:cooked_porkchop'], [
            ['minecraft:porkchop', 8],
            ['minecraft:cooked_porkchop', 6],
            ['abnormals_delight:maple_glazed_bacon', 4],
            ['culturaldelights:pork_wrap', 4],
            ['sob:cactus_porkchop', 4],
            ['delightful:wrapped_cantaloupe', 4]
        ])
        weightedReplace(context, ['minecraft:beef', 'minecraft:cooked_beef'], [
            ['minecraft:beef', 8],
            ['minecraft:cooked_beef', 6],
            ['miners_delight:beef_stew_cup', 4],
            ['culturaldelights:beef_burrito', 4],
            ['brewinandchewin:jerky', 4],
            ['farmersdelight:hamburger', 4]
        ])
        weightedReplace(context, ['minecraft:mutton', 'minecraft:cooked_mutton'], [
            ['minecraft:mutton', 8],
            ['minecraft:cooked_mutton', 6],
            ['cosmopolitan:couscous_with_mutton', 4],
            ['farmersdelight:mutton_wrap', 4],
            ['delightful:mutton_pie_slice', 4],
            ['neapolitan:cooked_mint_chops', 4]
        ])
        weightedReplace(context, ['minecraft:chicken', 'minecraft:cooked_chicken'], [
            ['minecraft:chicken', 8],
            ['minecraft:cooked_chicken', 6],
            ['miners_delight:chicken_soup_cup', 4],
            ['frycooks_delight:fried_chicken_leg', 4],
            ['farmersdelight:chicken_sandwich', 4],
            ['culturaldelights:chicken_taco', 4]
        ])
        weightedReplace(context, ['minecraft:cod', 'minecraft:cooked_cod'], [
            ['minecraft:cod', 8],
            ['minecraft:cooked_cod', 6],
            ['minersdelight:baked_cod_stew_cup', 4],
            ['farmersdelight:cod_roll', 4],
            ['delightfulsandwich:cooked_cod_sandwich', 4],
            ['brewinandchewin:kippers', 4]
        ])
        weightedReplace(context, ['minecraft:salmon', 'minecraft:cooked_salmon'], [
            ['minecraft:salmon', 8],
            ['minecraft:cooked_salmon', 6],
            ['roll_delight:amazing_salmon_roll_slice', 4],
            ['farmersdelight:salmon_roll', 4],
            ['farmersdelight:grilled_salmon', 4],
            ['culturaldelights:rice_ball', 4]
        ])
        weightedReplace(context, 'minecraft:pumpkin_pie', [
            ['farmersdelight:pumpkin_pie_slice', 8],
            ['minecraft:pumpkin_pie', 6],
            ['seasonals:pumpkin_cake_slice', 4],
            ['cookielicious:pumpkin_cookie', 4],
            ['miners_delight:pumpkin_soup_cup', 4],
            ['farmersdelight:stuffed_pumpkin', 4]
        ])
        weightedReplace(context, 'minecraft:sweet_berries', [
            ['minecraft:sweet_berries', 8],
            ['brewinandchewin:sweet_berry_jam', 6],
            ['seasonals:glazed_sweet_berries', 4],
            ['sob:dried_berries', 4],
            ['farmersdelight:sweet_berry_cookie', 4],
            ['collectorsreap:sweet_berry_gummy', 4]
        ])
        weightedReplace(context, 'minecraft:melon_slice', [
            ['minecraft:melon_slice', 8],
            ['farmersdelight:melon_popsicle', 4],
            ['farmersdelight:melon_juice', 4]
        ])
        //non-food
    })
    //some misc stuff
    event.addLootTableModifier('aquamirae:chests/frozen_chest')
		.pool(pool => {
			pool.rolls(1).randomChance(1);
			pool.addLoot(Item.of('twilightforest:ice_bow'))
		});
})