module.exports = {
    name: "yardım",
    aliases: ["y", "help"],
    category: "Help",
    description: "Komutlar",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`
• Erkek Üye** h!e <@user> isim yaş **
• Kadın Üye** h! <@user> isim yaş  **
• Geçmişte kullanılan isimler** h!isimler **
• Kayıdını silme** h!ks **
• Geçmiş kayıtları silme** h!kreset** 
• Problem çıktığında** h!author**`);
    },
};