const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const prefix = "|";
const botname = `Custom Comamnds`;

module.exports = {
  name: "helpfun",
  aliases: ["hf"],
  category: "info",
  description: "Shows a list of commands.",
  usage: "[hf]",
  run: (client, message, args) => {
    const embed = new RichEmbed()
      .setColor("#ff0000")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTitle(`Fun`)
      .setDescription(`
We have all the following commands that might fal under the fun section.

**Gay** - Tells you how gay the mentioned user is | leave empty or mention self for your name.
**Love** - Tells you how much the mentioned user loves you | leave empty for random.
**Meme** - Grabs a random Meme of the internet
**RPS** - Plays a game of rock paper scissors
**Tired** - Shows you how tired the mentioned user is | Leave empty or mention yourself for your name.

No requirements are needed for these commands.`)

    message.channel.send(embed);
  }
};
