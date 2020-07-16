module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
const sayMessage = args.join(" ");
if(!sayMessage) return message.channel.send("<:Moderation:651075781673353237>┊Пожалуйста напишите баг")
let embed = new Discord.MessageEmbed()
.setTitle("» Баг «")
.setColor("#FF0000")
.addField("Информация", "**Отправил: **" + `${message.author.tag}` + "\n**ID отправителя: **" + `${message.author.id}` + "\n**Сервер: **" + `${message.guild.name}` + "\n**Сообщение: **" + args.join(" "))
.setTimestamp()
bot.channels.cache.get('716545764976754688').send(embed)
message.reply("Баг был отправлен!")
message.delete()
}
module.exports.config = {
  name: 'bug',
  aliases: [],
  information: {
    examples: ['s.bug <message>'],
    description: 'Отправьте баг если нашли его!',
    category: 'general'
  }
}