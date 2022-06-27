const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var banl = message.guild.fetchBans().then(bans => {
  message.channel.send(`**Bu sunucuda **${bans.size}** banlı üye var!**`)
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};
exports.help = {
  name: "banlist",
};