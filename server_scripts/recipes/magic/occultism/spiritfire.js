ServerEvents.recipes(event =>{
    event.remove({output: "occultism:spirit_attuned_gem"})
    event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'gtceu:almandine_gem')
})