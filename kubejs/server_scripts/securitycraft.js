onEvent('recipes', event => {
    const toRem = ['securitycraft:mine','securitycraft:bouncing_betty', 'securitycraft:claymore', 'securitycraft:ims', 'securitycraft:track_mine']
    toRem.forEach(e => {event.remove({output:e})})
})  
