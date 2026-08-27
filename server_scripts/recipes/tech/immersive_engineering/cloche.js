ServerEvents.recipes(event => {
    function cloche(input, render, output, soil, time){
        event.custom({
        "type":"immersiveengineering:cloche",
        "input":{"item": input },
        "render": render,
        "results":output,
        "soil":{"item": soil},
        "time":time
        })
    }
    const croppyCrops = [
        {
            input: 'collectorsreap:lime_seeds',
            render: 'collectorsreap:lime_bush',
            output: [{'item': 'collectorsreap:lime'}],
            soil: 'farmersdelight:rich_soil',
            time: 560
        },
        {
            input: 'collectorsreap:pomegranate_seeds',
            render: 'collectorsreap:pomegranate_bush',
            output: [{'item': 'collectorsreap:pomegranate'}],
            soil: 'minecraft:warped_nylium',
            time: 560
        },
        {
            input:'cold_sweat:soul_sprout',
            render:'cold_sweat:soul_stalk',
            output:[{'count': 2, 'item': 'cold_sweat:soul_sprout'}],
            soil:'mynethersdelight:resurgent_soil',
            time:3200
        },
        {
            input:'netherexp:cerebrage_seeds',
            render:'netherexp:cerebrage_skull',
            output:[{"count":2,"item":"netherexp:cerebrage"}],
            soil:'minecraft:skeleton_skull',
            time:500
        },
        {
            input:'netherexp:warped_wart',
            render:'netherexp:warped_wart',
            output:[{"count":2,"item":"netherexp:warped_wart"}],
            soil:'mynethersdelight:resurgent_soil',
            time:530
        },
        {
            input:'undergarden:droopvine_item',
            render:'undergarden:droopvine',
            output:[{"item":"undergarden:droopvine_item"}],
            soil:'undergarden:depthrock',
            time:640
        },
        {
            input:'cosmopolitan:blisterberry_pips',
            render:'undergarden:blisterberry_bush',
            output:[{"count":2,"item":"undergarden:blisterberry"}],
            soil:'undergarden:deepsoil',
            time:800
        },
        {
            input:'cosmopolitan:sprouted_underbeans',
            render:'undergarden:underbean_bush',
            output:[{"count":2,"item":"undergarden:underbeans"}],
            soil:'undergarden:deepsoil',
            time:800
        },
        {
            input:'undergarden:gloomgourd_seeds',
            render:'undergarden:gloomgourd_stem',
            output:[{"item":"undergarden:gloomgourd"}],
            soil:'undergarden:deepsoil',
            time:800
        },
        {
            input: 'hexalia:chillberries',
            render: 'hexalia:chillberry_bush',
            output: [{'item': 'hexalia:chillberries', 'count': 2}],
            soil: 'hexalia:infused_dirt',
            time: 370
        },
        {
            input: 'hexalia:sunfire_tomato_seeds',
            render: 'hexalia:sunfire_tomato_crop',
            output: [{'item': 'hexalia:sunfire_tomato', 'count': 2}, {'item': 'hexalia:sunfire_tomato_seeds'}],
            soil: 'hexalia:infused_dirt',
            time: 370
        },
        {
            input: 'hexalia:rabbage_seeds',
            render: 'hexalia:rabbage_crop',
            output: [{'item': 'hexalia:rabbage', 'count': 2}, {'item': 'hexalia:rabbage_seeds'}],
            soil: 'hexalia:infused_dirt',
            time: 370
        }
        
    ]
    const blockCrops = [
        {
            input:'farmersrespite:tea_seeds',
            render:'farmersrespite:small_tea_bush',
            output:[{'item': 'farmersrespite:black_tea_leaves', "count": 2}],
            soil:'farmersdelight:rich_soil',
            time:800
        },
        {
            input:'farmersrespite:tea_seeds',
            render:'farmersrespite:small_tea_bush',
            output:[{'item': 'farmersrespite:yellow_tea_leaves', "count": 2}],
            soil:'minecraft:dirt',
            time:600
        },
        {
            input:'farmersrespite:tea_seeds',
            render:'farmersrespite:small_tea_bush',
            output:[{'item': 'farmersrespite:green_tea_leaves', "count": 2}],
            soil:'minecraft:coarse_dirt',
            time:400
        },
        {
            input:'farmersrespite:coffee_beans',
            render:'farmersrespite:coffee_bush',
            output:[{'item': 'farmersrespite:coffee_beans', "count": 2}],
            soil:'mynethersdelight:resurgent_soil',
            time:800
        },
        {
            input: 'collectorsreap:portobello',
            render: 'collectorsreap:portobello',
            output: [{'item': 'collectorsreap:portobello'}],
            soil: 'minecraft:mycelium',
            time: 480
        },
        {
            input: 'minecraft:lily_pad',
            render: 'minecraft:lily_pad',
            output: [{'item': 'minecraft:lily_pad'}],
            soil: 'minecraft:water_bucket',
            time: 480
        },
        {
            input: 'hexalia:lotus_flower',
            render: 'hexalia:lotus_flower',
            output: [{'item': 'hexalia:lotus_flower'}],
            soil: 'minecraft:water_bucket',
            time: 480
        },
    ]
    const eidolonCrops = [
        'eidolon:avennian_sprig',
        'eidolon:sildrian_seed',
        'eidolon:mirecap',
        'eidolon:oanna_bloom',
        'eidolon:merammer_root'
    ]
    eidolonCrops.forEach(crop => {
        cloche(crop, {"type":"crop","block":crop}, [{"item": crop, "count": 2}], 'hexalia:infused_dirt', 1600)
    })
    croppyCrops.forEach(crop => {
        cloche(crop.input, {"type":"crop","block":crop.render}, crop.output, crop.soil, crop.time)
    })
    blockCrops.forEach(crop => {
        cloche(crop.input, {"type":"generic","block":crop.render}, crop.output, crop.soil, crop.time)
    })
})