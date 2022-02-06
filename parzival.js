const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]",
    fetchInvites: true
})
bot.onInviteCreate()
bot.onInviteDelete()
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code,
        aliases: command.aliases
    })
}

////////// STATUS \\\\\\\\\\
bot.status({
text:"ParzivaL İnvite Botu",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",//Prefix
  log:"",//Log kanalı ID'si
  davet1:"",//Davet sayısı
  rol1:"",//Davet rol
  davet2:"",//Davet sayısı 2
  rol2:"",//Davet rol 2
  davet3:"",//Davet sayısı 3
  rol3:"",//Davet rol 3
  davet4:"",//Davet sayısı 4
  rol4:"",//Davet rol 4
  davet5:"",//Davet sayısı 5
  rol5:"",//Davet rol 5
  join:"",//Giriş emoji ID'si
  leave:""//Çıkış emoji ID'si
})

////////// COMMANDS \\\\\\\\\\

//Davet
bot.joinCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Bir üye katıldı!;$authorAvatar]
$description[$getServerVar[join] <@$authorID> Sunucumuza katıldı! Davet eden **[$userTag[$userInfo[inviter]]](https://discordapp.com/users/$userInfo[inviter])**. Davet sayısı \`$userInfo[real;$userInfo[inviter]]\`]
$color[BLACK]
$thumbnail[$authorAvatar]
$suppressErrors[$getServerVar[join] <@$authorID> Sunucumuza katıldı ama onu kimin davet ettiğini bulamadım.]
$onlyIf[$isBot[$authorID]==false;$getServerVar[join] <@$authorID> Adlı bot sunucuya alındı.]
`
})

bot.leaveCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Bir üye ayrıldı!;$authorAvatar]
$description[$getServerVar[leave] [$userTag](https://discord.com/users/$authorID) Sunucumuzdan ayrıldı! Davet eden <@$authorID>. Davet sayısı \`$userInfo[real;$userInfo[inviter]]\`]
$color[BLACK]
$thumbnail[$authorAvatar]
$suppressErrors[$getServerVar[leave] <@$authorID> Sunucumuzdan ayrıldı ama onu kimin davet ettiğini bulamadım.]
$onlyIf[$isBot[$authorID]==false;$getServerVar[leave] <@$authorID> Adlı bot sunucudan atıldı.]
  `
})

//Davet rol
bot.joinCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Üyeye rol verildi!;$userAvatar[$userInfo[inviter]]]
$description[<@$userInfo[inviter]> adlı üye **$getServerVar[davet1]** davet yaptığı için <@&$getServerVar[rol1]> rolü verildi]
$color[BLACK]
$thumbnail[$userAvatar[$userInfo[inviter]]]
$giveRoles[$userInfo[inviter];$getServerVar[rol1]]
$onlyIf[$userInfo[real;$userInfo[inviter]]==$getServerVar[davet1];]
$suppressErrors
  `
})

bot.joinCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Üyeye rol verildi!;$userAvatar[$userInfo[inviter]]]
$description[<@$userInfo[inviter]> adlı üye **$getServerVar[davet2]** davet yaptığı için <@&$getServerVar[rol2]> rolü verildi]
$color[BLACK]
$thumbnail[$userAvatar[$userInfo[inviter]]]
$giveRoles[$userInfo[inviter];$getServerVar[rol2]]
$onlyIf[$userInfo[real;$userInfo[inviter]]==$getServerVar[davet2];]
$suppressErrors
  `
})

bot.joinCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Üyeye rol verildi!;$userAvatar[$userInfo[inviter]]]
$description[<@$userInfo[inviter]> adlı üye **$getServerVar[davet3]** davet yaptığı için <@&$getServerVar[rol3]> rolü verildi]
$color[BLACK]
$thumbnail[$userAvatar[$userInfo[inviter]]]
$giveRoles[$userInfo[inviter];$getServerVar[rol3]]
$onlyIf[$userInfo[real;$userInfo[inviter]]==$getServerVar[davet3];]
$suppressErrors
  `
})

bot.joinCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Üyeye rol verildi!;$userAvatar[$userInfo[inviter]]]
$description[<@$userInfo[inviter]> adlı üye **$getServerVar[davet4]** davet yaptığı için <@&$getServerVar[rol4]> rolü verildi]
$color[BLACK]
$thumbnail[$userAvatar[$userInfo[inviter]]]
$giveRoles[$userInfo[inviter];$getServerVar[rol4]]
$onlyIf[$userInfo[real;$userInfo[inviter]]==$getServerVar[davet4];]
$suppressErrors
  `
})

bot.joinCommand({
  channel:"$getServerVar[log]",
  code:`
$author[Üyeye rol verildi!;$userAvatar[$userInfo[inviter]]]
$description[<@$userInfo[inviter]> adlı üye **$getServerVar[davet5]** davet yaptığı için <@&$getServerVar[rol5]> rolü verildi]
$color[BLACK]
$thumbnail[$userAvatar[$userInfo[inviter]]]
$giveRoles[$userInfo[inviter];$getServerVar[rol5]]
$onlyIf[$userInfo[real;$userInfo[inviter]]==$getServerVar[davet5];]
$suppressErrors
  `
})
