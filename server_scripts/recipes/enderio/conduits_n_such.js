//based on the moni code but with more gating of eio behind gt
ServerEvents.recipes(event => {
    event.remove({ id: "enderio:pressurized_fluid_conduit_upgrade" })
    event.remove({ id: "enderio:ender_fluid_conduit_upgrade" })
    event.remove({output: "enderio:pressurized_fluid_conduit" })
    event.remove({output: "enderio:ender_fluid_conduit" })
    event.remove({output: "enderio:item_conduit" })
    event.remove({output: "enderio:conductive_conduit" })
    event.remove({output: "enderio:energetic_conduit" })
    event.remove({output: "enderio:vibrant_conduit" })

    event.recipes.gtceu.assembler("kubejs:item_conduit")
        .itemInputs("3x gtceu:pulsating_alloy_single_wire", "6x enderio:conduit_binder", "2x gtceu:polyvinyl_chloride_foil")
        .itemOutputs("8x enderio:item_conduit")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.assembler("kubejs:pressurized_conduit")
        .itemInputs("2x gtceu:compressed_iron_plate", "2x #enderio:fused_quartz", "6x enderio:conduit_binder", "2x gtceu:bakelite_plate")
        .itemOutputs("8x enderio:presurrized_fluid_conduit")
        .duration(80)
        .EUt(16)
    
    event.recipes.gtceu.assembler("kubejs:ender_conduit")
        .itemInputs("2x gtceu:vibrant_alloy_single_wire", "enderio:pressurized_fluid_conduit", "6x enderio:conduit_binder", "2x gtceu:polyvinyl_chloride_foil")
        .itemOutputs("8x enderio:ender_fluid_conduit")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.assembler("kubejs:conductive_conduit")
        .itemInputs("3x gtceu:conductive_alloy_single_wire", "6x enderio:conduit_binder")
        .itemOutputs("4x enderio:conductive_conduit")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.assembler("kubejs:energetic_conduit")
        .itemInputs("2x gtceu:energetic_alloy_single_wire", "enderio:conductive_conduit", "6x enderio:conduit_binder")
        .itemOutputs("4x enderio:energetic_conduit")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.assembler("kubejs:vibrant_conduit")
        .itemInputs("2x gtceu:vibrant_alloy_single_wire", "enderio:energetic_conduit", "6x enderio:conduit_binder")
        .itemOutputs("4x enderio:vibrant_conduit")
        .duration(80)
        .EUt(16)

    event.remove({ output: ["enderio:iron_gear", "enderio:energized_gear", "enderio:vibrant_gear", "enderio:dark_bimetal_gear"] })
    event.remove({ output: ["enderio:pulsating_crystal", "enderio:vibrant_crystal"] })

    event.recipes.gtceu.autoclave("kubejs:vibrant_crystal")
        .itemInputs("minecraft:emerald")
        .inputFluids(Fluid.of("gtceu:vibrant_alloy", 144))
        .itemOutputs("enderio:vibrant_crystal")
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.autoclave("kubejs:pulsating_crystal")
        .itemInputs("minecraft:diamond")
        .inputFluids(Fluid.of("gtceu:pulsating_alloy", 144))
        .itemOutputs("enderio:pulsating_crystal")
        .duration(100)
        .EUt(30)

    event.remove({ output: "enderio:basic_capacitor" })

    const capacitorCores = [
        ["#gtceu:circuits/ulv", 1],
        ["gtceu:capacitor", 2],
        ["gtceu:smd_capacitor", 3],
        ["gtceu:advanced_smd_capacitor", 3 * 4]
    ]

    capacitorCores.forEach(core => {
        event.shaped(`${core[1]}x enderio:basic_capacitor`, [
            " N ",
            "NCN",
            "W W"
        ], {
            N: "#forge:ingots/electrical_steel",
            C: core[0],
            W: "gtceu:tin_single_wire"
        }).id(`kubejs:basic_capacitor_${Item.of(core[0]).idLocation.path}`)
    })

    event.replaceInput({ id: "enderio:octadic_capacitor" }, "minecraft:glowstone", "#forge:storage_blocks/regalium")

    event.remove({ id: "enderio:advanced_capacitor_bank" })
    event.remove({ id: "enderio:vibrant_capacitor_bank_upgrade" })

    event.replaceInput({ id: "enderio:basic_capacitor_bank" }, "#forge:ingots/iron", "#forge:plates/iron")
    event.replaceInput({ id: "enderio:advanced_capacitor_bank_upgrade" }, "#forge:ingots/energetic_alloy", "#forge:plates/electrical_steel")
    event.replaceInput({ id: "enderio:vibrant_capacitor_bank" }, ["#forge:ingots/vibrant_alloy", "enderio:octadic_capacitor"], "#forge:plates/vibrant_alloy")

    event.recipes.gtceu.alloy_smelter("kubejs:fused_quartz")
        .itemInputs("3x minecraft:quartz")
        .notConsumable("gtceu:block_casting_mold")
        .itemOutputs("enderio:fused_quartz")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:clear_glass_soda_ash")
        .itemInputs("minecraft:glass", "gtceu:tiny_soda_ash_dust")
        .itemOutputs("enderio:clear_glass")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:clear_glass_quicklime")
        .itemInputs("minecraft:glass", "gtceu:tiny_quicklime_dust")
        .itemOutputs("enderio:clear_glass")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:enlightened_fused_quartz")
        .itemInputs("#enderio:fused_quartz", "minecraft:glowstone")
        .itemOutputs("enderio:fused_quartz_e")
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:dark_fused_quartz")
        .itemInputs("#enderio:fused_quartz", "evilcraft:dark_gem_crushed")
        .itemOutputs("enderio:fused_quartz_d")
        .duration(200)
        .EUt(32)

    event.recipes.gtceu.alloy_smelter("kubejs:enlightened_clear_glass")
        .itemInputs("#enderio:clear_glass", "minecraft:glowstone")
        .itemOutputs("enderio:clear_glass_e")
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:dark_clear_glass")
        .itemInputs("#enderio:clear_glass", "evilcraft:dark_gem_crushed")
        .itemOutputs("enderio:clear_glass_d")
        .duration(200)
        .EUt(32)

    event.remove({ output: "enderio:void_chassis" })
    event.remove({ output: "enderio:ensouled_chassis" })

    event.recipes.gtceu.alloy_smelter("kubejs:void_chassis")
        .itemInputs("gtceu:hv_machine_hull", "#forge:dusts/grains_of_infinity")
        .itemOutputs("enderio:void_chassis")
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.alloy_smelter("kubejs:ensouled_chassis")
        .itemInputs("enderio:void_chassis", "#forge:dusts/soularium")
        .itemOutputs("enderio:ensouled_chassis")
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.alloy_smelter("kubejs:infinity_rod")
        .itemInputs("gtceu:dark_steel_rod", "enderio:grains_of_infinity")
        .itemOutputs("enderio:infinity_rod")
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("kubejs:conduit_binder_composite")
        .itemInputs("2x minecraft:clay_ball", "3x minecraft:gravel", "2x #minecraft:smelts_to_glass")
        .itemOutputs("8x enderio:conduit_binder_composite")
        .duration(64)
        .EUt(7)
    
    event.remove({ output: ["enderio:yeta_wrench"] })
    event.shaped("enderio:yeta_wrench", [
        "I I",
        " G ",
        " I "
    ], {
        I: "#forge:ingots/iron",
        G: "gtceu:iron_gear"
    }).id("kubejs:yeta_wrench")

    event.replaceInput({ id: "enderio:redstone_conduit" }, "gtceu:red_alloy_ingot", "gtceu:red_alloy_single_wire")

    event.remove({ id: "enderio:crafter" })
    event.shaped("enderio:crafter", [
            "RCR",
            "GFG",
            "SSS"
        ], {
            C: "minecraft:crafting_table",
            F: "gtceu:hv_machine_hull",
            G: "enderio:iron_gear",
            R: "gtceu:exquisite_echo_shard",
            S: "gtceu:pulsating_alloy_single_wire"
        }).id("enderio:crafter")

    event.shaped("enderio:z_logic_controller", [
        "SHS",
        "SCS",
        "WBW"
    ], {
        B: "gtceu:red_alloy_block",
        C: "#gtceu:circuits/mv",
        H: "minecraft:zombie_head",
        S: "#forge:ingots/soularium",
        W: "gtceu:silicon_wafer"
    }).id("kubejs:z_logic_controller")

    event.shaped("2x enderio:z_logic_controller", [
        "SHS",
        "SCS",
        "WBW"
    ], {
        B: "gtceu:red_alloy_block",
        C: "#gtceu:circuits/mv",
        H: "minecraft:zombie_head",
        S: "#forge:ingots/soularium",
        W: "gtceu:phosphorus_wafer"
    }).id("kubejs:z_logic_controller_2x")

    event.shaped("4x enderio:z_logic_controller", [
        "SHS",
        "SCS",
        "WBW"
    ], {
        B: "gtceu:red_alloy_block",
        C: "#gtceu:circuits/mv",
        H: "minecraft:zombie_head",
        S: "#forge:ingots/soularium",
        W: "gtceu:naquadah_wafer"
    }).id("kubejs:z_logic_controller_4x")

    event.shaped("8x enderio:z_logic_controller", [
        "SHS",
        "SCS",
        "WBW"
    ], {
        B: "gtceu:red_alloy_block",
        C: "#gtceu:circuits/mv",
        H: "minecraft:zombie_head",
        S: "#forge:ingots/soularium",
        W: "gtceu:neutronium_wafer"
    }).id("kubejs:z_logic_controller_8x")

    event.replaceInput({ id: "enderio:glider_wing" }, "#forge:ingots/dark_steel", "#forge:nuggets/dark_steel")

    event.replaceInput({ id: "enderio:staff_of_travelling" }, "#forge:ingots/dark_steel", "#forge:rods/dark_steel")
    event.replaceInput({ id: "enderio:staff_of_travelling" }, "enderio:ender_crystal", "enderio:pulsating_crystal")

    event.replaceInput({ id: "enderio:travel_anchor" }, "enderio:conduit_binder", "#forge:plates/vibrant_alloy")
    event.replaceInput({ id: "enderio:travel_anchor" }, "iron_ingot", "#forge:plates/dark_steel")

    // coordinate selector
    event.remove({ id: "enderio:coordinate_selector" })
    event.shaped("enderio:coordinate_selector", [
        "ABC",
        " DC",
        "  C"
    ], {
        A: "gtceu:mv_emitter",
        B: "#forge:storage_blocks/emerald",
        C: "#forge:plates/electrical_steel",
        D: "enderio:vibrant_gear"
    }).id("kubejs:coordinate_selector")

    // powered spawner
    event.remove({ id: "enderio:powered_spawner" })
    event.shaped("enderio:powered_spawner", [
        "ABA",
        "ACA",
        "DED"
    ], {
        A: "#forge:ingots/electrical_steel",
        B: "enderio:broken_spawner",
        C: "enderio:ensouled_chassis",
        D: "#forge:gems/vibrant_crystal",
        E: "enderio:z_logic_controller"
    }).modifyResult((grid, result) => {
        let input = grid.find("enderio:broken_spawner")
        return result.withNBT(input.nbt)
    }).id("kubejs:powered_spawner")

    event.replaceInput({ id: "enderio:slice_and_splice" }, "#forge:ingots/soularium", "#forge:plates/tungsten_steel")
    event.replaceInput({ id: "enderio:slice_and_splice" }, "iron_bars", "enderio:dark_steel_bars")

    event.remove({ id: "enderio:wired_charger" })
    event.shaped("enderio:wired_charger", [
        "ABA",
        "CDC",
        "ECE"
    ], {
        A: "#forge:plates/dark_steel",
        B: "ae2:charger",
        C: "enderio:conductive_conduit",
        D: "enderio:void_chassis",
        E: "#forge:plates/electrical_steel"
    }).id("kubejs:wired_charger")

    event.replaceInput({ input: "#forge:ingots/copper_alloy" }, "enderio:copper_alloy_ingot", "enderio:pulsating_alloy_ingot")

    event.shapeless("enderio:fluid_tank", ["enderio:fluid_tank"])
    event.shapeless("enderio:pressurized_fluid_tank", ["enderio:pressurized_fluid_tank"])
    event.remove({output: "enderio:dense_me_conduit" })
    event.remove({output: "enderio:me_conduit" })

    event.recipes.gtceu.assembler("kubejs:dense_me_conduit")
            .itemInputs("4x enderio:me_conduit", "5x enderio:conduit_binder")
            .itemOutputs("2x enderio:dense_me_conduit")
            .duration(80)
            .EUt(16)
    event.recipes.gtceu.assembler("kubejs:me_conduit")
            .itemInputs("3x ae2:fluix_covered_cable", "6x enderio:conduit_binder")
            .itemOutputs("8x enderio:me_conduit")
            .duration(100)
            .EUt(16)

    event.replaceInput({ output: "enderio:extraction_speed_upgrade_3" }, "gtceu:soularium_ingot", "gtceu:aluminium_ingot")

    event.replaceInput({ id: "enderio:conduit_probe" }, "enderio:conductive_alloy_ingot", "gtceu:conductive_alloy_ingot")
    event.replaceInput({ id: "enderio:conduit_probe" }, "enderio:energy_conduit", "gtceu:conductive_alloy_single_wire")
})
