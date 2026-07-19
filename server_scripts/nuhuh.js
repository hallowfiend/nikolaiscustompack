BlockEvents.rightClicked(/minecraft:deepslate|minecraft:cobbled_deepslate/, event => {
    if (event.player.getMainHandItem() == 'hexalia:hex_focus') {
        event.cancel()
    }
});