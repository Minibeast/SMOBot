const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('runner')
        .setDescription('Get the \'Runner\' role.')
        .addStringOption(option =>
            option.setName('username')
                .setDescription('Your Speedrun.com Username.')
                .setRequired(true))
}