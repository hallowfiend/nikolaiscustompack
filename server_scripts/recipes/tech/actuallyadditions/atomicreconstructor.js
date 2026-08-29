ServerEvents.recipes(event => {
    const yote = [
        'actuallyadditions:wood_casing',
        'actuallyadditions:iron_casing',
        'actuallyadditions:ender_casing',
        'actuallyadditions:atomic_reconstructor'
    ]
    yote.forEach(yeet => {
        event.remove({id: yeet})
    })
    //casings
    event.shaped('actuallyadditions:wood_casing', [
        'PPP',
        'PTP',
        'PPP'
    ], {
        P: 'gtceu:wood_plate',
        T: '#forge:nuggets/steel'
    })
    event.shaped('actuallyadditions:iron_casing', [
        'BIB',
        'ICI',
        'BIB'
    ], {
        B: '#forge:storage_blocks/black_quartz',
        I: '#forge:plates/iron',
        C: 'actuallyadditions:wood_casing'
    })
    event.shaped('actuallyadditions:ender_casing', [
        'SVS',
        'VCV',
        'SVS'
    ], {
        S: 'gtceu:strumm_plate',
        V: 'actuallyadditions:empowered_void_crystal',
        C: 'actuallyadditions:iron_casing'
    })
    //the reconstructor itself
    event.shaped('actuallyadditions:atomic_reconstructor', [
        'RER',
        'ICM',
        'RER'
    ], {
        R: 'gtceu:red_alloy_plate',
        E: 'immersiveengineering:component_electronic_adv',
        I: 'nagichem:signalite_block',
        C: 'actuallyadditions:iron_casing',
        M: 'integrateddynamics:materializer'
    })
    //restonia from signalite
    event.remove({id: 'actuallyadditions:laser/crystalize_restonia_crystal'})
    event.custom({
    "type": "actuallyadditions:laser",
    "energy": 40,
    "ingredient": {
    "item": "magichem:signalite"
    },
    "result": {
    "item": "actuallyadditions:restonia_crystal"
    }
    })
    event.remove({id: 'actuallyadditions:laser/crystalize_restonia_crystal_block'})
    event.custom({
    "type": "actuallyadditions:laser",
    "energy": 400,
    "ingredient": {
        "item": "magichem:signalite_block"
    },
    "result": {
        "item": "actuallyadditions:restonia_crystal_block"
    }
    })
})