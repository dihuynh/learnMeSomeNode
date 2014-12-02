
var port = process.argv[2]
var file = String(process.argv[3])
var client = require('http')
var fs = require('fs')

var server = client.createServer( function (request, response) {
    var f = fs.createReadStream(file)
    f.pipe(response)
})

server.listen(port)
