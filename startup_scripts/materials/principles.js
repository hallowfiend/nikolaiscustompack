//priority 95

GTCEuStartupEvents.registry("gtceu:material", (event) => {

    // pure principles
    event.create('mana') //self explanatory
        .element('mana')
        .color(0x22a8bd)
        .plasma();

    event.create('spirit') //self explanatory
        .element('spirit')
        .color(0x91fff6)
        .plasma();
    
    event.create('mundus') //the "base" magic that binds the world
        .color(0xe6e6e6)
        .element('mundus')
        .iconSet(DULL)
        .dust();

    event.create('aura') //positive energy
        .color(0x6dd400)
        .element('aura')
        .gas();

    event.create('antiaura') //negative energy
        .color(0xd45100)
        .element('antiaura')
        .gas();

    event.create('arkanum') //arcane spirit
        .element('arkanum')
        .color(0xae44e2)
        .gas();

    event.create('aerialis') //aerial spirit
        .element('aerialis')
        .color(0xfeffed)
        .gas();

    event.create('infernalis') //infernal spirit
        .element('infernalis')
        .color(0xffad99)
        .gas();

    event.create('terrae') //earthen spirit
        .element('terrae')
        .color(0x7ae070)
        .gas();

    event.create('aqua') //aqueous spirit
        .color(0x8798fa)
        .element('aqua')
        .gas();

    event.create('sacrum') //sacred spirit
        .color(0xff5493)
        .element('sacrum')
        .plasma();

    event.create('profanum') //wicked spirit
        .color(0xa454ff)
        .element('profanum')
        .plasma();

    event.create('xenorhast') //eldritch spirit
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

})