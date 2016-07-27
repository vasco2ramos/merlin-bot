
'use strict'

const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') dotenv.load()

const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PROXY_URI: process.env.PROXY_URI,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  MRBURNS_COMMAND_TOKEN: process.env.MRBURNS_COMMAND_TOKEN,
  SLACK_TOKEN: process.env.SLACK_TOKEN,
  PROSPERWORKS_TOKEN: process.env.PROSPERWORKS_TOKEN,
  PROSPERWORKS_EMAIL: process.env.PROSPERWORKS_EMAIL,
  HIVEAGE_TOKEN: process.env.HIVEAGE_TOKEN,
  HIVEAGE_ENDPOINT: process.env.HIVEAGE_ENDPOINT,
}


module.exports = (key) => {
  if (!key) return config

  return config[key]
}
