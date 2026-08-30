ServerEvents.tags('item', event => {
    event.add('kubejs:1_echo_worth', [
        'biomancy:mob_sinew',
        'vampirism:vampire_fang'
    ])
    event.add('kubejs:4_echoes_worth', [
        'sons_of_sins:heart',
        'sons_of_sins:flesh_of_demise',
        'vampirism:weak_human_heart',
        'alexsmobs:mosquito_proboscis',
        'alexsmobs:blood_sac',
        'eternal_starlight:rookfish_air_sac'
    ])
    event.add('kubejs:8_echoes_worth', [
        'eidolon:zombie_heart',
        'sons_of_sins:ribs',
        'sons_of_sins:muscle'
    ])
    event.add('kubejs:12_echoes_worth', [
        'sons_of_sins:spider_heart',
        'sons_of_sins:creeper_ribs',
        'biomancy:mob_gland',
        'biomancy:volatile_gland',
        'biomancy:toxin_gland',
        'mobs_of_sins:nuisances_muscle',
        'sons_of_sins:slime_rear',
        'sons_of_sins:strider_muscle',
        'vampirism:human_heart'
    ])
    event.add('kubejs:16_echoes_worth', [
        'eidolon:wraith_heart',
        'biomancy:living_flesh',
        'reliquary:nebulous_heart',
        'reliquary:catalyzing_gland',
        'sons_of_sins:ice_heart',
        'sons_of_sins:blazing_heart',
        'mobs_of_sins:gazelle_ribs',
        'mobs_of_sins:grizzly_bear_ribs',
        'mobs_of_sins:frilled_shark_ribs',
        'mobs_of_sins:capucin_monkey_heart',
        'mobs_of_sins:cockroach_heart',
        'mobs_of_sins:tarantula_hawk_muscle',
        'mobs_of_sins:tiger_muscle',
        'sons_of_sins:enderman_muscle'
    ])
    event.add('kubejs:24_echoes_worth', [
        'ender_sins:firefly_muscle',
        'ender_sins:warped_ribs',
        'ender_sins:sticky_muscle',
        'ender_sins:shiny_muscle',
        'sons_of_sins:charged_creeper_ribs',
        'sons_of_sins:golem_cuirass',
        'sons_of_sins:ravager_muscle',
        'eidolon:withered_heart'
    ])
    event.add('kubejs:32_echoes_worth', [
        'lendersdelight:koboleton_meat',
        'ender_sins:golem_heart',
        'ender_sins:enderling_muscle',
        'alexsmobs:warped_muscle',
        'alexsmobs:hemolymph_sac'
    ])
})

ServerEvents.recipes(event => {
    function dreadEchoTrade(input, echoCount){
        event.custom({
        "type": "sons_of_sins:etheric_blood_imbibation",
        "ingredients": [
        input
        ],
        "output": {
            "item": "kubejs:dread_echoes",
            "count": echoCount
        }
        }).id(`kubejs:sons_of_sins/echo_trade/${input.split(":")[1]}`)
    }
    const numbers = [
        1,
        4,
        8,
        12,
        16,
        24,
        32
    ]
    numbers.forEach(integer => {
        dreadEchoTrade(
        {'tag': `kubejs:${integer}_echo_worth`}, integer
    )
    })
    const yote = [
        /simplyswords:.*flesh/,
        'extra_sins:ether_ashes_block_from_ashe_block',
        'sons_of_sins:flesh_of_demise_recipe_2',
        'create:soul_steel_nugget_1',
        'farmersdelight:soul_steel_knife'
    ]
    yote.forEach(yeet => {
        event.remove({id: yeet})
    })
})