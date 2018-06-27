// https://freetuts.net/gioi-thieu-module-yargs-trong-nodejs-591.html

// Yargs là một module có tác dụng tách chuỗi của các request và lấy các tham số + giá trị của các tham số, module này rất hữu ích trong việc giao tiếp lấy dữ liệu từ client.
// Hàm kiểm tra số nguyên tố

// Quiz: Viết chương trình kiểm tra số n từ người dùng nhập vào có phải là số nguyên tố hay không.

function testSNT(n) {
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
		for (var i = 3; i < n - 1; i += 2) {
			if (n % i == 0) {
				flag = false
				break
			}
		}
	}

	return flag
}

// Main Code
var yargs = require("yargs")

var argv = yargs.argv

if (typeof argv.n == "undefined") {
	console.log("Ban chua nhap n")
} else {
	if (kiem_tra_snt(argv.n)) {
		console.log("La so nguyen to")
	} else {
		console.log("Khong phai so nguyen to")
	}
}
