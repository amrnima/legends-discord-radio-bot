module.exports = {
    name: 'run',
    description: 'we can run radio and disconnect the radio bot from this module',
    execute: async (message, args, client, cmd) => {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('WARNING : YOU HAVE TO FIRST JOIN A CHANNEL TO EXECUTE THIS COMMEND')
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('WARNING : YOU DONT HAVE THE CORRECT PERMISSION');
        if (!permissions.has('SPEAK')) return message.channel.send('WARNING : YOU DONT HAVE THE CORRECT PERMISSION');
        if (args.length === 0)
            return message.reply("YOU DONT INSERT ENY URL STREAMING");
        console.log('cmd :', args[0]);
        if (cmd === 'run') {
            startStream(voice_channel, message, args[0])
        }

    }
}
function startStream(voice, message, arg) {
    console.log('arg :', arg);
    voice.join().then(connection => {
        message.reply('GOOD IT IS CONNECTING');
        connection.play(arg, {seek: 0, volume: 100});
    }).catch(onerror => {
        console.log('onerror : ', onerror);
    });
}
