ServerEvents.recipes(event => {
    function alchemytable(output, inputs, cost, duration, tier){
        event.recipes.bloodmagic
        .alchemytable(output,
            inputs) //list
        .syphon(cost).ticks(duration).upgradeLevel(tier)
        .id(`kubejs:blood_magic/blood_alchemy/${output.split(":")[1]}`)
    }
    //base catalysts
    event.remove({id: 'bloodmagic:alchemytable/simple_catalyst'})
    event.remove({id: 'bloodmagic:alchemytable/strenghtened_catalyst'})
    alchemytable('2x bloodmagic:simplecatalyst',
        [
            'minecraft:sugar',
            'minecraft:redstone',
            'gtceu:charcoal_dust',
            'gtceu:salt_dust',
            'biomancy:nutrients'
        ],
        200,
        100,
        2
    )
    alchemytable('bloodmagic:strengthenedcatalyst',
        [
            'bloodmagic:simple_catalyst',
            'gtceu:sal_ammoniac_dust',
            'biomancy:regenerative_fluid',
            'minecraft:glow_berries',
            'vampiresdelight:rice_dough'
        ],
        1000,
        100,
        4
    )
    alchemytable('kubejs:concentratedcatalyst',
        [
            'bloodmagic:strengthenedcatalyst',
            'cosmopolitan:glacier_essence',
            'gtceu:electrotine_dust',
            'magichem:admixture_alcohol',
            'biomancy:exotic_dust'
        ],
        5000,
        100,
        6
    )
})