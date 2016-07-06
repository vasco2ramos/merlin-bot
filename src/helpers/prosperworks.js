const _ = require('lodash')
const config = require('../config')
const request = require('request')
const moment = require('moment')

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

// Change this later to save opportunities and segment it by name and user
prosperworks.queryByStatus = function(func, status) {
    // Options Configuration
    options.form["page_number"] = 1; // Since options are global we need to change this everytime

    var i = 1, nOpportunities = 0;

    function getResponse(error, response, body) {
        if (!error && response.statusCode == 200) {
            if(body.length > 0){
                var filtered = filterByStatus(body, status);
                filtered = filterByCurrentMonth(filtered);
                nOpportunities += filtered.length;
                options.form["page_number"] = ++i;
                request.post(options, getResponse);
            } else {
                console.log("Returning - " + nOpportunities);
                func(nOpportunities+" opportunities "+status+" this month");
            }
        }
    }
    request.post(options, getResponse);
}




function filterByStatus(array, status){
    var filtered = _.filter(array,['status', status]);
    return filtered;
}

/* Take into consideration problems caused when the function is executed
between changing months, not a problem in this case */
// Keep in mind format is unix timestamp (doesn't work with other timestamps)
function filterByCurrentMonth(array){
    var monthBegin = moment().startOf('month'), monthEnd = moment().endOf('month');
    var filtered =  _.filter(array,
               function(each){
                  return moment.unix(each["date_created"])
                    .isBetween(monthBegin, monthEnd) ;
               });
   return filtered;
}



module.exports = prosperworks
