module.exports = async (bot, message, args) => {
const Discord = require('discord.js');     
if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "444509762676326411") return message.channel.send("<a:XmarkNo:668496202421239839>┊Это команда для администрации сервера!");
    if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не ввели текст!")
  message.channel.send(message.content.slice(5), {
    tts: true
      })
    message.delete();
	}


module.exports.config = {
  name: 'tts',
  aliases: [],
  information: {
    examples: ['s.tts'],
    description: 'Text to cheech',
    category: 'admin'
  }
}