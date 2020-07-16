const { MessageEmbed } = require('discord.js');
module.exports = async (bot, message, args) => {
  if(!args[0]) return;
  try{
  let out = require('child_process').execSync(args.join(' ')).toString('utf8')
  message.channel.send(out ? out : 'no out.', { split: "\n", code: 'bash' })
  }catch (err){
    message.channel.send(err, { split: "\n", code: 'bash' })
  }
 }
module.exports.config = {
  name: 'bash',
  aliases: [],
  information: {
    examples: ['s.bash <code>'],
    description: 'Выполнение команды в терминале',
    category: 'owners'
  }
}