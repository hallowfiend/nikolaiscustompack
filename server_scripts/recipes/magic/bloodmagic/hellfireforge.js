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
        'axe',
        'pickaxe',
        'shovel',
        'sword'
    ]
    tools.forEach(tool => {
        event.remove({id: `bloodmagic:soulforge/sentient${tool}`})
        event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 0.0,
    "input0": {
        "item": `botania:manasteel_${tool}`
    },
    "input1": {
        "item": "bloodmagic:soulgempetty"
    },
    "minimumDrain": 0.0,
    "output": {
        "item": `bloodmagic:soul${tool}`
    }
    }).id(`kubejs:blood_magic/hellfire_forge/sentient_${tool}`)
    })
    //scythe - special case
    event.remove({id: 'bloodmagic:soulforge/sentientscythe'})
    event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 1.0,
    "input0": {
        "item": `botania:manasteel_hoe`
    },
    "input1": {
        "item": "bloodmagic:soulgempetty"
    },
    "minimumDrain": 1.0,
    "output": {
        "item": `bloodmagic:soulscythe`
    }
    }).id(`kubejs:blood_magic/hellfire_forge/sentient_scythe`)
});