const db = require('quick.db');
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  
  var prefix = ayarlar.prefix;
  

 if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));
  
  
  
  if (args[0] == 'aç') {
    db.set(`guardeh_${message.guild.id}`, 'acik')
      message.channel.send('**Everyone Engel başarıyla açıldı!**').then(x => x.delete({timeout: 5000}));
   
  }
  if (args[0] == 'kapat') {
    db.delete(`guardeh_${message.guild.id}`, 'kapali')
      message.channel.send('**Everyone Engel başarıyla kapatıldı!**').then(x => x.delete({timeout: 5000}));
  
  } 


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'everhere',
};