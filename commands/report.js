module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
const sayMessage = args.join(" ");
if(!sayMessage) return message.channel.send("<:Moderation:651075781673353237>┊Пожалуйста напишите проблему для репорта").then(msg => {msg.delete(5000)});
let embed = new Discord.MessageEmbed()
.setTitle("» Репорт «")
.setColor("#FF0000")
.addField("Информация", "**Отправил: **" + `${message.author.tag}` + "\n**ID отправителя: **" + `${message.author.id}` + "\n**Сервер: **" + `${message.guild.name}` + "\n**Сообщение: **" + args.join(" "))
.setTimestamp()
bot.channels.cache.get('699633777126932510').send(embed)
message.reply("Ваш репорт был отправлен!")
}
module.exports.config = {
  name: 'report',
  aliases: [],
  information: {
    examples: ['s.report <user, reason>'],
    description: 'Репорт на пользователя',
    category: 'general'
  }
}