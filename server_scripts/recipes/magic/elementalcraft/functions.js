//priority 99

const elementalcraftRecipes = {
    initialize(event) {
        this.event = event;
    },

    bind (output, inputs, manaAmount, manaType, id) {this.event.custom({
        type: "elementalcraft:binding",
        element_amount: manaAmount,
        element_type: manaType, //air, earth, fire, water
        ingredients: inputs,
        output: output
    }).id(id)},

    infuse (output, input, manaAmount, manaType,id) {this.event.custom({
        type: "elementalcraft:infusion",
        element_amount: manaAmount,
        element_type: manaType, //air, earth, fire, water
        input: input,
        output: output
    }).id(id)},

    grind (output, input, manaAmount, luckRatio, id) {
        let lratio = output.count;
        if (luckRatio != null) {
            lratio = luckRatio;
        }
        this.event.custom({
            type: "elementalcraft:grinding",
            element_amount: manaAmount,
            input: input,
            luck_ratio: lratio, //optional
            output: output
        }).id(id);
    },

    pureInfuse (output, inputs, manaAmount) {this.event.custom({
        type: "elementalcraft:pureinfusion",
        element_amount: manaAmount,
        ingredients: inputs,
        output: output
    })},

    inscribe (output, inputs, manaAmount, manaType) {this.event.custom({
        type: "elementalcraft:inscription",
        element_amount: manaAmount,
        element_type: manaType, //air, earth, fire, water
        slate: inputs[0],
        ingredients: inputs.slice(1),
        output: output
    })},

    saw (output, input, manaAmount, luckRatio) {
        let lratio = output.count;
        if (luckRatio != null) {
            lratio = luckRatio;
        }
        this.event.custom({
            type: "elementalcraft:sawing",
            element_amount: manaAmount,
            input: input,
            luck_ratio: lratio, //optional
            output: output
        });
    },
}