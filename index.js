const { Client, GatewayIntentBits, Options } = require('discord.js')
require("dotenv").config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ],

    makeCache: Options.cacheWithLimits({
        MessageManager: 0,
        ThreadManager: 0,
        GuildEmojiManager: 0,
        ReactionManager: 0,
        PresenceManager: 0,
        GuildBanManager: 0,
        VoiceStateManager: 0,
        StageInstanceManager: 0,
        GuildInviteManager: 0,
        ApplicationCommandManager: 0,
        BaseGuildEmojiManager: 0,
        GuildMemberManager: 10
    })

})

client.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.get("1348770833388015629")
    const roleId = "1361849497889669220"
    
    await member.roles.add(roleId)

    if (channel && channel.permissionsFor(member.guild.members.me).has("SendMessages")) {
        channel.send(`Bem vindo ao server, ${member.user}! \n ${member.user} agora é um dos nossos colaboradores!`)
    }
})

client.login(process.env.TOKEN)