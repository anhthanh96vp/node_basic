var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Tạo một parser có dạng application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// chỉ cần truyền tên thư mục nơi bạn giữ các file này, express.static sẽ sử dụng file đó một cách trực tiếp
app.use(express.static("public"));

// Phương thức này được sử dụng để truyền tải File tại địa chỉ path đã cho.Thiết lập Content - Type dựa trên phần đuôi của tên file.
//  Biến __dirname biến global, có giá trị là đường dẫn hiện tại
app.get("/lession5.html", function(req, res) {
  res.sendFile(__dirname + "/" + "lession5.html");
});

app.post("/process_post", urlencodedParser, function(req, res) {
  // Chuẩn bị output trong định dạng JSON
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    "Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s",
    host,
    port
  );
});
