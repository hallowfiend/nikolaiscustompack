//priority: 100

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty");
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}

GTCEuStartupEvents.registry("gtceu:material", event => {
    addFluid(GTMaterials.Amethyst, $FluidStorageKeys.LIQUID);
    GTMaterials.Electrum.setProperty(PropertyKey.ORE, new $OreProperty()); //native electrum
    GTMaterials.Brass.setProperty(PropertyKey.ORE, new $OreProperty()); //brass o' the devil
    GTMaterials.Rutile.setProperty(PropertyKey.ORE, new $OreProperty()); //bauxite cannot form on the moon
    GTMaterials.Invar.setProperty(PropertyKey.ORE, new $OreProperty()); //native form in meteors
    GTMaterials.Borax.setProperty(PropertyKey.ORE, new $OreProperty()); 
    GTMaterials.Tellurium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Tellurium, $FluidStorageKeys.LIQUID);
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Germanium, $FluidStorageKeys.LIQUID);
    GTMaterials.Brass.addFlags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR);
    GTMaterials.CertusQuartz.addFlags(GTMaterialFlags.GENERATE_LENS);
    GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE);
    
    //Metals
    event.create('nicrosil')
            .ingot()
            .fluid()
            .color(0xa9a9b0)
            .components('2x nickel', 'chromium', 'nether_quartz')
            .flags(centrifuge)
            .iconSet(METALLIC);

    event.create('duralumin')
            .ingot()
            .fluid()
            .color(0xbbc9c1)
            .components('3x aluminium', 'copper')
            .flags(centrifuge)
            .iconSet(SHINY);

    event.create('bendalloy')
            .ingot()
            .fluid()
            .color(0xbab6a2)
            .components('2x tin', 'cadmium', 'lead')
            .flags(centrifuge)
            .iconSet(METALLIC);

    event.create('pewter')
            .ingot()
            .fluid()
            .color(0x46463D)
            .components('iron', 'lead')
            .iconSet(METALLIC)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_SPRING,
                GTMaterialFlags.GENERATE_SPRING_SMALL,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_FINE_WIRE,
                GTMaterialFlags.NO_SMELTING,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                ring
            );
    
    event.create('meteoric_iron')
        .ore()
        .ingot()
        .color(0x70675f)
        .secondaryColor(0x8a7a6e)
        .addOreByproducts('nickel', 'germanium', 'gallium')
        .formula('Fe?Ni?Ga?Ge?')
         .toolStats(
            ToolProperty.Builder.of(0.9, 5.5, 700, 3)
            .enchantment(Enchantment.UNBREAKING, 3)
            .enchantment(Enchantment.EFFICIENCY, 3)
            .enchantment(Enchantment.SHARPNESS, 3)
            .build()
        ) 
        .iconSet(METALLIC);
    
    //Rocks and minerals
    event.create('calcium_magnesium_carbonate')
        .dust()
        .color(0xf7f6f2)
        .components('calcium',  'magnesium', '2x carbon', '6x oxygen')
        .flags(electrolyze);
    
    event.create('limestone')
        .dust()
        .color(0xb8b1a0)
        .components('calcium_carbonate', 'calcium_magnesium_carbonate')
        .flags(
            centrifuge
        );
    
    event.create('petzite')
        .ore()
        .gem()
        .color(0x5d534f)
        .components('3x silver', '2x gold', 'tellurium')
        .addOreByproducts('gold', 'lead')
        .flags(
            centrifuge
        );
    
    event.create("fluorite")
        .gem()
        .ore()
        .color(0x0c9949)
        .iconSet("diamond")
        .components("1x calcium", "2x fluorine")
        .flags(
            electrolyze
        )
        .addOreByproducts("calcite", "barite");
    
    event.create('wolframite')
        .ore()
        .gem()
        .color(0x231b2e)
        .components('iron', 'manganese', 'tungsten', '4x oxygen')
        .iconSet(GTMaterialIconSet.DULL);

    event.create('hutchinsonite')
        .gem()
        .ore()
        .color(0x67797B)
        .components('2x thallium', '2x lead', '5x arsenic', '9x sulfur')
        .iconSet(METALLIC)
        .flags(centrifuge);
    
    event.create('thorianite')
        .gem()
        .ore()
        .color(0x1B161B)
        .components('thorium', '2x oxygen')
        .iconSet(FLINT)
        .flags(centrifuge);

    event.create('anorthite')
        .gem()
        .ore()
        .color(0xB9AC8B)
        .components('calcium', '2x aluminium', '2x silicon', '8x oxygen')
        .iconSet(FLINT)
        .flags(electrolyze);

    event.create("naumannite")
        .dust()
        .ore()
        .color(0x5f7013)
        .iconSet(SHINY)
        .components("2x silver", "selenium")
        .addOreByproducts("sulfur", "obsidian")
        .flags(centrifuge);

    event.create("hadalite")
        .dust()
        .ore()
        .color(0x300173)
        .iconSet(DULL)
        .components("2x thallium", "3x sulfur", "4x obsidian")
        .addOreByproducts("sulfur", "obsidian")
        .flags(centrifuge);

    event.create('castorite')
        .gem()
        .ore()
        .color(0xC6C6CB)
        .iconSet(QUARTZ)
        .components('lithium', 'aluminium', '4x silicon', '10x oxygen')
        .flags(electrolyze);

    event.create('bismuthinite')
        .gem()
        .ore()
        .color(0xBFA897)
        .components('2x bismuth', '3x sulfur')
        .iconSet(QUARTZ)
        .addOreByproducts("chalcopyrite", "silver")
        .flags(centrifuge);
    
    //Other compounds and polymers
    event.create('bismuth_telluride')
        .ingot()
        .iconSet(METALLIC)
        .color(0x363636)
        .components('2x bismuth', '3x tellurium')
        .blastTemp(3700, "highest", GTValues.V[GTValues.ZPM], 1600)
        .flags(
            plates,
            centrifuge
        );
    
    event.create('bakelite')
        .fluid()
        .polymer()
        .components('phenol', 'formaldehyde')
        .color(0x79392F)
        .secondaryColor(0xA16E7F)
        .flags(plates, gear, small_gear, rod, frame, explosive);

    //Gases
    event.create('ozone')
        .gas()
        .color(0x9ad6d6)
        .components(
            '3x oxygen'
        )
        .iconSet(GTMaterialIconSet.FLUID);
    
    //Gems
    event.create('jade')
        .gem(2)
        .ore()
        .color(0x256B32)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .addOreByproducts('nether_quartz', 'chromium')
        .washedIn('water')
        .components('sodium', 'aluminium', '2x silicon', '6x oxygen')
        .flags(
            plates,
            lens,
            crystallizable,
            electrolyze
        );
    
    event.create('turquoise')
        .gem()
        .ore()
        .color(0x2bffd8)
        .components('copper', '6x aluminium', '6x phosphate', '8x oxygen', '8x hydrogen', '4x water')
        .flags(electrolyze)
        .iconSet(LAPIS);

    event.create('spinel')
        .gem()
        .ore()
        .color(0xe36fc0)
        .components('magnesium', '2x aluminium', '4x oxygen')
        .addOreByproducts('limestone')
        .iconSet(RUBY)
        .flags(
            crystallizable,
            electrolyze,
            no_smashing,
            no_smelt
        );

    event.create('amber')
        .gem()
        .ore(3, 1)
        .color(0xF8B009)
        .iconSet(OPAL)
        .flags(plates, lens, no_smashing, flammable);
})