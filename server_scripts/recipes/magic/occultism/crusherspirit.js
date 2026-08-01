ServerEvents.recipes(event =>{
    const tagFix = { aluminum: 'aluminium', niter: 'saltpeter' }
    //TIERED CRUSHING
    //every spirit now is "capped" re: what it is allowed to crush based on the ore's source dimension (mostly)
    
        //Foliot: overworld and twilight ores/materials
    const foliot = ['apatite', 'tricalcium_phosphate', 'pyrochlore', 'tin', 'cassiterite', 'cassiterite_sand',
        'chalcopyrite', 'zeolite', 'realgar', 'galena', 'silver', 'lead', 'garnet_sand', 'asbestos',
        'diatomite', 'red_garnet', 'yellow_garnet', 'amethyst', 'goethite', 'yellow_limonite', 'hematite',
        'malachite', 'magnetite', 'vanadium_magnetite', 'gold', 'basaltic_mineral_sand', 'granitic_mineral_sand',
        'fullers_earth', 'gypsum', 'rock_salt', 'salt', 'lepidolite', 'spodumene', 'oilsands', 'coal',
        'graphite', 'soapstone', 'talc', 'glauconite_sand', 'jade', 'olivine', 'emerald',
        'iron', 'pyrite', 'copper', 'diamond', 'lazurite', 'sodalite', 'lapis', 'calcite',
        'grossular', 'spessartine', 'pyrolusite', 'kyanite', 'mica', 'bauxite', 'pollucite',
        'bentonite', 'redstone', 'ruby', 'cinnabar', 'almandine', 'pyrope', 'sapphire', 'green_sapphire',
        'brilliance', 'quartzite', 'soulstone', 'vinteum', 'inert_crystal', 'mithril', 'cthonic_gold',
        'electrum', 'platinum', 'nickel', 'sal_ammoniac', 'spinel', 'tetrahedrite', 'brass', 'turquoise',
        'certus_quartz', 'barite', 'alunite', 'blue_topaz', 'topaz', 'chalcocite', 'bornite', 'opal',
        'electrotine', 'dark']
        //Djinni: aether, starlight and undergarden ores/materials
    const djinni = foliot + ['zanite', 'trona', 'ambrosium', 'bauxite', 'aluminium', 'sphalerite',
        'skyjade', 'gravitite', 'source', 'garnierite', 'cobaltite', 'saltpeter', 'scheelite',
        'starcore', 'vehement_coal', 'ember', 'malarite', 'chromite', 'pentlandite', 'deepsilver', 'molybdenum',
        'starlit_diamond', 'wulfenite', 'molybdenite', 'tantalite', 'cloggrum', 'anthralite', 'froststeel',
        'utherium', 'regalium', 'petzite']
        //Afrit: nether and end ores/materials
    const afrit = djinni + ['blazing_quartz', 'beryllium', 'thorium', 'pyrolusite', 'monazite',
        'bastnasite', 'neodymium', 'nether_quartz', 'stibnite', 'sulfur', 'brass', 'iesnium', 'amber',
        'citrine', 'thorianite', 'uraninite', 'powellite', 'fluorite', 'magnesite', 'cooperite',
        'pitchblende', 'wolframite', 'tungstate', 'lithium', 'thallasium', 'hutchinsonite', 'cobalt']
        //Marid: space ores/materials
    const marid = afrit + ['rutile', 'ilmenite', 'anorthite', 'moon_cheese', 'luminite',
        'invar', 'plutonium', 'castorite', 'calorite', 'naquadah', 'bismuthinite', 'hadalite',
        'naumannite', 'ostrum', 'demonite', 'borax', 'lemite', 'palladium', 'meteoric_iron']
})