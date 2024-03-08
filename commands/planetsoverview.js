// imports
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require('axios');
const path = require('path');
const { error } = require("console");
const configPath = path.resolve(__dirname, '..', 'config.json');
const { color } = require(configPath);
const decimalColor = parseInt(color, 16);

module.exports = {
    //Command Builder
    data: (planetsOverviewSLASH = new SlashCommandBuilder()
    .setDMPermission(true)
    .setName('galaxy')
    .setDescription('Sends total overview of galaxy health and major orders.')),

    async execute(int) {
        console.log(`Someone used a galaxy overview command!`);

        int.deferReply({ ephemeral: true });

        const channel = int.channel;

        const hdapi = "https://api.live.prod.thehelldiversgame.com/api/WarSeason/801/status";
        let hddata = await axios.get(hdapi)
        .catch(error => {
            console.error(error);
            int.editReply('An error occured while fetching data from the api!');
        });

        // console.log(hddata.data.globalEvents);
        // console.log(hddata.data.planetStatus); //will be cut off

        const hdplanets = "https://helldivers-2.fly.dev/api/801/planets";
        let planetdata = await axios.get(hdplanets)
        .catch(error => {
            console.error(error);
            int.editReply('An error occured while fetching data from the api!');
        });

        console.log(planetdata.data)
        int.editReply('Planet data sent to console!');






    },
};