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
        presses.press,
        "#forge:storage_blocks/iron",
        presses.press
    )
    })
})