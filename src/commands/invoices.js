'use strict'

const prosperworks = require('../helpers/prosperworks');


module.exports = function invoices( options ) {
  var seneca = this

  var suffix = ''

  seneca.add('role: invoices, cmd: status', status)

  seneca.add('role: invoices, cmd: cancel', cancel)

  function status( args, done ) {
    //done( null, {text:'foo-'+args.text+suffix} )
  }

  function cancel( args, done ) {
    // Figure this out later
  }

}
