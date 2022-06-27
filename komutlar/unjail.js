const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {


let jaillog = await db.fetch(`jaillog${message.guild.id}`)
let jailrol = await db.fetch(`jrol${message.guild.id}`)
let jailyetkili = await db.fetch(`jyrol${message.guild.id}`)
let unregister = await db.fetch(`krol${message.guild.id}`)



if(!message.member.roles.cache.has(jailyetkili)) return message.channel.send(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`).then(x => x.delete({timeout: 5000}));

  
  

let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send('Lütfen bir kullanıcı belirt.').then(x => x.delete({timeout: 5000}));


user.roles.add([unregister])
user.roles.remove([jailrol])
  

const chat = new Discord.MessageEmbed()
.setDescription(`**${user} Kullanıcısı ${message.author} tarafından Karantinadan Çıkarıldı!**`)
message.channel.send(chat).then(x => x.delete({timeout: 7000}));

const embed = new Discord.MessageEmbed()
    .setColor('2f3136')
    .setTitle('Kişi Jailden Çıkarıldı!')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Jailden Çıkarılan Kişi', user)
    client.channels.cache.get(jaillog).send(embed)

}
                           
                                
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['unjail'],
  permlevel: 0
}
exports.help = {
  name: 'uncezalı',
}