const Discord = require("discord.js");
const client = new Discord.Client();

//commands preparation


// Set the prefix
const prefix = "n!";

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

  

client.login(process.env.BOT_TOKEN);
