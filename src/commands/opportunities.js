'use strict'

const prosperworks = require('../helpers/prosperworks');

module.exports = function opportunities( options ) {
  var seneca = this

  var suffix = ''

  seneca.add('role: opportunities, cmd: open', status)

  seneca.add('role: opportunities, cmd: won', cancel)

  seneca.add('role: opportunities, cmd: lost', cancel)

  seneca.add('role: opportunities, cmd: predicted', cancel)

  function status( args, done ) {
    //done( null, {text:'foo-'+args.text+suffix} )
  }

  function cancel( args, done ) {
    // Figure this out later
  }

  // Function that should be called at some point in time
  // prosperworks.queryByStatus(callback, "Open");

}
