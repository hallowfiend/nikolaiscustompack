ServerEvents.recipes(event => {
    function bioBrew(ingredients, nutrientCost, processingTime, reactant, result){
    event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": ingredients,
    "nutrientsCost": nutrientCost,
    "processingTime": processingTime,
    "reactant": {
        "item": reactant
    },
    "result": {
        item: result
    }})}
    //Vampirism blood
    bioBrew(
        [
            {'item': 'vampirism:vampire_fang'},
            {'item': 'kubejs:dread_echoes'},
            {'item': 'kubejs:dread_echoes'},
            {'item': 'vampiresdelight:orchid_petals'}
        ],
        15,
        20,
        'sons_of_sins:bottle_of_blood',
        'vampirism:vampire_blood_bottle'
    )
    bioBrew(
        [
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'biomancy:cleansing_serum'}
        ],
        15,
        80,
        'vampirism:vampire_blood_bottle',
        'vampirism:pure_blood_0'
    )
    bioBrew(
        [
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'eidolon:gloom_incense'},
            {'item': 'biomancy:aging_serum'}
        ],
        15,
        80,
        'vampirism:pure_blood_0',
        'vampirism:pure_blood_1'
    )
    bioBrew(
        [
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'eidolon:bloodlust_incense'},
            {'item': 'biomancy:ageing_serum'}
        ],
        15,
        80,
        'vampirism:pure_blood_1',
        'vampirism:pure_blood_2'
    )
    bioBrew(
        [
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'sons_of_sins:bottle_of_blood'},
            {'item': 'eidolon:restoration_incense'},
            {'item': 'biomancy:healing_additive'}
        ],
        15,
        80,
        'vampirism:pure_blood_2',
        'vampirism:pure_blood_3'
    )
    //Heart to weak human heart
    bioBrew(
        [
            {'item': 'magichem:essentia_nourishing'},
            {'item': 'vampirism:pure_salt'},
            {'item': 'kubejs:lifecrystal'}
        ],
        64,
        20,
        'sons_of_sins:heart',
        'vampirism:weak_human_heart'
    )
})