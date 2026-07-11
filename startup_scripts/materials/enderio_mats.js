//priority: 70

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("dark_steel")
        .ingot()
        .fluid()
        .color(0x414751)
        .iconSet(DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            centrifuge
        )
        .components("iron", "obsidian", 'dark')

    event.create("conductive_alloy")
        .ingot()
        .fluid()
        .color(0xf7b29b)
        .iconSet(METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("iron", "redstone")
        .cableProperties(32, 1, 0, true)

    event.create("energetic_alloy")
        .ingot().fluid()
        .color(0xffb545)
        .iconSet(SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            no_decomp
        )
        .blastTemp(1250, "low", 120, 400)
        .components("gold", "redstone", "glowstone", 'electrotine')
        .cableProperties(128, 1, 0, true)

    event.create("vibrant_alloy")
        .ingot().fluid()
        .color(0xa4ff70)
        .iconSet(SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            no_decomp
        )
        .blastTemp(1350, "low", 120, 400)
        .components("energetic_alloy", "ender_pearl", 'luminite')
        .cableProperties(512, 1, 0, true)

    event.create("pulsating_alloy")
        .ingot()
        .fluid()
        .color(0x2AB38F)
        .iconSet(SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            no_decomp
        )
        .components("gallium", 'ender_pearl', 'manasteel')
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1)
        .iconSet(METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            no_decomp
        )
        .components("steel", "silicon", "regalium")

    event.create("soularium")
        .ingot()
        .fluid()
        .color(0x7c674d)
        .iconSet(METALLIC)
        .components("gold", 'iesnium', '4x spirit', '8x raw_will')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            no_decomp
        )

    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980)
        .iconSet(METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            no_decomp
        )
        .blastTemp(3600, "mid", 480, 900)
        .toolStats(new ToolProperty(4.0, 3.5, 1024, 3, []))
        .cableProperties(2048, 1, 0, true)
        .components("dark_steel", "endstone", "vibrant_alloy", 'aeternium')

})