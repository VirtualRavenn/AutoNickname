const discord = require("discord.js");
const client = new discord.Client();

client.on("guildMemberAdd", member => {
  member.setNickname("Noobie");
});

client.login(process.env.BOT_TOKEN);
