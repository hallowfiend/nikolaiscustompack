StartupEvents.registry('item', (event) => {
	function registerRitualDummy(id, displayName, description){
        event.create(`kubejs:ritual_dummy/${id}`, 'occultism:ritual_dummy')
        .displayName(displayName)
        .tooltip(description)
    }

    registerRitualDummy(
        'undergarden_catalyst',
        'Craft Catalyst',
        'With the blessing of the Otherworld and invoking higher powers, create a keystone capable of catalyzing the formation of a planar rift to the Undergarden.'
    )
    registerRitualDummy(
        'codex_arcana',
        'Craft Codex Arcana',
        "Borrowing scant wisps of knowledge from the Otherworld and combining it with condensed memory, inscribe a book with sigils and symbols that can open one's mind to the flow of mana through the planes."
    )
    registerRitualDummy(
        'sated_dreadshard',
        'Craft Sated Dreadshard',
        'Quench a Thirsting Dreadshard with the use of divine invocations, delicious foods and natural magic.'
    )
    registerRitualDummy(
        'conjure_witch',
        'Conjure Witch',
        'Call forth a Witch to trade with, kill or learn the secrets of the Dark One from.'
    )
    registerRitualDummy(
        'conjure_wandering_trader',
        'Conjure Wandering Trader',
        'Call forth a Wandering Trader to trade with or let out your frustrations on. Llamas not included.'
    )
    registerRitualDummy(
        'conjure_cleric',
        'Conjure Cleric',
        'Call forth a Cleric to trade with, kill or learn the secrets of the Light One from.'
    )
    registerRitualDummy(
        'summon_day_foliot',
        'Summon Sunny Foliot',
        'Summon a sun-aligned foliot to change the time to day.'
    )
    registerRitualDummy(
        'summon_night_foliot',
        'Summon Moon Foliot',
        'Summon a moon-aligned foliot to change the time to night.'
    )
    registerRitualDummy(
        'summon_clear_foliot',
        'Summon Clearsky Foliot',
        'Summon a clear-bodied foliot to clear the weather.'
    )
    registerRitualDummy(
        'summon_rain_foliot',
        'Summon Flooded Foliot',
        'Summon a drowned foliot to call forth rain.'
    )
    registerRitualDummy(
        'summon_thunder_foliot',
        'Summon Stormy Foliot',
        'Summon a charged foliot to call forth a thunderstorm.'
    )
})