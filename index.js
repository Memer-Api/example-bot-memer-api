﻿/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
//Importing all needed Commands
const Discord = require("discord.js"); 
const Meme = require("memer-api");
//this is the official discord.js wrapper for the Discord Api, which we use!
const colors = require("colors"); //this Package is used, to change the colors of our Console! (optional and doesnt effect performance)
const fs = require("fs"); //this package is for reading files and getting their inputs
//Creating the Discord.js Client for This Bot with some default settings ;) and with partials, so you can fetch OLD messages
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
client.memer = new Meme(require("./botconfig/config.json").apitoken))
//Client variables to use everywhere
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

//Loading files, with the client variable like Command Handler, Event Handler, ...
["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//login into the bot
client.login(require("./botconfig/config.json").token);
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/

process.on('unhandledRejection', (reason, p) => {
  console.log('Promise: ', p , 'Reason: ', reason.stack ? reason.stack : reason);
});
process.on("uncaughtException", (err, origin) => {
  console.log('Exception: ', err.stack ? err.stack : err)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('Exception: ', err.stack ? err.stack : err)
});
process.on('beforeExit', (code) => {
  console.log('Code: ', code);
});
process.on('exit', (code) => {
  console.log('Code: ', code);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(type, promise, reason);
});
