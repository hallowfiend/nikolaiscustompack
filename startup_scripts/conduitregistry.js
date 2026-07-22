//priority 99

EnderIOEvents.conduits(event => {
    event.registerEnergyConduit("conductive_conduit", "Conductive Alloy Energy Conduit", 512)
    event.registerEnergyConduit("energetic_conduit", "Energetic Alloy Energy Conduit", 2048)
    event.registerEnergyConduit("vibrant_conduit", "Vibrant Alloy Energy Conduit", 8192)
    event.registerEnergyConduit("endsteel_conduit", "End Steel Energy Conduit", 32768)
})