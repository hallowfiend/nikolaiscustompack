ServerEvents.recipes(event => {
    function materiaAnointing(target, output, essentia, chance){
        event.custom({
            "type": "magichem:anointing",
            "targetBlock": target,
            "materia": `magichem:${essentia}`,
            "chance": chance,
            "result": output
        })
    }
    materiaAnointing(
        'mynethersdelight:letios_compost',
        'mynethersdelight:resurgent_soil',
        'essentia_rotten',
        10.0
    )
    materiaAnointing(
        'dungeonsdelight:embedded_eggs',
        'dungeonsdelight:heap_of_ancient_eggs',
        'admixture_darkness',
        50.0
    )
    materiaAnointing(
        'farmersdelight:potato_crate',
        'dungeonsdelight:poisonous_potato_crate',
        'admixture_poison',
        50.0
    )
    materiaAnointing(
        'farmersdelight:tomato_crate',
        'dungeonsdelight:rotten_tomato_crate',
        'essentia_rotten',
        20.0
    )
})