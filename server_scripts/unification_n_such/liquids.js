//priority: 9

ServerEvents.recipes(event => {

   function replaceFluidInput(fluid, unifiedFluid)
    {
        event.replaceInput(
            { input: Fluid.of(fluid) },
            Fluid.of(fluid),
            Fluid.of(unifiedFluid)
        )
        event.replaceInput(
            { inputs: Fluid.of(fluid) },
            Fluid.of(fluid),
            Fluid.of(unifiedFluid)
        )
    }
    function replaceFluidOutput(fluid, unifiedFluid)
    {
        event.replaceOutput(
            { output: Fluid.of(fluid) },
            Fluid.of(fluid),
            Fluid.of(unifiedFluid)
        )
        event.replaceOutput(
            { result: Fluid.of(fluid) },
            Fluid.of(fluid),
            Fluid.of(unifiedFluid)
        )
    }
    // Replace fluid input and output
    function replaceFluidIO(fluid, unifiedFluid)
    {
        replaceFluidInput(fluid, unifiedFluid)
        replaceFluidOutput(fluid, unifiedFluid)
    }

    replaceFluidIO('embers:molten_copper', 'gtceu:copper')
    replaceFluidIO('tconstruct:copper', 'gtceu:copper')
    replaceFluidIO('embers:molten_invar', 'gtceu:invar')
    replaceFluidIO('tconstruct:invar', 'gtceu:invar')
    replaceFluidIO('embers:molten_iron', 'gtceu:iron')
    replaceFluidIO('tconstruct:gold', 'gtceu:gold')
    replaceFluidIO('embers:molten_gold', 'gtceu:gold')
    replaceFluidIO('tconstruct:lead', 'gtceu:lead')
    replaceFluidIO('embers:molten_lead', 'gtceu:lead')
    replaceFluidIO('embers:molten_dawnstone', 'gtceu:dawnstone')
    replaceFluidIO('embers:molten_mithril', 'gtceu:mithril')
    replaceFluidIO('embers:molten_tin', 'gtceu:tin')
    replaceFluidIO('embers:molten_aluminum', 'gtceu:aluminium')
    replaceFluidIO('embers:molten_zinc', 'gtceu:zinc')
    replaceFluidIO('embers:molten_constantan', 'gtceu:cupronickel')
    replaceFluidIO('constructs_casting:molten_mithril', 'gtceu:mithril')


})

console.log('Fluids distilled')