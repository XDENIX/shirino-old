module.exports = async (bot, message, args) => {
  let { MessageEmbed } = require('discord.js'), string = '';
  require('node-fetch')(`https://randomfox.ca/floof/`).then(res => res.json()).then(res => {
    message.channel.send(
    new MessageEmbed()
    .setColor("RANDOM")
      .setTitle("Картинка лисы")
      .setImage(res.image)
    )
  })
 }
  
module.exports.config = {
  name: 'fox',
  aliases: [],
  information: {
    examples: ['s.fox'],
    description: 'Рандом картинка лисы',
    category: 'img'
  }
}