
'use strict'

const _ = require('lodash')
const config = require('../config')
//const prosperworks = require('../helpers/prosperworks.js')
const request = require('request');

var opportunities = this;

const headers = {
    'X-PW-AccessToken': config('PROSPERWORKS_TOKEN'),
    'X-PW-UserEmail': config('PROSPERWORKS_EMAIL'),
    'X-PW-Application': "developer_api",
    'Content-Type': "application/json"
};

var page_size = 50;
var pipeline_id = 30164;

var options = {
  url: 'https://api.prosperworks.com/developer_api/v1/opportunities/search',
  headers: headers,
  json: true,
  form: {
      "sort_by": "status",
      "sort_direction":"asc",
      "page_size": page_size,
      "pipeline_ids[]": pipeline_id,
  }
};

opportunities.openOpportunitiesCount = function(func){
    var i = 1, nOpportunities = 0;
    options.form["page_number"] = i;
    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            var filtered = _.filter(body,['status','Open']);
            nOpportunities += filtered.length;
            if((nOpportunities/i) == page_size){
                options.form["page_number"] = ++i;
                request.post(options, getResponse); // Things will be kept memory, consider changing this
            } else {
                func(nOpportunities);
            }
        } else {
        }
    }
    request.post(options, getResponse);
}


opportunities.closingOpportunitiesCount = function(func){
    var i = 1, nOpportunities = 0;
    options.form["page_number"] = i;
    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            var filtered = _.filter(body,['status','Open']);
            nOpportunities += filtered.length;
            if((nOpportunities/i) == page_size){
                options.form["page_number"] = ++i;
                request.post(options, getResponse); // Things will be kept memory, consider changing this
            } else {
                func(nOpportunities);
            }
        } else {
        }
    }
    request.post(options, getResponse);
}


opportunities.command =function(message){

}



module.exports = opportunities
