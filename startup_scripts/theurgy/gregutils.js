StartupEvents.registry('item', (event) => {
	event.create('alchemical_sulfur_cobaltite', 'theurgy:alchemical_sulfur')
		.sourceItem('gtceu:cobaltite_dust')
		.sourceName("Cobaltite")
		.sulfurTier("rare")
		.sulfurType("metals")
    
    event.create('alchemical_sulfur_cobalt', 'theurgy:alchemical_sulfur')
		.sourceItem('gtceu:cobalt_ingot')
		.sourceName("Cobalt")
		.sulfurTier("rare")
		.sulfurType("metals")

})