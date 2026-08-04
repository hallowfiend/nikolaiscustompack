ServerEvents.recipes(event => {
    function fletch(head, rod, fletching, result, count){
    event.custom({ 
	    "type": "apotheosis:fletching",
	    "ingredients":[ 
            head,
            rod,
            fletching
	    ],
	    "result": {
	        "item": result,
	        "count": count
	    }
    }).id(`kubejs:fletching/${result.split(":")[1]}`)
    }
    fletch(
        {tag: "forge:ingots/tin"},
        {tag: "forge:rods/wooden"},
        {tag: "forge:feathers"},
        "caverns_and_chasms:ricochet_arrow",
        6
    )
    fletch(
        {item: "dungeonsdelight:gunk"},
        {tag: "forge:rods/wooden"},
        {tag: "forge:nuggets/copper"},
        "dungeonsdelight:gunk_arrow",
        6
    )
    fletch(
        {tag: "forge:nuggets/aethersent"},
        {tag: "forge:rods/wooden"},
        {tag: "eternal_starlight:arrow_feathers"},
        "eternal_starlight:aethersent_arrow",
        6
    )
    fletch(
        {tag: "forge:gems/glacite"},
        {tag: "forge:rods/wooden"},
        {tag: "eternal_starlight:arrow_feathers"},
        "eternal_starlight:glacite_arrow",
        6
    )
    fletch(
        {tag: "forge:gems/malarite"},
        {tag: "forge:rods/wooden"},
        {tag: "eternal_starlight:arrow_feathers"},
        "eternal_starlight:malarite_arrow",
        6
    )
    fletch(
        {tag: "forge:nuggets/amaramber"},
        {tag: "forge:rods/wooden"},
        {tag: "eternal_starlight:arrow_feathers"},
        "eternal_starlight:amaramber_arrow",
        6
    )
    fletch(
        {tag: "forge:gems/thioquartz"},
        {tag: "forge:rods/wooden"},
        {tag: "eternal_starlight:arrow_feathers"},
        "eternal_starlight:thioquartz_arrow",
        6
    )
    fletch(
        {item: "eternal_starlight:dusted_shard"},
        {tag: "forge:rods/wooden"},
        {item: "eternal_starlight:rookfish_air_sac"},
        "eternal_starlight:air_sac_arrow",
        6
    )
})