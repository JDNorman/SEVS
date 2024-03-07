//imports
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    //Command Builder
    data: (avatarSLASH = new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Shows member avatar')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('User')
            .setRequired(true)
            )),
    
    async execute(int) {
        console.log(`Someone used an avatar command!`)
        const user = int.options.getUser('user') 
        
        await int.reply(user.displayAvatarURL({ dynamic: true}));
    },
};