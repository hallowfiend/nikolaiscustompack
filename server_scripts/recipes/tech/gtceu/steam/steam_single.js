ServerEvents.recipes(event => {
   //bronze brick casing
   event.remove({output: 'gtceu:bronze_brick_casing'})
   event.shaped('gtceu:bronze_brick_casing', [
        'AAA',
        'ABA',
        'CCC'
   ],{
        A: 'gtceu:bronze_plate',
        B: '#forge:tools/hammers',
        C: 'embers:caminite_bricks'
        }).damageIngredient('#forge:tools/hammers')
   //steel brick casing
   event.remove({output: 'gtceu:steel_brick_casing'})
   event.shaped('gtceu:steel_brick_casing', [
        'AAA',
        'ABA',
        'CCC'
   ], {
        A: 'gtceu:steel_plate',
        B: '#forge:tools/hammers',
        C: 'embers:ashen_bricks'
   }).damageIngredient('#forge:tools/hammers')
})