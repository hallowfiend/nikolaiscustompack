ServerEvents.recipes(event => {
    const compressableDusts = [
        
    ]
    function pressureChamber(inputs, pressure, outputs, id){
        event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": inputs, // list
        "pressure": pressure,
        "results": outputs //list
    }).id(`kubejs:pneumaticcraft/pressure_chamber/${id}`)
    }
    //ender air
    pressureChamber(
        [{
            "type": "pneumaticcraft:stacked_item",
            "count": 4,
            "item": "naturesaura:aura_bottle",
            "nbt": '{stored_type:"naturesaura:end"}'
        }],
        0.6,
        [
            {
                "item": "botania:ender_air",
                "count": 4
            }
        ],
        'endless_air'
    )
    //hematite
    event.remove({id: 'tinkers_things:hematite/alloy'})
    pressureChamber(
        [
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "pneumaticcraft:ingot_iron_compressed"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "kubejs:bloodchannel_gem"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "minecraft:redstone"
            }
        ],
        4.0,
        [
            {
                "item": "tinkers_things:hematite",
                "count": 1
            }
        ],
        'hematite'
    )
    pressureChamber(
        [
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "pneumaticcraft:compressed_iron_block"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 9,
            "item": "kubejs:bloodchannel_gem"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "minecraft:redstone_block"
            }
        ],
        4.0,
        [
            {
                "item": "tinkers_things:hematite_block",
                "count": 1
            }
        ],
        'bulk_hematite'
    )
})