ServerEvents.recipes(event => {
    //redstone engineering
    event.replaceInput({output: 'immersiveengineering:rs_engineering'}, '#forge:dusts/redstone', 'gtceu:red_alloy_single_wire')
    event.replaceInput({output: 'immersiveengineering:rs_engineering'}, '#forge:ingots/copper', 'create:electron_tube')

    //heavy engineering
    event.replaceInput({output: 'immersiveengineering:heavy_engineering'}, '#forge:ingots/electrum', 'create:gearbox')

    //light engineering
    event.replaceInput({output: 'immersiveengineerng:light_engineering'}, '#forge:ingots/copper', 'embers:ember_dial')
})