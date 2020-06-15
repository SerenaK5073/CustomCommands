const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const prefix = "|";
const botname = `Custom Comamnds`;

module.exports = {
  name: "info",
  aliases: ["i"],
  category: "info",
  description: "Information about the bot.",
  usage: "[i]",
  run: (client, message, args) => {
    const embed = new RichEmbed()
      .setColor("#ff0000")
      .setTimestamp()
      .setFooter(`requested by: ${message.author.username}`, message.author.displayAvatarURL)
      .setTitle(`<:agree:698439302165823558> Information <:agree:698439302165823558>
`)
      .setDescription(
`
<:info:719530221404946492> __**Owner Information**__<:info:719530221404946492>
**Discord** - Serena K. | 𒆜𝒹e𝔭ℝeƧsed𒆜#4900
**Steam** - <https://steamcommunity.com/id/DOFSteel/home/>
**Youtube** - <https://www.youtube.com/channel/UCmtegEmZl-AEqZ_fYiePGrA>
**Twitter** - N/A
**Instagram** - <https://www.instagram.com/_.serena_king._/?hl=nl>
**Facebook** - Geryon Nugteren

<:BOT:719530226815598623> __**Bot Information**__<:BOT:719530226815598623> 
**Prefix:** ${prefix}
**Name:** *${botname}*

**Bot Command category's:** *Info, Moderation, fun*

**Bot requirements;**
**Roles:** \`Staff CC\`, \`Moderation+\`, \`Administration+\`
**Channels:** \`Reports\`

<:link:719534751135957034>__**Advertisements**__<:link:719534751135957034>
*3 Spots available for Advertisements*

`)

    message.channel.send(embed);
  }
};
