const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**').then(x => x.delete({timeout: 5000})); 
    let member = args[0];
    const sunucu = await message.guild.fetchBans();
    if (!member  || isNaN(member ) || !sunucu.has(member )) {
        return message.channel.send(`**Bir İd Belirtin!**`)
    }
    message.guild.members.unban(member);
    message.channel.send(`Belirtilen Kullanıcının Banı Açıldı!`)
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};