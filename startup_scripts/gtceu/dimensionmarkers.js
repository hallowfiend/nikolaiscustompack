GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {

    //Dimensions
    event.create('undergarden:undergarden')
        .iconSupplier(() => Item.of('undergarden:catalyst').getItem())
        .tier(0)
        .overrideName('The Undergarden')
    
    event.create('aether:the_aether')
        .tier(0)
        .iconSupplier(() => Item.getItem('aether:aether_portal_frame'))
        .overrideName('The Aether')

    event.create('twilightforest:twilight_forest')
        .tier(0)
        .iconSupplier(() => Item.getItem('twilightforest:twilight_portal_miniature_structure'))
        .overrideName('The Twilight Forest')

    // Planets
    event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('ad_astra:earth_globe').getItem())
        .tier(0)
        .overrideName('Earth Orbit')

    event.create('ad_astra:moon')
        .tier(1)
        .iconSupplier(() => Item.getItem('ad_astra:moon_globe'))
        .overrideName('Moon')

    event.create('ad_astra:mars')
        .tier(2)
        .iconSupplier(() => Item.getItem('ad_astra:mars_globe'))
        .overrideName('Mars')

    event.create('ad_astra:venus')
        .tier(3)
        .iconSupplier(() => Item.getItem('ad_astra:venus_globe'))
        .overrideName('Venus')

    event.create('ad_astra:mercury')
        .tier(3)
        .iconSupplier(() => Item.getItem('ad_astra:mercury_globe'))
        .overrideName('Mercury')

    event.create('ad_astra:glacio')
        .tier(3)
        .iconSupplier(() => Item.getItem('ad_astra:glacio_stone'))
        .overrideName('Glacio')
})