ServerEvents.recipes((event) => {
        const alcohols = [
            //piss
            {"drink": "brewincompatdelight:moonshine", "value": 0.25},
            //simple one-stage drinks
            {"drink": "brewinandchewin:beer", "value": 1},
            {"drink": "brewinandchewin:vodka", "value": 1},
            {"drink": "brewinandchewin:mead", "value": 1},
            {"drink": "brewinandchewin:rice_wine", "value": 1},
            {"drink": "sob:hard_cider", "value": 1},
            {"drink": "cosmopolitan:cachaca", "value": 1},
            {"drink": "brewincompatdelight:white_wine", "value": 1},
            {"drink": "brewincompatdelight:red_wine", "value": 1},
            {"drink": "brewincompatdelight:sweet_red_wine", "value": 1},
            {"drink": "brewincompatdelight:nut_brown_ale", "value": 1},
            {"drink": "brewincompatdelight:rum", "value": 1},
            {"drink": "brewincompatdelight:whiskey", "value": 1},
            {"drink": "brewincompatdelight:gin", "value": 1},
            //most two-stage drinks and more expensive one-stage drinks
            {"drink": "brewincompatdelight:blue_curacao", "value": 2},
            {"drink": "brewinandchewin:pale_jane", "value": 2},
            {"drink": "brewinandchewin:egg_grog", "value": 2},
            {"drink": "brewinandchewin:glittering_grenadine", "value": 2},
            {"drink": "brewinandchewin:saccharine_rum", "value": 2},
            {"drink": "brewinandchewin:salty_folly", "value": 2},
            {"drink": "brewinandchewin:bloody_mary", "value": 2},
            {"drink": "sob:prickly_melomel", "value": 2},
            {"drink": "sob:tequila", "value": 2},
            {"drink": "sob:bustling_brew", "value": 2},
            {"drink": "cosmopolitan:root_beer", "value": 2},
            {"drink": "cosmopolitan:wildberry_punch", "value": 2},
            {"drink": "cosmopolitan:smoggy_aperol", "value": 2},
            //most three-stage drinks and more expensive two-stage drinks
            {"drink": "brewincompatdelight:kraken_rum", "value": 4},
            {"drink": "collectorsreap:hermits_sour", "value": 4},
            {"drink": "cosmopolitan:neverending_night", "value": 4},
            {"drink": "cosmopolitan:morning_fog", "value": 4},
            {"drink": "cosmopolitan:twilight_chartreuse", "value": 4},
            {"drink": "cosmopolitan:generic_romance", "value": 4},
            {"drink": "cosmopolitan:green_beer", "value": 4},
            {"drink": "sob:sunrise_seltzer", "value": 4},
            {"drink": "sob:creeper_drink", "value": 4},
            {"drink": "sob:pale_daiquiri", "value": 4},
            {"drink": "brewinandchewin:red_rum", "value": 4},
            {"drink": "brewinandchewin:strongroot_ale", "value": 4},
            {"drink": "brewinandchewin:dread_grog", "value": 4},
            {"drink": "brewinandchewin:kombucha", "value": 4},
            //deific nectars
            {"drink": "collectorsreap:heavens_cream", "value": 8},
            {"drink": "collectorsreap:reanimators_garden", "value": 8},
            {"drink": "collectorsreap:rose_moon", "value": 8},
            {"drink": "cosmopolitan:exotic_mirage", "value": 8},
            {"drink": "brewinandchewin:steel_toe_stout", "value": 8},
            {"drink": "brewinandchewin:withering_dross", "value": 8},
            //transdimensional dews
            {"drink": "collectorsreap:deific_blood", "value": 16},
            {"drink": "sob:death_drink", "value": 16}
        
        ]
        alcohols.forEach(alcohol => {
            let identifier = alcohol.drink.replace(`:`, `_`)
            event.recipes.gtceu.dtpf(`kubejs:dtpf/${identifier}`)
                .inputFluids(`${alcohol.drink} 1000`)
                .duration(alcohol.value*2000)
                .EUt(-GTValues.V[GTValues.EV]*alcohol.value, 4)
        })
});