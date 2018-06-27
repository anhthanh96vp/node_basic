// Hoạt động như là Network Wrapper, biến Server và Client thành các Stream.

var net = require("net");

var server = net
  .createServer(function(socket) {
    socket.end("goodbye\n");
  })
  .on("error", function(err) {
    throw err;
  });
server.listen(8080, function() {
  address = server.address();
  console.log("Server đang lắng nghe", address);
});
