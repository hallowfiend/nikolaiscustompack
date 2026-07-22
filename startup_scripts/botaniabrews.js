StartupEvents.registry('botania:brews', event => {
    event.create("conduit")
        .cost(6000)
        //duration in TICKS not seconds
        .effect("ars_nouveau:mana_regen", 4800 * 20);
    event.create('battlemage')
        .cost(8000)
        .effect('ars_nouveau:spell_damage', 2400 * 20, 2);
    event.create('barkhide')
        .cost(8000)
        .effect("irons_spellbooks:oakskin", 5200 * 20, 2)
        .noPendant();
    event.create('ironflesh')
        .cost(8000)
        .effect("irons_spellbooks:oakskin", 2400 * 20, 5)
        .noPendant();
    event.create('unsight')
        .cost(8000)
        .effect("irons_spellbooks:true_invisibility", 800 * 20)
        .noPendant();
    event.create('rogue')
        .cost(8000)
        .effect("irons_spellbooks:evasion", 800 * 20, 3)
        .noIncense()
        .noPendant();
})