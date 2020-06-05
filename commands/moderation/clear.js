const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
  name: "clear",
  aliases: ["purge", "nuke"],
  catorgory: "moderation",
  description: "Clears a set amount of messages",
  run: async (client, message, args) => {
    if (message.deletable) {
      message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("You can not use this comamnd missing permissions 'MANAGE MESSAGES'.").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.reply("You need to specify a amount of number of messages you want to have deleted. I can't delete a 0 messages.").then(m => m.delete(5000));
    }

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Sorry.. I can't delete messages.").then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
      .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` message.`))

  }
}