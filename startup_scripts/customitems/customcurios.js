const $Helper = Java.loadClass('de.teamlapen.vampirism.common.util.Helper')

StartupEvents.registry('item', event => {
    //Seal of the Ordo Sanguinis
    event.create('ordo_sanguinis_seal')
    .displayName('Seal of the Ordo Sanguinis')
    .maxStackSize(1)
    .tooltip("§6Provides a permanent sunscreen effect while equipped, and improves holy magic. For the sacred sanguophage or other exalted exanimate.")
    .tag("curios:charm") 
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { 
                    let entity = slotContext.entity()
                    if (entity.age % 200 === 0) {
                        entity.potionEffects.add('vampirism:sunscreen', 220, 1, false, false)
                        entity.potionEffects.add('mowziesmobs:sunblock', 220, 1, false, false)
                    }
                })
                .addAttribute(
                    "irons_spellbooks:holy_spell_power",
                    UUID,
                    0.3,
                    "addition"
                )
                .addAttribute(
                    "eidolon:chanting_speed",
                    UUID,
                    0.3,
                    "multiply_total"
                )
        );
})