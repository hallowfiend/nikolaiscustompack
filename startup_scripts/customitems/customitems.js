StartupEvents.registry('item', event => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // foodstuffs and food-related items
    //drinks
    event.create('forgotten_imbibation')
    .displayName('Forgotten Imbibation')
    .maxStackSize(16)
    .food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 1)
            .effect('brewinandchewin:intoxication', 6000, 0, 1)
			.effect('slow_falling', 3300, 0, 1)
			.effect('weakness', 1000, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
    event.create('soulchill_absinthe')
    .displayName('Soulchill Absinthe')
    .maxStackSize(16)
    .food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 1, 1)
            .effect('brewinandchewin:intoxication', 6000, 0, 1)
			.effect('cold_sweat:frigidness', 12000, 9, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
    event.create('pyrogenic_cognac')
    .displayName('Pyrogenic Cognac')
    .maxStackSize(16)
    .food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 2, 1)
            .effect('brewinandchewin:intoxication', 6000, 0, 1)
			.effect('cold_sweat:warmth', 12000, 9, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
    event.create('skull_crusher_ale')
    .displayName('Skullcrusher Ale')
    .maxStackSize(16)
    .food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 2, 1)
            .effect('brewinandchewin:intoxication', 6000, 0, 1)
			.effect('strength', 3300, 1, 1)
			.effect('brewinandchewin:raging', 3300, 1, 1)
            .effect('slowness', 1100, 1, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
    event.create('slayer_stout')
    .displayName('Slayer Stout')
    .maxStackSize(16)
     .food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 2, 1)
            .effect('brewinandchewin:intoxication', 6000, 0, 1)
			.effect('neapolitan:berserking', 3300, 2, 1)
			.effect('dungeonsdelight:tenacity', 3300, 0, 1)
            .effect('caverns_and_chasms:bloodlust', 6600, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
    event.create('red_rock_blaster')
    .displayName('Red Rock Blaster')
    .maxStackSize(16)
    .food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 1, 1)
            .effect('brewinandchewin:intoxication', 6000, 0, 1)
			.effect('haste', 3300, 2, 1)
			.effect('health_boost', 2200, 1, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
    // biological cyberware
    event.create('nutrient_sacs')
    .displayName('Nutrient Sacs');
    // crafting components
    //custom tokens
    const tokenNames = [
        'change',
        'flux',
        'cycles',
        'recurrence',
        'defiance',
        'determination',
        'stillness',
        'stasis'
    ]
    tokenNames.forEach(token => {
        var tokenLang = capitalizeFirstLetter(token)
        event.create(`token_${token}`)
        .displayName(`Token of ${tokenLang}`)
    })
    //custom runes
    const runeNames = [
        //basic
        'light',
        'void',
        'mind',
        'heart',
        //tier 2 (fundamental forces)
        'storms', //electromagnetism, mind & light
        'space', //gravity, heart & void
        'force', //strong force, light & heart
        'time', //weak force (because beta decay is slow i guess), mind & void
        //tier 3 (virtues)
        'charity', //light & space
        'chastity', //heart & space
        'diligence', //heart & force
        'humility', //void & storms
        'kindness', //light & force
        'patience', //mind & time
        'temperance' //mind & storms
    ]
    runeNames.forEach(rune => {
        var runeLang = capitalizeFirstLetter(rune)
        event.create(`rune_${rune}`)
        .displayName(`Rune of ${runeLang}`)
        .tag('botania:runes')
    })
    event.create('blood_soaked_nutrient_bar')
    .displayName('Bloodsoaked Nutrient Bar')
    .food(food => {
        food
        .hunger(11)
        .saturation(3)
        .effect('dungeonsdelight:tenacity', 2000, 1, 1)
    }).useAnimation('eat');
    event.create('atropos_serum')
    .displayName('Atropos Serum');
    event.create('anointing_paste')
    .displayName('Anointing Paste');
    event.create('concentratedcatalyst')
    .displayName('Concentrated Catalyst');
    event.create('infused_string')
    .displayName('Infused String');
    event.create('hemauric_nutrient_pellets')
    .displayName('Hemauric Nutrient Pellets');
    event.create('nature_offering')
    .displayName('Offering to Nature');
    event.create('prepared_stone')
    .displayName('Prepared Stone');
    event.create('treated_leather')
    .displayName('Treated Leather');
    event.create('bloodchannel_gem')
    .displayName('Hematic Hardruby');
    event.create('blood_slime_ball')
    .displayName('Coagulated Blood Ball')
    .tag('forge:slimeball/blood')
    .tag('forge:slimeballs');
    event.create('bloodied_dust')
    .displayName('Bloodied Dust');
    event.create('castbrain')
    .displayName('Castbrain');
    event.create('biomantic_neuron')
    .displayName('Biomantic Neuron');
    event.create('slimy_eye')
    .displayName('Biomantic Eyeball');
    event.create('ashen_blend')
    .displayName('Ashen Blend');
    event.create('ethereal_ashen_blend')
    .displayName('Ethereal Ashen Blend');
    event.create('aerilated_pneumatic_component')
    .displayName('Aerilated Pneumatic Component')
    //dormant blood orbs
    const bloodOrbTiers = [
        'weak',
        'apprentice',
        'magician',
        'master',
        'archmage',
        'transcendent'
    ]
    bloodOrbTiers.forEach( tier => {
        var orbLang = capitalizeFirstLetter(tier)
        event.create(`dormant_${tier}_blood_orb`)
        .displayName(`Dormant ${orbLang} Blood Orb`)
    })
    //hibernal herbs sigil replacements
    event.create('singed_leaves')
    .displayName('Singed Leaves');
    //custom aspecti
    const customAspectiMetals = [
        'tin',
        'zinc',
        'aluminium',
        'gold',
        'electrum',
        'constantan',
        'invar',
        'pewter',
        'bronze',
        'brass',
        'duralumin'
    ]
    customAspectiMetals.forEach(metal => {
        var metalLang = capitalizeFirstLetter(metal)
        event.create(`aspectus_${metal}`)
        .displayName(`${metalLang} Aspectus`)
        .tag(`embers:aspectus/${metal}`);
    })
    event.create('aspectus_rose_gold')
    .displayName('Rose Gold Aspectus')
    .tag('embers:aspectus/rose_gold')
    event.create('aspectus_sterling_silver')
    .displayName('Sterling Silver Aspectus')
    .tag('embers:aspectus/sterling_silver')
})