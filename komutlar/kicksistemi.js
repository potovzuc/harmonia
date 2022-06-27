const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let botadı = ayarlar.botadı



exports.run = function(client, message) {
  
  let prefix = ayarlar.prefix
  
const jsistem = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Kick Komutları")
.addField(`${prefix}kick`,'Kicklersiniz.')
.addField(`${prefix}kickyetkili`,'Kick Yetkili Rolünü Ayarlarsınız.')
.addField(`${prefix}kicklog`,'Kick Logunu Ayarlarsınız.')
.setFooter(`${botadı} Kick Sistemi`, client.user.avatarURL())
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
  name: 'kicksistemi',
};