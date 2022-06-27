const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {


  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000})); 

if(args[0] === "sıfırla") {
const jailsıfırla = new Discord.MessageEmbed
.setDescription(`**Jail Rolü Başarıyla Sıfırlandı!**`)
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
message.channel.send(jailsıfırla)
db.delete(`jrol${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) return message.channel.send("**Bir Jail Rolü Belirtiniz!**").then(x => x.delete({timeout: 5000}));

  let rol2 = message.mentions.roles.first();   
if (!rol2) return message.channel.send("**Bir Kayıtsız Rolü Belirtiniz!**").then(x => x.delete({timeout: 5000}));

db.set(`jrol${message.guild.id}`, rol.id)
db.set(`krol${message.guild.id}`, rol.id)
const embed = new Discord.MessageEmbed()
.setDescription(`Jail Rolü Başarıyla ${rol} Olarak Ayarlandı!`)
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
message.channel.send(embed)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [''],
  permlevel: 0
}
exports.help = {
  name: 'jailrol',
}