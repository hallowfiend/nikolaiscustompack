JEIEvents.removeCategories(event => {
  const hide_by_categories = [
    'jeresources:worldgen',
    'elementalcraft:purification',
  ]

  hide_by_categories.forEach(categories =>{
    event.remove(categories)
  })
})