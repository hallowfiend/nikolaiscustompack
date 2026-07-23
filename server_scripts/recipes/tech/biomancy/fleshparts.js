ServerEvents.recipes(event => {
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
})