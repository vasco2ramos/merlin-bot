
'use strict'

const _ = require('lodash')
const config = require('../config')



let attachments = [
  {
    title: 'Interact with the opportunities',
    color: '#2FA44F',
    text: '`opportunities <sub-commands>` use with one of these sub-commands: \n `total` Total Number of Negotiating Opportunities',
    mrkdwn_in: ['text']
  },
  {
    title: 'Mr Burns is an all around money hungry bot',
    color: '#E3E4E6',
    text: '`help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

function help() {
    return attachments;
}

module.exports = help
