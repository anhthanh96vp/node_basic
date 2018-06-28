// freetuts.net / module - yargs - options - trong - nodejs - 594.html

const yargs = require("yargs")

//Trong đó:
// get là tên của action
// Get List Students là miêu tả của action

//Chạy action node yargs.js - tên action - giá trị
//Ví dụ : node yargs.js get --username thanh --email vaicut

var argv = yargs
	.command("get", "Get List Students", function(yargs) {
		return yargs.options({
			username: {
				// cấu hình cho name
				demand: true, //
				type: "string", // Kiểu dữ liệu nhập vào
                alias: "u", // là tạo định danh (tên rút gọn hoặc tên giả) cho một key nào đó
				default: "Mặc Định", //giá trị username mặc định nếu ng dùng ko nhập
				description: "Mô tả" // Mô tả
				// ...
			}
		})
	})
	.help().argv

console.log("test")
console.log(argv)
