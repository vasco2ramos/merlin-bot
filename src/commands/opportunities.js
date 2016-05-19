
'use strict'

const _ = require('lodash')
const config = require('../config')
const prosperworks = require('../helpers/prosperworks.js')

var opportunities = this;

opportunities.getOpportunities = function () {
    return prosperworks.getOpportunitiesCount();
}

module.exports = opportunities
