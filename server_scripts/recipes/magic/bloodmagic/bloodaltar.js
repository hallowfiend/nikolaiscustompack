ServerEvents.recipes(event => {
    //blank slate
    event.remove({ output: "bloodmagic:blankslate" })
    event.recipes.bloodmagic
            .altar('bloodmagic:blankslate', 'kubejs:prepared_stone')
            .upgradeLevel(0)
            .consumptionRate(50)
            .drainRate(5)
            .altarSyphon(1000)
            .id('kubejs:blank_slate');
    //blood orbs
    const orbs = [
        {name: "weak", tier: 0, cost: 2000},
        {name: "apprentice", tier: 1, cost: 5000},
        {name: "magician", tier: 2, cost: 20000},
        {name: "master", tier: 3, cost: 40000},
        {name: "archmage", tier: 4, cost: 60000}
    ]
    orbs.forEach(orb =>{
        event.remove({ output: `bloodmagic:${orb.name}bloodorb`})
        event.recipes.bloodmagic
            .altar(`bloodmagic:${orb.name}bloodorb`, `kubejs:dormant_${orb.name}_blood_orb`)
            .upgradeLevel(orb.tier)
            .consumptionRate(orb.cost*0.05)
            .altarSyphon(orb.cost)
            .id(`kubejs:blood_magic/blood_altar/${orb.name}_blood_orb`);
    })

    event.remove({ output: "animus:blood_orb_transcendent" })
    event.recipes.bloodmagic
            .altar('animus:blood_orb_transcendent', 'kubejs:dormant_transcendent_blood_orb')
            .upgradeLevel(5)
            .consumptionRate(500)
            .altarSyphon(80000)
            .id('kubejs:blood_magic/blood_altar/transcendent_blood_orb');
})