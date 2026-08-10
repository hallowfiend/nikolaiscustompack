ItemEvents.foodEaten([
    'kubejs:forgotten_imbibation',
    'kubejs:red_rock_blaster',
	'kubejs:soulchill_absinthe',
	'kubejs:skull_crusher_ale',
	'kubejs:slayer_stout'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('brewinandchewin:tankard')
		})
	}
})

ItemEvents.foodEaten([
    'kubejs:pyrogenic_cognac'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('tconstruct:seared_brick')
		})
	}
})

ItemEvents.foodEaten('kubejs:forgotten_imbibation', event =>{
	event.player.activeEffects.forEach(effect => {
		if (effect.descriptionId == 'effect.brewinandchewin.tipsy' && effect.amplifier < 9) {
			let nbt = effect.save({})
			nbt.Amplifier = NBT.b(nbt.Amplifier + 1)
			if (nbt.Duration < 6000) {
				nbt.Duration = 6000
			}
			let newInstance = effect.load(nbt)
			event.player.forceAddEffect(newInstance, event.player)
		}
	})
})

ItemEvents.foodEaten(['kubejs:red_rock_blaster', 'kubejs:soulchill_absinthe'], event =>{
	event.player.activeEffects.forEach(effect => {
		if (effect.descriptionId == 'effect.brewinandchewin.tipsy' && effect.amplifier < 9) {
			let nbt = effect.save({})
			nbt.Amplifier = NBT.b(nbt.Amplifier + 2)
			if (nbt.Duration < 6000) {
				nbt.Duration = 6000
			}
			let newInstance = effect.load(nbt)
			event.player.forceAddEffect(newInstance, event.player)
		}
	})
})

ItemEvents.foodEaten(['kubejs:skull_crusher_ale', 'kubejs:pyrogenic_cognac', 'kubejs:slayer_stout', 'kubejs:skull_crusher_ale'], event =>{
	event.player.activeEffects.forEach(effect => {
		if (effect.descriptionId == 'effect.brewinandchewin.tipsy' && effect.amplifier < 9) {
			let nbt = effect.save({})
			nbt.Amplifier = NBT.b(nbt.Amplifier + 3)
			if (nbt.Duration < 12000) {
				nbt.Duration = 12000
			}
			let newInstance = effect.load(nbt)
			event.player.forceAddEffect(newInstance, event.player)
		}
	})
})
