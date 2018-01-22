var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

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

getAndPrintHTML();
