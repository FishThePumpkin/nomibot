const Discord = require("discord.js");
const client = new Discord.Client();

//commands preparation


// Set the prefix
const prefix = "n!";


if (message.content.indexOf(prefix) !== 0) return;

const command = args.shift().toLowerCase();

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if(command === 'ping') {
  message.channel.send('Pong!');
  }
  if (command === 'blah') {
  message.channel.send('Meh.');
  }
});

  

client.login(process.env.BOT_TOKEN);
