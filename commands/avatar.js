module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
    let avatar = message.mentions.users.first() || bot.users.cache.get(args[0] ? args[0] : null) || message.author;
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
      .setImage(avatar.avatarURL({dynamic: true, size: 4096}))
      .setTitle("Avatar")
      .setFooter("Искал " + message.author.username)
      .setDescription("[Avatar URL link](" + avatar.displayAvatarURL({dynamic: true}) + ")");

    message.channel.send(embed);

    message.delete();
	}


module.exports.config = {
  name: 'avatar',
  aliases: [],
  information: {
    examples: ['s.avatar'],
    description: 'Аватарка юзера',
    category: 'info'
  }
}