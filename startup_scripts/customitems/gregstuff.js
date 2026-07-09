StartupEvents.registry('item', event => {
event.create('manaweave_processor')
    .displayName("Manaweave Processor")
    .texture("kubejs:item/manaweave_processor")
    .tag("gtceu:circuits/zpm")

event.create('manaweave_processor_assembly')
    .displayName("Manaweave Processor Assembly")
    .texture("kubejs:item/manaweave_processor_assembly")
    .tag("gtceu:circuits/uv")

event.create('manaweave_processor_computer')
    .displayName("Manaweave Processor Supercomputer")
    .texture("kubejs:item/manaweave_processor_computer")
    .tag("gtceu:circuits/uhv")

event.create('manaweave_processor_mainframe')
    .displayName("Manaweave Processor Mainframe")
    .texture("kubejs:item/manaweave_processor_mainframe")
    .tag("gtceu:circuits/uev")

})