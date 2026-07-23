//priority 90

ServerEvents.recipes(event => {
    //Scroll Paper
    event.replaceInput({output: "elementalcraft:scroll_paper"}, "minecraft:paper", "ars_nouveau:blank_parchment");
    event.replaceInput({output: "elementalcraft:scroll_paper"}, "minecraft:ink_sac", "irons_spellbooks:uncommon_ink");
    //Contained Crystal
    //crafting table recipe
    event.replaceInput({output: "elementalcraft:contained_crystal"}, "minecraft:gold_nugget", "#forge:plates/bronze");
    //cheaper spouting/casting/autoclave recipe
    event.recipes.gtceu.autoclave("kubejs:contained_crystal")
        .itemInputs("elementalcraft:inert_crystal")
        .inputFluids(Fluid.of("gtceu:bronze", 288))
        .itemOutputs("elementalcraft:contained_crystal")
        .duration(20)
        .EUt(7);
    event.recipes.create.filling('elementalcraft:contained_crystal', ['288x gtceu:bronze', 'elementalcraft:inert_crystal']);
    event.recipes.tconstruct.casting_table('elementalcraft:contained_crystal', 'gtceu:bronze', 288)
        .cast("elementalcraft:inert_crystal")
        .consumeCast();
    //earlygame recipes
    //Drenched Invar
    event.custom({
				"type": 'ars_nouveau:imbuement',
				"input":  {"tag": "forge:ingots/invar" },
				"output": "elementalcraft:drenched_iron_ingot",
                "count": 1,
				"source": 5000,
				"pedestalItems": [
                    {"item": {"item": "ars_nouveau:water_essence"}},
                    {"item": {"item": "botania:rune_water"}},
                    {"item": {"item": "ars_nouveau:water_essence"}},
                    {"item": {"item": "botania:rune_water"}},
                    {"item": {"item": "ars_nouveau:water_essence"}},
                    {"item": {"item": "botania:rune_water"}},
                    {"item": {"item": "ars_nouveau:water_essence"}},
                    {"item": {"item": "botania:rune_water"}}
                ]
			  })
    //Burnt Glass
    event.custom({
				"type": 'ars_nouveau:imbuement',
				"input":  {"item": "tconstruct:seared_glass" },
				"output": "elementalcraft:burnt_glass",
                "count": 1,
				"source": 5000,
				"pedestalItems": [
                    {"item": {"item": "ars_nouveau:fire_essence"}},
                    {"item": {"item": "botania:rune_fire"}},
                    {"item": {"item": "ars_nouveau:fire_essence"}},
                    {"item": {"item": "botania:rune_fire"}},
                    {"item": {"item": "ars_nouveau:fire_essence"}},
                    {"item": {"item": "botania:rune_fire"}},
                    {"item": {"item": "ars_nouveau:fire_essence"}},
                    {"item": {"item": "botania:rune_fire"}}
                ]
			  })
    //Air Silk
    event.custom({
				"type": 'ars_nouveau:imbuement',
				"input":  {"item": "mna:infused_silk" },
				"output": "elementalcraft:air_silk",
                "count": 1,
				"source": 5000,
				"pedestalItems": [
                    {"item": {"item": "ars_nouveau:air_essence"}},
                    {"item": {"item": "botania:rune_air"}},
                    {"item": {"item": "ars_nouveau:air_essence"}},
                    {"item": {"item": "botania:rune_air"}},
                    {"item": {"item": "ars_nouveau:air_essence"}},
                    {"item": {"item": "botania:rune_air"}},
                    {"item": {"item": "ars_nouveau:air_essence"}},
                    {"item": {"item": "botania:rune_fire"}}
                ]
			  })
    //Whiterock
    event.custom({
				"type": 'ars_nouveau:imbuement',
				"input":  {"item": "minecraft:stone" },
				"output": "elementalcraft:whiterock",
                "count": 1,
				"source": 5000,
				"pedestalItems": [
                    {"item": {"item": "ars_nouveau:earth_essence"}},
                    {"item": {"item": "botania:rune_earth"}},
                    {"item": {"item": "ars_nouveau:earth_essence"}},
                    {"item": {"item": "botania:rune_earth"}},
                    {"item": {"item": "ars_nouveau:earth_essence"}},
                    {"item": {"item": "botania:rune_earth"}},
                    {"item": {"item": "ars_nouveau:earth_essence"}},
                    {"item": {"item": "botania:rune_earth"}}
                ]
			  })
})