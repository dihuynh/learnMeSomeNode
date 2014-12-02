var http = require('http')
var path = '/api/parsetime'
var url = require('url')

function parsetime (time) {
    return { 
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()    
    }
}

function unixtime(time) {
    return { "unixtime": time.getTime() }
}

var server = http.createServer(function(request, response){
    var path = url.parse(request.url, true)
    var time = new Date(path.query.iso)
    var result

    if (/^\/api\/parsetime/.test(request.url)){
        result = parsetime(time)    
    }
    
    if (/^\/api\/unixtime/.test(request.url)){
        result = unixtime(time)
    }
   
    if (result){ 
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))
    }
    else{
        response.writeHead(404)
        response.end()
    }
})


server.listen(Number(process.argv[2]))
