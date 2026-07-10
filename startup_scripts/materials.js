// priority: 98

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty");
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
// const $GTFluids = Java.loadClass('com.gregtechceu.gtceu.common.data.GTFluids')

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}

/* let assignFluid = (mat, fluid) => {
    $GTFluids['handleNonMaterialFluids(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier)'](mat, fluid);
} */

GTCEuStartupEvents.registry("gtceu:material", (event) => {

  addFluid(GTMaterials.Amethyst, $FluidStorageKeys.LIQUID);
  GTMaterials.Electrum.setProperty(PropertyKey.ORE, new $OreProperty()); //native electrum
  GTMaterials.Brass.setProperty(PropertyKey.ORE, new $OreProperty()); //brass o' the devil
  GTMaterials.Tellurium.setProperty(PropertyKey.INGOT, new $IngotProperty());
  addFluid(GTMaterials.Tellurium, $FluidStorageKeys.LIQUID);
  GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty());
  addFluid(GTMaterials.Germanium, $FluidStorageKeys.LIQUID);
  GTMaterials.CertusQuartz.addFlags(GTMaterialFlags.GENERATE_LENS);
  GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE);

  // dummy materials
   event.create('mana')
      .element('mana')
      .color(0x22a8bd)
      .plasma();

   event.create('arkanum')
      .element('arkanum')
      .color(0xae44e2)
      .gas();

    event.create('spirit')
        .element('spirit')
        .color(0x91fff6)
        .plasma();

    event.create('aerialis')
        .element('aerialis')
        .color(0xfeffed)
        .gas();

    event.create('infernalis')
        .element('infernalis')
        .color(0xffad99)
        .gas();

    event.create('terrae')
        .element('terrae')
        .color(0x7ae070)
        .gas();

    event.create('aqua')
        .color(0x8798fa)
        .element('aqua')
        .gas();

    event.create('sacrum')
        .color(0xff5493)
        .element('sacrum')
        .plasma();

    event.create('profanum')
        .color(0xa454ff)
        .element('profanum')
        .plasma();

    event.create('xenorhast')
        .color(0x8e00a1)
        .element('xenorhast')
        .plasma();
    
    event.create('exispiravit') // raw will
        .element('exispiravit')
        .color(0x4EF6FF)
        .gas();
    
    event.create('azoth') //corrosive will
        .element('azoth')
        .color(0xB8D69D)
        .gas();

    event.create('discidia') //vengeful will
        .element('discidia')
        .color(0xDD9698)
        .gas();
    
    event.create('ragna') //destructive will
        .element('ragna')
        .color(0xDACD99)
        .gas();

    event.create('firmamentum') //steadfast will
        .element('firmamentum')
        .color(0x9FB8D4)
        .gas();

    event.create('mundus')
        .color(0xe6e6e6)
        .element('mundus')
        .iconSet(DULL)
        .dust();

    event.create('aura')
        .color(0x6dd400)
        .element('aura')
        .gas();

    event.create('antiaura')
        .color(0xd45100)
        .element('antiaura')
        .gas();


  // Orthodox spirits

    event.create('solid_arkanum')
      .components('arkanum', 'spirit', 'mundus')
      .color(0xae44e2)
      .gem()
      .dust()
      .iconSet(OPAL)
      .flags(no_decomp);

    event.create('solid_aerialis')
        .components('aerialis', 'spirit', 'mundus')
        .color(0xfeffed)
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);

    event.create('solid_infernalis')
        .components('infernalis', 'spirit', 'mundus')
        .color(0xffad99)
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);

    event.create('solid_terrae')
        .components('terrae', 'spirit', 'mundus')
        .color(0x7ae070)
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);

    event.create('solid_aqua')
        .color(0x8798fa)
        .components('aqua', 'spirit', 'mundus')
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);

    event.create('solid_sacrum')
        .color(0xff5493)
        .components('sacrum', 'spirit', 'mundus')
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);

    event.create('solid_profanum')
        .color(0xa454ff)
        .components('profanum', 'spirit', 'mundus')
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);

    event.create('solid_xenorhast')
        .color(0x8e00a1)
        .components('xenorhast', 'spirit', 'mundus')
        .gem()
        .dust()
        .iconSet(OPAL)
        .flags(no_decomp);
    
    // Demonic spirits

    event.create('raw_will')
        .gem()
        .color(0x4EF6FF)
        .components('exispiravit', 'spirit', 'mundus')
        .flags(
            no_decomp,
            crystallizable
        )
        .iconSet(QUARTZ);
    
    event.create('corrosive_will')
        .gem()
        .fluid()
        .color(0xB8D69D)
        .components('azoth', 'spirit', 'mundus')
        .flags(
            no_decomp,
            crystallizable
        )
        .iconSet(QUARTZ);
    
    event.create('destructive_will')
        .gem()
        .color(0xDACD99)
        .components('ragna', 'spirit', 'mundus')
        .flags(
            no_decomp,
            crystallizable
        )
        .iconSet(QUARTZ);
    
    event.create('vengeful_will')
        .gem()
        .color(0xDD9698)
        .components('discidia', 'spirit', 'mundus')
        .flags(
            no_decomp,
            crystallizable
        )
        .iconSet(QUARTZ);
    
    event.create('steadfast_will')
        .gem()
        .color(0x9FB8D4)
        .components('firmamentum', 'spirit', 'mundus')
        .flags(
            no_decomp,
            crystallizable
        )
        .iconSet(QUARTZ);

// Pneumaticcraft

    event.create('compressed_iron')
        .ingot()
        .iconSet(METALLIC)
        .color(0x64615e)
        .secondaryColor(0x373332)
        .components('iron', '2x air', 'aerialis')
        .flags(plates, gear, rod);

// Ars Nouveau

    event.create('source')
        .gem()
        .ore(2, 1)
        .liquid(900)
        .components('amethyst', 'aura', 'mana', 'mundus', '4x arkanum')
        .addOreByproducts('solid_arkanum', 'solid_xenorhast', 'amethyst', 'inert_crystal')
        .color(0xAE44E2)
        .secondaryColor(0xE244C8)
        .iconSet(RUBY)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.GENERATE_PLATE,
            crystallizable,
            no_decomp
        );

// Aether

    event.create('jade')
        .gem(2)
        .ore()
        .color(0x256B32)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .addOreByproducts('nether_quartz', 'chromium', 'solid_aerialis')
        .washedIn('water')
        .components('sodium', 'aluminium', '2x silicon', '6x oxygen')
        .flags(
            plates,
            lens,
            crystallizable,
            electrolyze
        );

    event.create("skyjade")
        .gem(3)
        .ore()
        .components('jade', '2x aerialis')
        .addOreByproducts('jade', 'solid_aerialis')
        .washedIn('water')
        .color(0x99cc5e)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(
            plates,
            lens,
            crystallizable,
            no_decomp
            );

    event.create("ambrosium")
        .gem(1)
        .ore()
        .fluid()
        .element('ambrosium')
        .addOreByproducts('gold', 'topaz')
        .washedIn('glowstone')
        .color(0xfefb64)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(
            no_decomp
        )
        .burnTime(1600);

    event.create("gravitite")
        .gem(3)
        .ore()
        .fluid()
        .element('gravitite')
        .addOreByproducts('amethyst', 'lead', 'source')
        .washedIn('mercury')
        .color(0xba5eb3)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(
            plates,
            crystallizable,
            no_decomp
        );

    event.create('zanite')
        .gem(2)
        .ore()
        .color(0x8e51e9)
        .element('zanite')
        .addOreByproducts('solid_xenorhast', 'aluminium', 'vanadium', 'source')
        .washedIn('amethyst')
        .iconSet(GTMaterialIconSet.DIAMOND)
        .flags(
            plates,
            lens,
            crystallizable
        );

// Botania

  event.create("manasteel")
      .ingot()
      .fluid()
      .color(0x67b9ee)
      .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
      .components('black_steel', 'mana')
      .flags(no_decomp,
        foil
      )
      .iconSet(GTMaterialIconSet.SHINY);

  event.create("elementium")
        .ingot()
        .fluid()
        .color(0xf472c6)
        .components('ambrosium', 'cobalt_brass', '2x mana', 'mundus', '2x sacrum', 'aura', 'arkanum')
        .flags(no_decomp)
        .iconSet(GTMaterialIconSet.SHINY);

    event.create('mana_pearl')
        .gem()
        .dust()
        .color(0x007b9b)
        .components('ender_pearl', 'mana')
        .flags(no_decomp)
        .iconSet(BRIGHT);

    event.create('mana_diamond')
        .gem()
        .dust()
        .color(0x39ecfc)
        .components('sapphire', 'mana')
        .flags(
            no_decomp,
            no_smashing,
            plates,
            lens
        )
        .iconSet(DIAMOND);

    event.create('terrasteel')
        .ingot()
        .fluid()
        .color(0x55f609)
        .components('manasteel', 'mana_pearl', 'mana_diamond', '8x mana')
        .flags(no_decomp)
        .iconSet(GTMaterialIconSet.METALLIC);

// Ad Astra

  event.create('desh')
          .ingot()
          .fluid()
          .ore()
          .color(0xF2A057).secondaryColor(0x2E2F04)
          .element('desh')
          .addOreByproducts('ilmenite', 'olivine')
          .washedIn('mercury')
          .iconSet(GTMaterialIconSet.METALLIC)
          .flags(GTMaterialFlags.GENERATE_PLATE);

  event.create('ostrum')
          .ingot()
          .fluid()
          .ore()
          .color(0xE5939B).secondaryColor(0x2F0425)
          .element('ostrum')
          .addOreByproducts('gypsum', 'olivine', 'magnetite', 'hematite')
          .washedIn('sulfuric_acid')
          .iconSet(GTMaterialIconSet.METALLIC)
          .flags(GTMaterialFlags.GENERATE_PLATE);

  event.create('calorite')
          .ingot()
          .fluid()
          .ore()
          .color(0xE65757).secondaryColor(0x2F0506)
          .element('calorite')
          .addOreByproducts('pyrite', 'apatite', 'olivine', 'sulfur')
          .washedIn('sodium_persulfate')
          .iconSet(GTMaterialIconSet.METALLIC)
          .flags(GTMaterialFlags.GENERATE_PLATE);

// Mana and Artifice

    event.create('purified_vinteum')
        .dust()
        .color(0xb273ff)
        .element('vinteum')
        .flags(block)
        .iconSet(SHINY);

    event.create('vinteum')
        .dust()
        .ore(5, 1, true)
        .color(0x9be3fa)
        .components('purified_vinteum', 'mundus', '4x oxygen', 'carbon', 'silicon')
        .addOreByproducts('purified_vinteum', 'source', 'lapis')
        .flags(
            electrolyze,
            no_smashing,
            no_smelt,
            mortar_grind
        )
        .iconSet(DULL);

    event.create('vinteum_alloy')
        .ingot()
        .color(0x9be3fa)
        .components('vinteum', 'iron')
        .flags(centrifuge)
        .iconSet(METALLIC);

    event.create('purified_vinteum_alloy')
        .ingot()
        .color(0xb273ff)
        .components('purified_vinteum', 'iron')
        .flags(centrifuge)
        .iconSet(METALLIC);

// General

    event.create('experience')
          .ingot()
          .fluid()
          .color(0x3ED900)
          .element('experience')
          .iconSet(SHINY);

    event.create('pewter')
          .ingot()
          .fluid()
          .color(0x46463D)
          .components('iron', 'lead')
          .iconSet(METALLIC)
          .flags(GTMaterialFlags.GENERATE_PLATE,
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
            ring);
    
    event.create('arcane_gold')
        .ingot()
        .color(0xEDAE66)
        .components('9x gold', '9x redstone', '2x spirit', '2x arkanum')
        .iconSet(SHINY)
        .flags(plates, rod, ring);
    
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

    event.create('ether')
        .gem()
        .gas()
        .color(0xdbf56e)
        .components('carbon', 'antiaura', 'corrosive_will')
        .flags(
            no_decomp,
            no_smashing
        )
        .iconSet(BRIGHT);

    event.create('turquoise')
        .gem()
        .ore()
        .color(0x2bffd8)
        .components('copper', '6x aluminium', '6x phosphate', '8x oxygen', '8x hydrogen', '4x water')
        .flags(electrolyze)
        .iconSet(LAPIS);
    
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
    
    event.create('meteoric_iron')
        .ore()
        .ingot()
        .color(0x70675f)
        .secondaryColor(0x8a7a6e)
        .addOreByproducts('nickel', 'germanium', 'gallium')
        .formula('Fe?Ni?Ga?Ge?')
         .toolStats(
            ToolProperty.Builder.of(0.9, 5.5, 700, 3)
            .build()
        ) 
        .addDefaultEnchant('minecraft:unbreaking', '3')
        .addDefaultEnchant('minecraft:efficiency', '3')
        .addDefaultEnchant('minecraft:sharpness', '3')
        .iconSet(METALLIC);

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

    event.create('luminite')
        .color(0x85ffad)
        .element('luminite')
        .liquid()
        .ingot()
        .ore()
        .dust()
        .flags(
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.NO_SMELTING
        )
        .iconSet(NETHERSTAR);
    
    event.create('isogen')
        .ingot()
        .color(0x076EAF)
        .iconSet(METALLIC)
        .liquid(0)
        .element('isogen')
        .cableProperties(GTValues.V[GTValues.UV], 4, 0, true)
        .flags(
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.NO_SMELTING
        );

    event.create('lemite') //after Stanisław Lem, the sci-fi writer
        .dust()
        .color(0x2a78a8)
        .ore(true)
        .iconSet(METALLIC)
        .liquid(50)
        .components('isogen', 'silicon_dioxide', 'fluorite', 'iron')
        .flags(
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.NO_SMELTING,
            no_decomp
        );

    event.create('citrine')
        .gem()
        .ore()
        .color(0xe2c777)
        .secondaryColor(0xd7a963)
        .components('quartzite', 'aluminium', 'mundus', 'ether')
        .iconSet(FLINT)
        .flags(
            crystallizable,
            electrolyze,
            no_smashing,
            no_smelt
        );
    
    event.create('sal_ammoniac')
        .gem()
        .ore()
        .color(0xb48cc1)
        .secondaryColor(0xe4d9e9)
        .components('ammonium_chloride', 'ether', 'solid_terrae', 'solid_aerialis', 'solid_aqua', 'solid_infernalis')
        .iconSet(QUARTZ)
        .flags(
            electrolyze
        );

    
    event.create('vehement_coal')
            .gem()
            .ore()
            .color(0xE48615)
            .secondaryColor(0x443c34)
            .iconSet(SHINY)
            .components('carbon', '6x ragna', '6x infernalis', '6x antiaura')
            .flags(
            no_decomp,
            explosive,
            flammable
            );
    
    
    /*event.create('treated_brass')
            .ingot()
            .color()
            .secondaryColor()
            .components()
    
    event.create('soul_steel')
            .ingot()
            .color()
            .components('')*/

    event.create('bakelite')
        .fluid()
        .polymer()
        .components('phenol', 'formaldehyde')
        .color(0x79392F)
        .secondaryColor(0xA16E7F)
        .flags(plates, gear, small_gear, rod, frame, explosive);

// ElementalCraft

    event.create('inert_crystal')
        .gem()
        .ore(4, 1)
        .color(0xf2f2f2)
        .flags(no_decomp)
        .components('nether_quartz', 'terrae', 'titanium_oxide', '2x mundus')
        .iconSet(QUARTZ);
    
    event.create('water_crystal')
        .gem()
        .color(0x8CA0D6)
        .flags(no_decomp)
        .components('inert_crystal', '2x aqua')
        .iconSet(QUARTZ)
        .flags(plates, lens);

    event.create("drenched_iron")
        .ingot()
        .color(0x93b8de)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components('1x iron', '2x aqua')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            no_decomp
        );
    
    event.create("springaline")
        .gem()
        .color(0x5d88b7)
        .components('amethyst', 'water_crystal', '2x aqua')
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            no_decomp
        );

// Malum & Eidolon
    
    
    event.create('brilliance')
            .gem()
            .ore(true)
            .color(0xb8dd86)
            .secondaryColor(0x698d8e)
            .components('4x experience', 'deepslate', 'solid_terrae', 'aura', 'ether')
            .addOreByproducts('emerald', 'lapis', 'experience')
            .flags(no_decomp)
            .iconSet(GLASS);
    
    event.create('blazing_quartz')
            .gem()
            .ore(8, 1, true)
            .color(0xe7b252)
            .components('nether_quartz', '4x infernalis', 'blaze', 'solid_infernalis')
            .flags(
                no_decomp,
                flammable
            )
            .iconSet(CERTUS);
    
    event.create('hex_ash')
            .dust()
            .color(0x65319f)
            .components('2x saltpeter', 'solid_arkanum')
            .flags(centrifuge)
            .iconSet(LAPIS);
    
    event.create('soulstone')
            .gem()
            .ore(2, 1)
            .addOreByproducts('hex_ash', 'solid_arkanum', 'talc')
            .color(0xa339a8)
            .components('talc', 'gypsum', '4x spirit', 'solid_arkanum', 'solid_terrae', 'source')
            .flags(
                no_decomp
            )
            .iconSet(DULL);
    
    event.create('soul_stained_steel')
        .color(0xdb3dff)
        .secondaryColor(0xe683fc)
        .ingot()
        .components('amethyst_bronze', '4x soulstone', '3x profanum', 'arkanum', 'terrae')
        .cableProperties(GTValues.V[GTValues.MV], 2, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            no_decomp
        );

    event.create('hallowed_gold')
            .ingot()
            .color(0xe7d26d)
            .cableProperties(GTValues.V[GTValues.LV], 8, 8, true)
            .components('gold', '4x quartzite', '2x sacrum', 'arkanum')
            .iconSet(SHINY);

// Eternal Starlight

    event.create('starcore')
        .gem()
        .ore()
        .color(0xFCC74D)
        .components('10x helium', '10x hydrogen', 'destructive_will')
        .iconSet(NETHERSTAR)
        .flags(
            centrifuge
        );
    event.create('starlit_diamond')
        .gem()
        .ore()
        .color(0xCCB7F8)
        .components('diamond', '4x firmamentum')
        .iconSet(DIAMOND)
        .flags(
            no_decomp,
            plates,
            lens
        );
    event.create('deepsilver')
        .ingot()
        .ore()
        .color(0x5B5D93)
        .components('sterling_silver', '4x firmamentum', 'terrae')
        .cableProperties(GTValues.V[GTValues.IV], 8, 8, true)
        .iconSet(SHINY)
        .flags(
            no_decomp,
            plates
        );
    event.create('malarite')
        .gem()
        .ore()
        .color(0x293C37)
        .secondaryColor(0xA8509C)
        .components('naquadah', 'xenorhast', 'firmamentum')
        .iconSet(DULL)
        .flags(
            no_decomp,
            plates,
            lens
        );
    event.create('golem_steel')
        .ingot()
        .fluid()
        .color(0x5C6079)
        .formula('?')
        .iconSet(METALLIC)
        .flags(
            no_decomp
        );
    event.create('oxidized_golem_steel')
        .ingot()
        .color(0x62605F)
        .components('golem_steel', '4x oxygen')
        .iconSet(DULL)
        .flags(
            centrifuge
        );
    
    event.create('unrealium')
        .ingot()
        .fluid()
        .color(0x9A49B5)
        .secondaryColor(0x162027)
        .iconSet(RADIOACTIVE)
        .components('deepsilver', 'golem_steel', 'malarite', '4x spirit')
        .flags(
            no_decomp
        );

// Undergarden
    
    event.create('anthralite')
            .ingot()
            .ore()
            .color(0x625a51)
            .secondaryColor(0x443c34)
            .iconSet(ROUGH)
            .components('iron', 'carbon', 'phosphorus', 'biotite', 'clay', '2x mundus', 'solid_infernalis', 'solid_terrae')
            .flags(
            no_decomp
            );

    event.create('cloggrum')
        .components('12x calcium_phosphide', 'ammonia', '4x calcium_carbonate', 'mundus', 'aura', 'bronze')
          .color(0x8a735a)
          .ingot()
          .ore()
          .fluid()
          .addOreByproducts('calcium_phosphide', 'calcium_carbonate', 'carbon', 'apatite')
          .washedIn('gtceu:diluted_sulfuric_acid')
          .separatedInto('anthralite', 'copper')
          .iconSet(GTMaterialIconSet.ROUGH)
          .flags(
              GTMaterialFlags.GENERATE_PLATE,
              GTMaterialFlags.GENERATE_BOLT_SCREW,
              GTMaterialFlags.GENERATE_ROD,
              GTMaterialFlags.GENERATE_SPRING,
              GTMaterialFlags.GENERATE_SPRING_SMALL,
              GTMaterialFlags.GENERATE_FOIL,
              no_decomp
          );

    event.create('forgotten')
            .color(0x2596be)
            .ingot()
            .formula('?')
            .iconSet(METALLIC)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_FOIL,
                no_decomp
            );

    event.create('utherium')
            .gem()
            .ore()
            .color(0xc3434c)
            .addOreByproducts('pyrope', 'ruby', 'rutile', 'almandine')
            .iconSet(GTMaterialIconSet.CERTUS)
            .flags(
                GTMaterialFlags.NO_SMELTING,
                GTMaterialFlags.NO_ORE_SMELTING
            );
    
    event.create('froststeel')
        .ingot()
        .liquid()
        .color(0x67b9ee)
        .ore()
        .components('blue_steel', 'vinteum', 'water', 'solid_aqua', 'solid_aerialis')
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .iconSet(SHINY)
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_GEAR,
            centrifuge
        );


//Cosmere

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

//Iron's Spells & Spellbooks

event.create('arcane_essence')
        .dust()
        .color(0x5263ff)
        .secondaryColor(0xb000cf)
        .components('ether', 'source', 'vinteum', 'experience', 'water')
        .flags(centrifuge)
        .iconSet(LAPIS);

event.create('mithril')
        .ingot(4)
        .fluid()
        .ore(true)
        .components('2x platinum', 'palladium', '3x silver','4x mana', '4x source', '12x mundus')
        .color(0xc7ebec)
        .secondaryColor(0x486b82)
        .iconSet(GTMaterialIconSet.METALLIC)
        .addOreByproducts('silver', 'platinum', 'palladium', 'cadmium', 'arcane_essence')
        .washedIn('gtceu:mercury')
        .separatedInto('palladium', 'source')
        .flags(no_decomp)
        .separatedInto('silver', 'platinum');


// Nature's Aura

    event.create('infused_iron')
        .ingot()
        .color(0x36bf3f)
        .components('iron', 'terrae', 'aura')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        );

    event.create('tainted_gold')
            .ingot()
            .color(0xb6793e)
            .components('gold', 'infernalis', 'antiaura')
            .iconSet(GTMaterialIconSet.DULL)
            .flags(GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_ROD
            );

    event.create('sky_ingot')
        .ingot()
        .color(0x99e0ff)
        .components('aluminium', 'helium', 'solid_sacrum', 'solid_aerialis')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,
        );

// Blood grades

    // BM Life Essence, the purest
    event.create('life_essence')
        .fluid()
        .color(0x850a04)
        .element('vitae');

    // Evilcraft, the mystically pure
    event.create('refined_blood')
        .fluid()
        .color(0x8c231d)
        .components('life_essence', 'mundus', 'ether');
    
    // Sons of Sins Blood, ether-infused
    event.create('etheric_coldblood')
        .fluid()
        .color(0x86526E)
        .components('refined_blood', '3x ether');
    
    // Hexerei/Iron's Blood, the sanctified
    event.create('occult_darkblood')
        .fluid()
        .color(0x8c231d)
        .components('refined_blood', '3x solid_sacrum', '3x solid_arkanum');

    // Vampirism Blood, the impure
    event.create('blood')
        .fluid()
        .color(0x8a2f2b)
        .components('refined_blood', '34x carbon', '32x hydrogen', '4x oxygen', '4x nitrogen', 'iron');
    
    /* event.create('meat_soup')
        .fluid()
        .color()
        .secondaryColor()
        .components('blood', '2x meat');*/

// Adding liquids to the thingy

    // assignFluid(GTMaterials.get('life_essence'), () => Fluid.of('bloodmagic:life_essence_fluid').fluid);


// Blood Magic

    event.create('demonite')
            .ingot()
            .ore(1, 6, true)
            .color(0xb7f0e6)
            .addOreByproducts('lead', 'vinteum', 'sulfur', 'vehement_coal', 'raw_will')
            .washedIn('life_essence')
            .components('galena', '4x antiaura', '4x solid_infernalis')
            .iconSet(GTMaterialIconSet.METALLIC)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_FOIL,
                GTMaterialFlags.GENERATE_GEAR,
                no_decomp
            );

// Occultism
event.create('iesnium')
        .color(0x47adc4)
        .secondaryColor(0x00a383)
        .ore(1, 3, true)
        .addOreByproducts('arcane_essence', 'ether', 'demonite')
        .element('iesnium')
        .ingot()
        .dust()
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FINE_WIRE
        );

event.create('spirit_gem')
        .gem()
        .color(0xbb78cc)
        .components('almandine', 'spirit', 'arkanum')
        .iconSet(DIAMOND)
        .flags(
            no_decomp,
            no_smashing
        );

// Embers

  event.create('ember')
    .gem()
    .ore(4, 4, true)
    .components('carbon', 'sulfur', 'spirit', 'solid_infernalis')
    .addOreByproducts('sulfur', 'phosphorus', 'vehement_coal')
    .washedIn('gtceu:mercury')
    .color(0xff7300)
    .secondaryColor(0xffdba8)
    .iconSet(CERTUS)
    .flags(
        no_decomp,
        flammable,
        crystallizable,
        more_sifter
    );

    event.create('cthonic_gold')
        .gem()
        .ore(2, 1, true)
        .addOreByproducts('zinc', 'copper', 'gold')
        .color(0xfcf49a)
        .secondaryColor(0x777777)
        .components('gold', '4x solid_terrae', 'ember', 'deepslate')
        .iconSet(SHINY)
        .flags(no_decomp);
    
    event.create("regalium")
        .components('3x aluminium', 'quartzite', 'cthonic_gold')
        .gem()
        .ore()
        .addOreByproducts('electrum', 'kyanite', 'topaz')
        .color(0xffea03)
        .iconSet(GTMaterialIconSet.LAPIS)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, centrifuge);

    event.create('dawnstone')
        .color(0xfa9d32)
        .ingot()
        .fluid()
        .iconSet(GTMaterialIconSet.SHINY)
        .components('2x copper', '2x cthonic_gold', 'ember')
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
            GTMaterialFlags.GENERATE_SMALL_GEAR
        );

// BetterEnd
    
    event.create('thallasium')
        .ingot()
        .ore()
        .color(0x79CDD0)
        .addOreByproducts('thallium', 'gallium', 'germanium', 'beryllium')
        .components('thallium', 'aqua', 'xenorhast', 'firmamentum', 'exispiravit')
        .iconSet(EMERALD)
        .flags(no_decomp, plates);

    event.create('terminite')
        .ingot()
        .fluid()
        .color(0x70F0E5)
        .components('thallasium', 'ender_pearl')
        .iconSet(EMERALD)
        .flags(centrifuge, plates);

    event.create('aeternium')
        .ingot()
        .fluid()
        .color(0x2E857D)
        .components('terminite', 'netherite')
        .iconSet(EMERALD)
        .flags(centrifuge, plates);
    
// Some more irl materials
    
    event.create('amber')
        .gem()
        .ore(3, 1)
        .color(0xF8B009)
        .iconSet(OPAL)
        .flags(plates, lens, no_smashing, flammable);
    
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

// Evilcraft

    event.create('dark')
        .gem()
        .ore()
        .addOreByproducts('solid_xenorhast')
        .color(0x141414)
        .iconSet(EMERALD)
        .components('nether_quartz', 'carbon', '4x profanum', 'antiaura')
        .flags(no_decomp);

    event.create('dark_power')
        .gem()
        .color(0x331716)
        .iconSet(EMERALD)
        .components('dark', 'refined_blood')
        .flags(centrifuge);
    

// Gases and airs
    
    event.create('ozone')
    .gas()
    .color(0x9ad6d6)
    .components(
        '3x oxygen'
    )
    .iconSet(GTMaterialIconSet.FLUID);

    event.create('aether_air')
        .gas()
        .flags(no_decomp)
        .color(0x75bfff);
    event.create('liquid_aether_air')
        .liquid()
        .flags(no_decomp)
        .color(0x75bfff);
    event.create('twilight_air')
        .gas()
        .flags(no_decomp)
        .color(0x75bfff);
    event.create('condensed_twilight')
        .liquid()
        .flags(no_decomp)
        .color(0x75bfff);
    event.create('undergarden_smog')
        .gas()
        .flags(no_decomp)
        .color(0x614b09)
        .iconSet(GTMaterialIconSet.DULL);
    event.create('undergarden_sludge')
        .liquid()
        .color(0x3d2e02)
        .flags(no_decomp)
        .iconSet(GTMaterialIconSet.DULL);
    event.create('venus_atmosphere')
        .fluid()
        .color(0xE6E600);
    event.create('liquid_venus_atmosphere')
        .fluid()
        .color(0x999900);
    event.create('glacio_atmosphere')
        .fluid()
        .color(0x9EFAFA);
    event.create('liquid_glacio_atmosphere')
        .fluid()
        .color(0x3DF5F5);

// Create

     event.create('andesite_alloy')
        .ingot()
        .fluid()
        .components('9x andesite', 'zinc')
        .color(0x839689)
        .iconSet(DULL)
        .flags(plates, gear, small_gear, bolt_and_screw, rotor, no_decomp);
    

// Misc stones
    event.create("moon_stone")
        .dust()
        .color(0x304750)
        .iconSet(GTMaterialIconSet.DULL);
    event.create("mars_stone")
        .dust()
        .color(0xFFAA80)
        .iconSet(GTMaterialIconSet.DULL);
    event.create("venus_stone")
        .dust()
        .color(0xF9D286)
        .iconSet(GTMaterialIconSet.DULL);
    event.create("mercury_stone")
        .dust()
        .color(0x66004D)
        .iconSet(GTMaterialIconSet.DULL);
    event.create("glacio_stone")
        .dust()
        .color(0xB3B3FF)
        .iconSet(GTMaterialIconSet.DULL);
    
    
// Manaline
    event.create('composite_stardust')
        .dust()
        .color(0xa187ff)
        .iconSet(SHINY)
        .components('deepsilver', 'starlit_diamond', 'luminite', 'purified_vinteum')
        .flags(centrifuge);
    
    event.create('gigantarubra')
        .gem()
        .fluid()
        .color(0x1a1818)
        .secondaryColor(0xba0000)
        .iconSet(NETHERSTAR)
        .flags(no_decomp,
            no_smashing,
            no_smelt
        );
    
    event.create('regal_zanite')
        .dust()
        .fluid()
        .components('regalium', 'zanite')
        .color(0xffea03)
        .secondaryColor(0x8e51e9)
        .iconSet(SHINY);
    
    event.create('rezanite_pentachloride')
        .fluid()
        .components('regal_zanite', '5x chlorine')
        .color(0xffea03)
        .secondaryColor(0x8e51e9)
        .iconSet(SHINY);
    
    event.create('fluororezanitic_acid')
        .fluid()
        .components('rezanite_pentachloride', 'hydrofluoric_acid')
        .color(0x8e51e9)
        .secondaryColor(0xffea03)
        .iconSet(NETHERSTAR);
    
    event.create('spiritual_debris')
        .dust()
        .formula('👻')
        .color(0x99499c)
        .secondaryColor(0xffe587)
        .iconSet(WOOD);

    
    console.log('Materials ordered')

});