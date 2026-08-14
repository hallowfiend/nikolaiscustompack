//priority 1000

const magichemicalLaboratory = {
    fireUpAlembics(event) {
        this.event = event;
    },

    distillItem(object, components, ratio, batchSize, wisdom){
        this.event.custom({
        "type": "magichem:distillation_fabrication",
        "wisdom": wisdom,
        "categories": 1,
        "batch_size": batchSize,
        "output_rate": ratio,
        "object": {
          "item": object
        },
        "components": components
      })
    },

    distillFluid(fluid, components, ratio, batchSize, wisdom){
        this.event.custom({
        "type": "magichem:fluid_distillation_fabrication",
        "wisdom": wisdom,
        "categories": 1,
        "output_rate": ratio,
        "batch_size": batchSize,
        "fluid": fluid,
        "components": components
    })
    },

    sublimate(tier, wisdom, stages, result){
        this.event.custom({
        "type": "magichem:sublimation",
        "tier": tier,
        "wisdom": wisdom,
        "object": {
            "item": result
        },
        "stages": stages
    })
    }
}