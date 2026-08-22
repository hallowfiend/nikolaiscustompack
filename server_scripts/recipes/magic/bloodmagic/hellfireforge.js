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
});