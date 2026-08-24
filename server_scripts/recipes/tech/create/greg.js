const createMillableIngots = [
    'clay',
    'brick',
    'iron',
    'gold',
    'nickel',
    'chromium',
    'cadmium',
    'brass',
    'lead',
    'tin',
    'aluminium',
    'duralumin',
    'bendalloy',
    'nicrosil',
    'steel',
    'electrum',
    'silver',
    'copper',
    'pewter',
    'invar'
]

const createMillableGems = [
    'lapis',
    'diamond',
    'emerald',
    'flint',
    'quartzite',
    'amethyst',
    'coal',
    'charcoal',
    'coke',
    'jade',
    'nether_quartz',
    'blazing_quartz',
    'apatite',
    'salt',
    'rock_salt',
    'sal_ammoniac',
    'ender_pearl',
    'ender_eye'
]

const createSmashableIngots = [
    'nicrosil',
    'bendalloy',
    'pewter',
    'invar',
    'duralumin',
    'compressed_iron',
    'potin',
    'rose_gold',
    'hallowed_gold',
    'arcane_gold'
]

const createCuttableGemBlocks = [
    /* 'solid_aerialis',
    'solid_terrae',
    'solid_aqua',
    'solid_infernalis',
    'solid_arkanum',
    'solid_profanum',
    'solid_sacrum',
    'solid_xenorhast',
    'raw_will',
    'corrosive_will',
    'destructive_will',
    'vengeful_will',
    'steadfast_will', */
]

ServerEvents.recipes(event => {
    createMillableIngots.forEach(ingot => {
    event.recipes.create.milling(`gtceu:${ingot}_dust`, `#forge:ingots/${ingot}`)
    })
    createMillableGems.forEach(ingot => {
    event.recipes.create.milling(`gtceu:${ingot}_dust`, `#forge:gems/${ingot}`)
    })
    createSmashableIngots.forEach(ingot => {
    event.recipes.create.pressing(`gtceu:${ingot}_plate`, `#forge:ingots/${ingot}`)
    })
    event.recipes.create.mixing(['4x gtceu:fertilizer'],
    ['2x gtceu:apatite_dust', '2x gtceu:tricalcium_phosphate_dust', Fluid.of('minecraft:water').withAmount(1000)])
})