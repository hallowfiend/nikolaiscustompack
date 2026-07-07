/* const grapeJuices = [
  "red",
  "white"
];
const grapes = [
  "red_grape",
  "white_grape"
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
}); */