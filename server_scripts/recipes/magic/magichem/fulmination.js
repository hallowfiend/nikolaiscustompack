ServerEvents.recipes(event => {
    function fulminate(input, output) {
        event.custom({
            "type": "magichem:fulmination",
            "input": input,
            "input_count": 1,
            "result": output,
            "result_count": 1
        }).id(`kubejs:magichem/fulmination/${output.split(":")[1]}`)
    }
})