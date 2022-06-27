const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {

  
  
 
  
  
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let reason = args.slice(1).join(' ');
  let kicklog = await db.fetch(`kicklog${message.guild.id}`)
  let kickyetkili = await db.fetch(`jyrol${message.guild.id}`)

 if (!member) return message.channel.send(`**Lütfen Bir Kişi Etiketleyin!**`).then(x => x.delete({timeout: 5000}));
  if (reason.length < 1) return message.channel.send('**Kickleme Sebebini Girin!**').then(x => x.delete({timeout: 5000}));

  
  const embed = new Discord.MessageEmbed()
    .setColor('2f3136')
    .setTitle('Kişi Kicklendi!')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Kicklenen Kişi', member)
  .addField('Kick Sebebi', "```" + reason + "```")
    client.channels.cache.get(kicklog).send(embed)
  
  message.guild.member(member).kick();
  
  message.channel.send(`**${member} Kullanıcısı Başarıyla Kicklendi**`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
 
};

exports.help = {
  name: 'at'
};