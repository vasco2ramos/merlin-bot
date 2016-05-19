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
  headers: headers,
  json: true,
  form: {
      "sort_by": "status",
      "sort_direction":"asc",
      "page_size": 1,
  }
};

module.exports.getOpportunitiesCount = function(func){

    function getResponse(error, response, body) {
      if (!error && response.statusCode == 200) {
          var statusCode = response.statusCode;
          func(body,statusCode,response)
      }
    }

    request.post(options, getResponse)

}
