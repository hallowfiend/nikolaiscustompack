ServerEvents.recipes(event =>{
    const tagFix = { aluminum: 'aluminium', niter: 'saltpeter' }
    //TIERED CRUSHING
    //every spirit now is "capped" re: what it is allowed to crush based on the ore's source dimension
     const tierMaterials = {
        //Foliot: overworld and twilight ores/materials
        foliot: ['coal', 'copper', 'tin', 'iron', 'lead', 'zinc', 'nickel', 'silver', 'sulfur', 'salt',
            'saltpeter', 'cassiterite', 'apatite', 'amethyst', 'opal', 'diamond', 'emerald', 'gold'],
        //Djinni: aether, starlight and undergarden ores/materials
        djinni: ['aluminium', 'bauxite', 'electrotine', 'lithium', 'cobalt', 'magnetite', 'hematite',
            'pyrite', 'galena', 'sphalerite', 'chalcopyrite', 'bornite', 'malachite', 'cinnabar',
            'certus_quartz', 'ruby', 'sapphire', 'topaz', 'red_garnet',
            'yellow_garnet'],
        //Afrit: nether and end ores/materials
        afrit: ['iesnium', 'tungsten', 'tungstate', 'scheelite', 'platinum', 'palladium', 'molybdenum',
            'vanadium_magnetite', 'uraninite', 'pitchblende', 'thorium', 'monazite', 'neodymium',
            'chromite'],
        //Marid: space ores/materials
        marid: ['naquadah', 'plutonium'],
    }
})