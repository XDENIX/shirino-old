module.exports = async (bot, message, args) => {
const Discord = require('discord.js');     
let replies = [
        "Вы умерли!",
        "Вы выжили!"
               ];
       let result = Math.floor(Math.random() * replies.length);
      let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setColor("#ffff00")
      .setTitle("Русская рулетка")
      .addField("Вы нажали на курок и.....",replies[result]);
      message.channel.send(embed)
      message.delete();
	}


module.exports.config = {
  name: 'rr',
  aliases: [],
  information: {
    examples: ['s.rr'],
    description: 'Русская рулетка',
    category: 'fan'
  }
}