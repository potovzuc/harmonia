module.exports = {
    name: "author",
    aliases: ["author", "poto"],
    category: "Help",
    description: "Botta Sıkıntı Yaşarsanız",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`<@351410962336841748>'a (Potovzuc#6765) ulaşarak yardım alabilirsiniz`);
    },
};