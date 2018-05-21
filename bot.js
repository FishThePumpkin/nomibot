const Discord = require("discord.js");
const client = new Discord.Client();
const ownerID = "246437474463776769"
//commands preparation
const prefex = '!'
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// Set the prefix
let prefix = "!";

client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
    
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  }
  
});

  

client.login(process.env.BOT_TOKEN);
