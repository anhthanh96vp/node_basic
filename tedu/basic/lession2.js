var http = require("http");

var sever = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url == "/") {
    res.write("<html><h1>Default</h1></html>");
    res.end();
  } else if (req.url == "/main") {
    res.write("<html><h1>Page Main</h1></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.write("<html><h1>Page Admin</h1></html>");
    res.end();
  } else {
    res.end("Error");
  }
});

sever.listen(3000);

console.log("Server is running...");
