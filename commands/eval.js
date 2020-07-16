const Discord = require('discord.js'),
       { inspect } = require("util"),
       vm = require("vm"),
       codeContext =  {};
vm.createContext(codeContext);
function clean(text)  {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
}
module.exports = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed().setColor("#36393f"), code = args.join(' '), out, { author, member, guild, channel } = message, token = bot.token.split("").join("[^]{0,2}"), rev = bot.token.split("").reverse().join("[^]{0,2}"), filter = new RegExp(`${token}|${rev}`, "g");
  try {
    out = eval(code);
    if (out instanceof Promise || (Boolean(out) && typeof out.then === "function" && typeof out.catch === "function")) out = await out;
    out = inspect(out, { depth: 0, maxArrayLength: null });
    out = out.replace(filter, "[TOKEN]");
    out = clean(out);
  embed.setDescription("Ответ" +`\`\`\`js\n${out}\n\`\`\``).addField('Код', `\`\`\`js\n${code}\n\`\`\``).setTitle('Выполнено')
} catch(e) {embed.setDescription(`${e.name}: ${e.message}`).setTitle('Возникла ошибка')}
message.channel.send(embed)
}
module.exports.config = {
  name: 'e',
  aliases: [],
  information: {
    examples: ['s.eval'],
    description: 'eval',
    category: 'owners'
  }
}