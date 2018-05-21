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
  
  if(command === 'ping') {
  message.channel.send('Pong!');
  } else
  if (command === 'blah') {
  message.channel.send('Meh.');
}
});

  

client.login(process.env.BOT_TOKEN);
