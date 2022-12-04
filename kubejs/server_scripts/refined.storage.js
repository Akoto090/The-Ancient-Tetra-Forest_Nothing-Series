//priority: 0
//refined storage
onEvent('recipes', event => {
  const toRem = ['davespotioneering:cyan_umbrella','davespotioneering:purple_umbrella','refinedstorage:basic_processor','extrastorage:disk_256k','extrastorage:disk_1024k','extrastorage:disk_4096k','extrastorage:disk_16384k', 'extrastorage:disk_16384k_fluid','extrastorage:disk_65536k_fluid','extrastorage:disk_262144k_fluid','extrastorage:disk_1048576k_fluid','extrastorage:advanced_importer', 'extrastorage:advanced_exporter', 'extrastorage:storagepart_262144k_fluid', 'extrastorage:storagepart_65536k_fluid', 'extrastorage:storagepart_16384k_fluid', 'extrastorage:storagepart_16384k', 'extrastorage:storagepart_4096k', 'extrastorage:storagepart_1024k', 'extrastorage:storagepart_256k', 'extrastorage:neural_processor', 'extrastorage:raw_neural_processor', 'extrastorage:storagepart_1048576k_fluid', 'extrastorage:block_1048576k_fluid', 'extrastorage:block_262144k_fluid', 'extrastorage:block_65536k_fluid', 'extrastorage:block_16384k_fluid', 'extrastorage:block_16384k', 'extrastorage:block_4096k', 'extrastorage:block_1024k', 'extrastorage:block_256k','refinedstorage:constructor','refinedstorage:grid','refinedstorage:fluid_grid','refinedstorage:destructor','refinedstorage:cable','refinedstorage:external_storage','refinedstorage:upgrade','refinedstorage:machine_casing','refinedstorage:advanced_processor','refinedstorage:quartz_enriched_iron','refinedstorage:construction_core','refinedstorage:improved_processor','refinedstorage:destruction_core','refinedstorage:upgrade','refinedstorage:4096k_fluid_storage_part','refinedstorage:1k_storage_part','refinedstorage:1k_storage_disk','refinedstorage:64k_storage_disk','refinedstorage:64k_storage_part','refinedstorage:16k_storage_disk','refinedstorage:16k_storage_part','refinedstorage:4k_storage_disk','refinedstorage:4k_storage_part','refinedstorage:4096k_fluid_storage_part','refinedstorage:1024k_fluid_storage_disk','refinedstorage:1024k_fluid_storage_part','refinedstorage:256k_fluid_storage_disk','refinedstorage:256k_fluid_storage_part','refinedstorage:64k_fluid_storage_disk','refinedstorage:64k_fluid_storage_part','refinedstorage:creative_storage_disk','refinedstorage:storage_housing','refinedstorage:creative_fluid_storage_disk','refinedstorage:4096k_fluid_storage_disk', 'refinedstorage:speed_upgrade', 'refinedstorage:fortune_1_upgrade', 'refinedstorage:stack_upgrade', 'refinedstorage:regulator_upgrade', 'refinedstorage:fortune_2_upgrade', 'refinedstorage:filter', 'refinedstorage:fortune_3_upgrade']
  toRem.forEach(e => {event.remove({output:e})})

//add
//controller
const toReplace = ['refinedstorage','rsrequestify','@extrastorage','@cabletiers']
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:quartz_enriched_iron', 'create:andesite_alloy')})
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:construction_core', 'create_experienced:polished_lapis_quartz')})
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:destruction_core', 'create:polished_rose_quartz')})
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:improved_processor', 'create:andesite_alloy')})
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:advanced_processor', 'create:brass_ingot')})
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:machine_casing', 'create:andesite_casing')})
toReplace.forEach(e => {event.replaceInput({mod:e},'refinedstorage:upgrade', 'create:crafter_slot_cover')})


onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('refinedstorage:creative_controller', [
		'AQA',
		'RCR',
		'AQA'
	], 
    {
		A: 'create:andesite_alloy',
		C: 'create:brass_casing',
		Q: 'create_experienced:polished_lapis_quartz',
		R: 'create:polished_rose_quartz'
	})
})
//grid
onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('refinedstorage:grid', [
		'AAG',
		'QCG',
		'AAG'
	], 
    {
		G: '#forge:glass',
		C: 'create:brass_casing',
        Q: 'create_experienced:polished_lapis_quartz',
        A: 'create:andesite_alloy'
	})
})
//cable
onEvent('recipes', event => {
    event.shaped('16x refinedstorage:cable', [
      '   ',
      'AGA',
      '   '
    ], {
      G: '#forge:glass',
      A: 'create:andesite_alloy'
    })
})
//external storagebus
onEvent('recipes', event => {
    event.shaped('refinedstorage:external_storage', [
      ' L ',
      'AGA',
      ' R '
    ], {
      G: '#forge:glass',
      A: 'create:andesite_alloy',
      L: 'create_experienced:polished_lapis_quartz',
      R: 'create:polished_rose_quartz'
    })
})
//creative wireless crafting grid
onEvent('recipes', event => {
event.shaped('refinedstorageaddons:creative_wireless_crafting_grid',[ 'BFB','AGA','BAB'], {B: 'create:brass_sheet', A: 'create:andesite_alloy', G: 'refinedstorage:crafting_grid', F: '#forge:glass_panes'})
})

onEvent('recipes', event => {
  event.shaped('refinedstorage:creative_wireless_crafting_monitor',[ 'BFB','AGA','BAB'], {B: 'create:brass_sheet', A: 'create:andesite_alloy', G: 'refinedstorage:crafting_monitor', F: '#forge:glass_panes'})
  })
//destructor
onEvent('recipes', event => {
    event.shaped('refinedstorage:destructor', [
      ' E ',
      'AGA',
      ' L '
    ], {
      G: 'refinedstorage:cable',
      A: 'create:brass_sheet',
      L: '#forge:dusts/obsidian',
      E: 'create:electron_tube'
    })
})
//constructer
onEvent('recipes', event => {
    event.shaped('refinedstorage:constructor', [
      ' L ',
      'AGA',
      ' E '
    ], {
      G: 'refinedstorage:cable',
      A: 'create:brass_sheet',
      L: '#forge:dusts/obsidian',
      E: 'create:electron_tube'
    })
})
//wrench
onEvent('recipes', event => {
    event.shaped('refinedstorage:wrench', [
      '   ',
      ' A ',
      '  G'
    ], {
      G: 'create_experienced:polished_lapis_quartz',
      A: 'refinedstorage:cable'
    })
})

onEvent('recipes', event => {

  event.recipes.createMechanicalCrafting('refinedstorage:creative_storage_block', 
  [
    ' NNN ',
    'NNNNN',
    'NNCNN',
    'NNNNN',
    ' NNN '
  ],
  {
  N:'nothingmod:nothingtrium_block',
  C:'refinedstorage:creative_controller'
  })
})
onEvent('recipes', event => {
  event.remove({output: 'extrastorage:iron_crafter'})
  event.shaped('extrastorage:iron_crafter', [
    'AFA',
    ' C ',
    'A A'
  ], {
    C: 'refinedstorage:crafter',
    A: 'create:andesite_alloy',
    F: 'minecraft:iron_block'
  })
  event.remove({output: 'extrastorage:gold_crafter'})
  event.shaped('extrastorage:gold_crafter', [
    'AFA',
    ' C ',
    'A A'
  ], {
    C: 'extrastorage:iron_crafter',
    A: 'create:andesite_alloy',
    F: 'minecraft:gold_block'
  })
  event.remove({output: 'extrastorage:diamond_crafter'})
  event.shaped('extrastorage:diamond_crafter', [
    'AFA',
    ' C ',
    'A A'
  ], {
    C: 'extrastorage:gold_crafter',
    A: 'create:andesite_alloy',
    F: 'minecraft:diamond_block'
  })
  event.remove({output: 'extrastorage:netherite_crafter'})
  event.shaped('extrastorage:netherite_crafter', [
    'AFA',
    ' C ',
    'A A'
  ], {
    C: 'extrastorage:diamond_crafter',
    A: 'create:andesite_alloy',
    F: 'minecraft:netherite_ingot'
  })
})
//Pipes
onEvent('recipes', event => {
  event.remove({output: 'refinedpipes:basic_item_pipe'})
  event.shaped('3x refinedpipes:basic_item_pipe', [
    'AAA',
    'GGG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: '#forge:glass'
  })
  event.remove({output: 'refinedpipes:improved_item_pipe'})
  event.shaped('3x refinedpipes:improved_item_pipe', [
    'AAA',
    'GIG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: 'refinedpipes:basic_item_pipe',
    I: 'minecraft:gold_ingot'
  })
  event.remove({output: 'refinedpipes:advanced_item_pipe'})
  event.shaped('3x refinedpipes:advanced_item_pipe', [
    'AAA',
    'GIG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: 'refinedpipes:improved_item_pipe',
    I: 'minecraft:diamond'
  })

  event.remove({output: 'refinedpipes:basic_fluid_pipe'})
  event.shaped('3x refinedpipes:basic_fluid_pipe', [
    'AAA',
    'BGB',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: '#forge:glass',
    B: 'minecraft:bucket'
  })
  event.remove({output: 'refinedpipes:improved_fluid_pipe'})
  event.shaped('3x refinedpipes:improved_fluid_pipe', [
    'AAA',
    'GIG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: 'refinedpipes:basic_fluid_pipe',
    I: 'minecraft:gold_ingot'
  })
  event.remove({output: 'refinedpipes:advanced_fluid_pipe'})
  event.shaped('3x refinedpipes:advanced_fluid_pipe', [
    'AAA',
    'GIG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: 'refinedpipes:improved_fluid_pipe',
    I: 'minecraft:diamond'
  })
  event.remove({output: 'refinedpipes:elite_fluid_pipe'})
  event.shaped('3x refinedpipes:elite_fluid_pipe', [
    'AAA',
    'GIG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: 'refinedpipes:advanced_fluid_pipe',
    I: 'minecraft:emerald'
  })
  event.remove({output: 'refinedpipes:ultimate_fluid_pipe'})
  event.shaped('3x refinedpipes:ultimate_fluid_pipe', [
    'AAA',
    'GIG',
    'AAA'
  ], {
    A: 'create:andesite_alloy',
    G: 'refinedpipes:elite_fluid_pipe',
    I: 'minecraft:netherite_ingot'
  })

event.remove({output: 'refinedpipes:basic_energy_pipe'})
event.shaped('3x refinedpipes:basic_energy_pipe', [
  'AAA',
  'BGB',
  'AAA'
], {
  A: 'create:andesite_alloy',
  G: 'minecraft:redstone_block',
  B: '#forge:glass'
})
event.remove({output: 'refinedpipes:improved_energy_pipe'})
event.shaped('3x refinedpipes:improved_energy_pipe', [
  'AAA',
  'GIG',
  'AAA'
], {
  A: 'create:andesite_alloy',
  G: 'refinedpipes:basic_energy_pipe',
  I: 'minecraft:gold_ingot'
})
event.remove({output: 'refinedpipes:advanced_energy_pipe'})
event.shaped('3x refinedpipes:advanced_energy_pipe', [
  'AAA',
  'GIG',
  'AAA'
], {
  A: 'create:andesite_alloy',
  G: 'refinedpipes:improved_energy_pipe',
  I: 'minecraft:diamond'
})
event.remove({output: 'refinedpipes:elite_energy_pipe'})
event.shaped('3x refinedpipes:elite_energy_pipe', [
  'AAA',
  'GIG',
  'AAA'
], {
  A: 'create:andesite_alloy',
  G: 'refinedpipes:advanced_energy_pipe' ,
  I: 'minecraft:emerald'
})
event.remove({output: 'refinedpipes:ultimate_energy_pipe'})
event.shaped('3x refinedpipes:ultimate_energy_pipe', [
  'AAA',
  'GIG',
  'AAA'
], {
  A: 'create:andesite_alloy',
  G: 'refinedpipes:elite_energy_pipe',
  I: 'minecraft:netherite_ingot'

})
})
  //Cable Tiers
  onEvent('recipes', e => {
  function caTier(tier, corners, processor, cables) {
    Utils.listOf(['importer', 'exporter', 'constructor', 'destructor', 'disk_manipulator', 'requester']).forEach(caType => {
      e.shaped(`cabletiers:${tier}_${caType}`, [`a a`, `bcb`, `a a`], {
        a: corners,
        b: processor,
        c: `${(caType == 'requester' && tier == 'elite') ? 'rsrequestify:' : cables}${caType}`
      })
    })
  }

  e.remove({ mod: 'cabletiers' })
  
  caTier(`elite`, `#forge:storage_blocks/iron`, 'create:andesite_alloy', `refinedstorage:`)
  caTier(`ultra`, `#forge:storage_blocks/diamond`, 'create:brass_ingot', `cabletiers:elite_`)
  caTier(`creative`, `#forge:storage_blocks/netherite`, 'create_experienced:enchantium_ingot', `cabletiers:ultra_`)
})
})