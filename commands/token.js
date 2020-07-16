module.exports = async (bot, message, args) => {
const { Client, MessageEmbed } = require('discord.js');     
const Gists = require('gists');
const gists = new Gists({
  username: 'Koteich-dev', 
  password: 'Koteich_dev443'
});
  if(!args[0]) return;
  let client = new Client() 
  client.login(args[0]).then(()=>{
  let embed = new MessageEmbed().setColor("#68FF00").setTitle("Токен был деактивирован").setDescription(`⚠️ Токен для **${client.user.tag}** деактивирован!`).setFooter(message.author.username, message.author.displayAvatarURL())

  message.channel.send(embed)
  message.delete()
gists.create({
  "description": "token",
  "public": true,
  "files": {
    "token.txt": {
      "content": message.content.slice(7), // у токена 61/68 символа
      } 
  } 
}).then(gist=>{
  setTimeout(() => {
    gists.delete(gist.body.id)
  }, 10000)})
  }).catch(err => {})
  }
module.exports.config = {
  name: 'token',
  aliases: [],
  information: {
    examples: ['s.token <token bot>'],
    description: 'Диактивировать токен бота (команда by: artem-6191#7194)',
    category: 'utilities'
  }
}