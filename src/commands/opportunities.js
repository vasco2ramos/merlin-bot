'use strict'

const prosperworks = require('../helpers/prosperworks');

module.exports = function opportunities( options ) {
  var seneca = this;

  seneca.add('role: opportunities, cmd: open', open);
  seneca.add('role: opportunities, cmd: won', won);
  seneca.add('role: opportunities, cmd: lost', lost);
  seneca.add('role: opportunities, cmd: predicted', predicted);

  function open( args, done ) {
    done( null, {text:'foo-'+args.text+suffix} )
  }

  function won( args, done ) {
    // Figure this out later
  }

  function lost( args, done ) {
    // Figure this out later
  }

  function predicted( args, done ) {
    // Figure this out later
  }

  // Function that should be called at some point in time
  // prosperworks.queryByStatus(callback, "Open");

}
