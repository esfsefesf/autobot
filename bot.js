const djs = require('discord.js');
const client = new djs.Client();

client.on('guildMemberAdd', member => {
	const mem = member.guild.members.find('id', member.user.id);
	mem.addRole('589823111893876756');
})

client.login(process.env.BOT_TOKEN);
