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

    fulminate('evilcraft:inverted_potentia', 'evilcraft:inverted_potentia_empowered')
    fulminate('gag:hearthstone', 'gag:energized_hearthstone')
    fulminate('minecraft:glass_bottle', 'irons_spellbooks:lightning_bottle')
})