BlockEvents.rightClicked(/minecraft:deepslate|minecraft:cobbled_deepslate/, event => {
    const { player, block } = event
    if (event.block != /minecraft:deepslate|minecraft:cobbled_deepslate/) return;
    if (event.player.getMainHandItem() == 'hexalia:hex_focus') {
        event.cancel()
    }
});