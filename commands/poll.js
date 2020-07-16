module.exports = async (bot, message, args) => {
const Discord = require('discord.js');      
    var poll = args.slice(0).join(" ");
    if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "444509762676326411")
return message.channel.send("<a:XmarkNo:668496202421239839>┊Это команда для администрации сервера!");
    if (!poll) return message.reply("Вы не ввели текст!");
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
      .setTitle("<a:TechicalGif:651075974330581032>┊Голосование")
      .setDescription(poll)
      .setFooter("Что бы проголосовать, нажмите на одну из реакций ниже!")
    message.channel.send({ embed }).then(message => {
      message.react('684114465675149312')
      message.react('684114466992160864')
    });
    message.delete();
    
	}


module.exports.config = {
  name: 'poll',
  aliases: [],
  information: {
    examples: ['s.poll'],
    description: 'Голосование',
    category: 'admin'
  }
}