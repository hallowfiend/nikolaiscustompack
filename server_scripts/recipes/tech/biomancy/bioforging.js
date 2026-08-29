// priority: 800

const BLOCKS = "biomancy:blocks"
const WEAPONS = 'biomancy:weapons'
const COMPONENTS = 'biomancy:components'
const MACHINES = 'biomancy:machines'
const MISC = 'biomancy:misc'

ServerEvents.recipes((event) => {

function bioForging (tab, ingredients, cost, result, id){
  event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: tab,
    ingredients: ingredients,
    nutrientsCost: cost,
    result: result
  }).id(`kubejs:biomancy/bio_forge/${id}`)
}

//Biological cyberware
  /*forging(
    30,
    ["biomancy:elastic_fibers", "biomancy:storage_sac"]
  ) */
//Organics
bioForging(
  COMPONENTS,
  [
      { count: 16, item: "minecraft:rotten_flesh" },
      { count: 4, item: "gtceu:silver_dust" },
      { item: 'minecraft:ghast_tear'}
  ],
  24,
  { item: "caverns_and_chasms:living_flesh", count: 16},
  'quasianimate_flesh'
)
bioForging(
  COMPONENTS,
  [
      { item: "biomancy:mob_claw" },
      { count: 16, item: "biomancy:bone_fragments" }
  ],
  2,
  {item: 'biomancy:mob_fang'},
  'mob_fang'
)
bioForging(
  COMPONENTS,
  [
    { item: "minecraft:bone" },
    { count: 4, item: "biomancy:flesh_bits" },
    { count: 2, item: "minecraft:raw_porkchop"}
  ],
  2,
  {item: 'farmersdelight:ham'},
  'ham'
)
bioForging(
  COMPONENTS,
  [
    { item: "hexerei:selenite_shard" },
    { item: "mna:vinteum_dust" },
    { count: 8, item: "biomancy:bone_fragments" }
  ],
  8,
  {item: 'ars_nouveau:wilden_horn'},
  'wilden_horn'
)
bioForging(
  COMPONENTS,
  [
    { item: "eidolon:sildrian_seed" },
    { item: "mna:vinteum_dust" },
    { count: 8, item: "biomancy:stone_powder" }
  ],
  8,
  {item: 'ars_nouveau:wilden_spike'},
  'wilden_spike'
)
bioForging(
  COMPONENTS,
  [
    { item: "hexalia:saltsprout" },
    { item: "mna:vinteum_dust" },
    { count: 8, item: "biomancy:tough_fibers" }
  ],
  8,
  {item: 'ars_nouveau:wilden_wing'},
  'wilden_wing'
)

// """"""Gregified""""" machine recipes
  event.remove({output: 'biomancy:decomposer'})
  event.remove({output: 'biomancy:bio_forge'})
  event.shaped('biomancy:bio_forge', [
    'clc',
    'fof',
    'fef'
  ],
  {
    c: '#kubejs:crafting_claws',
    f: 'biomancy:living_flesh',
    o: 'kubejs:slimy_eye',
    e: 'gtceu:electrotine_block',
    l: 'kubejs:lifecrystal'
  }).id('kubejs:shaped/bio_forge')
  bioForging(
    MACHINES,
    [
      {item: 'biomancy:living_flesh'},
      {count: 4, item: 'biomancy:flesh_bits'},
      {count: 2, tag: 'kubejs:crafting_claws'},
      {count: 8, item: 'gtceu:electrotine_dust'},
      {count: 4, item: 'minecraft:slime_ball'}
    ],
    8,
    {item: 'biomancy:bio_forge'},
    'bio_forge'
  )
  event.shaped('biomancy:decomposer', [
    'clc',
    'fof',
    'efe'
  ],
  {
    c: '#c:fangs',
    f: 'biomancy:living_flesh',
    o: 'kubejs:slimy_eye',
    e: 'gtceu:electrotine_block',
    l: 'kubejs:lifecrystal'
  }).id('kubejs:shaped/decomposer')
  bioForging(
    MACHINES,
    [
      {item: 'biomancy:living_flesh'},
      {count: 4, item: 'biomancy:flesh_bits'},
      {count: 8, item: 'gtceu:electrotine_dust'},
      {count: 2, item: 'biomancy:mob_gland'},
      {count: 8, item: 'biomancy:bone_fragments'}
    ],
    8,
    {item: 'biomancy:decomposer'},
    'decomposer'
  )
  //Fertilizer
  event.remove({output: 'biomancy:fertilizer'})
  bioForging(
    MISC,
    [
      {count: 4, item: 'gtceu:tricalcium_phosphate_dust'},
      {count: 4, item: 'gtceu:apatite_dust'},
      {count: 8, item: 'biomancy:organic_matter'},
      {count: 16, item: 'biomancy:nutrients'}
    ],
    8,
    {item: 'biomancy:fertilizer', count: 8},
    'bioalchemical_fertilizer'
  )
  bioForging(
    MISC,
    [
      {count: 4, item: 'biomancy:lithic_powder'},
      {count: 8, item: 'embers:ash'},
      {count: 8, item: 'gtceu:electrotine_dust'},
      {count: 16, item: 'biomancy:organic_matter'},
      {count: 16, item: 'biomancy:nutrients'}
    ],
    8,
    {item: 'create:tree_fertilizer', count: 16},
    'tree_fertilizer'
  )
// Alternative recipes for expensive/loot items
/*
    forging(
        33,
        [
            "goety:"
        ]
    )
    forging(
        666,
        [
            "biomancy:elastic_fibers",
            "minecraft:echo_shard"
        ],
        [],
        "irons_spellbooks:ancient_knowledge_fragment",
        1
    );*/

});