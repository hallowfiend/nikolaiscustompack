ServerEvents.recipes((event) => {
     event.recipes.gtceu.chemical_reactor('kubejs:gtceu/chemical_reactor/misc_greg/bakelite')
        .inputFluids('gtceu:phenol 1000', 'gtceu:formaldehyde 1000')
        .outputFluids('gtceu:bakelite 1000')
        .duration(30).EUt(16);
})