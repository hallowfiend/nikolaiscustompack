ServerEvents.recipes((event) => {
	event.remove({ id: /tconstruct:.*mana_steel.*/})
  event.remove({ id: /tcompat:smeltery.*melting.*soul_stained_steel/})
	event.remove({ id: /gm_construct:smeltery.*casting.*metal.*malachite.*/})
	// fuck the melter
	event.remove({ output: 'tconstruct:smeltery_controller' })
	event.shaped(
        Item.of('tconstruct:smeltery_controller', 1),
        [
            'sss',
            'bfb',
            'sss'
        ],
        {
            s: '#tconstruct:seared_blocks',
			b: '#forge:storage_blocks/copper',
			f: "minecraft:blast_furnace"
        }
    ).id('kubejs:smeltery_controller')
    // making the ammy bronze recipe accurate
    event.remove({ id: 'tconstruct:smeltery/alloys/amethyst_bronze' })
    event.custom({
        "type": "tconstruct:alloy",
        inputs: [
			{
				amount: 144,
				fluid: 'gtceu:bronze'
			},
			{
				amount: 144,
				fluid: 'tconstruct:molten_amethyst'
			}
		],
		result: {
			amount: 144,
			fluid: 'tconstruct:molten_amethyst_bronze'
		},
        "temperature": 820
    })
	//improvable modifier rebalance
	event.remove({id: "tinkerslevellingaddon:tools/modifiers/ability/improvable"})
  	event.custom({
    "type": "tconstruct:modifier",
    "inputs": [
      {
        "item": "botania:dragonstone"
      },
      {
        "item": "cataclysm:ancient_metal_ingot"
      },
      {
        "item": "botania:dragonstone"
      },
      {
        "item": "kubejs:biomantic_neuron"
      },
      {
        "item": "kubejs:biomantic_neuron"
      }
    ],
    "tools": {
      "tag": "tconstruct:modifiable"
    },
    "slots": {
      "abilities": 1
    },
    "allow_crystal": true,
    "result": {
      "name": "tinkerslevellingaddon:improvable",
      "level": 1
    },
    "max_level": 1
  })
});