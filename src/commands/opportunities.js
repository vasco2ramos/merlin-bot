'use strict'

const prosperworks = require('../helpers/prosperworks');

var opportunities = this;

opportunities.help =
    [{
        name: "open",
        description: "Returns the number of Open Opportunities"
    },{
        name: "won",
        description: "Returns the number of Opportunities Won this month"
    },{
        name: "lost",
        description: "Returns the number of Opportunities Won this month"
    },{
        name: "expected",
        description: "Returns the number of Opportunities expected to close this month"
    }]


/* This can be improved for sure. will try to do it later */

opportunities.cmd = function(cmd, callback){
    switch(cmd) {
        case ( (cmd.match(/open$/gi))? cmd : undefined ) :
            prosperworks.queryByStatus(callback, "Open");
            break;
        case ( (cmd.match(/won$/gi))? cmd : undefined ) :
            prosperworks.queryByStatus(callback, "Won");
            break;
        case ( (cmd.match(/lost$/gi))? cmd : undefined ) :
            prosperworks.queryByStatus(callback, "Lost");
            break;
        case ( (cmd.match(/expected$/gi))? cmd : undefined ) :
            //prosperworks.queryByStatus(callback, "Open");
            break;
        case ( (cmd.match(/output$/gi))? cmd : undefined ) :
                prosperworks.output(callback, "Output");
            break;
        default:
            console.log(cmd);
            callback("No such command found here")
            break;
    }
}


module.exports = opportunities



/*  REFACTOR USING SENECA :)


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

}

*/
