// priority: 800

const BLOCKS = "biomancy:blocks"
const WEAPONS = 'biomancy:weapons'
const COMPONENTS = 'biomancy:components'
const MISC = 'biomancy:misc'

ServerEvents.recipes((event) => {
function forging(cost, inputs, counts, output, count, tab) {
    let ing = [];
    inputs.forEach((element, index) => {
      ing.push(ItemOrTagAndCount(element, counts[index]));
    });

    event.custom({
      type: "biomancy:bio_forging",
      bio_forge_tab: tab,
      ingredients: ing,
      nutrientsCost: cost,
      result: ItemAndCount(output, count),
    });
  }

//Biological cyberware
  /*forging(
    30,
    ["biomancy:elastic_fibers", "biomancy:storage_sac"]
  ) */
// Organics
    forging(
        1,
        ["minecraft:bone", "minecraft:porkchop"],
        [1, 2],
        "farmersdelight:ham",
        1,
        COMPONENTS
    );
    forging(
        1,
        ["biomancy:mob_claw", "biomancy:bone_fragments"],
        [1, 16],
        "biomancy:mob_fang",
        1,
        COMPONENTS
    );
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