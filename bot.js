const Discord = require('discord.js'),
moment = require("moment"),
      bot = new Discord.Client(),
      
      { prefix, token } = require('./config');
bot.commands = new Discord.Collection()
require('fs').readdirSync('./commands/').filter(file => file.endsWith('.js')).forEach(file => {
    bot.commands.set(require(`./commands/${file}`).config.name, require(`./commands/${file}`));
})

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

  bot.on("guildCreate", guild => {
  let sicon = guild.iconURL({ dynamic: true, png: true });
  moment.locale('ru');
    let web = new Discord.WebhookClient('705851300796956752','8GUe3cOjxZxkHvn3NgT4rXRjeeHCynsnz8jO1IjCPuWR6bNXx1wcnrnaTJ6pD3HEll9y')
    let nserv = new Discord.MessageEmbed()
    .setTitle("⚙️┊Я зашел на сервера")
    .setColor('00FF2E')
    .setThumbnail(sicon)
    .addField("<:ServerModule:705863798682157126>┊Название сервера: ", guild.name)
    .addField("<:guild:705867072755859458>┊ID сервера: ", guild.id)
    .addField("<:coder:705866387809370174>┊Владелец: ",  `${guild.owner.user.tag}`)
    .addField("<:mobile:705866448760733948>┊ID владельца: ", guild.ownerID)
    .addField("<:stats:705868676225826856>┊Количество серверов: ", bot.guilds.cache.size)
    .addField("<:server:705866513021665320>┊Сервер создан ", `${moment(guild.createdAt).format('LLLL')}`)
    .setTimestamp();
    web.send(nserv)
  });
   bot.on("guildDelete", guild => {
    let sicon = guild.iconURL({ dynamic: true, png: true });
     moment.locale('ru');
      let web = new Discord.WebhookClient('705851300796956752','8GUe3cOjxZxkHvn3NgT4rXRjeeHCynsnz8jO1IjCPuWR6bNXx1wcnrnaTJ6pD3HEll9y')
      let nserv = new Discord.MessageEmbed()
     .setColor('FF0000')
    .setThumbnail(sicon)
    .setTitle("⚙️┊Я вышел с сервера")
    .addField("<:ServerModule:705863798682157126>┊Название сервера: ", guild.name)
    .addField("<:guild:705867072755859458>┊ID сервера: ", guild.id )
    .addField("<:coder:705866387809370174>┊Владелец: ", `${guild.owner.user.tag}`)
    .addField("<:mobile:705866448760733948>┊ID владельца: ", guild.ownerID)
    .addField("<:stats:705868676225826856>┊Количество серверов:", bot.guilds.cache.size)
    .addField("<:server:705866513021665320>┊Сервер создан ", `${moment(guild.createdAt).format('LLLL')}`)
    .setTimestamp();
     web.send(nserv)
    });

  bot.user.setActivity('s.help',{ url : "https://www.twitch.tv/koteich_dev%", type: 'STREAMING'});
});

bot.on('message', async (message) => {
  if (message.author.bot) return;
  if(!message.guild) return message.channel.send('Сэр, простите но я работаю только на серверах!');
  if(message.content.startsWith(prefix)){
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;
    if (bot.commands.has(cmd)) command = bot.commands.get(cmd);
    if (!command || message.content === prefix || !message.guild.me.hasPermission('SEND_MESSAGES')) return;
    if (command.config.information.category && command.config.information.category.toLowerCase() === 'owners' && !require('./config').owners.includes(message.author.id)) return;
    try {
      command(bot, message, args);
    } catch (e) {
    }
  }
});

bot.login("NjcyMDc2NDg4OTU4NTQxODM1.XtNYnA.lqIdbnjB36KRJXOtFhVFtL_fDBU");
