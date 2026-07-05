const grapeJuices = [
  "red",
  "red_savanna",
  "red_jungle",
  "red_taiga",
  "white",
  "white_savanna",
  "white_jungle",
  "white_taiga"
];
const grapes = [
  "red_grape",
  "savanna_grapes_red",
  "jungle_grapes_red",
  "taiga_grapes_red",
  "white_grape",
  "savanna_grapes_white",
  "jungle_grapes_white",
  "taiga_grapes_white"
];

ServerEvents.recipes((event) => {
  const juiceFromPress = (juice, grape) => {
    event.custom({
      type: "create:compacting",
      ingredients: [
        {
          item: `vinery:${grape}`,
        },
      ],
      results: [
        {
          amount: 50,
          fluid: `immersivecooking:${juice}_grapejuice`,
        },
      ],
    });
  };
  const spoutBottling = (juice) => {
    event.custom({
      type: "create:filling",
      ingredients: [
        {
          item: "vinery:wine_bottle",
        },
        {
          amount: 250,
          fluidTag: `immersivecooking:${juice}_grape_juice`,
        },
      ],
      results: [
        {
          item: `vinery:${juice}_grapejuice`,
        },
      ],
    });
    event.custom({
      type: "create:emptying",
      ingredients: [
        {
          item: `vinery:${juice}_grapejuice`,
        },
      ],
      results: [
        {
          item: "vinery:wine_bottle",
        },
        {
          amount: 250,
          fluid: `immersivecooking:${juice}_grapejuice`,
        },
      ],
    });
  };

  grapeJuices.forEach((juice, index) => {
    juiceFromPress(juice, grapes[index]);
    spoutBottling(juice, grapes[index]);
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      {
        item: "vinery:apple_mash",
      },
    ],
    results: [
      {
        amount: 250,
        fluid: "immersivecooking:apple_juice",
      },
    ],
  });
});