// Javascript thuần được mã hóa Unicode một cách tiện lợi nhưng không thật sự tốt với các dữ liệu nhị phân.
// Khi làm việc với các luồng TCP hoặc hệ thống file, cần thiết phải xử lý các luồng dữ liệu bát phân.Node.js cung cấp các lớp Buffer cho phép lưu trữ các dữ liệu thô như một mảng các số nguyên tương ứng với phần cấp phát bộ nhớ thô bên ngoài V8 heap.
// Các lớp Buffer trong Node.js là các lớp toàn cục và có thể được truy cập trong ứng dụng mà không cần khai báo các Buffer Module bởi phương thức require() như các Module khác.

// Buffer là global class giúp làm việc với dữ liệu nhị phân trong NodeJS

const buf = new Buffer("Chuỗi buf 1 ");
const buf2 = new Buffer("Chuỗi buf 2 ");

//Cú pháp để ghi một Buffer trong Node.js là: buf.write(string[, offset][, length][, encoding])

//Mặc dù "utf8" là cách mã hóa mặc định nhưng bạn có thể sử dụng các cách mã hóa khác như "ascii", "utf8","base64", …
// console.log(buf.write("Hoc Nodejs tai VietJack"));

// Cú pháp để đọc dữ liệu từ Buffer trong Node.js như sau: buf.toString([encoding][, start][, end])
console.log(buf.toString());

//Phương thức này trả về một biểu diễn JSON cho đối tượng Buffer đã cho.
// console.log(buf.toJSON(buf));

// Để nối ghép hai hoặc nhiều Buffer thành một Buffer trong Node.js, bạn sử dụng phương thức concat() như sau:
// Buffer.concat(list[, totalLength])

console.log(Buffer.concat([buf, buf2]).toString());

// Để so sánh hai Buffer trong Node.js, bạn sử dụng phương thức compare() như sau:
// buf.compare(otherBuffer);
// otherBuffer - Một Buffer khác để được so sánh với Buffer có tên là buf.

console.log(buf.compare(buf2)); //Giá trị trả về là -1, 0, 1

// Để sao chép Buffer trong Node.js, bạn sử dụng phương thức copy() như sau:

// buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

buf.copy(buf2);
console.log(buf2.toString());

//Để cắt một Buffer con của một Buffer trong Node.js, bạn sử dụng phương thức slice() như sau:
// buf.slice([start][, end])

const buftest = buf.slice(0, 7);
console.log(buftest.toString());

// Để lấy độ dài(bằng giá trị byte) của một Buffer trong Node.js, bạn sử dụng thuộc tính length như sau:
// buf.length;

console.log(buf.length);
