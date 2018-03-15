const discord = require("discord.js");
const client = new discord.Client();

client.on("guildMemberAdd", member => {
  member.setNickname("skedaddle skidoodle");
});

client.login(process.env.TOKEN)
