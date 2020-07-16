module.exports = async (bot, message, args) => {
const Discord = require('discord.js');   
function randomIntInc(low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }
    if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не упомянули пользователя!")
    let embed = new Discord.MessageEmbed();
    let kus = message.mentions.members.first();
    let gifs = randomIntInc(1, 8);

    if (kus) {
      embed.setColor("#04F7FB");
      embed.setDescription(`${message.author} обнял(а) ${kus}`);
    }

    if (gifs === 1) {
      embed.setImage("https://acegif.com/wp-content/uploads/anime-hug.gif");
    }
    if (gifs === 2) {
      embed.setImage("https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif");
    }
    if (gifs === 3) {
      embed.setImage("https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif");
    }
    if (gifs === 4) {
      embed.setImage("https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif");
    }
      if (gifs === 5) {
      embed.setImage("https://i.imgur.com/r9aU2xv.gif");
    }
      if (gifs === 6) {
      embed.setImage("https://media1.giphy.com/media/VHwgHhJLuWt0gjjUzf/source.gif");
    }
      if (gifs === 7) {
      embed.setImage("https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif");
    }
        if (gifs === 8) {
      embed.setImage("https://thumbs.gfycat.com/BountifulElderlyCusimanse-size_restricted.gif");
    }
 
  
    message.channel.send(embed);
    message.delete();
	}


module.exports.config = {
  name: 'hug',
  aliases: [],
  information: {
    examples: ['s.hug <@user>'],
    description: 'Обнять кого-то',
    category: 'fan'
  }
}