const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

module.exports.run= async(client, message, args) => {
   
let embed = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`
  ▬▬▬▬▬▬▬▬ \`\`\📣Bilgilendirme📣\`\`\ ▬▬▬▬▬▬▬▬
> :notepad_spiral:\`${prefix}istatistik\` **:: Bot Hakkında Bilgileri Görürsünüz.**
> :notepad_spiral:**Şuan Kullanılan Prefix =** \`${prefix}\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
:white_small_square:\`${prefix}jailsistemi\` **:: Jail Sistemini Gösterir.**
:white_small_square:\`${prefix}bansistemi\` **:: Ban Sistemini Gösterir.**
:white_small_square:\`${prefix}kicksistemi\` **:: Kick Sistemini Gösterir.**
:white_small_square:\`${prefix}Genel\` **:: Genel komutları gösterir**
`)

message.channel.send(embed)
}
module.exports.conf = {
aliases: ['help']
}

module.exports.help = {
name: "yardım"
}