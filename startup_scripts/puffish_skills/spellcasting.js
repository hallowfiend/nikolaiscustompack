// priority: 998

//Listen to Ars Nouveau spells being cast
ForgeEvents.onEvent("com.hollingsworth.arsnouveau.api.event.SpellCastEvent", event => {
    if (!entity.isPlayer()) return;
    global.arsCast(event);
})

//Listen to Goety spells being cast
ForgeEvents.onEvent("com.Polarice3.Goety.common.events.spell.CastMagicEvent", event => {
    if (!entity.isPlayer()) return;
    global.goetyCast(event)
})

//Listen to Mana & Artifice spells being cast
ForgeEvents.onEvent("com.mna.api.events.SpellCastEvent", event => {
    if (!entity.isPlayer()) return;
    global.mnaCast(event)
})

const $SkillsMod = Java.loadClass("net.puffish.skillsmod.SkillsMod").getInstance()

global.TESTING = { value: false }

global.mnaCast = (event) => {
    try {
        addExp(event.getSource().getCaster(), event.getSpell().getManaCost() * 0.25)
    } catch (err) {
        console.error(`error in mnaCast: ${err}`)
        if (global.TESTING.value) error(event.getSource().getCaster(), `Error in mnaCast: ${err}`)
    }
}

global.arsCast = (event) => {
    try {
        addExp(event.entity, event.spell.getCost() * 0.1)
    } catch (err) {
        console.error(`error in arsCast: ${err}`)
        if (global.TESTING.value) error(event.entity, `Error in arsCast: ${err}`)
    }
}

global.goetyCast = (event) => {
    try {
        addExp(event.entity, event.spell.defaultSoulCost() * 0.5)
    } catch (err) {
        console.error(`error in Cast: ${err}`)
        if (global.TESTING.value) error(event.entity, `Error in goetyCast: ${err}`)
    }
}

const addExp = (entity, amount) => {
    $SkillsMod.addExperience(entity, "puffish_skills:arkanum", Math.floor(amount))
}