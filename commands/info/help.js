const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const prefix = "|";
const botname = `Custom Comamnds`

module.exports = {
  name: "help",
  aliases: ["h"],
  category: "info",
  description: "Shows a list of commands.",
  usage: "[h]",
  run: (client, message, args) => {

    message.channel.send(`**Basic Commands**
> **Help** *Shows this command*
> **Info** *Shows a little welcome message of the bot*
> **Ping** *Shows the Latency of the bot. And API.*
> **Premium** *Shows the premium command.*`);

    message.channel.send(`**Modeartion**
> **Ban** *Bans a user from the server*
> **Kick** *Kicks a user from the server*
> **Report** *Reports a user to the admins*
> **Purge** *Pruges a set amount of messages.*`);

    message.channel.send(`**FUN**
> **RPS** *Plays a game of Rock // Paper // Scissors*
> **Meme** *Shows a meme randomly picked from the internet*
> **Love** *Shows how much the message input loves the mentioned user*
> **gay** *Shows how gay you are or the mentioned user*
> **tired** *Will show how tired the mentioned user is*`);
 }
}