const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "poll",
    aliases: ["p"],
    category: "moderation",
    description: "Makes a poll for the server",
    usage: "<args for the poll>",
    run: async (client, message, args) => {
      
      if (!message.member.roles.find(r => r.name === "Moderation+"))
        return message.channel.send('You do not have permissions')
      
      const check = client.emojis.get("721695428743004170");
      const cross = client.emojis.get("721695429053644863"); 
      
      const Embed = new RichEmbed()
      .setColor(0xFFC300)
      .setTitle("Initiate Poll")
      .setDescription("|Poll to make a simple yes/no poll")
      
      if(!args[1]){
        message.channel.send(Embed);
        
      }
      
      
      let msgArgs = args.slice(0).join(" ");

      const embed = new RichEmbed()
      .setColor(0xFFC300)
      .setTitle("Vote For Poll")
      .setThumbnail("https://cdn.discordapp.com/attachments/711203214954987600/721690910014046279/2Q.png")
      .setDescription(msgArgs)
      .setFooter(message.member.displayName, message.author.displayAvatarURL)
          
      message.channel.send(embed).then(messageReaction => {
        messageReaction.react(check);
        messageReaction.react(cross);
        message.delete(100).catch(console.error);
      });
    }
}