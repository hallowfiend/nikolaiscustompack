ServerEvents.recipes(event => {
    //accurate ammy bronze
    event.remove({ id: "createaddition:compat/tconstruct/amethyst_bronze"})
    event.recipes.create.mixing(
        'tconstruct:amethyst_bronze_ingot', //output
        [
            'gtceu:bronze_ingot',
            'minecraft:amethyst_shard'
        ]
    ).heated()
    //accurate sterling silver
    event.remove({ id: "occultengineering:mixing/sterling_silver_ingot"})
    event.recipes.create.mixing(
        'gtceu:sterling_silver_ingot', //output
        [
            '4x gtceu:silver_ingot',
            'minecraft:copper_ingot'
        ]
    ).heated()
});