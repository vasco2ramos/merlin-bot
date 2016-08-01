'use strict';

const prosperworks = require('../helpers/prosperworks');
const plugin = 'invoices';

module.exports = function invoices( options ) {

    var seneca = this;

    seneca.add({role: plugin, cmd: 'status'}, status);
    seneca.add({role: plugin, cmd: 'cancel'}, cancel);

    function status( args, done ) {
    done( null, {text:'foo-'+args.text+suffix} )
    }

    function cancel( args, done ) {
    // Figure this out later
    }

}
