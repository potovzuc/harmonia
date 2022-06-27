const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {


   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000}));

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('** Bir log kanalı belirtmelisin!**').then(x => x.delete({timeout: 5000}));
  
    db.set(`jaillog${message.guild.id}`, kanal.id)
  const jaillog = new Discord.MessageEmbed()
  .setDescription(`Jail log kanalı Başarıyla <#${kanal.id}> Olarak ayarlandı!`)
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  message.channel.send(jaillog)
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:["jlog"],
	permlevel: 0
};

exports.help = {
	name: "jaillog"
}