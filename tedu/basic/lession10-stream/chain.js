// Chaining là một kỹ thuật để kết nối kết quả đầu ra của một Stream tới một Stream khác và tạo
// một chuỗi bao gồm nhiều hoạt động Stream.Thường thì nó được sử dụng với các hoạt động Piping.

// Ví dụ sau minh họa cách kết hợp hai hoạt động Piping và Chaining.
// Đầu tiên chúng ta nén một file, sau đó giải nén file đó.

// Tạo main.js.Trong file này, mình cần khai báo zlip Module cung cấp phương thức createGzip() cho hoạt động nén.

var fs = require("fs");
var zlib = require("zlib");

// Nén input.txt thành input.txt.gz
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File được nén thành công.");



// Giải nén input.txt.gz thanh input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log("Giải nén File thành công.");