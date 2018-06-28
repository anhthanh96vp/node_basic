// Mã hóa chuỗi bằng crypto (ví dụ như mật khẩu)

const crypto = require("crypto")

const secret = "abcdefg"

const hash = crypto
	.createHmac("sha256", secret) // Kiểu mã hóa là sha256
	.update("abc", "utf8", "hex") // Chuỗi cần mã hóa
	.digest("hex")

console.log(hash)
