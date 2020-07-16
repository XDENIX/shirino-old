module.exports = async (bot, message, args) => {
const Discord = require('discord.js');
  
    var ban = args.slice(0).join(" ");
if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "444509762676326411") return message.channel.send("<a:XmarkNo:668496202421239839>┊Это команда для администрации сервера!");
    let reason = args.slice(1).join(" ");

        if(!reason) {
            reason = "Причина не указана";
        } else {
            reason = reason
        }
   message.channel.startTyping(1)
   message.channel.stopTyping(15);

if (!ban) return message.reply("<a:XmarkNo:683228924758851611>┊Ошибка")
let member = message.mentions.members.first() || message.guild.member(args[0]);
if(!member) return message.channel.send("Упомяните участника или id user которого вы хотите забанить")
if(!member.bannable) return message.channel.send("<a:XmarkNo:683228924758851611>┊Я не могу забанить этого пользователя!")
if(member.user.id === "444509762676326411") return message.channel.send("<a:XmarkNo:683228924758851611>┊Я не могу забанить создателя бота!")
if(member.id === message.author.id) return message.channel.send("<a:XmarkNo:683228924758851611>┊Я не могу забанить этого пользователя!")
  !member.ban(reason).then(()=>{
  let embed2 = new Discord.MessageEmbed()
  .setTitle("Вы забанены")
.addField("Информация", "**Сервер: **" + `"${message.guild.name}"` + "\n**Администратор: **" + `${message.author.tag}` + "\n**Причина: **" + `${reason}`)
  member.send(embed2)
  
let embed = new Discord.MessageEmbed()
.setTitle(`Бан | ${member.user.tag}`)
.addField("<:Moderation:651075781673353237>┊Администратором",message.author)
.addField("<a:KotyaBOMBING:683260831940608065>┊Забаннен",member.user.tag)
.addField("<a:2184_wumpus_color_gif:683260831777030184>┊Причина:",reason)

message.channel.send(embed);
}) 
  }
  
module.exports.config = {
  name: 'ban',
  aliases: [],
  information: {
    examples: ['s.ban <user>/<user id> <причина>'],
    description: 'Бан пользователя на сервере',
    category: 'admin'
  }
}