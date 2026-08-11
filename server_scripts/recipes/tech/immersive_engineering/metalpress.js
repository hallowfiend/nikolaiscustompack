const plateMold = 'immersiveengineering:mold_plate'
const wireMold = 'immersiveengineering:mold_wire'
const rodMold = 'immersiveengineering:mold_rod'
const gearMold = 'immersiveenginering:mold_gear'
const boltMold = 'gtceu:invar_buzz_saw_blade'

ServerEvents.recipes(event => {
    //circuit components
    event.recipes.immersiveengineering.metal_press(
        "ae2:printed_engineering_processor",
        "#forge:gems/diamond",
        "ae2:engineering_processor_press"
    )
    event.recipes.immersiveengineering.metal_press(
        "ae2:printed_logic_processor",
        "#forge:ingots/gold",
        "ae2:logic_processor_press"
    )
    event.recipes.immersiveengineering.metal_press(
        "ae2:printed_silicon",
        "#forge:silicon",
        "ae2:silicon_press"
    )
    event.recipes.immersiveengineering.metal_press(
        "ae2:printed_calculation_processor",
        "#forge:gems/certus_quartz",
        "ae2:calculation_processor_press"
    )
    //press duping
    const presses = [
        "ae2:engineering_processor_press",
        "ae2:calculation_processor_press",
        "ae2:silicon_press",
        "ae2:logic_processor_press"
    ]
    presses.forEach(press => {
        event.recipes.immersiveengineering.metal_press(
        press,
        "#forge:storage_blocks/iron",
        press
    )
    })
    //G R E G

    const dustsToCompact = [
        "wood",
        "livingwood"
    ]
    dustsToCompact.forEach(dust => {
        
    })
    const platesToSmash = [
        "soul_stained_steel",
        "amethyst_bronze",
        "drenched_iron",
        "manasteel",
        "pewter",
        "cloggrum",
        "froststeel",
        "deepsilver",
        "netherite",
        'nicrosil',
        'bendalloy',
        'duralumin',
        'cursed_alloy',
        'andesite_alloy',
        'infused_iron',
        'tainted_gold',
        'arcane_gold',
        'cupronickel',
        'hallowed_gold',
        'wrought_iron',
        'silicon',
        'mithril',
        'compressed_iron',
        'sterling_silver',
        'potin'
    ]
    platesToSmash.forEach(plate => {
        event.recipes.immersiveengineering.metal_press(`gtceu:${plate}_plate`, `#forge:ingots/${plate}`, plateMold)
        .id(`kubejs:immersive_engineering/metal_press/${plate}_plate`);
    })
    event.recipes.immersiveengineering.metal_press(`embers:dawnstone_plate`, `#forge:ingots/dawnstone`, plateMold);
    const wiresToPull = [
        "gold",
        "iron",
        'steel',
        "soul_stained_steel",
        "manasteel",
        'cupronickel',
        'froststeel',
        'red_alloy',
        'nickel',
        'hallowed_gold',
        'silver',
        'tin',
        'mithril'
    ]
    wiresToPull.forEach(wire => {
        event.recipes.immersiveengineering.metal_press(`2x gtceu:${wire}_single_wire`, `#forge:ingots/${wire}`, wireMold)
        .id(`kubejs:immersive_engineering/metal_press/${wire}_wire`);
    })
    const foilsToFoil = [
        'copper',
        'gold',
        'manasteel',
        'pewter',
        'wrought_iron',
        'cupronickel',
        'platinum',
        'froststeel',
        'dawnstone',
        'aluminium',
        'silicon',
        'red_alloy',
        'steel',
        'electrum',
        'soul_stained_steel',
        'lead',
        'hallowed_gold',
        'silver',
        'zinc',
        'bronze',
        'tin',
        'cloggrum',
        'mithril'
    ]
    foilsToFoil.forEach(foil => {
        event.recipes.immersiveengineering.metal_press(`2x gtceu:${foil}_foil`, `#forge:plates/${foil}`, plateMold)
        .id(`kubejs:immersive_engineering/metal_press/${foil}_foil`);
    })
    const fineWiresToRefine = [
        "gold",
        "copper",
        'dawnstone',
        'electrum',
        'steel',
        'pewter',
        'cupronickel',
        'platinum',
        'froststeel',
        'aluminium',
        'red_alloy',
        'soul_stained_steel',
        'lead',
        'hallowed_gold',
        'silver',
        'zinc',
        'tin',
        'mithril'
    ]
    fineWiresToRefine.forEach(wire => {
        event.recipes.immersiveengineering.metal_press(`2x gtceu:fine_${wire}_wire`, `#forge:foils/${wire}`, wireMold)
        .id(`kubejs:immersive_engineering/metal_press/${wire}_fine_wire`);
    })
    const rodsToRoll = [
        "dawnstone",
        "arcane_gold",
        'pewter',
        'wrought_iron',
        'sterling_silver',
        'compressed_iron',
        'nicrosil',
        'bendalloy',
        'duralumin',
        'red_alloy',
        'manasteel',
        'soul_stained_steel',
        'infused_iron',
        'hallowed_gold',
        'tainted_gold',
        'andesite_alloy',
        'mithril',
        'cloggrum',
        'froststeel',
        'drenched_iron',
        'potin'
    ]
    rodsToRoll.forEach(rod => {
        event.recipes.immersiveengineering.metal_press(`2x gtceu:${rod}_rod`, `#forge:ingots/${rod}`, rodMold)
        .id(`kubejs:immersive_engineering/metal_press/${rod}_rod`);
        event.recipes.immersiveengineering.metal_press(`gtceu:long_${rod}_rod`, `#forge:double_plates/${rod}`, rodMold)
        .id(`kubejs:immersive_engineering/metal_press/${rod}_long_rod`);
    })
    const boltsToCut = [
        "steel",
        "wood",
        "livingwood",
        "iron",
        'copper',
        'andesite_alloy',
        'pewter',
        'gold',
        'drenched_iron',
        'wrought_iron',
        'platinum',
        'froststeel',
        'dawnstone',
        'aluminium',
        'sterling_silver',
        'red_alloy',
        'nicrosil',
        'potin',
        'invar',
        'electrum',
        'rose_gold',
        'manasteel',
        'soul_stained_steel',
        'lead',
        'hallowed_gold',
        'silver',
        'bronze',
        'brass',
        'tin',
        'mithril',
        'cloggrum'
    ]
    boltsToCut.forEach(bolt => {
        event.recipes.immersiveengineering.metal_press(`2x gtceu:${bolt}_bolt`, `#forge:rods/${bolt}`, boltMold)
        .id(`kubejs:immersive_engineering/metal_press/${bolt}_bolt`);
        event.recipes.immersiveengineering.metal_press(`gtceu:${bolt}_screw`, `#forge:bolts/${bolt}`, rodMold)
        .id(`kubejs:immersive_engineering/metal_press/${bolt}_screw`);
    })
    const gearsToRotate = [

    ]
})