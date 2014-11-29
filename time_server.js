// YYYY-MM-DD hh:mm \n

var net = require('net') 

var server = net.createServer(function (socket) {
    var date = new Date()
    var month = date.getMonth() + 1;
    var data = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
    socket.end(data);
})

server.listen(process.argv[2])
