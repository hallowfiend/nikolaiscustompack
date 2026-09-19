ServerEvents.tags('fluid', event => {
    event.add('forge:phenol', 'gtceu:phenol')
    event.add('forge:carbon_dioxide', 'gtceu:carbon_dioxide')
    event.add('forge:formaldehyde', 'gtceu:formaldehyde')
    event.add('forge:bakelite', 'gtceu:bakelite')
    event.add('forge:methanol', 'gtceu:methanol')
    event.add('forge:menril_resin', 'integrateddynamics:menril_resin')
    event.add('forge:liquid_chorus', 'integrateddynamics:liquid_chorus')
    event.add('forge:plantoil', 'gtceu:seed_oil')
    event.add('forge:canola_oil', 'actuallyadditions:canola_oil')
    event.remove("minecraft:water", [
        "undergarden:virulent_mix_source",
        "undergarden:virulent_mix_flowing",
        "create:chocolate",
        "create:flowing_chocolate",
        "create:honey",
        "create:flowing_honey",
        "createaddition:seed_oil",
        "createaddition:flowing_seed_oil",
        "hexerei:tallow_fluid",
        "hexerei:tallow_flowing",
        "hexerei:blood_fluid",
        "hexerei:blood_flowing"
    ]);
    event.remove("minecraft:lava", ["hexerei:quicksilver_fluid"])
    event.add("ad_astra:fuel", "gtceu:rocket_fuel")
    //metals
    const gtceuMetalsToTagify = [
        'copper',
        'iron',
        'gold',
        'tin',
        'zinc',
        'nickel',
        'brass',
        'bronze',
        'nicrosil',
        'bendalloy',
        'duralumin',
        'steel',
        'lead',
        'silver',
        'cobalt',
        'rose_gold',
        'pewter',
        'electrum',
        'invar',
        'platinum'
    ]
    gtceuMetalsToTagify.forEach(metal => {
        event.add(`forge:molten_${metal}`, `gtceu:${metal}`)
    })
    event.add('forge:molten_aluminum', 'gtceu:aluminium')
     event.add('constructs_casting:molten_mithril', 'gtceu:mithril')
    event.add('tcompat:molten_aeternium', 'gtceu:aeternium')
    event.add('tcompat:molten_terminite', 'gtceu:terminite')
})