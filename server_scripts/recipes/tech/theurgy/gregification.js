ServerEvents.recipes(event => {
    event.remove({id: 'theurgy:accumulation/sal_ammoniac_from_water'})
    const yeet = [
        'theurgy:calcination_oven',
        'theurgy:pyromantic_brazier',
        'theurgy:liquefaction_cauldron',
        'theurgy:distiller',
        'theurgy:incubator',
        'theurgy:incubator_mercury_vessel',
        'theurgy:incubator_salt_vessel',
        'theurgy:incubator_sulfur_vessel',
        'theurgy:sal_ammoniac_accumulator',
        'theurgy:sal_ammoniac_tank',
        'theurgy:mercury_catalyst',
        'theurgy:caloric_flux_emitter',
        'theurgy:sulfuric_flux_emitter',
        'theurgy:reformation_source_pedestal',
        'theurgy:reformation_target_pedestal',
        'theurgy:reformation_result_pedestal',
        'theurgy:fermentation_vat',
        'theurgy:digestion_vat'
    ]
    yeet.forEach(yote => {
        event.remove({output: yote})
    })
    event.shaped('theurgy:calcination_oven', [
        ' I ',
        'CBC',
        'RIR'
    ], {
        I: 'gtceu:double_pewter_plate',
        C: 'gtceu:copper_ring',
        R: 'malum:block_of_alchemical_calx',
        B: 'embers:archaic_circuit'
    })
    event.shaped('theurgy:pyromantic_brazier', [
        'CBC',
        'RFR',
        'DDD'
    ], {
        D: 'immersiveengineering:sheetmetal_copper',
        R: 'gtceu:brass_rod',
        C: 'gtceu:double_copper_plate',
        F: 'magichem:admixture_energy',
        B: 'malum:block_of_alchemical_calx'
    })
    event.shaped('theurgy:liquefaction_cauldron', [
        'CFC',
        'RUR',
        'DDD'
    ], {
        D: 'immersiveengineering:sheetmetal_steel',
        R: 'gtceu:copper_rod',
        C: 'gtceu:double_copper_plate',
        F: 'magichem:admixture_energy',
        U: 'minecraft:cauldron'
    })
    event.shaped('theurgy:distiller', [
        'SAS',
        'SRS',
        'TWT'
    ], {
        A: 'magichem:alembic',
        S: 'gtceu:pewter_screw',
        R: 'embers:fluid_pipe',
        T: 'gtceu:pewter_plate',
        W: 'magichem:admixture_energy'
    })
    event.shaped('theurgy:incubator', [
        'SSS',
        'WBF',
        'SAS'
    ], {
        S: 'gtceu:double_pewter_plate',
        W: 'magichem:essentia_water',
        B: 'immersiveengineering:wooden_barrel',
        F: 'magichem:essentia_fire',
        A: '#forge:storage_blocks/ambrosium'
    })
    const principles = [
        {principle: "salt", tag: '#theurgy:alchemical_salts', metal: "copper", extraItem: "gtceu:salt_block"},
        {principle: "sulfur", tag: '#theurgy:alchemical_sulfurs', metal: "silver", extraItem: "gtceu:sulfur_block"},
        {principle: "mercury", tag: '#theurgy:alchemical_mercuries', metal: "gold", extraItem: "gtceu:cinnabar_block"}
    ]
    principles.forEach(recipe => {
        event.shaped(`theurgy:incubator_${recipe.principle}_vessel`, [
            'MTM',
            'PCP',
            'MEM'
        ], {
            M: 'magichem:essentia_wrought',
            P: `#forge:double_plates/${recipe.metal}`,
            C: 'immersiveengineering:crate',
            T: recipe.tag,
            E: recipe.extraItem
        })
    })
    event.shaped('theurgy:sal_ammoniac_accumulator', [
        'PPP',
        'RFR'
    ], {
        P: 'gtceu:pewter_plate',
        R: 'gtceu:treated_wood_rod',
        F: 'create:fluid_tank'
    })
    event.shaped('theurgy:sal_ammoniac_tank', [
        'PPP',
        'RER',
        'IFI'
    ], {
        P: 'gtceu:pewter_plate',
        R: 'gtceu:treated_wood_rod',
        F: 'create:fluid_tank',
        I: 'eidolon:arcane_gold_inlay',
        E: 'magichem:admixture_vessel'
    })
    event.shaped('theurgy:mercury_catalyst', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        C: 'hexerei:quicksilver_bottle',
        B: 'gtceu:hallowed_gold_plate',
        A: 'malum:alchemical_impetus'
    })
    event.shaped('theurgy:caloric_flux_emitter', [
        ' Q ',
        'ABA',
        'CCC'
    ], {
        C: 'gtceu:pewter_plate',
        A: 'gtceu:hallowed_gold_plate',
        B: '#forge:gems/vehement_coal',
        Q: 'malum:block_of_blazing_quartz'
    })
    event.shaped('theurgy:sulfuric_flux_emitter', [
        ' Q ',
        'ABA',
        'CCC'
    ], {
        C: 'gtceu:pewter_plate',
        A: 'gtceu:titanium_plate',
        B: '#forge:gems/ambrosium',
        Q: 'malum:block_of_auric_embers'
    })
    event.shaped('theurgy:fermentation_vat', [
        'BEB',
        'BUB',
        'BCB'
    ], {
        U: 'brewinandchewin:keg',
        B: 'gtceu:brass_plate',
        E: 'magichem:essentia_rotten',
        C: 'kubejs:corrosive_node'
    })
    event.shaped('theurgy:digestion_vat', [
        'ACA',
        'BPB',
        'AEA'
    ], {
        C: 'kubejs:corrosive_node',
        A: 'gtceu:aluminium_plate',
        B: '#forge:gems/ambrosium',
        P: 'minecraft:decorated_pot',
        E: 'magichem:essentia_rotten'
    })
    //todo: choose what to gate reformation behind - maybe undergarden & bloodmagic?
})