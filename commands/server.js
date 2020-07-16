module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
  const moment = require("moment");
    let userm = message.author;
    const verlvl = {
      'NONE': "Отсутствует",
      'LOW': "Низкая",
      'MEDIUM': "Высокая",
      'HIGH': "(╯°□°）╯︵ ┻━┻",
      'VERY_HIGH': "(ノಠ益ಠ)ノ彡┻━┻"
    };
    
    const regions = {
    "russia": ":flag_ru: Россия",
    "brazil": ":flag_br: Бразилия",
    "europe": ":flag_eu: Европа",
    "hongkong": ":flag_hk: Гонконг",
    "india": ":flag_in: Индия",
    "japan": ":flag_jp: Япония",
    "singapore": ":flag_sg: Сингапур",
    "southafrica": ":flag_za: Южно-Африканская Республика",
    "sydney": ":flag_au: Сидней",
    "us-central": ":flag_us: Центр США",
    "us-east": ":flag_us: Восток США",
    "us-south": ":flag_us: Юг США",
    "us-west": ":flag_us: Запад США",
    "london": "Лондон",
    "eu-central": ":flag_eu: Ценатральная Европа",
    "london": ":flag_gb: Лондон",
    "amsterdam": ":flag_nl: Амстердам",
    "vip-us-east": ":flag_us: ВИП-восток США",
    };
    
    let inline = true;
    let sicon = message.guild.iconURL({ dynamic: true, png: true });
    moment.locale('ru');
    let embed = new Discord.MessageEmbed()
      .setColor("#333399")
      .setThumbnail(sicon)
      .setAuthor("Информация о сервере " + message.guild.name)
      .addField("Участники " + `[${message.guild.memberCount}]`,"<:member:711554693788074014>┊Пользователей: " + `**${message.guild.members.cache.filter(m => m.user.bot === false).size}**` + '\n<:bot:711552258202009620>┊Количество ботов: ' + `**${message.guild.members.cache.filter(m => m.user.bot === true).size}**` + "\n<:online:711547425176682527>┊Онлайн: " + `**${message.guild.members.cache.filter(x=>x.user.presence.status === 'online').size}**`+ "\n<:idle:711547483058077726>┊Не активен: " + `**${message.guild.members.cache.filter(x=>x.user.presence.status === 'idle').size}**` + `\n<:dnd:711547415211278348>┊Не беспокоить: `+ `**${message.guild.members.cache.filter(x=>x.user.presence.status === 'dnd').size}**` + `\n<:offline:711547437222985729>┊Не в сети: ` + `**${message.guild.members.cache.filter(x=>x.user.presence.status === 'offline').size}**`, true)
      .addField("Регион", regions[message.guild.region], true)      
      .addField("Владелец: ", message.guild.owner , true)
      .addField("Уровень модерации", verlvl[message.guild.verificationLevel], true)
      .addField("Другая информация", "Вы присоединились: " + `**${moment(message.member.joinedAt).format('LLLL')}**` + "\nДата создания: " +  `**${moment(message.guild.createdAt).format('LLLL')}**`)
      .setFooter("ID: " + message.guild.id);
    message.channel.send(embed)
    message.delete();
	}


module.exports.config = {
  name: 'server',
  aliases: [],
  information: {
    examples: ['s.server'],
    description: 'Информация о сервере',
    category: 'info'
  }
}