ServerEvents.recipes((event) => {
    //Nodes
    event.recipes.botania.runic_altar('4x hexalia:fire_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:coal',
            'minecraft:sunflower',
            'malum:infernal_spirit'
        ],
        2000
    )
    event.recipes.botania.runic_altar('4x hexalia:water_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:lily_pad',
            'minecraft:ink_sac',
            'malum:aqueous_spirit'
        ],
        2000
    )
    event.recipes.botania.runic_altar('4x hexalia:air_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:feather',
            'minecraft:dandelion',
            'malum:aerial_spirit'
        ],
        2000
    )
    event.recipes.botania.runic_altar('4x hexalia:earth_node',
        [
            'minecraft:amethyst_shard',
            'minecraft:brown_mushroom',
            'minecraft:clay_ball',
            'malum:earthen_spirit'
        ],
        2000
    )
    //BLOOD MAGIC
    //Prepared Stone
    event.recipes.botania.runic_altar('8x kubejs:prepared_stone',
        [
            'goety:empty_focus',
            'biomancy:stone_powder',
            'malum:runic_sapball',
            'eidolon:magicians_wax'
        ],
        4000
    )
    //Blank Rune
    event.remove({ output: "bloodmagic:blankrune" })
    event.recipes.botania.runic_altar('2x bloodmagic:blankrune',
        [
            'bloodmagic:blankslate',
            'bloodmagic:blankslate',
            'botania:mana_powder',
            'biomancy:gem_fragments',
            'sons_of_sins:ether_ashes',
            'occultism:burnt_otherstone'
        ],
        4000
    )
    //TIER 1
    //Speed Rune
})