BlockEvents.rightClicked(`minecraft:deepslate|minecraft:cobbled_deepslate`, event => {
    let heldItem = player.mainHandItem
    if (heldItem.id == 'hexalia:hex_focus') {
        event.cancel()
    }
});