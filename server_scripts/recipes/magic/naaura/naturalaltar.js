ServerEvents.recipes(event => {
    event.remove({id:/naturesaura:altar\/infused_iron/})
    event.remove({id:/naturesaura:altar\/tainted_gold/})
    function catalystlessAltar(input, output, count, aura, time){
        event.custom({
            "type": "naturesaura:altar",
            "input": {
                "item": input
            },
            "output": {
                "item": output,
                "count": count
            },
            "aura": aura,
            "time": time
    }).id(`kubejs:natures_aura/natural_altar/${output.split(":")[1]}`)
    }
    catalystlessAltar(
        'irons_spellbooks:mithril_ingot',
        'naturesaura:infused_iron',
        1,
        9000,
        80
    )
    catalystlessAltar(
        'constructs_casting:mithril_block',
        'naturesaura:infused_iron_block',
        1,
        120000,
        700
    )
    catalystlessAltar(
        'malum:hallowed_gold_ingot',
        'naturesaura:tainted_gold',
        1,
        3000,
        30
    )
    catalystlessAltar(
        'malum:block_of_hallowed_gold',
        'naturesaura:tainted_gold_block',
        1,
        27000,
        2625
    )
})