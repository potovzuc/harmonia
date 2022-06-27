
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
     


  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000})); 

if(args[0] === "sıfırla") {
const banysıfırla = new Discord.MessageEmbed
.setDescription(`**Ban Yetkili Rolü Başarıyla Sıfırlandı!**`)
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
message.channel.send(banysıfırla)
db.delete(`byrol${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) return message.channel.send("**Bir Ban Yetkilisi Rolü Belirtiniz!**").then(x => x.delete({timeout: 5000}));
  
db.set(`byrol${message.guild.id}`, rol.id)
const embed = new Discord.MessageEmbed()
.setDescription(`Ban Yetkilisi Rolü Başarıyla ${rol} Olarak Ayarlandı!`)
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
message.channel.send(embed)
  
}


exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['byetkili'],
  permlevel: 0
}
exports.help = {
  name: 'banyetkili'
}