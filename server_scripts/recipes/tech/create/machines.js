ServerEvents.recipes(event => {
    const yeets = [
        'create:sequenced_assembly/precision_mechanism',
        'create:crafting/kinetics/cart_assembler',
        'create:crafting/kinetics/encased_fan',
        'create:crafting/logistics/factory_gauge',
        'create:crafting/logistics/package_frogport'
    ]
    yeets.forEach(yeet => {
        event.remove({id: yeet})
    })
    //COMPONENTS
    //precision mechanism (no more salvage bullshit)
    event.recipes.create.sequenced_assembly(
      [
        Item.of('create:precision_mechanism')
      ],
      'gtceu:double_gold_plate', 
      [
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:andesite_alloy_plate']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:small_brass_gear']),
        event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:tools/wrenches']).keepHeldItem()
      ]
    )
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(2)
    .id('create:sequenced_assembly/precision_mechanism')
    event.recipes.gtceu.assembler('precision_mechanism')
            .itemInputs(
                'gtceu:double_gold_plate',
                '2x create:cogwheel',
                '2x create:large_cogwheel',
                '2x gtceu:andesite_alloy_plate',
                '2x gtceu:small_brass_gear'
            )
            .circuit(4)
            .itemOutputs('create:precision_mechanism')
            .duration(40)
            .EUt(4);
    //LOGISTICS
    //factory gauge
    event.shaped('2x create:factory_gauge', [
        'BA',
        'CF',
        ' D'
    ], {
        A: 'gtceu:vacuum_tube',
        B: '#forge:tools/files',
        C: '#forge:tools/screwdrivers',
        D: 'create:precision_mechanism',
        F: 'gtceu:copper_plate'
    }).damageIngredient('#forge:tools/files').damageIngredient('#forge:tools/screwdrivers')
    event.shaped('2x create:package_frogport', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'copycats:copycat_cogwheel',
        B: '#forge:slimeballs',
        C: 'gtceu:vacuum_tube',
        D: 'create:item_vault',
        E: 'create:andesite_alloy',
        F: 'gtceu:steel_brick_casing'
    })
    //MACHINERY
    //encased fan
    event.shaped('create:encased_fan', [
        ' S ',
        'IAI',
        ' P '
    ], {
        S: 'create:shaft',
        I: 'gtceu:iron_rod',
        A: 'create:andesite_casing',
        P: 'gtceu:andesite_alloy_rotor'
    })
    //CONTRAPTIONS
    //minecart assembler
    event.shaped('create:cart_assembler', [
        'ABA',
        'CDC'
    ], {
        A: 'gtceu:vacuum_tube',
        B: 'gtceu:double_iron_plate',
        C: 'gtceu:small_andesite_alloy_gear',
        D: 'create:andesite_casing'
    })
})