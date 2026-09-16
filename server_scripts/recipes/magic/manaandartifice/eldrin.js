ServerEvents.recipes(event => {
    //fume filter
    function fumeSingle(item, type, amount){
        event.custom({
    "type": "mna:eldrin-fume",
    "item": item,
    "power_provided":
    {
    "affinity": type,
    "amount": amount
    }
    }).id(`kubejs:mna/eldrin_fume_filter/${item.split(":")[1]}`)
    }

    fumeSingle('kubejs:arcane_cluster', "ARCANE", 500)
    fumeSingle('kubejs:ender_cluster', "ENDER", 500)
    fumeSingle('kubejs:fire_cluster', "FIRE", 500)
    fumeSingle('kubejs:air_cluster', "WIND", 500)
    fumeSingle('kubejs:water_cluster', "WATER", 500)
    fumeSingle('kubejs:earth_cluster', "EARTH", 500)
    fumeSingle('elementalcraft:air_shard', "WIND", 25)
    fumeSingle('elementalcraft:water_shard', "WATER", 25)
    fumeSingle('elementalcraft:earth_shard', "EARTH", 25)
    fumeSingle('elementalcraft:fire_shard', "FIRE", 25)
    fumeSingle('elementalcraft:powerful_air_shard', "WIND", 225)
    fumeSingle('elementalcraft:powerful_water_shard', "WATER", 225)
    fumeSingle('elementalcraft:powerful_earth_shard', "EARTH", 225)
    fumeSingle('elementalcraft:powerful_fire_shard', "FIRE", 225)
})