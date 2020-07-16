module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
const ms = require("ms")
  let embed = new Discord.MessageEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/675355383963058231/713026119288488047/shirino.jpg')
  .addField("» Статистика бота «", "**Servers: **" + bot.guilds.cache.size + "\n**Users: **" + bot.users.cache.size + "\n**Channels: **" + bot.channels.cache.size + "\n**Emojis: **" + bot.emojis.cache.size + "\n**Uptime: **" + `${ms(bot.uptime)}` + "\n**Ping: **" + bot.ws.ping + ' ``ms``')
  .setColor("#36393f")
message.channel.send(embed)
message.delete()
	}


module.exports.config = {
  name: 'stat',
  aliases: [],
  information: {
    examples: ['s.stat'],
    description: 'Статистика бота',
    category: 'info'
  }
}