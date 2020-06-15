const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const prefix = "|";
const botname = `Custom Comamnds`;

module.exports = {
  name: "helpod",
  aliases: ["hm", "helpm"],
  category: "info",
  description: "Shows a list of commands.",
  usage: "[hf]",
  run: (client, message, args) => {
    const embed = new RichEmbed()
      .setColor("#ff0000")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTitle(`Moderation Help`)
      .setDescription(`
Shows all commands we understand fall under the moderation section.

**Ban** - Bans the mentioned user from the server. | Reqruies role: Administration+
**Clear** - Clears a set amount of messages in the server. | Requires role: Staff CC
**Kick** - Kick the mentioned user from the server. | Requires role: Moderation+
**Report** - Makes a report to the server. | Requires channel: reports
**Poll** - Creates a poll for people to react to | Requires Role: Moderation+`)

    message.channel.send(embed);
  }
};
