module.exports = async (bot, message, args) => {
  message.channel.send('Pong! ``' + bot.ws.ping + '``ms')
  message.delete()
}

module.exports.config = {
  name: 'ping',
  aliases: [],
  information: {
    examples: ['s.ping'],
    description: 'Пинг бота',
    category: 'general'
  }
}