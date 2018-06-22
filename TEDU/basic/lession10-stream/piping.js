// Piping là một kỹ thuật.Với kỹ thuật này, chúng ta cung cấp kết quả đầu ra của một Stream để làm dữ liệu đầu vào cho một Stream khác.Không có giới hạn nào về hoạt động Piping này, tức là quá trình trên có thể vẫn tiếp tục.

// Cần sử dụng hai phương thức là createReadStream() và createWriteStream() tương ứng để đọc và ghi dữ liệu.Tiếp đó, sử dụng phương thức pipe() để thực hiện kỹ thuật Piping Stream như sau:

var fs = require("fs");

// Tạo một Readable Stream để đọc dữ liệu
var readerStream = fs.createReadStream("input.txt");

// Tạo một Writable Stream để ghi dữ liệu
var writerStream = fs.createWriteStream("output.txt");

// Piping hoạt động Readable va Writable
// Đọc dữ liệu từ input.txt và xả dữ liệu qua output.txt
readerStream.pipe(writerStream);

console.log("Kết thúc chương trình");
