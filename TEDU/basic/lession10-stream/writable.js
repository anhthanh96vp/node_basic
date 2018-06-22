// Writable - Là Stream được sử dụng cho hoạt động ghi

var fs = require("fs");
var data = "VietNamVoDoi";

// Tạo một phương thức Writable Stream
var writerStream = fs.createWriteStream("input.txt");

// Ghi dữ liệu tới Stream theo mã hóa utf8
writerStream.write(data, "UTF8");

// Đánh dấu điểm cuối cua file (end of file)
writerStream.end();

// Xử lý các sự kiện liên quan tới Stream --> data, end, va error
writerStream.on("finish", function() {
  console.log("Kết thúc hoạt động ghi.");
});

writerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("Kết thúc chương trình");
