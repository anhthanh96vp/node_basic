// path Module trong được sử dụng để Resolve và chuyển đổi các đường dẫn tới file. Module này có thể được inport theo cú pháp:
var path = require("path")



console.log('NORMALIZE : ' + path.normalize('/test/test1/////2slashes/1slash/tab/cc/dsa/dsa/gbfd/..')); // Chuẩn hóa đường dẫn

console.log('JOIN : ' + path.join('/test', 'test1', '2slashes/1slash', 'tazb', '..')); //Kết hợp tất cả các tham số là đường dẫn với nhau và sau đó chuẩn hóa đường dẫn kết quả tạo ra

console.log('RESOLVE : ' + path.resolve('main.js')); // Resolve là một đường dẫn tuyệt đối. Một đường dẫn tuyệt đối luôn luôn trỏ đến cùng một vị trí, bất kể thư mục đang làm việc là gì.

console.log('EXTNAME : ' + path.extname('main.js')); // Lấy thông tin dưới đường dẫn

console.log('ISABSOLUTE: ' + path.isAbsolute('C:/Users/akker/OneDrive/Desktop/node_basic/utility-modules/main.js')) //Xác định xem đó có phải là đường dẫn tuyệt đối không. Trả về true và false

console.log('RELATIVE : ' + path.relative('C:/Users','utility-modules')); //Resolve một đường dẫn tương đối.

console.log('DIRNAME : ' + path.dirname('/OneDrive/Desktop/node_basic/utility-modules')); //Trả về tên thư mục của một đường dẫn.

console.log('BASENAME : ' + path.basename('C:/Users/akker/OneDrive/Desktop/node_basic/utility-modules/main.js')); //Trả về phần cuối cùng của 1 đường dẫn

console.log('EXTNAME : ' + path.extname('C:/Users/akker/OneDrive/Desktop/node_basic/utility-modules/main.txt')); //Trả về đuôi của đường dẫn (ví dụ txt)

console.log('PARSE : ' + path.parse('C:/Users/akker/OneDrive/Desktop/node_basic/utility-modules/main.js')); //Trả về một đối tượng từ một chuỗi biểu diễn đường dẫn

let ok = {a: 'a', b: 'b'}
console.log('FORMAT : ' + path.format(ok)); //Trả về một chuỗi biểu diễn đường dẫn từ một đối tượng, phương thức này trái ngược với phương thức path.parse trên.

// 2 THẰNG CUỐI ĐÉO HIỂU LẮM

// ngoài ra còn 2 Thuộc tính & Miêu tả
path.sep //Biểu thị File Separator của nền tảng cụ thể. Nó có thể là '\\' hoặc '/'.

path.delimiter //Biểu thị Path Delimiter của nền tảng cụ thể, có thể là ';' hoặc ':'.