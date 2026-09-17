ServerEvents.recipes(event => {
    function mutate(input, output){
        event.custom({
        "type": "hexalia:mutation",
        "input": {
            "item": input
        },
        "output": {
            "item": output
        }
        })
    }

    mutate('berry_good:sweet_berry_pips', 'hexalia:sunfire_tomato')
    mutate('windswept:lavender', 'hexalia:begonia')
    mutate('ars_nouveau:frostaya_pod', 'hexalia:chillberries')
})