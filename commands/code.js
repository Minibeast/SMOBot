const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('code')
		.setDescription('Obtain a one time code for runner voting.')
}
