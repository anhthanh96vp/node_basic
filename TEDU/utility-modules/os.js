// os Module trong Node.js cung cấp các hàm tiện ích cơ bản liên quan đến hệ điều hành. Module này có thể được import bởi cú pháp sau đây:
const os = require("os");

console.log("freemem ", os.freemem()); //Trả về tổng dung lượng bộ nhớ chưa dùng đến (đơn vị byte).
console.log("arch ", os.arch()); //Trả về cấu trúc CPU của Hệ điều hành.
console.log("cpus ", os.cpus()); //Trả về mảng đối tượng chứa thông tin về CPU/core: model, speed (giá trị MHz), và thời gian.
console.log("hostname ", os.hostname()); //Trả về hostname của Hệ điều hành.
console.log("platform ", os.platform()); //Trả về nền tảng của Hệ điều hành.
console.log("tmpdir ", os.tmpdir()); //Trả về thư mục mặc định cho các file tạm thời
console.log("totalmem ", os.totalmem()); //Trả về tổng dung lượng bộ nhớ (đơn vị byte).
console.log("type ", os.type()); //Trả về tên của Hệ điều hành.
console.log("getNetworkInterfaces ", os.getNetworkInterfaces()); //Lấy danh sách các Network Interface.

console.log("EOL ", os.EOL); //Một hằng số định nghĩa End-Of-Line cho Hệ điều hành.

console.log("tmpDir ", os.tmpDir());
console.log("uptime ", os.uptime());
console.log("release ", os.release());
console.log("loadavg ", os.loadavg());
console.log("homedir ", os.homedir());
console.log("userInfo ", os.userInfo());
console.log("endianness ", os.endianness());