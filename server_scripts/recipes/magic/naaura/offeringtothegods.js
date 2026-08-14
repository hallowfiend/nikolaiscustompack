ServerEvents.recipes(event => {
    function offer(input, output, outCount) {
        event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": input
        },
        "start_item": {
            "item": "naturesaura:calling_spirit"
        },
        "output": {
            "item": output,
            "count": outCount
        }
    }).id(`kubejs:natures_aura/offering_to_the_gods/${output.split(":")[1]}`)
    }
    offer('kubejs:treated_leather', 'minecraft:phantom_membrane', 1)
})