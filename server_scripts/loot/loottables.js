//priority 100

function flipCoin(){return $Random().nextBoolean()}
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
        countedMap.forEach(v => func.addLoot(LootEntry.of(v[0]).limitCount(flipCoin() ? flipCoin() ? v[1] + 1 : v[1] - 1 : v[1])))
    })
}


LootJS.modifiers((event) => {
    event.addLootTableModifier(LootType.FISHING)
    .replaceLoot('culturaldelights:squid', 'miners_delight:squid');
    //globals
    event.addLootTypeModifier(LootType.CHEST)
    .apply(func => {
        weightedReplace(func, 'minecraft:bread', [
            ['minecraft:bread', 8],
            ['vampiresdelight:rice_bread', 8],
            ['pneumaticcraft:sourdough_bread', 8],
            ['cosmopolitan:bush_bread', 8],
            ['neapolitan:banana_bread', 5],
            ['autumnity:pumpkin_bread', 5],
            ['delightful:cantaloupe_bread', 5],
            ['bakery:crusty_bread', 4],
            ['cornexpansion:grandmas_cornbread', 4]
        ])
        weightedReplace(func, ['minecraft:potato', 'minecraft:baked_potato'], [
            ['minecraft:potato', 8],
            ['minecraft:baked_potato', 6],
            ['farmersdelight:stuffed_potato', 4],
            ['cosmopolitan:potato_pancakes', 4],
            ['dungeonsdelight:bloated_baked_potato', 2]
        ])
        weightedReplace(func, ['minecraft:porkchop', 'minecraft:cooked_porkchop'], [
            ['minecraft:porkchop', 8],
            ['minecraft:cooked_porkchop', 6],
            ['abnormals_delight:maple_glazed_bacon', 4],
            ['culturaldelights:pork_wrap', 4],
            ['sob:cactus_porkchop', 4],
            ['delightful:wrapped_cantaloupe', 4]
        ])
        weightedReplace(func, ['minecraft:beef', 'minecraft:cooked_beef'], [
            ['minecraft:beef', 8],
            ['minecraft:cooked_beef', 6],
            ['miners_delight:beef_stew_cup', 4],
            ['culturaldelights:beef_burrito', 4],
            ['brewinandchewin:jerky', 4],
            ['farmersdelight:hamburger', 4]
        ])
        weightedReplace(func, ['minecraft:mutton', 'minecraft:cooked_mutton'], [
            ['minecraft:mutton', 8],
            ['minecraft:cooked_mutton', 6],
            ['cosmopolitan:couscous_with_mutton', 4],
            ['farmersdelight:mutton_wrap', 4],
            ['delightful:mutton_pie_slice', 4],
            ['neapolitan:cooked_mint_chops', 4]
        ])
        weightedReplace(func, ['chicken', 'cooked_chicken'], [
            ['chicken', 8],
            ['cooked_chicken', 6],
            ['miners_delight:chicken_soup_cup', 4],
            ['frycooks_delight:fried_chicken_leg', 4],
            ['farmersdelight:chicken_sandwich', 4],
            ['culturaldelights:chicken_taco', 4]
        ])
        weightedReplace(func, ['cod', 'cooked_cod'], [
            ['cod', 8],
            ['cooked_cod', 6],
            ['minersdelight:baked_cod_stew_cup', 4],
            ['farmersdelight:cod_roll', 4],
            ['delightfulsandwich:cooked_cod_sandwich', 4],
            ['brewinandchewin:kippers', 4]
        ])
        weightedReplace(func, ['minecraft:salmon', 'minecraft:cooked_salmon'], [
            ['minecraft:salmon', 8],
            ['minecraft:cooked_salmon', 6],
            ['roll_delight:amazing_salmon_roll_slice', 4],
            ['farmersdelight:salmon_roll', 4],
            ['farmersdelight:grilled_salmon', 4],
            ['culturaldelights:rice_ball', 4]
        ])
        weightedReplace(func, 'minecraft:pumpkin_pie', [
            ['farmersdelight:pumpkin_pie_slice', 8],
            ['minecraft:pumpkin_pie', 6],
            ['seasonals:pumpkin_cake_slice', 4],
            ['cookielicious:pumpkin_cookie', 4],
            ['miners_delight:pumpkin_soup_cup', 4],
            ['farmersdelight:stuffed_pumpkin', 4]
        ])
        weightedReplace(func, 'minecraft:sweet_berries', [
            ['minecraft:sweet_berries', 8],
            ['brewinandchewin:sweet_berry_jam', 6],
            ['seasonals:glazed_sweet_berries', 4],
            ['sob:dried_berries', 4],
            ['farmersdelight:sweet_berry_cookie', 4],
            ['collectorsreap:sweet_berry_gummy', 4]
        ])
        weightedReplace(func, 'minecraft:melon_slice', [
            ['minecraft:melon_slice', 8],
            ['farmersdelight:melon_popsicle', 4],
            ['farmersdelight:melon_juice', 4]
        ])
    })
    event.addLootTableModifier('aquamirae:chests/frozen_chest')
		.pool(pool => {
			pool.rolls(1).randomChance(1);
			pool.addLoot(LootEntry.of('twilightforest:ice_bow'))
		});
})