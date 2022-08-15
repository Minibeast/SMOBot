const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('Get one of the possible roles.')
        .addStringOption(option =>
            option.setName('role')
                .setDescription('The role you would like.')
                .setRequired(true)
                .addChoice('Racer', 'racer_role')
                .addChoice('Bingo', 'bingo_role')
                .addChoice('Darker Side Racer', 'darker_role')
                .addChoice('On-Pace', 'on_pace_role')
                .addChoice('On-Pace-Odyssey', 'on_pace_odyssey_role'))
}