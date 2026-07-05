ServerEvents.recipes((event) => {

//Syrup

event.recipes.create.compacting([Fluid.of('create_central_kitchen:syrup', 25)], [Fluid.of('create_central_kitchen:sap', 25)]).heated(),

event.recipes.create.filling('autumnity:sap_bottle', [Fluid.of('create_central_kitchen:sap', 25), 'minecraft:glass_bottle']),

event.recipes.create.filling('rusticdelight:syrup', [Fluid.of('create_central_kitchen:syrup', 25), 'minecraft:glass_bottle']),

event.remove({ output:'rusticdelight:syrup', type:'farmersdelight:cooking' }),

event.remove({ output:'autumnity:syrup_bottle' }),

event.replaceInput(
  { input: 'autumnity:syrup_bottle' }, 
  'autumnity:syrup_bottle',
  'rusticdelight:syrup'         
),

//Honey
event.replaceOutput(
    {}, 
    'brewinandchewin:honey', 
    'create:honey'
  ),

  event.remove({ type: 'create:emptying', input: 'minecraft:honey_bottle' })
  event.recipes.create.emptying([
    'minecraft:glass_bottle', 
    Fluid.of('create:honey', 250)
  ], 'minecraft:honey_bottle'
)
//CMYK dye mixing
    const pairs = [
        // [result,  a,        b      ]
        ['lime',     'yellow', 'cyan'],
        ['red',      'yellow', 'magenta'],
        ['blue',     'magenta', 'cyan'],
        ['green',    'yellow', 'blue'],
        ['brown',    'orange', 'black'],
    ];

    pairs.forEach(([result, a, b]) => {
        event.shapeless(
            Item.of(`minecraft:${result}_dye`, 2),
            [`minecraft:${a}_dye`, `minecraft:${b}_dye`]
        ).id(`kubejs:${result}_dye_from_${a}_and_${b}`);
    });

    // Three-ingredient mix: full CMY -> K
    event.shapeless(
        Item.of('minecraft:black_dye', 3),
        ['minecraft:yellow_dye', 'minecraft:cyan_dye', 'minecraft:magenta_dye']
    ).id('kubejs:black_dye_from_yellow_cyan_magenta');

    event.remove({ output: 'farmersdelight:rope' })

    // Restore FD's rope recipe but output supplementaries:rope.
    // Original: 2 straw in a column -> 4 rope
    event.shaped(
        Item.of('supplementaries:rope', 4),
        [
            'S',
            'S'
        ],
        {
            S: 'farmersdelight:straw'
        }
    ).id('kubejs:straw_to_supplementaries_rope')

    // 1:1 shapeless conversion: supplementaries:rope <-> farmersdelight:rope
    event.shapeless('farmersdelight:rope', ['supplementaries:rope'])
        .id('kubejs:supplementaries_rope_to_fd_rope')

    event.shapeless('supplementaries:rope', ['farmersdelight:rope'])
        .id('kubejs:fd_rope_to_supplementaries_rope')
    
    
});
