const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function (message) {
    if (message.content === 'alors') {
      message.reply('bien')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Mdr') {
      message.reply('c est marrant')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Hey') {
      message.reply('bonjour')
    }
})
bot.on('message', function (message) {
    if (message.content === 'J ai besoin d aide') {
      message.reply('En quoi puis je vous aider')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Hentai') {
      message.reply('espèce de pervert')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Je veux connaître les horaires de kirito') {
      message.reply('il commence à 8 h30 et il finit a 18 h le lundi')
    }
})
bot.on('message', function (message) {
    if (message.content === 'Epouse moi') {
      message.reply('Mais non')
    }
  })

bot.login('process.env.TOKEN');
