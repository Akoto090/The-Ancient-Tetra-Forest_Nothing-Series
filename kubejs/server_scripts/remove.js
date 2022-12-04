//lol

onEvent('recipes', event => {
    const toRem = ['']
    toRem.forEach(e => {event.remove({output:e})})
})  

onEvent('recipes', event => {
    event.remove({mod:''})
  })