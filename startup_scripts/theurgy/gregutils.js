StartupEvents.registry('item', (event) => {
	event.create('cobaltite_sulfur', 'theurgy:alchemical_sulfur')
		.sourceItem('gtceu:cobaltite_dust')
		.sourceName("Cobaltite")
		.sulfurTier("rare")
		.sulfurType("metals")
    
    event.create('cobalt_sulfur', 'theurgy:alchemical_sulfur')
		.sourceItem('gtceu:cobalt_ingot')
		.sourceName("Cobalt")
		.sulfurTier("rare")
		.sulfurType("metals")

})