const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.setNickname("Noobie");
});

client.login(process.env.BOT_TOKEN);
