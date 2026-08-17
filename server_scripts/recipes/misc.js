ServerEvents.recipes((event) => {

//Syrup

/* event.recipes.create.compacting([Fluid.of('create_central_kitchen:syrup', 25)], [Fluid.of('create_central_kitchen:sap', 25)]).heated(),

event.recipes.create.filling('autumnity:sap_bottle', [Fluid.of('create_central_kitchen:sap', 25), 'minecraft:glass_bottle']),

event.recipes.create.filling('rusticdelight:syrup', [Fluid.of('create_central_kitchen:syrup', 25), 'minecraft:glass_bottle']), */

event.remove({ output:'rusticdelight:syrup', type:'farmersdelight:cooking' }),

event.remove({ output:'autumnity:syrup_bottle' }),

event.replaceInput(
  { input: 'autumnity:syrup_bottle' }, 
  'autumnity:syrup_bottle',
  'rusticdelight:syrup'
),

event.remove({ id: "quark:building/crafting/compressed/charcoal_block"})
event.remove({ id: "quark:building/crafting/compressed/sugar_cane_block"})
event.remove({ id: "quark:building/crafting/compressed/gunpowder_sack"})
event.remove({ id: "quark:building/crafting/compressed/apple_crate"})
event.remove({ id: "quark:building/crafting/compressed/potato_crate"})
event.remove({ id: "quark:building/crafting/compressed/carrot_crate"})
event.remove({ id: "quark:building/crafting/compressed/beetroot_crate"})
event.remove({ id: "quark:building/crafting/compressed/bamboo_block"})

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
    event.remove({ input: "sons_of_sins:iron_and_ether"})
    event.remove({input:'immersiveengineering:hammer'})

    event.remove({ output: 'create:empty_blaze_burner' })
    event.shaped('create:empty_blaze_burner', [
    '   ',
    ' C ',
    'ABA'
    ], {
    A: 'caverns_and_chasms:silver_bars',
    B: 'supplementaries:cage',
    C: 'minecraft:netherrack',
    })

    //a few yeets

    event.remove({ output: 'minecraft:dried_ghast' })
    event.remove({ output: 'ars_nouveau:ritual_animal_summon' })
    event.remove({ output: 'ars_nouveau:ritual_wilden_summon' })
    event.remove({input: 'hexalia:mortar_and_pestle'})
    event.remove({input: '#gtceu:tools/crafting_mortars'})
    event.remove({ type: 'bloodmagic:arc', mod: 'bloodmagic' })
    event.remove({ type: 'bloodmagic:arc/furnace', mod: 'bloodmagic' })
    event.remove({ type: 'bloodmagic:arcfurnace', mod: 'bloodmagic' })
    event.remove({ type: 'integrateddynamics:mechanical_squeezer' })
    event.remove({ type: 'integrateddynamics:squeezer' })
    event.remove({ id: 'integrateddynamics:crafting/squeezer' })
    event.remove({ id: 'integrateddynamics:crafting/mechanical_squeezer' })

    //netherexp 
    event.shaped(
    Item.of('netherexp:enigma_flesh', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'caverns_and_chasms:living_flesh',
      B: 'netherexp:warped_wart'
    }
    )

    let bolok = (input,output,count)=>{
        event.custom({type:'unusualend:bolok_trading',ingredients:[{item:input}],output:{item:output,count:count}})
    }
    bolok('minecraft:warped_fungus','netherexp:warped_wart',1)
    bolok('minecraft:nether_wart','netherexp:warped_wart',1)

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
    
    //Hemp canvas
    event.shaped(
        Item.of('farmersdelight:canvas', 1),
        [
            'cc',
            'cc'
        ],
        {
            c: 'immersiveengineering:hemp_fiber'
        }
    ).id('kubejs:canvas_from_hemp')

    event.remove({ id: /enderio.*gear.*/})

    event.remove({ id: /irons_spellbooks.*sequenced_assembly.*/})

    event.shaped(
        Item.of('malum:block_of_living_flesh', 1),
        [
            'ccc',
            'ccc',
            'ccc'
        ],
        {
            c: 'malum:living_flesh'
        }
    ).id('kubejs:shaped/idkwhythiswasremoved1')
    event.shapeless(
        Item.of('malum:living_flesh', 9),
        ['malum:block_of_living_flesh']
    ).id('kubejs:shapeless/idkwhythiswasremoved2')
    
});
