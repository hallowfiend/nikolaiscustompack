const cleaverCompendiumCleavers = [
    'silver',
    'necromium',
    'neptunium',
    'certus_quartz',
    'nether_quartz',
    'fluix',
    'dawnstone',
    'embers_lead',
    'soul_stained_steel'
]

const dungeonsDelightCleavers = [
    'flint',
    'iron',
    'gold',
    'stained',
    'diamond',
    'netherite',
    'knightmetal',
    'steeleaf',
    'fiery'
]

ServerEvents.highPriorityData((event) => {
    dungeonsDelightCleavers.forEach(cleaver => {
        event.addJson(`dungeonsdelight:weapon_attributes/${cleaver}_cleaver.json`, {
            parent: "bettercombat:sword",
        });
    })
    cleaverCompendiumCleavers.forEach(cleaver => {
        event.addJson(`cleaver_compendium:weapon_attributes/${cleaver}_cleaver.json`, {
            parent: "bettercombat:sword",
        });
    })
});