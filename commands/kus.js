module.exports = async (bot, message, args) => {
const Discord = require('discord.js');   
function randomIntInc(low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }
     let kus = message.mentions.members.first();
  if (!args.join()) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не упомянули пользователя !")
  if(kus.id === message.author.id) return message.reply("<a:XmarkNo:668496202421239839>┊Вы не можете себя упомянуть")
    let embed = new Discord.MessageEmbed();
    let gifs = randomIntInc(1, 8);

    if (kus) {
      embed.setColor("#04F7FB");
      embed.setDescription(`${message.author} укусил(а) ${kus}`);
    }

    if (gifs === 1) {
      embed.setImage("https://anime-chan.me/uploads/posts/2013-04/1366009488_kus.gif");
    }
    if (gifs === 2) {
      embed.setImage("https://cs9.pikabu.ru/images/big_size_comm_an/2017-08_4/1503208842145528189.gif");
    }
    if (gifs === 3) {
      embed.setImage("https://cs9.pikabu.ru/images/big_size_comm_an/2017-10_5/150871230421035288.gif");
    }
    if (gifs === 4) {
      embed.setImage("https://cs11.pikabu.ru/images/big_size_comm_an/2018-08_6/1535387130140435757.gif");
    }
      if (gifs === 5) {
      embed.setImage("https://cs8.pikabu.ru/images/big_size_comm_an/2017-09_3/1505480110157855233.gif");
    }
      if (gifs === 6) {
      embed.setImage("https://pa1.narvii.com/6555/13517921e47e7b3762ddc84eed3bb455d1daffdb_hq.gif");
    }
      if (gifs === 7) {
      embed.setImage("https://media1.tenor.com/images/7be6a738a527a8a0b0ccddb752f42f1b/tenor.gif?itemid=4939158");
    }
        if (gifs === 8) {
      embed.setImage("https://thumbs.gfycat.com/MisguidedBiodegradableAlpinegoat-small.gif");
    }
 
  
    message.channel.send(embed);
    message.delete();
	}


module.exports.config = {
  name: 'kus',
  aliases: [],
  information: {
    examples: ['s.kus <@user>'],
    description: 'Покусать кого-то',
    category: 'fan'
  }
}