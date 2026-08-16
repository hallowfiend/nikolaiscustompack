JEIEvents.removeCategories(event => {
  const hide_by_categories = [
    'jeresources:worldgen',
    'elementalcraft:purification',
  ]

  hide_by_categories.forEach(categories =>{
    event.remove(categories)
  })
})

JEIEvents.hideItems(event => {
  const hide_by_name = [
  ]
  hide_by_name.forEach(name => {
    event.hide(name)
  })
})