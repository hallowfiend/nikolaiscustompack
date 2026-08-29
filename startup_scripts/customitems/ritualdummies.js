StartupEvents.registry('item', (event) => {
	function registerRitualDummy(id, pentacleType, displayName, description){
        event.create(`kubejs:ritual_dummy/${id}`, 'occultism:ritual_dummy')
        .pentacleType(pentacleType)
        .displayName(displayName)
        .ritualTooltip(description)
    }

    registerRitualDummy(
        'undergarden_catalyst',
        'craft',
        'Craft Catalyst',
        'With the blessing of the Otherworld, create a keystone capable of catalyzing the formation of a planar rift to the Undergarden.'
    )
    registerRitualDummy(
        'codex_arcana',
        'craft',
        'Craft Codex Arcana',
        "Borrowing scant wisps of knowledge from the Otherworld and combining it with crystalized memory of ages past, inscribe a book with sigils and symbols that can open one's mind to the flow of mana through the planes."
    )
})