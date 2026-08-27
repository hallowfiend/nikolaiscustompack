ServerEvents.recipes(event => {
    //casings
    event.shaped('2x gtceu:industrial_steam_casing', [
        'DBD',
        'BHB',
        'DBD'
    ], {
        D: 'gtceu:dawnstone_bolt',
        B: 'gtceu:brass_plate',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
    //clockwork sifter
    event.shaped('gtceu:clockwork_sifter', [
        'BMB',
        'PCP',
        'GEG'
    ], {
        B: 'gtceu:double_brass_plate',
        M: 'compressedcreativity:mesh_woven',
        P: 'create:mechanical_piston',
        C: 'embers:mechanical_core',
        G: 'create:rotation_speed_controller',
        E: 'embers:resonating_bell'
    })
    //clockwork centrifuge
    event.shaped('gtceu:clockwork_centrifuge', [
        'BMB',
        'NCN',
        'RPR'
    ], {
        B: 'gtceu:double_brass_plate',
        M: 'embers:mixer_centrifuge',
        C: 'embers:mechanical_core',
        N: 'magichem:magichemical_mechanism',
        R: 'create:rotation_speed_controller',
        P: 'immersiveengineering:light_engineering'
    })
})