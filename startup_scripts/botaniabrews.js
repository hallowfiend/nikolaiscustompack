let Brew = Java.loadClass('vazkii.botania.api.brew.Brew')
    let MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

    let cachedGet = getter => {
        let cached = null
        return () => {
            if (!cached) cached = getter()
            return cached
        }
    }

StartupEvents.registry('botania:brews', event => {

    event.createCustom(
            'conduit',
            cachedGet(() => new Brew(0x777777, 6000, new MobEffectInstance('ars_nouveau:mana_regen', 4800*20))))

    /*event.create('battlemage')
        .cost(6000)
        .effect('ars_nouveau:spell_damage', 2400 * 20, 2);
    event.create('barkhide')
        .cost(4000)
        .effect("irons_spellbooks:oakskin", 5200 * 20, 2)
        .noPendant();
    event.create('ironflesh')
        .cost(7500)
        .effect("irons_spellbooks:oakskin", 2400 * 20, 5)
        .noPendant();
    event.create('unseen')
        .cost(8000)
        .effect("irons_spellbooks:true_invisibility", 800 * 20)
        .noPendant();
    event.create('rogue')
        .cost(8000)
        .effect("irons_spellbooks:evasion", 800 * 20, 3)
        .noIncense()
        .noPendant(); */
})