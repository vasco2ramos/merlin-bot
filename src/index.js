'use strict'

const botkit = require('botkit')
const config = require('./config')
var os = require('os');

const commands = require('./commands')
const seneca = require('seneca')

var controller = botkit.slackbot({
    debug: false,
});

var bot = controller.spawn({
  token: config('SLACK_TOKEN')
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

controller.hears(['hello'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, 'Hello.');
});

controller.hears(['help', 'halp'], 'direct_message,direct_mention,mention', function(bot, message) {
    var reply = {
        'attachments': commands.help()
    }
    bot.reply(message, reply);
});

controller.hears(['opportunities'], 'direct_message,direct_mention,mention', function(bot, message) {
    opportunities(message.text)
});




function printResponse(response, status, message){
    bot.reply(message, response)
}
