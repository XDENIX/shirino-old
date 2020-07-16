module.exports = async (bot, message, args) => {
const Discord = require('discord.js');    
function randomIntInc(low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }
    let kill = message.mentions.members.first();
  if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не упомянули пользователя !")
  if(kill.id === message.author.id) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не можете себя упомянуть")
    let embed = new Discord.MessageEmbed();
    let gifs = randomIntInc(1, 10);

    if (kill) {
      embed.setColor("#04F7FB");
    embed.setDescription(`${message.author} поцеловал(а) ${kill} ♥️`);
    }

       if (gifs === 1) {
      embed.setImage("https://media1.tenor.com/images/15a1e1e786290c4e9bd2a98f3928c9a2/tenor.gif?itemid=9386615");
    }
    if (gifs === 2) {
      embed.setImage("https://thumbs.gfycat.com/InconsequentialMeaslyFly-size_restricted.gif");
    }
    if (gifs === 3) {
      embed.setImage("https://lifeo.ru/wp-content/uploads/gif-anime-kisses-26.gif");
    }
    if (gifs === 4) {
      embed.setImage("https://i.gifer.com/2uEt.gif");
    }
      if (gifs === 5) {
      embed.setImage("https://i.imgur.com/OE7lSSY.gif");
    }
          if (gifs === 6) {
      embed.setImage("https://i.gifer.com/C3GK.gif");
    }
              if (gifs === 7) {
      embed.setImage("https://data.whicdn.com/images/226236579/original.gif");
    }
              if (gifs === 8) {
      embed.setImage("https://media.giphy.com/media/Gj8bn4pgTocog/giphy.gif");
    }
                  if (gifs === 9) {
      embed.setImage("https://cdn.lowgif.com/full/6fbc7a8cac4f5e6d-anime-boy-couple-gif-on-gifer-by-sharpdragon.gif");
    }
                      if (gifs === 10) {
      embed.setImage("https://i.pinimg.com/originals/9a/a8/7e/9aa87eb823b8c571fa14c75fc2576241.gif");
    }
    
    message.channel.send(embed);
    message.delete();
	}


module.exports.config = {
  name: 'kiss',
  aliases: [],
  information: {
    examples: ['s.kiss <@user>'],
    description: 'Поцеловать кого-то',
    category: 'fan'
  }
}