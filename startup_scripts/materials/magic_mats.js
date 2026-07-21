//priority: 60


GTCEuStartupEvents.registry("gtceu:material", event => {

    //Goety
   event.create("cursed_alloy")
        .ingot()
        .fluid()
        .color(0x285368)
        .iconSet(METALLIC)
        .flags(
            no_decomp,
            plates
        )
        .components('brass', 'spirit', 'firmamentum', 'xenorhast', 'antiaura')

    //Malum

    event.create('cthonic_gold')
        .gem()
        .ore(2, 1, true)
        .addOreByproducts('zinc', 'copper', 'gold')
        .color(0xfcf49a)
        .secondaryColor(0x777777)
        .components('gold', '4x solid_terrae', 'ember', 'deepslate')
        .iconSet(SHINY)
        .flags(no_decomp);

    event.create('malignant_lead')
        .gem()
        .color(0xB8D1DB)
        .secondaryColor(0x777777)
        .components('lead', '4x solid_xenorhast', 'ether')
        .iconSet(SHINY)
        .flags(no_decomp);
    
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

    event.create('null_slate')
            .gem()
            .color(0xCF00C9)
            .components('plutonium', 'neptunium', '4x solid_xenorhast', '4x corrosive_will', 'antiaura', 'source')
            .flags(
                no_decomp
            )
            .iconSet(NETHERSTAR);
    
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

    event.create('malignant_pewter')
        .color(0xE9CBF3)
        .secondaryColor(0x37204C)
        .ingot()
        .components('pewter', 'malignant_lead', '8x null_slate', '3x cursed_alloy')
        .cableProperties(GTValues.V[GTValues.IV], 2, 1, false)
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

    event.create("regalium")
        .components('3x aluminium', 'quartzite', 'cthonic_gold')
        .gem()
        .ore()
        .addOreByproducts('electrum', 'kyanite', 'topaz')
        .color(0xffea03)
        .iconSet(GTMaterialIconSet.LAPIS)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, centrifuge);
    
    //Embers

    event.create('dawnstone')
        .color(0xfa9d32)
        .ingot()
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
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            no_decomp
        );
})