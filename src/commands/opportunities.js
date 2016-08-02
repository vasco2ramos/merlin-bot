'use strict'

const prosperworks = require('../helpers/prosperworks');
const plugin = 'opportunities';

module.exports = function opportunities( options ) {

  this.add({role: plugin, cmd: 'open'}, open);
  this.add({role: plugin, cmd: 'won'}, won);
  this.add({role: plugin, cmd: 'lost'}, lost);
  this.add({role: plugin, cmd: 'predicted'}, predicted);

  function open( args, done ) {
    done( null, {text:'foo-'} );
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
