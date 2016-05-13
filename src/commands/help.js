
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'mr-burns',
}

let attachments = [
  {
    title: 'Mr Burns is an all around money hungry bot',
    color: '#2FA44F',
    text: '`/mr-burns repos` returns hip repos \n`/mr-burns javascript` returns hip JavaScript repos',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Mr. Burns',
    color: '#E3E4E6',
    text: '`/mr-burns help` ... you\'re lookin at it! \n',
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
