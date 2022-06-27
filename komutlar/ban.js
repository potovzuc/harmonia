const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let reason = args.slice(1).join(' ');
let banlog = await db.fetch(`banlog${message.guild.id}`)
let banyetkili = await db.fetch(`byrol${message.guild.id}`)

if (!banyetkili) return message.channel.send(`**Ban Yetkili Rolü Ayarlanmamış!**`).then(x => x.delete({timeout: 5000}));
if(!banlog) return message.channel.send(`**Ban Log Kanalı Ayarlanmamış!**`).then(x => x.delete({timeout: 5000}));
if(!message.member.roles.cache.has(banyetkili)) return message.channel.send(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`).then(x => x.delete({timeout: 5000}));


  

if (!member) return message.channel.send(`**Lütfen Bir Kişi Etiketleyin!**`)
if (reason.length < 1) return message.channel.send('**Banlama Sebebini Girin!**').then(x => x.delete({timeout: 5000}));
  
message.channel.send(`**${member} Kullanıcısı Başarıyla Banlandı!**`)

  const embed = new Discord.MessageEmbed()
    .setColor('2f3136')
    .setTitle('Kişi Banlandı!')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan kişi', member)
  .addField('Ban Sebebi', "```" + reason + "```")
    client.channels.cache.get(banlog).send(embed)
   message.guild.member(member).ban();

}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['yasakla'],
  permlevel: 0
}
exports.help = {
  name: 'ban',
}