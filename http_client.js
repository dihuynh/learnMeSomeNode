var client = require('http');
var url = process.argv[2];

client.get(url, function (response){
    response.setEncoding('utf8')
    response.on('data', console.log);
    response.on('error', console.error);
});
