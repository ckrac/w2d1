var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function (response) {

    var allData = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function () {
      callback(allData);
    });

  });
}

function printHTML (html) {
  console.log(html);
}

// getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function (response) {

    var allData = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function () {
      callback(allData);
    });
  });
};
