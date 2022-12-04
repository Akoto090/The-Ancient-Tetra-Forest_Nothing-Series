//lol

onEvent('recipes', event => {
    const toRem = ['davespotioneering:lime_umbrella','davespotioneering:pink_umbrella','davespotioneering:light_blue_umbrella','davespotioneering:yellow_umbrella','davespotioneering:magenta_umbrella','davespotioneering:orange_umbrella','davespotioneering:gilded_umbrella','davespotioneering:aged_umbrella','davespotioneering:white_umbrella','davespotioneering:light_gray_umbrella','davespotioneering:gray_umbrella','davespotioneering:blue_umbrella','davespotioneering:brown_umbrella','davespotioneering:green_umbrella','davespotioneering:red_umbrella','davespotioneering:black_umbrella',[Item.of('vanillahammers:paper_hammer', '{Damage:0}'), Item.of('vanillahammers:nether_hammer', '{Damage:0}'), Item.of('vanillahammers:lapis_hammer', '{Damage:0}'), Item.of('vanillahammers:glowstone_hammer', '{Damage:0}'), Item.of('vanillahammers:bone_hammer', '{Damage:0}'), Item.of('vanillahammers:coal_hammer', '{Damage:0}'), Item.of('vanillahammers:emerald_hammer', '{Damage:0}'), Item.of('vanillahammers:ender_hammer', '{Damage:0}'), Item.of('vanillahammers:fiery_hammer', '{Damage:0}'), Item.of('vanillahammers:slime_hammer', '{Damage:0}'), Item.of('vanillahammers:redstone_hammer', '{Damage:0}'), Item.of('vanillahammers:quartz_hammer', '{Damage:0}'), Item.of('vanillahammers:prismarine_hammer', '{Damage:0}')]]
    toRem.forEach(e => {event.remove({output:e})})
})  

onEvent('recipes', event => {
    event.remove({mod: '@extrastorage'})
  })