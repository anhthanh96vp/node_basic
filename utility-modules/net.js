var net = require('net');

var server = net.createServer(function(socket) { 
   socket.end('goodbye\n');
}).on('error', function(err){
    throw err;
});
server.listen( function() {
    address = server.address();
    console.log('open server on %j', address)
});

