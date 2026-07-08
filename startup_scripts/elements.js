// priority: 100
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('zanite')
        .protons(134)
        .neutrons(335)
        .symbol('Zt');

    event.create('ambrosium')
        .protons(135)
        .neutrons(338)
        .symbol('Ab');

    event.create('gravitite')
        .protons(202)
        .neutrons(404)
        .symbol('Gv');

    event.create('mana')
        .protons(99)
        .neutrons(99)
        .symbol('ᛗ');
    
    event.create('iesnium')
        .protons(7)
        .neutrons(77)
        .symbol('Is')

    event.create('desh')
        .protons(135)
        .neutrons(135)
        .symbol('De');

    event.create('calorite')
        .protons(136)
        .neutrons(234)
        .symbol('Kl')

    event.create('ostrum')
        .protons(137)
        .neutrons(138)
        .symbol('Ot')

    event.create('arkanum') //arcane spirit
        .protons(222)
        .neutrons(222)
        .symbol('☆');

    event.create('sacrum') //sacred spirit
        .protons(888)
        .neutrons(888)
        .symbol('♥');

    event.create('profanum') //wicked spirit
        .protons(999)
        .neutrons(999)
        .symbol('♠');

    event.create('terrae') //earthen spirit
        .protons(444)
        .neutrons(444)
        .symbol('▼');

    event.create('infernalis') //infernal spirit
        .protons(333)
        .neutrons(333)
        .symbol('△');

    event.create('aerialis') //aerial spirit
        .protons(555)
        .neutrons(555)
        .symbol('▲');

    event.create('aqua') //aqueous spirit
        .protons(777)
        .neutrons(777)
        .symbol('▽');

    event.create('xenorhast') //eldritch spirit
        .protons(6666)
        .neutrons(6666)
        .symbol('🌌');
    
    event.create('exispiravit') // raw will
        .protons(666)
        .neutrons(111)
        .symbol('☽');
    
    event.create('azoth') //corrosive will
        .protons(666)
        .neutrons(222)
        .symbol('ζ');

    event.create('discidia') //vengeful will
        .protons(666)
        .neutrons(333)
        .symbol('♂');
    
    event.create('ragna') //destructive will
        .protons(666)
        .neutrons(444)
        .symbol('Θ');

    event.create('firmamentum') //steadfast will
        .protons(666)
        .neutrons(555)
        .symbol('Ђ');

    event.create('vitae')
        .protons(0)
        .neutrons(0)
        .symbol('💧');

    event.create('spirit')
        .protons(202)
        .neutrons(2)
        .symbol('Ψ');

    event.create('mundus')
        .protons(1111)
        .neutrons(1111)
        .symbol('⭘');

    event.create('aura')
        .protons(1)
        .neutrons(0)
        .symbol('♣');

    event.create('antiaura')
        .protons(1)
        .neutrons(1)
        .symbol('♦');

    event.create('experience')
        .protons(42)
        .neutrons(0)
        .symbol('Χየ');

    event.create('vinteum')
        .protons(848)
        .neutrons(121)
        .symbol('Vt');
    
    console.log('Elements synthesized')
})