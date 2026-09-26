StartupEvents.registry('item', (event) => {
	function registerRitualDummy(id, displayName, description){
        event.create(`kubejs:ritual_dummy/${id}`, 'occultism:ritual_dummy')
        .displayName(displayName)
    }

    registerRitualDummy(
        'undergarden_catalyst',
        'Craft Catalyst'
    )
    registerRitualDummy(
        'codex_arcana',
        'Craft Codex Arcana'
    )
    registerRitualDummy(
        'sated_dreadshard',
        'Craft Sated Dreadshard'
    )
    registerRitualDummy(
        'conjure_witch',
        'Conjure Witch'
    )
    registerRitualDummy(
        'conjure_wandering_trader',
        'Conjure Wandering Trader'
    )
    registerRitualDummy(
        'conjure_cleric',
        'Conjure Cleric'
    )
    registerRitualDummy(
        'summon_day_foliot',
        'Summon Sunny Foliot'
    )
    registerRitualDummy(
        'summon_night_foliot',
        'Summon Moon Foliot'
    )
    registerRitualDummy(
        'summon_clear_foliot',
        'Summon Clearsky Foliot'
    )
    registerRitualDummy(
        'summon_rain_foliot',
        'Summon Flooded Foliot'
    )
    registerRitualDummy(
        'summon_thunder_foliot',
        'Summon Stormy Foliot'
    )
    registerRitualDummy(
        'brainsweep_scroll',
        "Inscribe Forbidden Scroll"
    )
})