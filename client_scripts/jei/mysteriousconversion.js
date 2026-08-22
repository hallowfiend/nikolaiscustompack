
const $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

//Eidolon chant conversion
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('eidolon:gold_inlay', 'eidolon:holy_symbol')) //input, output
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('eidolon:pewter_inlay', 'eidolon:unholy_symbol'))
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('minecraft:black_wool', 'eidolon:top_hat'))
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('#minecraft:music_discs', 'eidolon:music_disc_parousia'))