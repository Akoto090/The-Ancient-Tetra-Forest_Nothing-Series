
//del recipes
onEvent('recipes', event => {
const toRem = ['druidcraftrg:crate', 'druidcraftrg:rope', 'travelersbackpack:standard', 'travelersbackpack:backpack_tank', 'bettershields:diamond_shield', 'trashcans:energy_trash_can', 'trashcans:ultimate_trash_can', 'bettershields:gold_shield','trashcans:liquid_trash_can']
toRem.forEach(e => {event.remove({output:e})})
//Smelting
event.smelting('nothingmod:blessed_shard','nothingmod:blessed_ore')
})

//tag items
onEvent('tags.items', event => {
event.add('forge:sleepback', 'druidcraftrg:cyan_bedroll', 'druidcraftrg:purple_bedroll', 'druidcraftrg:blue_bedroll', 'druidcraftrg:brown_bedroll', 'druidcraftrg:green_bedroll', 'druidcraftrg:black_bedroll', 'druidcraftrg:red_bedroll', 'druidcraftrg:light_gray_bedroll', 'druidcraftrg:gray_bedroll', 'druidcraftrg:pink_bedroll', 'druidcraftrg:lime_bedroll', 'druidcraftrg:yellow_bedroll', 'druidcraftrg:light_blue_bedroll', 'druidcraftrg:magenta_bedroll', 'druidcraftrg:orange_bedroll', 'druidcraftrg:white_bedroll'),
event.add('forge:crops/coconut','ecologics:coconut_slice')
})

//add nothingmod and other things recipes
onEvent('recipes', event => {
    event.shaped('nothingmod:nothing_sword',[ ' N ',' N ',' S '], {N: 'nothingmod:nothingtrium', S: 'minecraft:stick'})
    event.shaped('nothingmod:nothing_pickaxe',[ 'NNN',' S ',' S '], {N: 'nothingmod:nothingtrium', S: 'minecraft:stick'})
    event.shaped('nothingmod:nothingtrium_block',[ 'NNN','NNN','NNN'], {N: 'nothingmod:nothingtrium'}) 
    event.shaped('nothingmod:nothing_boots',[ '   ','N N','N N'], {N: 'nothingmod:nothingtrium'}) 
    event.shaped('nothingmod:nothing_chestplate', [ 'N N','NNN','NNN'], {N: 'nothingmod:nothingtrium'}) 
    event.shaped('nothingmod:nothing_leggings', [ 'NNN','N N','N N'], {N: 'nothingmod:nothingtrium'}) 
    event.shaped('nothingmod:nothing_helmet',[ 'NNN','N N','   '], {N: 'nothingmod:nothingtrium'}) 
    event.shaped('nothingmod:nothing_shovel',[ ' N ',' S ',' S '], {N: 'nothingmod:nothingtrium', S: 'minecraft:stick'}) 
    event.shaped('nothingmod:nothing_axe',[ 'NN ','NS ',' S '], {N: 'nothingmod:nothingtrium', S: 'minecraft:stick'}) 
    event.shapeless('nothingmod:nothingtrium', ['nothingmod:blessed_shard', 'nothingmod:cursed_shard', 'byg:ametrine_gems'])
    
    event.shaped('travelersbackpack:standard',[ 'LWL','TCT','LSL'], {L: 'minecraft:leather', W: '#minecraft:wool', T: 'travelersbackpack:backpack_tank', C:'minecraft:chest',S: '#forge:sleepback'})
    event.shaped('travelersbackpack:backpack_tank',[ ' I ',' G ',' I '], {I: 'minecraft:iron_ingot', G: 'minecraft:glass' })
    event.shaped(Item.of('bettershields:gold_shield', '{Damage:0}'),[ 'GIG',' G ','   '], {G: 'minecraft:gold_ingot', I: Item.of('bettershields:iron_shield', '{Damage:0}') })
    event.shaped(Item.of('bettershields:diamond_shield', '{Damage:0}'),[ 'DID',' D ','   '], {D: 'minecraft:diamond', I: Item.of('bettershields:gold_shield', '{Damage:0}') })
    event.shaped('trashcans:liquid_trash_can',[ 'FFF','FBF','CCC'], {F: 'create:fluid_pipe', B: 'minecraft:bucket', C: 'minecraft:copper_ingot', })
    event.shaped('refinedstorageaddons:creative_wireless_crafting_grid',[ 'BFB','AGA','BAB'], {B: 'create:brass_sheet', A: 'create:andesite_alloy', G: 'refinedstorage:crafting_grid', F: '#forge:glass_panes'})
    event.shaped('supplementaries:rope',[ 'D  ','D  ','D  '], {D: 'druidcraftrg:hemp'})
})

//trashcan
onEvent('recipes', event => {
    event.remove({output: 'trashcans:item_trash_can'})

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

//no flint for blank chest upgrade
onEvent('recipes', event => {
  event.remove({output: 'ironchests:blank_chest_upgrade'})

  event.shaped('ironchests:blank_chest_upgrade', [
    'PPP',
    'PIP',
    'PPP'
  ], {
    I: 'minecraft:iron_nugget',
    P: '#minecraft:planks'
  })
})

//nerf lumberaxed
onEvent('recipes', event => {
  event.remove({output:'lumberjack:wood_lumberaxe'})

  event.shaped(Item.of('lumberjack:wood_lumberaxe'), [
    'LL ',
    'LS ',
    'LS '
  ], {
    S: 'minecraft:stick',
    L: '#minecraft:logs'
  })
})

onEvent('recipes', event => {
  event.remove({output:'lumberjack:stone_lumberaxe'})

  event.shaped(Item.of(Item.of('lumberjack:stone_lumberaxe')), [
    'LL ',
    'LS ',
    'LS '
  ], {
    S: 'minecraft:stick',
    L: 'minecraft:smooth_stone'
  })
})

onEvent('recipes', event => {
  event.remove({output:'lumberjack:iron_lumberaxe'})

  event.shaped(Item.of('lumberjack:iron_lumberaxe'), [
    'LL ',
    'LS ',
    'LS '
  ], {
    S: 'minecraft:stick',
    L: 'minecraft:iron_block'
  })
})

onEvent('recipes', event => {
  event.remove({output:'lumberjack:diamond_lumberaxe'})

  event.shaped(Item.of('lumberjack:diamond_lumberaxe'), [
    'LL ',
    'LS ',
    'LS '
  ], {
    S: 'minecraft:stick',
    L: 'minecraft:diamond_block'
  })
})

onEvent('recipes', event => {
  event.remove({output:'lumberjack:gold_lumberaxe'})

  event.shaped(Item.of('lumberjack:gold_lumberaxe'), [
    'LL ',
    'LS ',
    'LS '
  ], {
    S: 'minecraft:stick',
    L: 'minecraft:gold_block'
  })
})


onEvent('recipes', event => {
  event.shaped(Item.of('minecraft:chest'), [
    'PPP',
    'P P',
    'PPP'
  ], {
    P: '#minecraft:planks'
  })

  event.shaped('vanillahammers:obsidian_hammer', [
    'OSO',
    ' S ',
    ' S '
  ], {
    S: 'minecraft:stick',
    O: 'minecraft:crying_obsidian'
  })
})


onEvent('recipes', event => {
  event.shaped('ironfurnaces:allthemodium_furnace', [
    'PPP',
    'P P',
    'PPP'
  ], {
    P: 'nothingmod:nothingtrium'
  })
})