//priority: 50


GTCEuStartupEvents.registry("gtceu:material", event => {
    //Source-Boosted Dieselixir
    
    event.create('magebloom_oil')
        .fluid()
        .color(0xDE74F4)
        .iconSet(FLUID);

    event.create('alchemically_prepared_magebloom_oil')
        .fluid()
        .color(0xAE49DF)
        .iconSet(FLUID);

    event.create('thaumophytochemical_emulsion')
        .fluid()
        .color(0x7827A8)
        .iconSet(FLUID);

    event.create('thaumophytochemical_extract')
        .fluid()
        .color(0xC14BFC)
        .iconSet(FLUID);
    
    event.create('source_boosted_dieselixir')
        .fluid()
        .color(0xE244C8)
        .iconSet(FLUID);

    //Pyretic Cindergas

    //Vitalized Soulplasma

    //Ichorfuel
    
    event.create('ichorfuel')
        .color(0xffa73b)
        .secondaryColor(0x9e0d0d)
        .gem()
        .iconSet(LAPIS)
        .burnTime(424242)
        .components('vehement_coal', 'ember', '4x carbon', '4x life_essence', '12x exispiravit')
        .flags(
            no_decomp,
            flammable,
            explosive
        );

    // Manaline
    event.create('composite_stardust')
        .dust()
        .color(0xa187ff)
        .iconSet(SHINY)
        .components('deepsilver', 'starlit_diamond', 'luminite', 'purified_vinteum')
        .flags(centrifuge);
    
    event.create('gigantarubra')
        .gem()
        .fluid()
        .color(0x1a1818)
        .secondaryColor(0xba0000)
        .iconSet(NETHERSTAR)
        .flags(no_decomp,
            no_smashing,
            no_smelt
        );
    
    event.create('regal_zanite')
        .dust()
        .fluid()
        .components('regalium', 'zanite')
        .color(0xffea03)
        .secondaryColor(0x8e51e9)
        .iconSet(SHINY);
    
    event.create('rezanite_pentachloride')
        .fluid()
        .components('regal_zanite', '5x chlorine')
        .color(0xffea03)
        .secondaryColor(0x8e51e9)
        .iconSet(SHINY);
    
    event.create('fluororezanitic_acid')
        .fluid()
        .components('rezanite_pentachloride', 'hydrofluoric_acid')
        .color(0x8e51e9)
        .secondaryColor(0xffea03)
        .iconSet(NETHERSTAR);
    
    event.create('spiritual_debris')
        .dust()
        .formula('👻')
        .color(0x99499c)
        .secondaryColor(0xffe587)
        .iconSet(WOOD);

    //Misc alloys

    /* event.create('strumm')
        .ingot()
        .iconSet(LIGNITE)
        .color(0x50555e)
        .secondaryColor(0x5e5950)
        .components('cloggrum', 'anthralite', 'zinc')
        .flags(
            plates,
            rod
        ) */
})