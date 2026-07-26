StartupEvents.registry('item', event => {
    // biological cyberware
    event.create('nutrient_sacs')
    .displayName('Nutrient Sacs');
    // crafting components
    event.create('nature_offering')
    .displayName('Offering to Nature');
    event.create('bloodied_dust')
    .displayName('Bloodied Dust');
    //hibernal herbs sigil replacements
    event.create('singed_leaves')
    .displayName('Singed Leaves');
    //custom aspecti
    const customAspectiMetals = [
        'tin',
        'zinc',
        'aluminium',
        'gold',
        'rose_gold',
        'sterling_silver',
        'electrum',
        'constantan',
        'invar',
        'pewter',
        'bronze',
        'brass',
        'duralumin'
    ]
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    customAspectiMetals.forEach(metal =>{
        var metalLang = capitalizeFirstLetter(metal)
        event.create(`aspectus_${metal}`)
        .displayName(`${metalLang} Aspectus`)
        .tag(`embers:aspectus/${metal}`);
    })
})