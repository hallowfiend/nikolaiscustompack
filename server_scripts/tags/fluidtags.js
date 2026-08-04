ServerEvents.tags('fluid', event => {
    event.add('tconstruct:brass',
    'gtceu:brass'
    )

    event.remove("minecraft:water", [
        "undergarden:virulent_mix_source",
        "undergarden:virulent_mix_flowing",
        "create:chocolate",
        "create:flowing_chocolate",
        "create:honey",
        "create:flowing_honey",
        "createaddition:seed_oil",
        "createaddition:flowing_seed_oil",
        "hexerei:tallow_fluid",
        "hexerei:tallow_flowing",
        "hexerei:blood_fluid",
        "hexerei:blood_flowing"
    ]);
    event.remove("minecraft:lava", ["hexerei:quicksilver_fluid"])
})