const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let botadı = ayarlar.botadı

let prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
  const egse = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Ban Komutları")
    .addField(`${prefix}ban `, "belirtilen Kişiyi Banlar.")
    .addField(`${prefix}unban `, "belirtilen Kişinin Banını Açar.")
    .addField(`${prefix}banlist `, "Banlananları Gösterir.")
    .addField(`${prefix}banyetkilirol `, "Ban Yetkilisi Ayarlarsınız.")
    .addField(`${prefix}banlog `, "Ban Logunu Ayarlarsınız.")
    .setFooter(`${botadı} Ban Sistemi`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL());
  message.channel.send(egse);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bansistemi"
};
