ServerEvents.recipes(event => {
    event.remove({ output: 'embers:iron_plate' })
    event.remove({ output: 'embers:copper_plate' })
    event.remove({ output: 'embers:lead_plate' })
    event.remove({ output: 'embers:silver_plate' })
    event.remove({ id: 'embers:ember_shard_to_crystal' })
    event.remove({ id: 'embers:stamping/ember_shard' })
    event.remove({ id: 'embers:ember_crystal_to_shard' })

    event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 6400,
      "input": {
        "item": "gtceu:exquisite_ember_gem"
      }
    })
    event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 1000,
      "input": {
        "item": "gtceu:ember_gem"
      }
    })
})