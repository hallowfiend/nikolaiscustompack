ServerEvents.recipes(event => {

    //Brilliant Fiber
    event.remove({ id: 'naturesaura:gold_fiber' });
    event.custom({
                "type": "hexerei:mixingcauldron",
                "liquid": {"fluid": 'minecraft:water'},
                "ingredients": [
                    'eidolon:arcane_gold_nugget',
                    'farmersdelight:straw',
                    '#forge:dusts/electrum',
                    '#botania:petals',
                    '#forge:dusts/electrum',
                    'farmersdelight:straw',
                    'eidolon:arcane_gold_nugget',
                    'malum:ether'
                ],
                "output": {"item": 'naturesaura:gold_fiber', "count": 4},
                "liquidOutput": {"fluid": 'minecraft:water'},
                "fluidLevelsConsumed": 1000
               });

    //Gold Powder
    event.remove({output: 'naturesaura:gold_powder'})
    //Create milling (worst)
    event.recipes.create.milling('2x naturesaura:gold_powder', 'naturesaura:gold_leaf')
    //IE crusher (better)
    event.recipes.immersiveengineering.crusher('4x naturesaura:gold_powder', 'naturesaura:gold_leaf')
    //Occultism crusher spirit (best)
    event.recipes.occultism.crushing(
		'8x naturesaura:gold_powder',
		'naturesaura:gold_leaf'
	)


})