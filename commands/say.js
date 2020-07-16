module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "444509762676326411") return message.channel.send("<a:XmarkNo:668496202421239839>┊Это команда для администрации сервера!");
    if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не ввели текст!")
  let embed = new Discord.MessageEmbed()
  .setDescription(message.content.slice(5))
    message.channel.send(embed)
    message.delete();

	}


module.exports.config = {
  name: 'say',
  aliases: [],
  information: {
    examples: ['s.say'],
    description: 'Написать что-то от имени бота',
    category: 'admin'
  }
}