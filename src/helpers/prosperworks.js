const config = require('../config')
const request = require('request');


var headers = {
    'X-PW-AccessToken': config('PROSPERWORKS_TOKEN'),
    'X-PW-UserEmail': config('PROSPERWORKS_EMAIL'),
    'X-PW-Application': "developer_api",
    'Content-Type': "application/json"
};

var options = {
  url: 'https://api.prosperworks.com/developer_api/v1/opportunities/search',
  method: 'POST',
  headers: headers,
  json: true,
  qs: {
      "page_size": 500,
      "sort_by": "status",
      "sort_direction":"asc",
      "pipeline_id":[30164]
  }
};

module.exports.getOpportunitiesCount = function(callback){
    request(options, callback);
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
      var statusCode = response.statusCode;
      return callback(body);
  }
}
