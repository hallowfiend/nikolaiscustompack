ServerEvents.recipes((event) => {
    //accurate arcane essence recipe
    event.remove({ id: 'irons_spellbooks:mixing/arcane_essence' })
    event.recipes.create.mixing(
        '4x irons_spellbooks:arcane_essence', //output
        [
            'sons_of_sins:ether_ashes', //inputs
            'gtceu:source_dust',
            'mna:vinteum_dust',
            "create:experience_nugget",
            Fluid.of('minecraft:water').withAmount(1000)
        ]
    )
    //irons' fluids
    //chalk compacting
    event.recipes.create.compacting(
        ['arts_and_crafts:white_chalk'],
        ['2x gtceu:gypsum_dust', '2x gtceu:calcite_dust']
    )
    //nether brick compacting
    event.recipes.create.compacting(
        ['minecraft:nether_brick'],
        ['gtceu:netherrack_dust']
    )
    //pnc upgrade base ('spensive ver)
    event.recipes.create.compacting(
        ['pneumaticcraft:upgrade_matrix'],
        ['minecraft:lapis_block', '8x malum:cluster_of_brilliance']
    )
    //ID blocks
    event.recipes.create.compacting(['integrateddynamics:crystalized_menril_block'], [Fluid.of('integrateddynamics:menril_resin').withAmount(1000)])
    event.recipes.create.filling('integratedterminals:menril_glass', [Fluid.of('integrateddynamics:menril_resin').withAmount(1000), '#forge:glass'])
    event.recipes.gtceu.fluid_solidifier('solidify_menril_glass')
        .itemInputs('#forge:glass')
        .inputFluids(Fluid.of('integrateddynamics:menril_resin', 1000))
        .itemOutputs('integratedterminals:menril_glass')
        .duration(200)
        .EUt(17);
    event.recipes.gtceu.fluid_solidifier('solidify_menril_block')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids(Fluid.of('integrateddynamics:menril_resin', 1000))
        .itemOutputs('integrateddynamics:crystalized_menril_block')
        .duration(200)
        .EUt(17);
    //hardened blood
    event.recipes.create.compacting(['evilcraft:hardened_blood'], [Fluid.of('evilcraft:blood').withAmount(1000)])
    //IE multi bricks
    event.remove({id: 'immersiveengineering:crafting/cokebrick'})
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})
    event.remove({id: 'immersiveengineering:crafting/alloybrick'})
    event.remove({id: /createaddition:compat.*item_application.*kiln_brick.*/})
    event.recipes.create.compacting(
        ['immersiveengineering:cokebrick'],
        ['4x embers:caminite_blend', '4x tconstruct:seared_brick', '8x gtceu:deepslate_dust', 'gtceu:flint_dust']
    )
    event.recipes.create.compacting(
        ['immersiveengineering:blastbrick'],
        ['4x kubejs:ashen_blend', '4x tconstruct:scorched_brick', '8x gtceu:netherrack_dust', 'minecraft:magma_cream']
    )
    event.recipes.create.compacting(
        ['immersiveengineering:alloybrick'],
        ['4x minecraft:clay', '4x embers:caminite_brick', 'gtceu:flint_dust']
    )
})