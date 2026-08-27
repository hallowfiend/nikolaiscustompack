GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('steam_mixer', 'steam')
        .hasHighPressure(false)
        .definition((hp, builder) => (
            builder
                .recipeType("mixer")
                .workableSteamHullRenderer(hp, 'gtceu:block/machines/mixer')
        ))
    
    /* event.create('meteor_recipe_dummy', 'simple')
            .tiers(GTValues.MAX)
            .definition((tier, builder) =>
                builder
                    .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                    .recipeType('fake_meteor_ritual')
                    .workableTieredHullRenderer('gtceu:block/machines/fake_meteor')
            ) */
})