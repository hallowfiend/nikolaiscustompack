ServerEvents.recipes(event => {
    //essences
    const elements = [
        {element: "fire", rune: "hells", extra: "netherexp:lightspores"},
        {element: "water", rune: "seas", extra: "aquamirae:esca"},
        {element: "air", rune: "aether", extra: "aether:cold_parachute"},
        {element: "earth", rune: "arena", extra: "embers:archaic_brick"}
    ]
    const spellTypes = [
        {spellType: "manipulation", apparatus: "impurity_stabilizer", techItem: "create:brass_hand", magicItem: "botania:lens_influence"},
        {spellType: "abjuration", apparatus: "shielding_apparatus", techItem: "immersiveengineering:sheetmetal_steel", magicItem: "eidolon:purity_incense"},
        {spellType: "conjuration", apparatus: "warping_engine", techItem: "pneumaticcraft:air_compressor", magicItem: "occultism:otherworld_essence"}
    ]
    event.remove({ id: /ars_nouveau:imbuement.*essence/ })
    //spelltype essences
    spellTypes.forEach(type => {
        event.custom({
				type: 'ars_nouveau:imbuement',
				input: {"item": "mna:vinteum_dust" },
				output: { "item": `ars_nouveau:${type.spellType}_essence`, count: 1},
				source: 1500,
				pedestalItems: [
                    {"item": `malum:${type.apparatus}`},
                    {"item": "goety:empty_focus"},
                    {"item": type.techItem},
                    {"item": type.magicItem}
                ]
			  })
    })
    //elemental essences
    elements.forEach(element => {
        event.custom({
				type: 'ars_nouveau:imbuement',
				input:  {"item": "mna:vinteum_dust" },
				output: { "item": `ars_nouveau:${element.element}_essence`, count: 1},
				source: 1500,
				pedestalItems: [
                    {"item": `mna:mote_${element.element}`},
                    {"item": `malum:rune_of_the_${element.rune}`},
                    {"item": `hexalia:${element.element}_node`},
                    {"item": element.extra}
                ]
			  })
    })
    //anima essence - the exception
    event.custom({
				type: 'ars_nouveau:imbuement',
				input:  {"item": "mna:vinteum_dust" },
				output: {"item": "ars_elemental:anima_essence", count: 1},
				source: 1500,
				pedestalItems: [
                    {"tag": "extra_sins:living_flesh"},
                    {"tag": "forge:essences/death"},
                    {"item": "malum:rune_of_idle_restoration"},
                    {"item": "malum:rune_of_culling"}
                ]
			  })

})