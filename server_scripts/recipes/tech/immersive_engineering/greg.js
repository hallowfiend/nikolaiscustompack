const oresToProcessIE = [
    //overworld, twiforest, nether, aether, starlight, undergarden, with some "OP" ores omitted
    /* {ore: 'chalcopyrite', byproduct1: 'pyrite', byproduct2: 'pyrite'},
    {ore: 'iron', byproduct1: 'nickel', byproduct2: 'nickel'},
    {ore: 'pyrite', byproduct1: 'sulfur', byproduct2: 'sulfur'},
    {ore: 'copper', byproduct1: 'cobalt', byproduct2: 'cobalt'},
    {ore: 'graphite', byproduct1: 'carbon', byproduct2: 'carbon'},
    {ore: 'diamond', byproduct1: 'graphite', byproduct2: 'graphite'},
    {ore: 'coal', byproduct1: 'coal', byproduct2: 'coal'},
    {ore: 'lazurite', byproduct1: 'sodalite', byproduct2: 'sodalite'},
    {ore: 'sodalite', byproduct1: 'lazurite', byproduct2: 'lazurite'},
    {ore: 'lapis', byproduct1: 'lazurite', byproduct2: 'lazurite'},
    {ore: 'calcite', byproduct1: 'calcium', byproduct2: 'calcium'},
    {ore: 'grossular', byproduct1: 'yellow_garnet', byproduct2: 'yellow_garnet'},
    {ore: 'spessartine', byproduct1: '', byproduct2: ''},
    {ore: 'pyrolusite', byproduct1: '', byproduct2: ''},
    {ore: 'tantalite', byproduct1: '', byproduct2: ''},
    {ore: 'kyanite', byproduct1: '', byproduct2: ''},
    {ore: 'mica', byproduct1: '', byproduct2: ''},
    {ore: 'bauxite', byproduct1: '', byproduct2: ''},
    {ore: 'pollucite', byproduct1: '', byproduct2: ''},
    {ore: 'bentonite', byproduct1: '', byproduct2: ''},
    {ore: 'magnetite', byproduct1: '', byproduct2: ''},
    {ore: 'olivine', byproduct1: '', byproduct2: ''},
    {ore: 'glauconite_sand', byproduct1: '', byproduct2: ''},
    {ore: 'redstone', byproduct1: '', byproduct2: ''},
    {ore: 'ruby', byproduct1: '', byproduct2: ''},
    {ore: 'cinnabar', byproduct1: '', byproduct2: ''},
    {ore: 'almandine', byproduct1: '', byproduct2: ''},
    {ore: 'pyrope', byproduct1: '', byproduct2: ''},
    {ore: 'sapphire', byproduct1: '', byproduct2: ''},
    {ore: 'green_sapphire', byproduct1: '', byproduct2: ''},
    {ore: 'jade', byproduct1: '', byproduct2: ''},
    {ore: 'brilliance', byproduct1: '', byproduct2: ''},
    {ore: 'quartzite', byproduct1: 'quartzite', byproduct2: 'quartzite'},
    {ore: 'chromite', byproduct1: '', byproduct2: ''},
    {ore: 'soulstone', byproduct1: '', byproduct2: ''},
    {ore: 'vinteum', byproduct1: '', byproduct2: ''},
    {ore: 'inert_crystal', byproduct1: '', byproduct2: ''},
    {ore: 'mithril', byproduct1: '', byproduct2: ''},
    {ore: 'cthonic_gold', byproduct1: '', byproduct2: ''},
    {ore: 'gold', byproduct1: '', byproduct2: ''},
    {ore: 'electrum', byproduct1: '', byproduct2: ''},
    {ore: 'galena', byproduct1: '', byproduct2: ''},
    {ore: 'silver', byproduct1: '', byproduct2: ''},
    {ore: 'platinum', byproduct1: '', byproduct2: ''},
    {ore: 'nickel', byproduct1: '', byproduct2: ''},
    {ore: 'sal_ammoniac', byproduct1: '', byproduct2: ''},
    {ore: 'spinel', byproduct1: '', byproduct2: ''},
    {ore: 'red_garnet', byproduct1: '', byproduct2: ''},
    {ore: 'yellow_garnet', byproduct1: '', byproduct2: ''},
    {ore: 'tetrahedrite', byproduct1: '', byproduct2: ''},
    {ore: 'brass', byproduct1: '', byproduct2: ''},
    {ore: 'malachite', byproduct1: '', byproduct2: ''},
    {ore: 'turquoise', byproduct1: '', byproduct2: ''},
    {ore: 'apatite', byproduct1: '', byproduct2: ''},
    {ore: 'tricalcium_phosphate', byproduct1: '', byproduct2: ''},
    {ore: 'pyrochlore', byproduct1: '', byproduct2: ''},
    {ore: 'tin', byproduct1: '', byproduct2: ''},
    {ore: 'cassiterite', byproduct1: '', byproduct2: ''},
    {ore: 'cassiterite_sand', byproduct1: '', byproduct2: ''},
    {ore: 'zeolite', byproduct1: '', byproduct2: ''},
    {ore: 'realgar', byproduct1: '', byproduct2: ''},
    {ore: 'lead', byproduct1: '', byproduct2: ''},
    {ore: 'garnet_sand', byproduct1: '', byproduct2: ''},
    {ore: 'asbestos', byproduct1: '', byproduct2: ''},
    {ore: 'diatomite', byproduct1: '', byproduct2: ''},
    {ore: 'amethyst', byproduct1: '', byproduct2: ''},
    {ore: 'opal', byproduct1: '', byproduct2: ''},
    {ore: 'goethite', byproduct1: '', byproduct2: ''},
    {ore: 'yellow_limonite', byproduct1: '', byproduct2: ''},
    {ore: 'hematite', byproduct1: '', byproduct2: ''},
    {ore: 'magnetite', byproduct1: '', byproduct2: ''},
    {ore: 'vanadium_magnetite', byproduct1: '', byproduct2: ''},
    {ore: 'basaltic_mineral_sand', byproduct1: '', byproduct2: ''},
    {ore: 'granitic_mineral_sand', byproduct1: '', byproduct2: ''},
    {ore: 'fullers_earth', byproduct1: '', byproduct2: ''},
    {ore: 'gypsum', byproduct1: '', byproduct2: ''},
    {ore: 'rock_salt', byproduct1: '', byproduct2: ''},
    {ore: 'salt', byproduct1: '', byproduct2: ''},
    {ore: 'lepidolite', byproduct1: '', byproduct2: ''},
    {ore: 'spodumene', byproduct1: '', byproduct2: ''},
    {ore: 'oilsands', byproduct1: '', byproduct2: ''},
    {ore: 'talc', byproduct1: '', byproduct2: ''},
    {ore: 'soapstone', byproduct1: '', byproduct2: ''},
    {ore: 'pentlandite', byproduct1: '', byproduct2: ''},
    {ore: 'emerald', byproduct1: '', byproduct2: ''},
    {ore: 'certus_quartz', byproduct1: '', byproduct2: ''},
    {ore: 'barite', byproduct1: '', byproduct2: ''},
    {ore: 'alunite', byproduct1: '', byproduct2: ''},
    {ore: 'blue_topaz', byproduct1: '', byproduct2: ''},
    {ore: 'topaz', byproduct1: '', byproduct2: ''},
    {ore: 'chalcocite', byproduct1: '', byproduct2: ''},
    {ore: 'bornite', byproduct1: '', byproduct2: ''},
    {ore: 'electrotine', byproduct1: '', byproduct2: ''},
    {ore: 'dark', byproduct1: '', byproduct2: ''},
    {ore: 'saltpeter', byproduct1: '', byproduct2: ''},
    {ore: 'sphalerite', byproduct1: '', byproduct2: ''},
    {ore: 'blazing_quartz', byproduct1: '', byproduct2: ''},
    {ore: 'beryllium', byproduct1: '', byproduct2: ''},
    {ore: 'cobaltite', byproduct1: '', byproduct2: ''},
    {ore: 'stibnite', byproduct1: '', byproduct2: ''},
    {ore: 'garnierite', byproduct1: '', byproduct2: ''},
    {ore: 'sulfur', byproduct1: 'sulfur', byproduct2: 'sulfur'},
    {ore: 'ember', byproduct1: '', byproduct2: ''},
    {ore: 'vehement_coal', byproduct1: '', byproduct2: ''},
    {ore: 'anthralite', byproduct1: '', byproduct2: ''},
    {ore: 'iesnium', byproduct1: '', byproduct2: ''},
    {ore: 'zanite', byproduct1: '', byproduct2: ''},
    {ore: 'trona', byproduct1: '', byproduct2: ''},
    {ore: 'aluminium', byproduct1: '', byproduct2: ''},
    {ore: 'skyjade', byproduct1: '', byproduct2: ''},
    {ore: 'gravitite', byproduct1: '', byproduct2: ''},
    {ore: 'source', byproduct1: '', byproduct2: ''},
    {ore: 'scheelite', byproduct1: '', byproduct2: ''},
    {ore: 'malarite', byproduct1: '', byproduct2: ''},
    {ore: 'deepsilver', byproduct1: '', byproduct2: ''},
    {ore: 'molybdenum', byproduct1: '', byproduct2: ''},
    {ore: 'starlit_diamond', byproduct1: 'carbon', byproduct2: 'carbon'},
    {ore: 'wulfenite', byproduct1: '', byproduct2: ''},
    {ore: 'molybdenite', byproduct1: '', byproduct2: ''},
    {ore: 'cloggrum', byproduct1: '', byproduct2: ''},
    {ore: 'froststeel', byproduct1: '', byproduct2: ''},
    {ore: 'utherium', byproduct1: '', byproduct2: ''},
    {ore: 'regalium', byproduct1: '', byproduct2: ''} */
]

const ieMillableGems = [
]

const ieMillableIngots = [
    
]

const blacklist = [
    'naquadah'
]

ServerEvents.recipes(event =>{
    event.forEachRecipe({ type: "gtceu:macerator" }, x => {
        let recipe = JSON.parse(x.json)
        
        let chancedOutputs = []
        let eut = recipe.tickInputs.eu[0].content
        if (eut > 128) return; //MV
        if (recipe.inputs.length != 1) return; //length 1 only
        let input = recipe.inputs.item[0].content.ingredient;
        if (!input?.ingredient) return;
        let mainOutputs = recipe.outputs.at(0)
        let secondaryOutputs = recipe.outputs.slice(1)
        secondaryOutputs.forEach(b => {
            let actualChance = 0;
            if (!b?.chance){
                actualChance = 0.99
            }
            else actualChance = b.chance;

            chancedOutputs.push({"chance": actualChance, "output": b.id})
        })
        event.recipes.immersiveengineering.crusher(
            `${mainOutputs.content.count}x ${mainOutputs.content.ingredient.item}`, `#${input.tag}` || input.item, chancedOutputs
        )
    })
})