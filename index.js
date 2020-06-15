require("http").createServer(async (req,res) => { 
  res.statusCode = 200; res.write("ok"); 
  res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));

const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const prefix = "|";
const version = "5.1"

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "dnd", game: { name: `Added the Poll Command | Version: ${version}`, type: "playing"}});
    /*let statuses = [
      `|help for more information! | Version ${version}`,
      `Watching over ${client.guilds.size} Servers`,
      `Watching over ${client.users.size} Users`,
      `Added new command |poll - To make a simple poll!`,
      
      ]
    
    setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setPresence(status, {type: "WATCHING"});
    })*/
});

client.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(process.env.TOKEN);