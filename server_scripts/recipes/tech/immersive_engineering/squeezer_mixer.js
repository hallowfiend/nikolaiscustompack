ServerEvents.recipes(event => {
    function squeezeNoResult(fluid, amount, input, id){
        event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: input,
        energy: 6400
    }).id(`kubejs:immersive_engineering/squeezer/${id}`);
    }
    function squeezeYesResult(fluid, amount, input, result, id){
        event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: input,
        energy: 6400,
        result: result
    }).id(`kubejs:immersive_engineering/squeezer/${id}`);
    }
    /* squeezeNoResult(
        'actuallyadditions:canola_oil',
        80,
        {item: 'frycooks_delight:canola'},
        'canola_oil_squeezing'
    ) */
    //ID
    squeezeYesResult(
        'integrateddynamics:menril_resin',
        1000,
        {tag: 'integrateddynamics:menril_logs'},
        {item: 'integrateddynamics:crystalized_menril_chunk'},
        'menril_from_logs'
    )
    squeezeYesResult(
        'integrateddynamics:liquid_chorus',
        125,
        {item: 'minecraft:popped_chorus_fruit'},
        {item: 'integrateddynamics:crystalized_chorus_chunk'},
        'chorus_from_chorus'
    )
    squeezeYesResult(
        'integrateddynamics:liquid_chorus',
        125,
        {item: 'integrateddynamics:proto_chorus'},
        {item: 'integrateddynamics:crystalized_chorus_chunk'},
        'chorus_from_proto_chorus'
    )
    //man i sure love IE NOT FUCKING WORKING
    /* event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
        "amount": 1000,
        "tag": "forge:menril_resin"
    },
    "input": {
        "item": "immersiveengineering:mold_packing_4"
    },
    "results": [
    {
      "item": "integrateddynamics:crystalized_menril_block"
    },
    {
      "item": "immersiveengineering:mold_packing_4"
    }]
    })
    event.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": {
        "amount": 1000,
        "tag": "forge:menril_resin"
    },
    "input": {
        "tag": "minecraft:glass_blocks"
    },
    "results": [
    {
      "item": "integratedtunnels:menril_glass"
    }]
    }) */
})