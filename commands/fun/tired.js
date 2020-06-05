const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "tired",
    aliases: ["sleep"],
    category: "fun",
    description: "How sleepy the person in question is.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        const tired = Math.random() * 100;
        const tiredIndex = Math.floor(tired / 10);
        const tiredLevel = "💤".repeat(tiredIndex) + "😴".repeat(10 - tiredIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** Is sleepy For this much:`,
            `💤 ${Math.floor(tired)}%\n\n${tiredLevel}`);

        message.channel.send(embed);
    }
}