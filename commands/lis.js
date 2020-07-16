module.exports = async (bot, message, args) => {
const Discord = require('discord.js');   
function randomIntInc(low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }
      let kus = message.mentions.members.first();
  if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не упомянули пользователя !")
  if(kus.id === message.author.id) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не можете себя упомянуть")
    let embed = new Discord.MessageEmbed()
    .setColor("#3AC2B3")
    let gifs = randomIntInc(1, 8);

    if (kus) {
      embed.setColor("#04F7FB");
      embed.setDescription(`${message.author} лизнул(а) ${kus}`);
    }

    if (gifs === 1) {
      embed.setImage("https://thumbs.gfycat.com/BestBlueGalapagosalbatross-size_restricted.gif");
    }
    if (gifs === 2) {
      embed.setImage("https://media1.tenor.com/images/efd46743771a78e493e66b5d26cd2af1/tenor.gif?itemid=14002773");
    }
    if (gifs === 3) {
      embed.setImage("https://media1.tenor.com/images/d6ea53ab2cb1f046a5af98962ee8ed2b/tenor.gif?itemid=11225761");
    }
    if (gifs === 4) {
      embed.setImage("https://media1.tenor.com/images/4626d4bbe60ef15212e3181f11d6704a/tenor.gif?itemid=13451633");
    }
      if (gifs === 5) {
      embed.setImage("https://i.imgur.com/r9aU2xv.gif");
    }
      if (gifs === 6) {
      embed.setImage("https://thumbs.gfycat.com/UnitedCourteousKudu-max-1mb.gif");
    }
      if (gifs === 7) {
      embed.setImage("https://i.imgur.com/DrNAjWk.gif");
    }
        if (gifs === 8) {
      embed.setImage("https://i.gifer.com/1AEN.gif");
    }
 
  
    message.channel.send(embed);
    message.delete();
	}


module.exports.config = {
  name: 'lis',
  aliases: [],
  information: {
    examples: ['s.lis <@user>'],
    description: 'Лизнуть кого-то',
    category: 'fan'
  }
}