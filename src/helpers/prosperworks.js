const _ = require('lodash')
const config = require('../config')
const request = require('request')

const headers = {
    'X-PW-AccessToken': config('PROSPERWORKS_TOKEN'),
    'X-PW-UserEmail': config('PROSPERWORKS_EMAIL'),
    'X-PW-Application': "developer_api",
    'Content-Type': "application/json"
};

const PAGE_SIZE = 50; // Set page size to 50.
const PIPELINE_ID = 30164; // Pipeline id of negotiating companies

var prosperworks = this;

prosperworks.headers = headers;


prosperworks.openOpportunities = function(func){

    var options = {
      url: 'https://api.prosperworks.com/developer_api/v1/opportunities/search',
      headers: prosperworks.headers,
      json: true,
      form: {
          "sort_by": "status",
          "sort_direction":"asc",
          "page_size": PAGE_SIZE,
          "pipeline_ids[]": PIPELINE_ID,
      }
    };


    var i = 1, nOpportunities = 0;
    options.form["page_number"] = i;
    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            var filtered = _.filter(body,['status','Open']);
            nOpportunities += filtered.length;
            if((nOpportunities/i) == PAGE_SIZE){
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

module.exports = prosperworks
