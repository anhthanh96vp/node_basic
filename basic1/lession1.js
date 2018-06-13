// Dòng đầu tiên khai báo(chính xác hơn là yêu cầu, giống với import và using)
// rằng chúng ta sẽ sử dụng module http có sẵn trong Node.js vào trong ứng dụng và sẽ gọi đến nó thông qua biến có tên http.
//Có các module như là:
//http
//url
//querystring
//path
//fs
//util


var http = require("http");

// Tiếp đến là gọi một trong các hàm có sẵn của module http: createServer.Hàm này sẽ trả về một đối tượng,
// đối tượng này chứa một hàm / phương thức khác gọi là listen, hàm này nhận vào một tham số kiểu
// số để sử dụng làm cổng lắng nghe cho máy chủ HTTP.
function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");
