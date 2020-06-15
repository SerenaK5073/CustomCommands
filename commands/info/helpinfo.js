const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const prefix = "|";
const botname = `Custom Comamnds`;

module.exports = {
  name: "helpinfo",
  aliases: ["hi"],
  category: "info",
  description: "Shows a list of commands.",
  usage: "[hi]",
  run: (client, message, args) => {
    const embed = new RichEmbed()
      .setColor("#ff0000")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTitle(`Info Help`)
      .setDescription(`
This is all we understand on the info section.

**Help** - Shows the help commands.
**Helpinfo** - Shows this command.
**Helpmod** - Shows help for moderation.
**info** - Shows the info command.
**ping** - Shows bot latency and API latency.
**ServerInfo** - Shows Server Info.
**WhoIs** - Shows a User their information.

No requirements for this command.`)

    message.channel.send(embed);
  }
};
