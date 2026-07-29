ServerEvents.recipes((event) => {
        //DTPF components
        event.recipes.gtceu.cutter(`kubejs:livingwood_cutting`)
            .itemInputs('#botania:livingwood_logs')
            .itemOutputs([`6x botania:livingwood_planks`, '2x gtceu:livingwood_dust'])
            .duration(200)
            .EUt(7);
        event.recipes.gtceu.assembler('kubejs:mana_reinforced_livingwood_casing')
            .itemInputs([
                '12x gtceu:livingwood_plate',
                '6x gtceu:demonite_plate',
                '24x gtceu:manasteel_screw',
                '6x gtceu:skyjade_plate'
            ])
            .inputFluids('constructs_casting:arcane_essence 2000')
            .itemOutputs('2x kubejs:mana_reinforced_livingwood_casing')
            .duration(40)
            .EUt(GTValues.VA[GTValues.IV]);
        event.recipes.gtceu.assembler('kubejs:dtpf')
            .itemInputs([
                'kubejs:mana_reinforced_livingwood_casing',
                '16x magichem:admixture_whimsy',
                '8x #gtceu:circuits/iv',
                '16x biomancy:exotic_dust',
                '8x bloodmagic:combinationalcatalyst',
                '4x botania:rune_gluttony',
                'gtceu:stainless_steel_rotor',
                'biomancy:digester',
                'botania:brewery'
            ])
            .inputFluids('brewinandchewin:beer 10000')
            .itemOutputs('gtceu:drunken_terraprismatic_fluxinator')
            .duration(120)
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
            .EUt(GTValues.VA[GTValues.IV]);
        //the DTPF proper
        const alcohols = [
            //piss
            {"drink": "gtceu:ethanol", "value": 0.01},
            {"drink": "brewincompatdelight:moonshine", "value": 0.25},
            //hard drinks
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
            //alcoholic beverages
            {"drink": "brewincompatdelight:blue_curacao", "value": 2},
            {"drink": "brewinandchewin:pale_jane", "value": 2},
            {"drink": "brewinandchewin:egg_grog", "value": 2},
            {"drink": "brewinandchewin:glittering_grenadine", "value": 2},
            {"drink": "brewinandchewin:saccharine_rum", "value": 2},
            {"drink": "brewinandchewin:salty_folly", "value": 2},
            {"drink": "brewinandchewin:bloody_mary", "value": 2},
            {"drink": "sob:prickly_melomel", "value": 2},
            {"drink": "sob:tequila", "value": 2},
            {"drink": "cosmopolitan:root_beer", "value": 2},
            {"drink": "cosmopolitan:wildberry_punch", "value": 2},
            {"drink": "cosmopolitan:smoggy_aperol", "value": 2},
            //fine vintages
            {"drink": "brewincompatdelight:kraken_rum", "value": 4},
            {"drink": "collectorsreap:hermits_sour", "value": 4},
            {"drink": "cosmopolitan:neverending_night", "value": 4},
            {"drink": "cosmopolitan:morning_fog", "value": 4},
            {"drink": "cosmopolitan:twilight_chartreuse", "value": 4},
            {"drink": "cosmopolitan:generic_romance", "value": 4},
            {"drink": "cosmopolitan:green_beer", "value": 4},
            {"drink": "sob:sunrise_seltzer", "value": 4},
            {"drink": "sob:bustling_brew", "value": 4},
            {"drink": "sob:creeper_drink", "value": 4},
            {"drink": "sob:pale_daiquiri", "value": 4},
            {"drink": "brewinandchewin:red_rum", "value": 4},
            {"drink": "brewinandchewin:strongroot_ale", "value": 4},
            {"drink": "brewinandchewin:dread_nog", "value": 4},
            {"drink": "brewinandchewin:kombucha", "value": 4},
            //deific nectars
            {"drink": "collectorsreap:heavens_cream", "value": 8},
            {"drink": "collectorsreap:rose_moon", "value": 8},
            {"drink": "cosmopolitan:exotic_mirage", "value": 8},
            {"drink": "brewinandchewin:steel_toe_stout", "value": 8},
            {"drink": "brewinandchewin:withering_dross", "value": 8},
            //transdimensional dews
            {"drink": "collectorsreap:reanimators_garden", "value": 16},
            {"drink": "collectorsreap:deific_blood", "value": 16},
            {"drink": "sob:death_drink", "value": 16}
        
        ]
        alcohols.forEach(alcohol => {
            let identifier = alcohol.drink.replace(`:`, `_`)
            event.recipes.gtceu.dtpf(`kubejs:dtpf/${identifier}`)
                .inputFluids(`${alcohol.drink} 1000`)
                .duration(alcohol.value*2000)
                .EUt(-GTValues.V[GTValues.IV]*alcohol.value, 4)
        })
});