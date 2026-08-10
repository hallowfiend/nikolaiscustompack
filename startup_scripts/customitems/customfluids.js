
StartupEvents.registry('fluid', event => {
    //manaline
    event.create('inactivated_virulence')
        .displayName('Inactivated Virulence')
        .thickTexture(0x5a3463)
    
    event.create('underbroth')
        .displayName('Underbroth')
        .thinTexture(0x83538f)
    
    event.create('impure_interdim_tisane')
        .displayName('Impure Interdimensional Tisane')
        .thickTexture(0x712da6)

    event.create('clarified_interdim_tisane')
        .displayName('Clarified Interdimensional Tisane')
        .thinTexture(0xba7dff)
    
    event.create('pure_interdim_tisane')
        .displayName('Pure Interdimensional Tisane')
        .thinTexture(0x977dff)
    
    event.create('entheogen')
        .displayName('Interdimensional Entheogen')
        .thickTexture(0x977dff)

    //drinks

    event.create('forgotten_imbibation')
    .displayName('Forgotten Imbibation')
    .thinTexture(0xc2c2c2)

    event.create('red_rock_blaster')
    .displayName('Red Rock Blaster')
    .thinTexture(0x7a0e00)

    event.create('skull_crusher_ale')
    .displayName('Skullcrusher Ale')
    .thinTexture(0xFE0026)

    event.create('slayer_stout')
    .displayName('Slayer Stout')
    .thinTexture(0x3E1508)

    event.create('soulchill_absinthe')
    .displayName('Soulchill Absinthe')
    .thinTexture(0x9cf8ff)
    .luminosity(12)
    
    event.create('pyrogenic_cognac')
    .displayName('Pyrogenic Cognac')
    .thinTexture(0xff9100)
    .luminosity(12)

})