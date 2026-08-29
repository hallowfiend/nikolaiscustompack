ServerEvents.recipes(event => {
    const yote = [
        'actuallyadditions:wood_casing',
        'actuallyadditions:iron_casing',
        'actuallyadditions:ender_casing',
        'actuallyadditions:atomic_reconstructor',
        'actuallyadditions:lens',
        'actuallyadditions:laser/lens_of_color',
        'actuallyadditions:laser/lens_of_detonation',
        'actuallyadditions:lens_of_the_killer',
        'actuallyadditions:laser/lens_of_certain_death',
        'actuallyadditions:lens_of_disenchanting' //miner lens already removed in yeetlist.js
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
        'PER',
        'ICM',
        'PSR'
    ], {
        R: 'gtceu:red_alloy_plate',
        E: 'immersiveengineering:component_electronic_adv',
        I: 'magichem:signalite_block',
        C: 'actuallyadditions:iron_casing',
        M: 'integrateddynamics:materializer',
        S: 'immersiveengineering:component_steel',
        P: 'immersiveengineering:sheetmetal_steel'
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
    //lenses
    event.shaped('actuallyadditions:lens', [
        'HIB',
        'IGI',
        'BIW'
    ], {
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches',
        I: '#forge:rods/steel',
        G: 'gtceu:black_lens',
        B: 'actuallyadditions:black_quartz'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/wrenches')
    event.shaped('actuallyadditions:lens_of_color', [
        'VAV',
        'BLB',
        'VAV'
    ], {
        A: 'magichem:admixture_color',
        B: 'magichem:bleached_amethyst',
        V: 'actuallyadditions:empowered_emeradic_crystal',
        L: 'actuallyadditions:lens'
    })
    event.shaped('actuallyadditions:lens_of_detonation', [
        'RDR',
        'TLT',
        'RDR'
    ], {
        R: 'actuallyadditions:empowered_restonia_crystal',
        T: 'scguns:nitro_powder',
        L: 'actuallyadditions:lens',
        D: 'kubejs:destructive_node'
    })
    event.shaped('actuallyadditions:lens_of_certain_death', [
        'PSP',
        'SLS',
        'PSP'
    ], {
        S: 'evilcraft:dark_block',
        P: 'actuallyadditions:empowered_enori_crystal',
        L: 'actuallyadditions:lens'
    })
    event.shaped('actuallyadditions:lens_of_the_killer', [
        'SVS',
        'DLD',
        'SVS'
    ], {
        V: Item.of('minecraft:enchanted_book', "{Enchantments:[{id:\"minecraft:sharpness\",lvl:5s}]}"),
        S: 'actuallyadditions:empowered_restonia_crystal_block',
        D: 'evilcraft:spiked_plate',
        L: 'actuallyadditions:lens_of_certain_death'
    })
    event.shaped('actuallyadditions:lens_of_disenchanting', [
        'EAV',
        'MLM',
        'VEA'
    ], {
        V: 'actuallyadditions:empowered_palis_crystal_block',
        E: 'actuallyadditions:empowered_diamantine_crystal_block',
        A: 'apotheosis:mythic_material',
        M: 'goety:mystic_core',
        L: 'actuallyadditions:lens'
    })
})