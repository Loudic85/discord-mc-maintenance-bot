// commandHandler.js

module.exports = (message) => {
    if (message.author.bot) return; // Ignore les messages des bots

    const args = message.content.split(' ');

    if (args[0] === '!ping') {
        const latency = Date.now() - message.createdTimestamp;
        message.channel.send(`Latence : ${latency}ms`);
    }
};