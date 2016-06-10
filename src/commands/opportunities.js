'use strict'

const _ = require('lodash')
const config = require('../config')
const request = require('request');
const prosperworks = require('../helpers/prosperworks');


var opportunities = this;

var cmd = [{
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


opportunities.cmd = function(cmd, callback){
    if (cmd.match(/open$/gi) !== null){
        prosperworks.openOpportunities(callback);
        return 1;
    } else if (cmd.match(/won$/gi) !== null) {
        return 2;
    } else if (cmd.match(/lost$/gi) !== null) {
        return 3;
    } else if (cmd.match(/expected$/gi) !== null) {
        return 4;
    }
    else {
        console.log(cmd);
        return "Not Recognized";
    }
}


module.exports = opportunities
