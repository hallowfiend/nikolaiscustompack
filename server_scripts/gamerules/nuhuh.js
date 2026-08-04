//Disable creating ritual table by rclick on deepslate

BlockEvents.rightClicked(/minecraft:deepslate|minecraft:cobbled_deepslate/, event => {
    const { player, block } = event
    if (event.block != /minecraft:deepslate|minecraft:cobbled_deepslate/) return;
    if (event.player.getMainHandItem() == 'hexalia:hex_focus') {
        event.cancel()
    }
});

//Disable making bottles of souls

BlockEvents.rightClicked(/minecraft:soul_fire/, event => {
    const { player, block } = event
    if (event.block != /minecraft:soul_fire/) return;
    if (event.player.getMainHandItem() == 'minecraft:glass_bottle') {
        event.cancel()
    }
});