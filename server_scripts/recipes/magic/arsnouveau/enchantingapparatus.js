ServerEvents.recipes(event => {
   //Spellbook
   event.remove({ output: 'ars_nouveau:novice_spell_book' })
   event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'irons_spellbooks:epic_ink',
            'evilcraft:inverted_potentia_empowered',
            'kubejs:token_flux',
            'occultism:spirit_attuned_gem',
            'mna:greater_mote_arcane',
            'create:deployer',
            'malum:fused_consciousness',
            'kubejs:rune_diligence'
        ],
        'irons_spellbooks:dragonskin_spell_book',             
        'ars_nouveau:novice_spell_book',   
        4000                            
    ).id('kubejs:ars_nouveau/enchanting_apparatus/novice_spell_book')
    //Spell turret
    event.remove({ output: 'ars_nouveau:basic_spell_turret' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'goety:mystic_core',
            'kubejs:castbrain',
            'ars_nouveau:source_gem_block',
            'eidolon:arcane_gold_block',
            'botania:dragonstone'
        ],
        'scguns:basic_turret',             
        'ars_nouveau:basic_spell_turret',   
        2000                            
    ).id('kubejs:ars_nouveau/enchanting_apparatus/basic_spell_turret')
    //SANDSO TIMEO
    event.remove({output: 'gag:time_sand_pouch'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'kubejs:rune_time',
            'kubejs:rune_patience',
            'minecraft:nautilus_shell',
            'malum:cthonic_gold',
            'hexerei:infused_fabric',
            'kubejs:treated_leather',
            'kubejs:treated_leather'
        ],
        'minecraft:bundle',             
        'gag:time_sand_pouch',   
        1000                        
    ).id('kubejs:ars_nouveau/enchanting_apparatus/time_sand_pouch')
})
