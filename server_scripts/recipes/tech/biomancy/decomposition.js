const lithic_powder = "biomancy:stone_powder"
const mineral_fragment = 'biomancy:mineral_fragment'
const gem_fragments = 'biomancy:gem_fragments'
const bioluminescent_goo = "biomancy:bio_lumens"
const biotic_matter = "biomancy:organic_matter"
const exotic_dust = "biomancy:exotic_dust"
const flesh_bits = "biomancy:flesh_bits"
const bone_fragments = 'biomancy:bone_fragments'
const elastic_fibers = "biomancy:elastic_fibers"
const tough_fibers = 'biomancy:tough_fibers'
const bile = "biomancy:bile"
const regenerative_fluid = "biomancy:regenerative_fluid"
const hormone_secretion = 'biomancy:hormone_secretion'
const withering_ooze = "biomancy:withering_ooze"
const toxin_extract = 'biomancy:toxin_extract'
const gastric_juice = 'biomancy:acid_extract'
const volatile_fluid = 'biomancy:volatile_fluid'

ServerEvents.recipes(event => {
    function CountRangeOrUniform(input) {
    input = input.toString().trim();
    if (input.includes("-")) {
    let parts = input.split("-").map((part) => part.trim());

    return {
      type: "uniform",
      min: parseFloat(parts[0]),
      max: parseFloat(parts[1]),
    };
    } else {
    return { type: "constant", value: parseFloat(input) };
    }
    }
    function decomposing(cost, processingTime, input, outputs, counts){
        let stuff = [];
        outputs.forEach((element, index) => {
        stuff.push({
            countRange: CountRangeOrUniform(counts[index]),
            item: element,
        });
        });
        event.custom({
            type: "biomancy:decomposing",
            ingredient: {
                item: input,
            },
            nutrientsCost: cost,
            processingTime: processingTime,
            results: stuff,
    }).id(`kubejs:biomancy/decomposing/${input.split(":")[1]}`);
    }

    //scorched guns
    decomposing(1, 180, 'scguns:bat_guano',
        [bile, biotic_matter],
        [2-3, 3-6]
    )
    //vanillabackport
    //netherexp
    //spawn
    //environmental
    //miner's delight
    decomposing(1, 150, 'miners_delight:arthropod', 
        [flesh_bits, toxin_extract, bile],
        [1-3, 0-1, 0-1]
    )
    decomposing(1, 40, 'miners_delight:cave_carrot',
        [biotic_matter],
        [1-2]
    )
    //dungeon's delight
    decomposing(1, 200, 'dungeonsdelight:gritty_flesh',
        [flesh_bits, elastic_fibers, 'minecraft:sand'],
        [1-3, 0-1, 1]
    )
    decomposing(1, 200, 'dungeonsdelight:brined_flesh',
        [flesh_bits, elastic_fibers, 'gtceu:salt_dust'],
        [1-3, 0-1, 1]
    )
    decomposing(1, 50, 'dungeonsdelight:gunk',
        ['farmersdelight:straw', biotic_matter, 'dungeonsdelight:wormroot_tendrils', regenerative_fluid],
        [2, 2-3, 1, 2-4]
    )
    //gems, crystals, metals & ores
    const simpleGemDecomposition = [
        'gtceu:ruby_gem',
        'gtceu:red_garnet_gem',
        'gtceu:yellow_garnet_gem',
        'gtceu:olivine_gem',
        'gtceu:almandine_gem',
        'goety:jade'
    ]
    //slimey slime
    const slimeballs = [
        {item: 'tconstruct:sky_slime_ball', extra: bioluminescent_goo},
        {item: 'tconstruct:ichor_slime_ball', extra: hormone_secretion},
        {item: 'tconstruct:ender_slime_ball', extra: exotic_dust},
        {item: 'kubejs:blood_slime_ball', extra: 'evilcraft:hardened_blood_shard'},
        {item: 'embers:adhesive', extra: 'biomancy:gelling_agent'},
        {item: 'malum:runic_sapball', extra: 'minecraft:glowstone_dust'},
        {item: 'malum:cursed_sapball', extra: 'minecraft:redstone'},
        {item: 'mowziesmobs:glowing_jelly', extra: 'create:experience_nugget'},
        {item: 'aether:swet_ball', extra: 'gtceu:electrotine_dust'},
        {item: 'undergarden:goo_ball', extra: 'environmental:mud_ball'}
    ]
    slimeballs.forEach(slimeball => {
        decomposing(1, 215, slimeball.item,
            [regenerative_fluid, bile, slimeball.extra],
            [2-3,1-2,0-1]
        )
    })
    const slimeCrystals = [

    ]
})