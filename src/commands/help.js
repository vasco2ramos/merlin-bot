
'use strict'

const _ = require('lodash')
const config = require('../config')



let attachments = [
  {
    title: 'Mr Burns is an all around money hungry bot',
    color: '#2FA44F',
    text: '`opportunities` used with one of these sub-commands:',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Mr. Burns',
    color: '#E3E4E6',
    text: '`help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
