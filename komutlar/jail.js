const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let reason = args.slice(1).join(' ');
let jaillog = await db.fetch(`jaillog${message.guild.id}`)
let jailrol = await db.fetch(`jrol${message.guild.id}`)
let jailyetkili = await db.fetch(`jyrol${message.guild.id}`)

if (!jailrol) return message.channel.send(`**Jail Rolü Ayarlanmamış!**`).then(x => x.delete({timeout: 5000}));
if (!jailyetkili) return message.channel.send(`**Jail Yetkili Rolü Ayarlanmamış!`).then(x => x.delete({timeout: 5000}));
if(!jaillog) return message.channel.send(`**Jail Log Kanalı Ayarlanmamış!**`).then(x => x.delete({timeout: 5000}));
if(!message.member.roles.cache.has(jailyetkili)) return message.channel.send(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`).then(x => x.delete({timeout: 5000}));

  
  

if (!member) return message.channel.send(`**Lütfen Bir Kişi Etiketleyin!**`)
if (reason.length < 1) return message.channel.send('**Jail Sebebini Girin!**').then(x => x.delete({timeout: 5000}));

member.roles.set([jailrol])
  

 message.channel.send(`**${member} Kullanıcısı Başarıyla Jaile Atıldı**`)

  const embed = new Discord.MessageEmbed()
    .setColor('2f3136')
    .setTitle('Kişi Jaile Atıldı!')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Jaile Atılan kişi', member)
  .addField('Jail Sebebi', "```" + reason + "```")
    client.channels.cache.get(jaillog).send(embed)
  

}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['jail'],
  permlevel: 0
}
exports.help = {
  name: 'cezalı',
}