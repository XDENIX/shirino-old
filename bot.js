const Discord = require('discord.js'),
moment = require("moment"),
bot = new Discord.Client(),
      
      { prefix, token } = require('./config');
bot.commands = new Discord.Collection()
require('fs').readdirSync('./commands/').filter(file => file.endsWith('.js')).forEach(file => {
    bot.commands.set(require(`./commands/${file}`).config.name, require(`./commands/${file}`));
})

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

});

bot.on('message', async (message) => {
  if (message.author.bot) return;
  if(!message.guild) return;
  if(message.content.startsWith(prefix)){
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;
    if (bot.commands.has(cmd)) command = bot.commands.get(cmd);
    if (!command || message.content === prefix || !message.guild.me.hasPermission('SEND_MESSAGES')) return;
    if (command.config.information.category && command.config.information.category.toLowerCase() === 'owners' && !require('./config').owners.includes(message.author.id)) return;
    try {
      command(bot, message, args);
    } catch (e) {
    }
  }
});

bot.login(token);
