var client = require('http');
var bl = require('bl');
var url = process.argv[2];
client.get(url, function(response){
    response.pipe(bl(function(err, data){
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
