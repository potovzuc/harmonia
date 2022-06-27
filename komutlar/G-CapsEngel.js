const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));

  let prefix = ayarlar.prefix
  
  if (args[0] === 'aç') {
    db.set(`guarcl_${message.guild.id}`, "Aktif")
       const kaç = new Discord.MessageEmbed()
    .setDescription(`CapsLock Engel Başarıyla Açıldı!`)
 .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    return message.channel.send(kaç).then(x => x.delete({timeout: 5000}));
  }
   if (args[0] === 'kapat') {
    db.delete(`guardcl_${message.guild.id}`)
       const kkapat = new Discord.MessageEmbed()
    .setDescription(`CapsLock EngelBaşarıyla Kapatıldı!`)
     .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    return message.channel.send(kkapat).then(x => x.delete({timeout: 5000}));
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'capslock'
}; 