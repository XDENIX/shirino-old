const Discord = require('discord.js'), { owners } = require('../config')
module.exports = async (bot, message, args) => {  
     let emb = new Discord.MessageEmbed()
     .setColor("#131821")
     .setAuthor("Все доступные команды Shirino", message.author.displayAvatarURL()).setDescription("Основной префикс — ``" + require('../config').prefix + '``').setFooter("Бот был обновлен на 12v") 
     .addField("Главные", bot.commands.filter(cmd => cmd.config.information.category === 'general').map(cmd => '``' + cmd.config.name + '``').join(' '))
     .addField("Административное", bot.commands.filter(cmd => cmd.config.information.category === 'admin').map(cmd => '``' + cmd.config.name + '``').join(' '))
     .addField("Развлечения", bot.commands.filter(cmd => cmd.config.information.category === 'fan').map(cmd => '``' + cmd.config.name + '``').join(' '))
     .addField("Картинки", bot.commands.filter(cmd => cmd.config.information.category === 'img').map(cmd => '``' + cmd.config.name + '``').join(' '))
     .addField("Информация", bot.commands.filter(cmd => cmd.config.information.category === 'info').map(cmd => '``' + cmd.config.name + '``').join(' '))
     .addField("Утилиты", bot.commands.filter(cmd => cmd.config.information.category === 'utilities').map(cmd => '``' + cmd.config.name + '``').join(' '))
     if(owners.includes(message.author.id)) emb.addField("Управление ботом", bot.commands.filter(cmd => cmd.config.information.category === 'owners').map(cmd => '``' + cmd.config.name + '``').join(' '))
  if(!args[0] || !bot.commands.has(args[0].toLowerCase())) return message.channel.send(emb)
  let command = bot.commands.get(args[0].toLowerCase())
  let embed = new Discord.MessageEmbed()
  .setAuthor(command.config.name)
  if(command.config.information.description) embed.setDescription(command.config.information.description)
  if(command.config.information.examples) {
    let example = '';
    command.config.information.examples.forEach(res => example += `\`\`\`${res}\`\`\`\n`)
    embed.addField('Примеры использования', example)
    }
  message.channel.send(embed);
  message.delete()
}
module.exports.config = {
  name: 'help',
  aliases: [],
  information: {
    examples: ['s.help', 's.help <command>'],
    description: 'Помощь по командам бота',
    category: 'general'
  }
}