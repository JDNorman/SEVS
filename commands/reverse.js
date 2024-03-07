const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  
  data: reverseSLASH = new SlashCommandBuilder()
    .setName('reverse')
    .setDescription('Reverse some stuff')
    .addStringOption(option =>
      option.setName('message')
      .setDescription('The message to reverse')
      .setRequired(true)),

  async execute(int) {
    console.log(`Someone used a reverse command!`)
    const message = int.options.getString('message').split('').reverse().join('');
    await int.reply(`You said: ${message}`);
    
  },
};