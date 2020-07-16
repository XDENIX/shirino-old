module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
  let replies = [
        "Да 👍",
        "Нет 👎 ",
        "Я не знаю",
        "Спроси позже",
        "Я не уверен!",
        "А ты совневался?",
        "Конечно",
        "Я даже не знаю",
        "Можешь быть уверен в этом",
        "Мне кажется — да 👌",
        "Спроси еще разок",
        "Сконцентрируйся и спроси еще разок 👀",
        "Мои друзья сказали да!",
        "Мои друзья сказали нет!",
        "Разве?",
        "Не думаю что это так",
      ];

      let result = Math.floor(Math.random() * replies.length);
      let question = args.join(" ");
      if(!question || !question.endsWith('?')) return message.channel.send('Какой вопрос вы хотите задать? Укажите в вопросе "?" ');
      message.channel.send( 
      new Discord.MessageEmbed()
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
      .setColor("#ffff00")
      .addField("Вопрос", question)
      .addField("Ответ", replies[result])
      ).then(() => message.delete().catch(err => {}))
	}


module.exports.config = {
  name: '8ball',
  aliases: [],
  information: {
    examples: ['s.8ball'],
    description: 'Шар',
    category: 'fan'
  }
}