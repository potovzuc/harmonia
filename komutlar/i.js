const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const total = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
   const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
   .setFooter('Luffyy Was Here :D')
  .setAuthor('İstatistikler', bot.user.displayAvatarURL())
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0), true)
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField('» **İşletim Sisteni**', os.platform(), true)
  .addField("**» Destek Sunucusu**", " [Destek sunucusu](https://discord.gg/murateren)", true)
  message.channel.send(embed);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik"
};