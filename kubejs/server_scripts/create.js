//create

//del

//add
onEvent('recipes', event => {
    event.remove({output: 'createchunkloading:chunk_loader'})

    event.recipes.createMechanicalCrafting('createchunkloading:chunk_loader', [
      'LLL',
      'LEL',
      'BBB'
    ], {
      E: 'botanicalmachinery:mana_emerald',
      L: '#forge:glass',
      B: 'create:brass_block'
    })
  })


  onEvent('recipes', event => {
  event.smithing('storagedrawers:creative_storage_upgrade','storagedrawers:upgrade_template','nothingmod:nothingtrium')
})