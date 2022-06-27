const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));
  
let prefix = ayarlar.prefix

  if (args[0] === 'aç') {
    db.set(`rolk_${message.guild.id}`, "Aktif")
     message.channel.send(`Rol Koruma Başarıyla Açıldı!`).then(x => x.delete({timeout: 5000}));
  }
   if (args[0] === 'kapat') {
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(`Rol Koruma Başarıyla Kapatıldı!`).then(x => x.delete({timeout: 5000}));
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'rolkoruma'
}; 

