StartupEvents.registry('item', event => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // biological cyberware
    event.create('nutrient_sacs')
    .displayName('Nutrient Sacs');
    // crafting components
    event.create('nature_offering')
    .displayName('Offering to Nature');
    event.create('prepared_stone')
    .displayName('Prepared Stone');
    event.create('bloodied_dust')
    .displayName('Bloodied Dust');
    event.create('castbrain')
    .displayName('Castbrain');
    event.create('biomantic_neuron')
    .displayName('Biomantic Neuron');
    event.create('ashen_blend')
    .displayName('Ashen Blend');
    event.create('ethereal_ashen_blend')
    .displayName('Ethereal Ashen Blend');
    //dormant blood orbs
    const bloodOrbTiers = [
        'weak',
        'apprentice',
        'magician',
        'master',
        'archmage',
        'transcendent'
    ]
    bloodOrbTiers.forEach( tier => {
        var orbLang = capitalizeFirstLetter(tier)
        event.create(`dormant_${tier}_blood_orb`)
        .displayName(`Dormant ${orbLang} Blood Orb`)
    })
    //hibernal herbs sigil replacements
    event.create('singed_leaves')
    .displayName('Singed Leaves');
    //custom aspecti
    const customAspectiMetals = [
        'tin',
        'zinc',
        'aluminium',
        'gold',
        'electrum',
        'constantan',
        'invar',
        'pewter',
        'bronze',
        'brass',
        'duralumin'
    ]
    customAspectiMetals.forEach(metal => {
        var metalLang = capitalizeFirstLetter(metal)
        event.create(`aspectus_${metal}`)
        .displayName(`${metalLang} Aspectus`)
        .tag(`embers:aspectus/${metal}`);
    })
    event.create('aspectus_rose_gold')
    .displayName('Rose Gold Aspectus')
    .tag('embers:aspectus/rose_gold')
    event.create('aspectus_sterling_silver')
    .displayName('Sterling Silver Aspectus')
    .tag('embers:aspectus/sterling_silver')
})