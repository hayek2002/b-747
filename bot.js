const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

if(message.content == 'cleared for takeoff') {
message.reply('**Copy that, v1 rotate.**')
}

});

bot.on('message', (message) => {

    if(message.content == 'cleared for landing') {
    message.reply('**Copy that, landing at C-YYZ on runway 22 left.**')
    }
    
    });
    
bot.login(process.env.BOT_TOKEN);
