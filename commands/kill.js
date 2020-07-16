module.exports = async (bot, message, args) => {
const Discord = require('discord.js');    
function randomIntInc(low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }
  let kill = message.mentions.members.first();
  if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не упомянули пользователя !")
  if(kill.id === message.author.id) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не можете себя упомянуть")
    let embed = new Discord.MessageEmbed()
    .setColor("#46C23A")
    let gifs = randomIntInc(1, 8);

    if (kill) {
      embed.setColor("#04F7FB");
    embed.setDescription(`${message.author} убил(а) ${kill} 💔 ПОКОЙСЯ С МИРОМ`);
    }

    if (gifs === 1) {
      embed.setImage("https://cs.pikabu.ru/images/big_size_comm/2013-08_2/13757906458888.gif");
    }
    if (gifs === 2) {
      embed.setImage("https://i2.wp.com/s-media-cache-ak0.pinimg.com/originals/e7/8b/4e/e78b4eb8b7917ac23a8cf916ff589269.gif?resize=500%2C281&ssl=1");
    }
    if (gifs === 3) {
      embed.setImage("https://i.gifer.com/7ODW.gif");
    }
    if (gifs === 4) {
      embed.setImage("https://i.pinimg.com/originals/4d/cb/1d/4dcb1d0420862798cce307d9ad070455.gif");
    }
      if (gifs === 5) {
      embed.setImage("https://giffiles.alphacoders.com/148/148609.gif");
    }
      if (gifs === 6) {
      embed.setImage("https://i.gifer.com/A1SC.gif");
    }
      if (gifs === 7) {
      embed.setImage("https://media0.giphy.com/media/T6n0PUdR3Pp5K/source.gif");
    }
      if (gifs === 8) {
      embed.setImage("https://i.gifer.com/Jx7v.gif");
    }
  
    
    message.channel.send(embed);
    message.delete();
	}


module.exports.config = {
  name: 'kill',
  aliases: [],
  information: {
    examples: ['s.kill <@user>'],
    description: 'Убить кого-то',
    category: 'fan'
  }
}