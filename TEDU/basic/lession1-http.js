//Có các module đại loại như là:
//http:  module này có nhiệm vụ khởi tạo một cổng kết nối HTTP server trả về client.
//url: module này để lấy url browser
//querystring
//path
//fs: module file system này đại khái là tương tác như tạo, thêm, xóa, sửa file (lession3)
//util

// Dòng đầu tiên khai báo(chính xác hơn là yêu cầu, giống với import và using)
// rằng chúng ta sẽ sử dụng module http có sẵn trong Node.js vào trong ứng dụng và sẽ gọi đến nó thông qua biến có tên http.

// -Để sử dụng được bất kỳ module nào trong Node.js thì chúng ta cần phải require module đó.Và để require một module trong Node.js chúng ta sử dụng từ khóa require.
var http = require("http");

// Tiếp đến là gọi một trong các hàm có sẵn của module http: createServer.Hàm này sẽ trả về một đối tượng,
// đối tượng này chứa một hàm / phương thức khác gọi là listen, hàm này nhận vào một tham số kiểu
// số để sử dụng làm cổng lắng nghe cho máy chủ HTTP.
function onRequest(request, response) {
  // -Hàm writeHead() thiết lập kiểu dữ liệu mà server muốn trả về. Ở đây sever trả về là 1 trang html
  response.writeHead(200, { "Content-Type": "text/html" });
  // -Hàm  response.write() thiết lập nội dung mà server muốn trả về trình duyệt, nội dung này có thể là text có thể là HTML code.
  response.write(
    `<html><head><meta charset="utf-8"><title>Tiêu đề</title><body> <h1>Chữ to đùng<h1> </body></head></html>`
  );

  response.write("Hello World");

  // -Thuộc tính url này chứa các paramter trong URL mà client gửi lên server.
  // Lúc này các tiền tố phía sau domain sẽ được hiện ra nếu có: vd http://localhost:8000/toidicode thì url sẽ là /toidicode.

  response.write(request.url);
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server is running...");
