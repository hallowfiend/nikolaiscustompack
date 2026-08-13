//probably gonna recode this whole fuckass thing in java

/*StartupEvents.registry('item', event => {
    //personal ember heater
    event.create('personal_ember_heater').attachCuriosCapability(
        CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    let player = slotContext.entity();
                    let emberCurioList = []
                    if (player.level.isClientSide() || (!player.isPlayer())) return;
                    //Check the player's body temp
                    let temperature = ColdSweat.getTemperature(player, 'body')
                    //If below freezing threshold (8 degrees),
                    if (temperature < 8){
                        //Get the player's curio inventory
                        let curioInv = $CuriosApi.getCuriosInventory(player).resolve();
                        if (curioInv.isEmpty()) {
                            return false;
                        }
                        //Check for any item containing at least 5 Ember
                        curioInv.array.forEach(element => {
                            const emberCap = element.nbt.ForgeCaps["embers:ember"]
                            if (!emberCap || emberCap < 5) return;
                            emberCurioList.push(element)
                        });
                        //and get the first one we find
                        let emberCurio = emberCurioList.at(0)
                        //Give the player a strong warmth effect,
                        player.potionEffects.add(
                            'cold_sweat:warmth',
                            3300,
                            9,
                            false,
                            true
                        )
                        //at the cost of draining 5 ember
                        let emberAmount = (emberCurio.nbt.ForgeCaps["embers:ember"].get() - 5)
                        emberCurio.nbt.ForgeCaps["embers:ember"].set(emberAmount)
                    }
                })
    )
}) */