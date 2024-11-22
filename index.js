// index.js

require('dotenv').config(); // Charger les variables d'environnement
const { Client, GatewayIntentBits } = require('discord.js');
const commandHandler = require('./commandHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // Assurez-vous que cet intent est activé dans le portail
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', commandHandler);

client.login(process.env.TOKEN); // Utiliser le token de l'environnement