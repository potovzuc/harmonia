
const Discord = require('discord.js')
const db = require('quick.db')
 
exports.run = async (client ,message, args) =>{
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));
  
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('**Küfür Engel Başarıyla Açıldı!**').then(x => x.delete({timeout: 5000}));
  return
}
  
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('**Küfür Engel Başarıyla Kapatıldı!**').then(x => x.delete({timeout: 5000}));
return
}
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'küfürengel',
};
