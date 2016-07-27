'use strict'

const prosperworks = require('../helpers/prosperworks');
const seneca = require('seneca')()


seneca.add({role: 'invoices', cmd: 'status'}, function (msg, respond) {
    // Figure this out Later
})


seneca.add({role: 'invoices', cmd: 'cancel'}, function (msg, respond) {
    // Figure this out Later
})
