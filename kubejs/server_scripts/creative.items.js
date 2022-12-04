

onEvent('recipes', event => {

    event.recipes.createMechanicalCrafting('botania:creative_pool', 
    [
      'SSFSS',
      'STSLS',
      'KSGSE',
      'SSOSS',
      'RRRRR'
    ],
    {
        F: 'botania:infinite_fruit',
        K: 'botania:king_key',
        E: 'botania:flugel_eye', 
        T: 'botania:thor_ring', 
        O: 'botania:odin_ring', 
        L: 'botania:loki_ring', 
        S: 'botania:terrasteel_ingot',
        G: 'botania:gaia_ingot',
        R: 'botania:livingrock'
    })
  })

  onEvent('recipes', event => {
	  let inter = 'kubejs:incomplete_creative_motor'
  
  event.recipes.createSequencedAssembly([
    'create:creative_motor'
  ],'createaddition:electric_motor',
  [
		event.recipes.createDeploying(inter, [inter,'create_experienced:enchantium_block']),
		event.recipes.createDeploying(inter, [inter,'create:precision_mechanism']),
    event.recipes.createDeploying(inter, [inter,'create:cogwheel']),
    event.recipes.createDeploying(inter, [inter,'nothingmod:nothingtrium_block']),
    event.recipes.createDeploying(inter, [inter,'minecraft:dragon_head']),		
    event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1)
})


onEvent('recipes', event => {
  let inter = 'create:unprocessed_obsidian_sheet'

event.recipes.createSequencedAssembly([ 
  'create:creative_fluid_tank'
],'create:fluid_tank',
[
  event.recipes.createPressing(inter, inter),
  event.recipes.createFilling(inter, [inter,Fluid.of('create_experienced:liqud_xp')]),
  event.recipes.createFilling(inter, [inter,Fluid.of('create:honey')]),
  event.recipes.createFilling(inter, [inter,Fluid.of('create:chocolate')]),
  event.recipes.createFilling(inter, [inter,Fluid.of('createaddition:seed_oil')]),
]).transitionalItem(inter).loops(1)
})

onEvent('recipes', event => {

  event.recipes.createMechanicalCrafting('create:creative_blaze_cake', 
  [
    'TTNTT',
    'BBLBB',
    'BBLBB',
    'BBLBB',
    'CCCCC'
  ],
  {
  C:'create:blaze_cake_base',
  B:'botania:blaze_block',
  T:'croptopia:tres_leche_cake',
  N:'nothingmod:nothingtrium',
  L:'create:blaze_burner'
  })
})


