var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {

    var allData = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function() {
      console.log(allData);
    });

  });
}

getAndPrintHTML(requestOptions);

