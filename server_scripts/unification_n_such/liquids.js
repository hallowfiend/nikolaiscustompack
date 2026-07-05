//priority: 9

const bulkFluidReplace = [
		{ replacement: 'evilcraft:blood', target: 'hexerei:blood_fluid'},
    /* { replacement: 'embers:molten_bronze', target: 'tconstruct:molten_bronze'},
    { replacement: 'embers:molten_brass', target: 'tconstruct:molten_brass'},
    { replacement: 'embers:molten_iron', target: 'tconstruct:molten_iron'},
    { replacement: 'embers:molten_gold', target: 'tconstruct:molten_gold'},
    { replacement: 'embers:molten_copper', target: 'tconstruct:molten_copper'},
    { replacement: 'embers:molten_lead', target: 'tconstruct:molten_silver'},
    { replacement: 'embers:molten_mithril', target: 'constructs_casting:molten_mithril'},
    { replacement: 'embers:molten_nickel', target: 'tconstruct:molten_nickel'},
    { replacement: 'embers:molten_tin', target: 'tconstruct:molten_tin'},
    { replacement: 'embers:molten_aluminum', target: 'tconstruct:molten_aluminum'},
    { replacement: 'embers:molten_zinc', target: 'tconstruct:molten_zinc'},
    { replacement: 'embers:molten_platinum', target: 'tconstruct:molten_platinum'},
    { replacement: 'embers:molten_uranium', target: 'tconstruct:molten_uranium'},
    { replacement: 'embers:molten_electrum', target: 'tconstruct:molten_electrum'},
    { replacement: 'embers:molten_constantan', target: 'tconstruct:molten_constantan'},
    { replacement: 'embers:molten_invar', target: 'tconstruct:molten_invar'},
    { replacement: 'embers:molten_gold', target: 'tconstruct:molten_gold'},
    { replacement: 'gtceu:mithril', target: 'constructs_casting:molten_mithril'},
    { replacement: 'gtceu:brass', target: 'tconstruct:molten_brass'},
    { replacement: 'gtceu:wrought_iron', target: 'tconstruct:molten_iron'},
    { replacement: 'gtceu:gold', target: 'tconstruct:molten_gold'},
    { replacement: 'gtceu:cobalt', target: 'tconstruct:molten_cobalt'},
    { replacement: 'gtceu:steel', target: 'tconstruct:molten_steel'},
    { replacement: 'gtceu:rose_gold', target: 'tconstruct:molten_rose_gold'},
    { replacement: 'gtceu:molten_rose_gold', target: 'tconstruct:molten_rose_gold'},
    { replacement: 'gtceu:black_steel', target: 'tcompat:molten_black_steel'},
    { replacement: 'gtceu:molten_black_steel', target: 'tcompat:molten_black_steel'},
    { replacement: 'gtceu:tin', target: 'tconstruct:molten_tin'},
    { replacement: 'gtceu:silver', target: 'tconstruct:molten_silver'},
    { replacement: 'gtceu:aluminium', target: 'tconstruct:molten_aluminum'},
    { replacement: 'gtceu:nickel', target: 'tconstruct:molten_nickel'},
    { replacement: 'gtceu:lead', target: 'tconstruct:molten_lead'},
    { replacement: 'gtceu:zinc', target: 'tconstruct:molten_zinc'},
    { replacement: 'gtceu:platinum', target: 'tconstruct:molten_tungsten'},
    { replacement: 'gtceu:osmium', target: 'tconstruct:molten_osmium'},
    { replacement: 'gtceu:uranium', target: 'tconstruct:molten_uranium'},
    { replacement: 'gtceu:chromium', target: 'tconstruct:molten_chromium'},
    { replacement: 'gtceu:cadmium', target: 'tconstruct:molten_cadmium'},
    { replacement: 'gtceu:bronze', target: 'tconstruct:molten_bronze'},
    { replacement: 'gtceu:brass', target: 'tconstruct:molten_brass'},
    { replacement: 'gtceu:electrum', target: 'tconstruct:molten_electrum'},
    { replacement: 'gtceu:invar', target: 'tconstruct:molten_invar'},
    { replacement: 'gtceu:pewter', target: 'tconstruct:molten_pewter'},
    { replacement: 'gtceu:nicrosil', target: 'tconstruct:molten_nicrosil'},
    { replacement: 'gtceu:duralumin', target: 'tconstruct:molten_duralumin'},
    { replacement: 'gtceu:bendalloy', target: 'tconstruct:molten_bendalloy'},
    { replacement: 'gtceu:molten_amethyst', target: 'tconstruct:molten_amethyst'},
    { replacement: 'gtceu:manasteel', target: 'tcintegrations:molten_manasteel'},
    { replacement: 'gtceu:cloggrum', target: 'tcintegrations:molten_cloggrum'},
    { replacement: 'gtceu:source', target: 'tcintegrations:molten_source_gem'},
    { replacement: 'gtceu:soul_stained_steel', target: 'tcintegrations:molten_soul_stained_steel'},
    { replacement: 'tcompat:molten_desh', target: 'tcintegrations:molten_desh'},
    { replacement: 'tcompat:molten_calorite', target: 'tcintegrations:molten_calorite'},
    { replacement: 'tcompat:molten_ostrum', target: 'tcintegrations:molten_ostrum'},
    { replacement: 'gtceu:desh', target: 'tcompat:molten_desh'},
    { replacement: 'gtceu:calorite', target: 'tcompat:molten_calorite'},
    { replacement: 'gtceu:ostrum', target: 'tcompat:molten_ostrum'},
    { replacement: 'gtceu:antimony', target: 'tinkers_advanced:molten_antimony'},
    { replacement: 'gtceu:bismuth', target: 'tinkersextraintegration:molten_bismuth'},
    { replacement: 'gtceu:bismuth', target: 'tinkers_advanced:molten_bismuth'} */
	];

ServerEvents.recipes(event => {

  bulkFluidReplace.forEach((group) => {
      event.replaceOutput({}, group.target, group.replacement);
      event.replaceInput({}, group.target, group.replacement);
  });

})

ServerEvents.tags("fluid", (event) => {
		bulkFluidReplace.forEach((group) => {
      event.removeAllTagsFrom(group.target);
		  event.add("c:hidden_from_recipe_viewers", group.target);
    });
});

console.log('Fluids distilled')