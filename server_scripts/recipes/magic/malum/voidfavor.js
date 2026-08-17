ServerEvents.recipes(event => {
    event.remove({ id: 'malum:void_favor/raw_soulstone' })
    function voidsFavor(input, output){
        event.custom({
        "type": "malum:void_favor",
            "input": input,
            "output": output
        })
    }

    //bottled darkness
    /* voidsFavor(
        {"item": 'naturesaura:aura_bottle', "nbt": '{stored_type:"naturesaura:overworld"}'},
        {"item": 'naturesaura:aura_bottle', "nbt": '{stored_type:"naturesaura:end"}'}
    ) */
    
})