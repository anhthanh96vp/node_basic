//Readable - Là Stream được sử dụng để cho hoạt động đọc

var fs = require("fs");
var data = "";
// Tạo một phương thức Readable Stream
var readerStream = fs.createReadStream("document.txt");

// Thiết lập encoding la utf8.
readerStream.setEncoding("UTF8");

// Xử lý các sự kiện liên quan tới Stream --> data, end, va error
//Bản thân thằng readerStream là 1 cái sự kiện, nên khi mà nó chạy hàm dưới đây nó sẽ lắng nghe và đọc
//dữ liệu thông qua thằng chunk và cho vào từng phần trong data
readerStream.on("data", function(chunk) {
  data += chunk;
});

// Sau khi đọc xong nó sẽ hiển thị ra thông qua hàm này
readerStream.on("end", function() {
  console.log(data);
});

//Hàm này là hiển thị lỗi
readerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("Ket thuc chuong trinh");
