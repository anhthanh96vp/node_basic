// Tổng hợp về Response tại đây
// http://vietjack.com/nodejs/doi_tuong_response_trong_nodejs.jsp

// Đối tượng res biểu diễn HTTP Response mà ứng dụng Express gửi phản hồi khi nhận một HTTP Request.

//Tổng hợp tại đây
// http://vietjack.com/nodejs/doi_tuong_request_trong_nodejs.jsp

// Đối tượng req biểu diễn HTTP Request và có các thuộc tính cho chuỗi truy vấn request, các tham số, body, HTTP Header, …
// Các phương thức của đối tượng Request
const express = require("express");
const test = express();

test.get("/", (req, res) => {
  // Giá trị true, false để chỉ rằng ứng dụng có phải đã gửi HTTP Header cho Response hay không.
  console.log(res.headersSent);

  //   res.app;
  // Thuộc tính này giữ một tham chiếu tới ứng dụng Express mà đang sử dụng Middleware.
  console.log(res.locals);
  // Một đối tượng chứa các biến cục bộ của Response trong phạm vi Request.

  //  Phương thức này được sử dụng để thiết lập tên của Cookie thành value. Tham số value có thể là một chuỗi hoặc một đối tượng được chuyển đổi thành dạng JSON
  res.cookie("test", [1, 2, 3, 4, 5]);

  //Phương thức này được sử dụng để gửi một phản hồi dưới định dạng JSON. Ví dụ:
  res.json({
    name: "Jack",
    age: 18
  });

  // Phương thức này được sử dụng để gửi HTTP Response.Ví dụ:
  res.send({ some: "json" });

  // Phương thức này được sử dụng để redirect tới một URL từ một đường truyền path cụ thể, với một Status Code nào đó.Ví dụ:
  res.redirect("http://google.com");

  res.end();
});
const server = test.listen(8888, () => {
  console.log(`Server running ${server.address().port}`);
});
