ServerEvents.recipes(event => {
    //tartaric gems
    event.remove({id: 'bloodmagic:soulforge/pettytartaricgem'})
    event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 1.0,
    "input0": {
        "item": "evilcraft:dark_power_gem"
    },
    "input1": {
        "item": "kubejs:undirected_node"
    },
    "input2": {
        "item": "goety:magic_emerald"
    },
    "input3": {
        "item": "eidolon:soul_shard"
    },
    "minimumDrain": 1.0,
    "output": {
        "item": "bloodmagic:soulgempetty"
    }
    }).id('kubejs:blood_magic/hellfire_forge/petty_tartaric_gem')
    //sentient tools
    const tools = [
        {input: 'axe', output: 'axe'},
        {input: 'hoe', output: 'scythe'},
        {input: 'pick', output: 'pickaxe'},
        {input: 'shovel', output: 'shovel'},
        {input: 'sword', output: 'sword'}
    ]
    tools.forEach(tool => {
        event.remove({id: `bloodmagic:soulforge/sentient${tool.output}`})
        event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 0.0,
    "input0": {
        "item": `botania:manasteel_${tool.input}`
    },
    "input1": {
        "item": "bloodmagic:soulgempetty"
    },
    "minimumDrain": 0.0,
    "output": {
        "item": `bloodmagic:soul${tool.output}`
    }
    }).id(`kubejs:blood_magic/hellfire_forge/sentient_${tool.output}`)
    })
    //routing nodes
    const yote = [
        'bloodmagic:soulforge/routing_node',
        'bloodmagic:soulforge/output_routing_node',
        'bloodmagic:soulforge/input_routing_node',
        'bloodmagic:soulforge/master_routing_node'
    ]
    yote.forEach(yeet => {
        event.remove({id: yeet})
    })
    event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 2.0,
    "input0": {
        "item": "kubejs:logisticians_alkahest"
    },
    "input1": {
        "tag": "forge:storage_blocks/andesite_alloy"
    },
    "input2": {
        "tag": "forge:storage_blocks/tin"
    },
    "input3": {
        "item": "minecraft:prismarine_crystals"
    },
    "minimumDrain": 400.0,
    "output": {
        "item": `bloodmagic:itemroutingnode`,
        "count": 16
    }
    }).id('kubejs:blood_magic/hellfire_forge/routing_node_base')
    event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 2.0,
    "input0": {
        "item": "kubejs:logisticians_alkahest"
    },
    "input1": {
        "item": "bloodmagic:infusedslate"
    },
    "input2": {
        "item": "malum:block_of_hallowed_gold"
    },
    "input3": {
        "item": "create:chute"
    },
    "minimumDrain": 400.0,
    "output": {
        "item": `bloodmagic:masterroutingnode`
    }
    }).id('kubejs:blood_magic/hellfire_forge/routing_node_master')
    event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 0.0,
    "input0": {
        "item": "bloodmagic:itemroutingnode"
    },
    "input1": {
        "item": "minecraft:glowstone_dust"
    },
    "input2": {
        "item": "gtceu:salt_dust"
    },
    "minimumDrain": 400.0,
    "output": {
        "item": `bloodmagic:outputroutingnode`
    }
    }).id('kubejs:blood_magic/hellfire_forge/routing_node_output')
    event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 0.0,
    "input0": {
        "item": "bloodmagic:itemroutingnode"
    },
    "input1": {
        "item": "minecraft:redstone_dust"
    },
    "input2": {
        "item": "gtceu:electrotine_dust"
    },
    "minimumDrain": 400.0,
    "output": {
        "item": `bloodmagic:inputroutingnode`
    }
    }).id('kubejs:blood_magic/hellfire_forge/routing_node_input')
});