const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        if (!message.member.roles.find(r => r.name === "Moderation+"))
        return message.channel.send('You do not have permissions')

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.reply("Couldn't find that person?").then(m => m.delete(5000));

        if (!args[1])
            return message.channel.send("Please provide a reason for the report").then(m => m.delete(5000));

        message.channel.send(`${rMember} Has been reported by <@!${message.author.id}> for the reason of: **${args.slice(1).join(" ")}**`)
      
        const channel = message.guild.channels.find(c => c.name === "reports")

            
        if (!channel)
            return message.channel.send("Couldn't find a `#reports` channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**- Member:** ${rMember} (${rMember.user.id})
            **- Reported by:** ${message.member}
            **- Reported in:** ${message.channel}
            **- Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed)
        
    }
}