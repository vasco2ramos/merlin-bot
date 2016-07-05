const _ = require('lodash')
const config = require('../config')
const request = require('request')

const PAGE_SIZE = 50; // Set page size to 50.
const PIPELINE_ID = 30164; // Pipeline id of negotiating companies

const headers = {
    'X-PW-AccessToken': config('PROSPERWORKS_TOKEN'),
    'X-PW-UserEmail': config('PROSPERWORKS_EMAIL'),
    'X-PW-Application': "developer_api",
    'Content-Type': "application/json"
};

var prosperworks = this;

var options = {
  url: 'https://api.prosperworks.com/developer_api/v1/opportunities/search',
  headers: headers,
  json: true,
  form: {
      "sort_by": "status",
      "sort_direction":"asc",
      "page_size": PAGE_SIZE,
      "pipeline_ids[]": PIPELINE_ID,
  }
};



prosperworks.openOpportunities = function(func){

    // Options Configuration
    options.form["sort_by"] = "status";
    options.form["sort_direction"] = "asc";
    options.form["page_number"] = 1; // Starts at page 1


    var i = 1, nOpportunities = 0;

    // Can this be made a high level function? Does it improve anything? (maybe)
    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            var filtered = _.filter(body,['status','Open']);
            nOpportunities += filtered.length;
            /* Since pages are sorted check if number is multiple of page size
            in order to know if you should get outer pages */
            if((nOpportunities/i) == PAGE_SIZE){
                options.form["page_number"] = ++i;
                request.post(options, getResponse);
            } else {
                func(nOpportunities);
            }
        }
    }


    request.post(options, getResponse);
}


prosperworks.wonOpportunities = function(func){

    // Options Configuration
    options.form["sort_by"] = "status";
    options.form["sort_direction"] = "desc";
    options.form["page_number"] = 1; // Starts at page 1

    var i = 1, nOpportunities = 0;
    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            var filtered = _.filter(body,['status','Won']);
            nOpportunities += filtered.length;
            if((nOpportunities/i) == PAGE_SIZE){
                options.form["page_number"] = ++i;
                request.post(options, getResponse);
            } else {
                func(nOpportunities);
            }
        }
    }
    request.post(options, getResponse);
}


module.exports = prosperworks
