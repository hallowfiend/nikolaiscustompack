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
});