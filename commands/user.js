module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
const moment = require("moment");
      moment.locale('ru');
      const status = {
        online: "<:Online:651075782352830465> Онлайн",
        idle: "<:Idle:651075781715558400> Не активен",
        dnd: "<:Dnd:651075751566770215> Не беспокоить",
        offline: "<:Offline:651075783640612874> Не всети/Невидимый"
        
      };
  
    let target = message.mentions.members.first() || message.guild.member(args[0]) || message.member;
    const joinDiscord = moment(target.guild ? target.user.createdAt : target.createdAt).format('LLLL');
    const joinServer = target.guild ? moment(target.joinedAt).format('LLLL') : "ЛС"
      let embed = new Discord.MessageEmbed()
        .setThumbnail(target.user ? target.user.avatarURL({dynamic: true, png: true }) : target.avatarURL())
        .setColor("#36393f")
        .setAuthor(`Информация о пользователе ${target.guild ? target.user.tag : target.tag}`)
        .addField("Основная информация", `\n**Имя пользователя:** ${target.guild ? target.user.tag : target.tag} \n**Статус: ** ${status[target.presence.status]}   \n**Устройство**: ${target.presence.clientStatus.desktop ? "ПК" : (target.presence.clientStatus.mobile ? "Телефон" : "Веб/Неизвестно")}${target.guild ? `\n**Присоединился: **${joinServer}` : ""}\n**Дата регистрации: **${joinDiscord}`)
        .setFooter("ID: " + target.id)
    message.channel.send(embed)
message.delete();
	}


module.exports.config = {
  name: 'user',
  aliases: [],
  information: {
    examples: ['s.user <user>/<user id>'],
    description: 'Информация о юзере',
    category: 'info'
  }
}