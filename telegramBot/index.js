var TelegramBot = require('node-telegram-bot-api');
var token = '7636245414:AAGIumJO4jhlVAg7KcfaCEwAT3f9lpp5xxo';
var bot = new TelegramBot(token,{polling:true});

bot.on('message', (msg) => {

    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    }
    
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }
    
    });


        bot.on('message', (msg) => {
            var location = "location";
            if (msg.text.indexOf(location) === 0) {
                bot.sendLocation(msg.chat.id,44.97108, -104.27719);
                bot.sendMessage(msg.chat.id, "Here is the point");
        
            }
        });
        