const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {


   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('** Bir log kanalı belirtmelisin!**').then(x => x.delete({timeout: 5000}));
  
    db.set(`banlog${message.guild.id}`, kanal.id)
  const banlog = new Discord.MessageEmbed()
  .setDescription(`Ban log kanalı Başarıyla <#${kanal.id}> Olarak ayarlandı!`)
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  message.channel.send(banlog)
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:["blog"],
	permlevel: 0
};

exports.help = {
	name: "banlog"
}