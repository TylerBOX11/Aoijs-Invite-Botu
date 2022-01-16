module.exports = {
  name:"davetlerim",
  aliases:["davetler","invites"],
  code:`
$author[$userTag[$mentioned[1;yes]] Davet bilgileri!;$userAvatar[$mentioned[1;yes]]]
$description[
**__Gerçek davet sayısı:__** \`$userInfo[real;$mentioned[1;yes]]\`
**__Sahte davet sayısı:__** \`$userInfo[fake;$mentioned[1;yes]]\`
**__Toplam davet sayısı:__** \`$sum[$userInfo[fake;$mentioned[1;yes]];$userInfo[real;$mentioned[1;yes]]]\`
**__Davet eden:__** $replaceText[<@$userInfo[inviter;$mentioned[1;yes]]>;<@>;Davet eden üye bulunamadı.;-1]]
$color[BLACK]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
  `
}
