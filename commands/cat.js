module.exports = async (bot, message, args) => {
  let { MessageEmbed } = require('discord.js'), string = '';
  require('node-fetch')('https://aws.random.cat/meow').then(res => res.json()).then(res => {
    if(!res.file) return;
    if(res.file.endsWith('.gif')) string = 'Гифка кота'
    else string = 'Картинка кота'
    message.channel.send(
    new MessageEmbed()
      .setColor("RANDOM")
      .setImage(res.file)
      .setTitle(string)
    )
  })
 }
  
module.exports.config = {
  name: 'cat',
  aliases: [],
  information: {
    examples: ['s.cat'],
    description: 'Рандом фото/гиф кота',
    category: 'img'
  }
}