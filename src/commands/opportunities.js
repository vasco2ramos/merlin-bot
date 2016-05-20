
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

var options = {
  url: 'https://api.prosperworks.com/developer_api/v1/opportunities/search',
  headers: headers,
  json: true,
  form: {
      "sort_by": "status",
      "sort_direction":"asc",
      "page_size": page_size,
      "pipeline_ids": [30164]
  }
};

// There is a better way to do this :)

/* Things to keep in mind is the sort direction needs to be perserved for this to work */
opportunities.getOpportunitiesCount = function(func){
    var i = 1, nOpportunities = 0;
    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("here 3");
            var filtered = _.filter(body,['status','Open']);
            nOpportunities += filtered.length;
            if((nOpportunities/i) == page_size){
                console.log("here 4");
                i++;
                options.form["page_number"] = i;
                request.post(options, getResponse); // Things will be kept memory, consider changing this
            } else {
                console.log("here 5");
                func(nOpportunities)
            }
        } else {
            console.log(response);
        }
    }
    request.post(options, getResponse)
}


module.exports = opportunities
