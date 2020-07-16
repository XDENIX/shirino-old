module.exports = async (bot, message, args) => {
const Discord = require('discord.js');

let embed = new Discord.MessageEmbed()
.setTitle("» Invite bot «")
.setDescription("[Нажми на меня](https://discord.com/oauth2/authorize?client_id=672076488958541835&permissions=8&scope=bot)")
message.channel.send(embed)
}
  
module.exports.config = {
  name: 'invite',
  aliases: [],
  information: {
    examples: ['s.invite'],
    description: 'Инвайт на бота',
    category: 'general'
  }
}