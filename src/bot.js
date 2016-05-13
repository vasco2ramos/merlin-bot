'use strict'

const slack = require('slack')
const _ = require('lodash')
const botkit = require('botkit')
const config = require('./config')

const commands = require('./commands')
const helpCommand = require('./commands/help')

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

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Hello ' + user.name + '!!');
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});



/*
  let cmd = _.reduce(commands, (a, cmd) => {
    return payload.text.match(cmd.pattern) ? cmd : a
  }, helpCommand)
*/
