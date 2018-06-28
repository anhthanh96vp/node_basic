// https://freetuts.net/gioi-thieu-module-yargs-trong-nodejs-591.html

// Yargs là một module có tác dụng tách chuỗi của các request và lấy các tham số + giá trị của các tham số, module này rất hữu ích trong việc giao tiếp lấy dữ liệu từ client.

// Cú pháp mẫu để sử dụng

// var yargs = require("yargs")
// var argv = yargs.argv._

// Để truyền tham sô dạng key => value thì ta sử dụng cú pháp sau:
// node index.js --key = value

// Hàm kiểm tra số nguyên tố
// Quiz: Viết chương trình kiểm tra số n từ người dùng nhập vào có phải là số nguyên tố hay không.

const testSNT = n => {
	// Biến cờ hiệu
	var flag = true

	// Nếu n bé hơn 2 tức là không phải số nguyên tố
	if (n < 2) {
		flag = false
	}
	//Số nào chẵn mà lớn hơn 2 thì cũng không phải số nguyên tố
	else if (n % 2 == 0) {
		flag = false
	}
	// n == 2 là số nguyên tố luôn
	else if (n == 2) {
		flag = true
	} else {
		// lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
		//Vì lặp từ số lẻ với bước nhảy là +=2 nên i luôn luôn là số lẻ
		for (var i = 3; i < Math.sqrt(n); i += 2) {
			if (n % i == 0) {
				flag = false
				break
			}
		}
	}
	return flag
}

// Main Code
let yargs = require("yargs")

let argv = yargs.argv
console.log(argv)
if (typeof argv.n == "undefined") {
	console.log(`Bạn chưa nhập n`)
} else {
	if (testSNT(argv.n)) {
		console.log("Số nguyên tố")
	} else {
		console.log("Không phải")
	}
}

//CHẠY CODE

// node index.js --n 5
