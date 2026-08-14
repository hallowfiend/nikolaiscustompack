ServerEvents.recipes(event =>{
    event.remove({output: "occultism:spirit_attuned_gem"})
    event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'aether:zanite_gemstone')
    event.recipes.occultism.spirit_fire('gtceu:strumm_ingot', 'gtceu:frostsilver_ingot')
})