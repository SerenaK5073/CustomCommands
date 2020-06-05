const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "gay",
    aliases: ["gay"],
    category: "fun",
    description: "How gay the person in question is.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        const gay = Math.random() * 100;
        const gayIndex = Math.floor(gay / 10);
        const gayLevel = "🏳‍🌈".repeat(gayIndex) + "🏴".repeat(10 - gayIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** Is gay For this much:`,
            `🌈 ${Math.floor(gay)}%\n\n${gayLevel}`);

        message.channel.send(embed);
    }
}