module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
let id = args[0]
bot.guilds.cache.get(id).leave()
message.channel.send('<a:XmarkYes:683228924687417364>┊Я вышел с сервера!')
message.react('683228924687417364')
}
module.exports.config = {
  name: 'guildleave',
  aliases: [],
  information: {
    examples: ['s.leave <server id>'],
    description: 'Выход с сервера по id',
    category: 'owners'
  }
}