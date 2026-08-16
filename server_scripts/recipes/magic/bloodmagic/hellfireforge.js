ServerEvents.recipes(event => {
    //petty gem
    event.remove({id: 'bloodmagic:soulforge/petty_tartaric_gem'})
    //tartaric gems
    event.recipes.bloodmagic.soulforge('bloodmagic:soulgempetty',
        [
            'evilcraft:dark_power_gem',
            'minecraft:prismarine_shard',
            'goety:magic_emerald',
            'netherexp:phasmo_shard'
        ]
    ).drain(1.0)
    //sentient tools
})