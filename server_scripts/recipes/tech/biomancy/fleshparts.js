ServerEvents.recipes(event => {
    //Primordial Core
    event.remove({ output: "biomancy:primordial_core"})
    event.shaped(
        Item.of('biomancy:primordial_core', 1),
        [
            'fml',
            'aga',
            'lmf'
        ],
        {
            f: 'minecraft:rotten_flesh',
            a: 'mna:animus_dust',
            g: 'evilcraft:dark_power_gem',
            m: '#biomancy:raw_meats',
            l: '#extra_sins:living_flesh'
        }
    ).id('kubejs:primordial_core')
    //Neuron
    event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: COMPONENTS,
    ingredients: [
      { item: "experienceobelisk:mending_neurogel" },
      { count: 4, item: "biomancy:elastic_fibers" },
      { count: 4, item: "biomancy:flesh_bits" },
      { item: "gtceu:potassium_carbonate_dust"},
      { item: "gtceu:salt_dust"},
      { item: "gtceu:energium_dust"}
    ],
    nutrientsCost: 6,
    result: {
      item: "kubejs:biomantic_neuron"
    }
    })
    //Brain
    event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: COMPONENTS,
    ingredients: [
      { count: 16, item: "kubejs:biomantic_neuron" },
      { count: 4, item: "biomancy:regenerative_fluid" },
      { count: 6, item: "gtceu:vinteum_alloy_plate"},
      { item: "mna:animus_dust"},
      { item: "hexerei:mindful_trance_blend"},
      { item: "magichem:admixture_wizard"},
      { item: "malum:mnemonic_fragment"}
    ],
    nutrientsCost: 16,
    result: {
      item: "kubejs:castbrain"
    }
    })
})