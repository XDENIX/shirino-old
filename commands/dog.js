module.exports = async (bot, message, args) => {
  let { MessageEmbed } = require('discord.js'), string = '';
  require('node-fetch')(`https://dog.ceo/api/breeds/image/random`).then(res => res.json()).then(res => {
    message.channel.send(
    new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Картинка собаки")
      .setImage(res.message)
    )
  })
 }
  
module.exports.config = {
  name: 'dog',
  aliases: [],
  information: {
    examples: ['s.dog'],
    description: 'Рандом картинка собаки',
    category: 'img'
  }
}