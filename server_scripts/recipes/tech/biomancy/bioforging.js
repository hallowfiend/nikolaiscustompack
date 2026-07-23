// priority: 800

const BLOCKS = "biomancy:blocks"
const WEAPONS = 'biomancy:weapons'
const COMPONENTS = 'biomancy:components'
const MISC = 'biomancy:misc'

ServerEvents.recipes((event) => {

//Biological cyberware
  /*forging(
    30,
    ["biomancy:elastic_fibers", "biomancy:storage_sac"]
  ) */
// Organics
event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: COMPONENTS,
    ingredients: [
      { item: "biomancy:mob_claw" },
      { count: 16, item: "biomancy:bone_fragments" }
    ],
    nutrientsCost: 1,
    result: {
      item: "biomancy:mob_fang"
    }
  })
event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: COMPONENTS,
    ingredients: [
      { item: "minecraft:bone" },
      { count: 4, item: "biomancy:flesh_bits" },
      { count: 2, item: "minecraft:raw_porkchop"}
    ],
    nutrientsCost: 1,
    result: {
      item: "farmersdelight:ham"
    }
  })
/*
// """"""Gregified""""" machine recipes
    forging(
        1,
        [
            "biomancy:living_flesh",
            'biomancy:malignant_flesh',
            "biomancy:bone_fragments",
            "gtceu:electrotine_dust",
            "biomancy:elastic_fibers",
        ],
        [1, 2, 5, 8, 4],
        "biomancy:decomposer",
        1
    );
// Alternative recipes for expensive/loot items
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