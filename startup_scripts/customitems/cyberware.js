// Listen to item registry event
StartupEvents.registry('item', event => {
    // Biological Cyberware
    event.create('nutrient_sacs')
    .displayName('Nutrient Sacs');
})