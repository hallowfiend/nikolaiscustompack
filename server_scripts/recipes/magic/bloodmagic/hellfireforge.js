ServerEvents.recipes(event => {
    //petty gem
    event.remove({id: 'bloodmagic:soulforge/petty_tartaric_gem'})
    //tartaric gems
    event.recipes.bloodmagic.soulforge('bloodmagic:soulgempetty',
        [
            'evilcraft:dark_power_gem',
            'kubejs:undirected_node',
            'goety:magic_emerald',
            'netherexp:phasmo_shard'
        ]
    ).drain(1.0).id('kubejs:blood_magic/hellfire_forge/petty_tartaric_gem')
    //sentient tools
    const tools = [
        'axe',
        'pickaxe',
        'shovel',
        'sword'
    ]
    tools.forEach(tool => {
        event.remove({id: `bloodmagic:soulforge/sentient${tool}`})
        event.recipes.bloodmagic.soulforge(`bloodmagic:soul${tool}`,
            [
                'bloodmagic:soulgempetty',
                `botania:manasteel_${tool}`
            ]
        ).drain(0.0).id(`kubejs:blood_magic/hellfire_forge/sentient_${tool}`)
    })
    //scythe - special case
    event.recipes.bloodmagic.soulforge(`bloodmagic:soulscythe`,
            [
                'bloodmagic:soulgempetty',
                `botania:manasteel_hoe`
            ]
        ).drain(0.0).id(`kubejs:blood_magic/hellfire_forge/sentient_scythe`)
})