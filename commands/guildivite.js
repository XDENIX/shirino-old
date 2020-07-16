module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
let id = args[0]
bot.guilds.cache.get(id).channels.cache.random().createInvite().then(c=>{message.channel.send("https://discord.gg/" + c.code)})
message.react('683228924687417364')
}
module.exports.config = {
  name: 'guildinvite',
  aliases: [],
  information: {
    examples: ['s.guildinvite <server id>'],
    description: 'Инвайт на сервер',
    category: 'owners'
  }
}