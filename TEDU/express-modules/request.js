//Tổng hợp tại đây
// http://vietjack.com/nodejs/doi_tuong_request_trong_nodejs.jsp

// Đối tượng req biểu diễn HTTP Request và có các thuộc tính cho chuỗi truy vấn request, các tham số, body, HTTP Header, …
// Các phương thức của đối tượng Request
const express = require("express");
const test = express();

test.get("/", (req, res) => {
  // Phương thức này kiểm tra xem Content - type có phải là có thể chấp nhận không
  console.log(`accepts: ${req.accepts("text/html")} `);

  //Chứa phần hostname từ phần "Host" của HTTP header.
  console.log(`hostname: ${req.hostname}`);

  //Xác định xem có hay không Request là "fresh." Thuộc tính này trái ngược với req.stale.
  console.log(`fresh: ${req.fresh}`);

  //Địa chỉ Remote IP của request.
  console.log(`ip: ${req.ip}`);

  //Chứa phần path của URL trong Request.
  console.log(`path: ${req.path}`);

  //Chuỗi protocol của Request, đó là "http" hoặc "https" khi tạo request với TLS
  console.log(`protocol: ${req.protocol}`);

  //Một đối tượng chứa một thuộc tính cho mỗi tham số chuỗi truy vấn trong Router
  console.log(`query: ${res.send(req.query)}`);

  // Là true nếu một kết nối TLS được thiết lập thành công
  console.log(`secure: ${req.secure}`);

  // Xác định xem có hay không Request là "stale", thuộc tính này trái ngược với thuộc tính req.fresh.
  console.log(`stale: ${req.stale}`);
});
const server = test.listen(8888, () => {
  console.log(`Server running ${server.address().port}`);
});
