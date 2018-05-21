const Discord = require("discord.js");
const client = new Discord.Client();

//commands preparation


// Set the prefix
const prefix = "n!";


 const prefix = "n!";
  client.on("message", (message) => {
    // Exit and stop if it's not there
   
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");

  )};

client.login(process.env.BOT_TOKEN);
