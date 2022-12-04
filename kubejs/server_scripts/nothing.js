onEvent('recipes', event => {
    event.shaped('trashcans:item_trash_can', [
      'PBP',
      'LLL',
      'BLB'
    ], {
      P: '#minecraft:planks',
      L: '#minecraft:logs',
      B: 'create:brass_sheet'
    })
  })
