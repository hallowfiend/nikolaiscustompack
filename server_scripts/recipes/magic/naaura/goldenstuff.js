ServerEvents.recipes(event => {

    //Brilliant Fiber
    event.remove({ id: 'naturesaura:gold_fiber' });
    event.custom({
                "type": "hexerei:mixingcauldron",
                "liquid": {"fluid": 'minecraft:water'},
                "ingredients": [
                    {"item": 'eidolon:arcane_gold_nugget'},
                    {"item": 'farmersdelight:straw'},
                    {"tag": 'forge:dusts/electrum'},
                    {"tag": 'botania:petals'},
                    {"tag": 'forge:dusts/electrum'},
                    {"item": 'farmersdelight:straw'},
                    {"item": 'eidolon:arcane_gold_nugget'},
                    {"item": 'malum:ether'}
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
    //Wood Stand
    event.remove({output: 'naturesaura:wood_stand'})
    event.custom({
        "type": "eidolon:worktable",
        "pattern": [
            " i ",
            " l ",
            " e "
        ],
        "reagents": [
            "gggg"
        ],
        "key" : {
            "i": {
                "item" : "eidolon:gold_inlay"
            },
            "e": {
                "item": "malum:ether"
            },
            "l": {
                "tag": "forge:stripped_logs"
            },
            "g": {
                "item": "naturesaura:gold_powder"
            }
        },
        "result" : {
            "item": "naturesaura:wood_stand"
        }
    }).id('kubejs:eidolon/worktable/workstations/wooden_stand')


})