const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const prefix = "|";
const botname = `Custom Comamnds`;

module.exports = {
  name: "help",
  aliases: ["h"],
  category: "info",
  description: "Shows a list of commands.",
  usage: "[h]",
  run: (client, message, args) => {
    const embed = new RichEmbed()
      .setColor("#ff0000")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTitle(`<:Verified:719534754927476766> Help Command <:Verified:719534754927476766>`)
      .setDescription(`
**Commands**
*Here is a list of commands that we have on the bot as of this moment.*

__**Info**__
|help
|h

__**Moderation**__
|helpmod
|helpm
|hm

__**Fun**__
|helpfun
|hf

**NOTE**
*These help commands displayed above will show you what commands are in that section. Helpfun & Hf are basically the same thing but they are shorted down for easy use.*

<:warning:719530222105395221>**Bot Requirements**<:warning:719530222105395221>
**Roles:** \`Staff CC\`, \`Moderation+\`, \`Administration+\`
**Channels:** \`Reports\`

<:info:719530221404946492>**Planned for the future**<:info:719530221404946492>
*1. Ticket System*
`)

    message.channel.send(embed);
  }
};
