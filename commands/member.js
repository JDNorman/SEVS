// imports
const { SlashCommandBuilder } = require("discord.js");
const { DateTime } = require('luxon');
const path = require('path');
const configPath = path.resolve(__dirname, '..', 'config.json');
const { color } = require(configPath);
const hexColor = parseInt(color, 16);

module.exports = {
    //Command Builder
    data: (memberSLASH = new SlashCommandBuilder()
        .setName('member')
        .setDescription('Shows member data')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('User')
            .setRequired(true)
            )),

    async execute(int) {
        console.log(`Someone used a member command!`);
        
        const Now = DateTime.local().setZone('Pacific/Auckland');
        const dateString = Now.toFormat('yyyy-MM-dd');
        const Target = int.options.getUser('user') || int.author;
        const member = await int.client.users.fetch(Target?.id);
        
        const Embed = {
          color: hexColor,
          thumbnail: 
          {
                url: Target.displayAvatarURL(),
            },
          title: Target.username,
          description: Target.tag,
          fields: [
            {
              name: 'Joined server:', 
              value: dateString
            },
          ],
          timestamp: int.createdAt
        }
        await int.reply({ embeds: [Embed] });  
    },
};