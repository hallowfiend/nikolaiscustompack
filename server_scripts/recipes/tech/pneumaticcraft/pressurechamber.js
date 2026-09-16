ServerEvents.recipes(event => {
    const compressableDustsGreg = [
        'sapphire',
        'gravitite',
        'apatite',
        'fluorite',
        'salt',
        'rock_salt',
        'red_garnet',
        'yellow_garnet',
        'cinnabar',
        'almandine',
        'olivine',
        'pyrope',
        'green_sapphire',
        'lazurite',
        'sodalite',
        'ruby',
        'grossular',
        'spessartine',
        'opal',
        'topaz',
        'blue_topaz',
        'realgar',
        'gigantarubra'
    ]
    const compressableDustsSpecial = [
        {tag: 'diamond', item: 'minecraft:diamond'},
        {tag: 'quartz', item: 'minecraft:quartz'},
        {tag: 'quartzite', item: 'malum:natural_quartz'},
        {tag: 'emerald', item: 'minecraft:emerald'},
        {tag: 'lapis', item: 'minecraft:lapis_lazuli'},
        {tag: 'xithricite', item: 'occultism:spirit_attuned_gem'},
        {tag: 'source', item: 'ars_nouveau:source_gem'},
        {tag: 'ambrosium', item: 'aether:ambrosium_shard'},
        {tag: 'ender_pearl', item: 'minecraft:ender_pearl'},
        {tag: 'ender_eye', item: 'minecraft:ender_eye'},
        {tag: 'echo_shard', item: 'minecraft:echo_shard'},
        {tag: 'coal', item: 'minecraft:coal'},
        {tag: 'charcoal', item: 'minecraft:charcoal'},
        {tag: 'flint', item: 'minecraft:flint'},
        {tag: 'soulstone', item: 'malum:processed_soulstone'},
        {tag: 'cthonic_gold', item: 'malum:cthonic_gold'},
        {tag: 'blazing_quartz', item: 'malum:blazing_quartz'},
        {tag: 'vehement_coal', item: 'scguns:vehement_coal'},
        {tag: 'null_slate', item: 'malum:null_slate'},
        {tag: 'malignant_lead', item: 'malum:malignant_lead'},
        {tag: 'regalium', item: 'undergarden:regalium_crystal'},
        {tag: 'utherium', item: 'undergarden:utherium_crystal'},
        {tag: 'dark', item: 'evilcraft:dark_gem'},
        {tag: 'dark_power', item: 'evilcraft:dark_power_gem'},
        {tag: 'jade', item: 'goety:jade'},
        {tag: 'inert_crystal', item: 'elementalcraft:inert_crystal'},
        {tag: 'sal_ammoniac', item: 'theurgy:sal_ammoniac_crystal'},
        {tag: 'brilliance', item: 'malum:chunk_of_brilliance'},
        {tag: 'experience', item: 'create:experience_nugget'},
        {tag: 'certus_quartz', item: 'ae2:certus_quartz_crystal'},
        {tag: 'spinel', item: 'caverns_and_chasms:spinel'},
        {tag: 'turquoise', item: 'caverns_and_chasms:turquoise'},
        {tag: 'skyjade', item: 'deep_aether:skyjade'},
        {tag: 'citrine', item: 'unusualend:citrine_chunk'},
        {tag: 'malarite', item: 'eternal_starlight:malarite'},
        {tag: 'starlit_diamond', item: 'eternal_starlight:starlit_diamond'},
        {tag: 'starcore', item: 'eternal_starlight:starcore'},
        {tag: 'moon_cheese', item: 'ad_astra:cheese'},
        {tag: 'mana_diamond', item: 'botania:mana_diamond'},
        {tag: 'mana_pearl', item: 'botania:mana_pearl'}
    ]
    function pressureChamber(inputs, pressure, outputs, id){
        event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": inputs, // list
        "pressure": pressure,
        "results": outputs //list
    }).id(`kubejs:pneumaticcraft/pressure_chamber/${id}`)
    }
    //rip implosion compressor you will not be missed
    compressableDustsGreg.forEach(dust => {
        pressureChamber(
            [
                {
                "type": "pneumaticcraft:stacked_item",
                "count": 1,
                "tag": `forge:dusts/${dust}`
            }
            ],
            0.2,
            [
                {
                    "item": `gtceu:${dust}_gem`,
                    "count": 1
                }
            ],
            `${dust}_gem_from_dust`
        )
    })
    compressableDustsSpecial.forEach(dust => {
        pressureChamber(
            [
                {
                "type": "pneumaticcraft:stacked_item",
                "count": 1,
                "tag": `forge:dusts/${dust.tag}`
            }
            ],
            0.2,
            [
                {
                    "item": dust.item,
                    "count": 1
                }
            ],
            `${dust.tag}_gem_from_dust`
        )
    })
    //photovoltaic plate
    pressureChamber(
        [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 1,
                "item": "pneumaticcraft:upgrade_matrix"},
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 4,
                "item": "enderio:photovoltaic_composite"},
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 1,
                "item": "gtceu:silicon_wafer"
            }
            ],
        2.5,
        [
            {
                "item": "enderio:photovoltaic_plate",
                "count": 1
            }
        ]
    )
    //ender air
    pressureChamber(
        [{
            "type": "pneumaticcraft:stacked_item",
            "count": 4,
            "item": "naturesaura:aura_bottle",
            "nbt": '{stored_type:"naturesaura:end"}'
        }],
        0.6,
        [
            {
                "item": "botania:ender_air_bottle",
                "count": 4
            }
        ],
        'endless_air'
    )
    //hematite
    event.remove({id: 'tinkers_things:hematite/alloy'})
    pressureChamber(
        [
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "pneumaticcraft:ingot_iron_compressed"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "kubejs:bloodchannel_gem"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "minecraft:redstone"
            }
        ],
        4.0,
        [
            {
                "item": "tinkers_things:hematite",
                "count": 1
            }
        ],
        'hematite'
    )
    pressureChamber(
        [
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "pneumaticcraft:compressed_iron_block"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 9,
            "item": "kubejs:bloodchannel_gem"
            },
            {
            "type": "pneumaticcraft:stacked_item",
            "count": 1,
            "item": "minecraft:redstone_block"
            }
        ],
        4.0,
        [
            {
                "item": "tinkers_things:hematite_block",
                "count": 1
            }
        ],
        'bulk_hematite'
    )
})