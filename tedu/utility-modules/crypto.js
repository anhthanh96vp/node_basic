// Mã hóa chuỗi bằng crypto (ví dụ như mật khẩu)

const crypto = require("crypto");

const secret = "abcdefg";

const hash = crypto
  .createHmac("sha256", secret)
  .update("Welcome")
  .digest("hex");

console.log(hash);

// crypto / core
// crypto / x64 - core
// crypto / lib - typedarrays
// crypto / md5
// crypto / sha1
// crypto / sha256
// crypto / sha224
// crypto / sha512
// crypto / sha384
// crypto / sha3
// crypto / ripemd160
// crypto / hmac - md5
// crypto / hmac - sha1
// crypto / hmac - sha256
// crypto / hmac - sha224
// crypto / hmac - sha512
// crypto / hmac - sha384
// crypto / hmac - sha3
// crypto / hmac - ripemd160
// crypto / pbkdf2
// crypto / aes
// crypto / tripledes
// crypto / rc4
// crypto / rabbit
// crypto / rabbit - legacy
// crypto / evpkdf
// crypto / format - openssl
// crypto / format - hex
// crypto / enc - latin1
// crypto / enc - utf8
// crypto / enc - hex
// crypto / enc - utf16
// crypto / enc - base64
// crypto / mode - cfb
// crypto / mode - ctr
// crypto / mode - ctr - gladman
// crypto / mode - ofb
// crypto / mode - ecb
// crypto / pad - pkcs7
// crypto / pad - ansix923
// crypto / pad - iso10126
// crypto / pad - iso97971
// crypto / pad - zeropadding
// crypto / pad - nopadding