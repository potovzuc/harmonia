const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let botadı = ayarlar.botadı



exports.run = function(client, message) {
  
  let prefix = ayarlar.prefix
  
const jsistem = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Jail Komutları")
.addField(`${prefix}jailrol`,'Jail Rolünü Ayarlarsınız.')
.addField(`${prefix}jailyetkili`,'Jail Yetkilisi Ayarlarsınız.')
.addField(`${prefix}jaillog`,'Jail Logunu Ayarlarsınız.')
.addField(`${prefix}jailalınacakrol`,'Jaile Atılırken Alınacak Rolü Belirler.')
.addField(`${prefix}jail`,'Birisini jaile atarsınız.')
.setFooter(`${botadı} Jail Sistemi`, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
message.channel.send(jsistem)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'jailsistemi',
};