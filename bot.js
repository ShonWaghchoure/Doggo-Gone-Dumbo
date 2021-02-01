console.log("asdasdasd");

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODA1MzgyNTYyODgwNjg0MDQy.YBaE9g.-98efmhEiDbh9hyaYgbIyFt25cY');

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('beep');
}

client.on('message', gotMessage);

function gotMessage(msg){
    console.log(msg.content);
    
    if (msg.channel.id == '805392668921167892'&&msg.content === '/hi'){
        msg.reply('Heyya!');
    }

    if (msg.channel.id == '805392668921167892'&&msg.content === '/who are u?'){
        msg.channel.send('I am a bot, lmfao u know that ig...');
    }

    if (msg.channel.id == '805392668921167892'&&msg.content === '/what can u do?'){
        msg.channel.send('I cannot do anything for now but my developer is working on me...');
    }

    if (msg.channel.id == '805392668921167892'&&msg.content === '/ping someone'){
        msg.channel.send('here we go...<@!722481645009240135>');
    }

    if (msg.channel.id == '805392668921167892'&&msg.content === '/who made u?'){
        msg.channel.send('I am made by <@!755059472824795137>');
    }

    if (msg.channel.id == '805392668921167892'&&msg.content === '/help'){
        msg.channel.send('```try saying /hi, /who are u?, /what can u do?, /ping someone, /who made u?```');
    }

}
