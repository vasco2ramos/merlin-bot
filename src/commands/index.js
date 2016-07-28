
'use strict'

const fs = require('fs');
const seneca = require('seneca')();

fs.readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    seneca.use('./' + name);
  }
});
