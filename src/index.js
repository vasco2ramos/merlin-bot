'use strict'

const slack = require('slack')
const _ = require('lodash')
const botkit = require('botkit')
const config = require('./config')
var os = require('os');

const commands = require('./commands')

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
    bot.reply(message, 'Hello.');
});

controller.hears(['release the hounds'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, 'Excelent!');
});

controller.hears(['help', 'halp'], 'direct_message,direct_mention,mention', function(bot, message) {
    var reply = {
        'attachments': commands.help()
    }
    bot.reply(message, reply);
});

controller.hears(['company'], 'direct_message,direct_mention,mention', function(bot, message) {
    //bot.reply
});


controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'],
    'direct_message,direct_mention,mention', function(bot, message) {

        var hostname = os.hostname();
        var uptime = formatUptime(process.uptime());

        bot.reply(message,
            ':robot_face: I am a bot named <@' + bot.identity.name +
             '>. I have been running for ' + uptime + ' on ' + hostname + '.');

    });

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}
