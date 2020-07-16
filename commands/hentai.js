module.exports = async (bot, message, args) => {
const Discord = require('discord.js'), string = '';
  require('node-fetch')(`https://nekos.life/api/v2/img/Random_hentai_gif`).then(res => res.json()).then(res => {
      if(!message.channel.nsfw) return message.channel.send("<a:XmarkNo:683228924758851611>┊Вы не в nsfw канале")
let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Hentai gif")
      .setImage(res.url)
      message.channel.send(embed)
    message.delete()
  })
 }
  
module.exports.config = {
  name: 'hentai',
  aliases: [],
  information: {
    examples: ['s.hentai'],
    description: 'Рандом гиф хентая',
    category: 'img'
  }
}