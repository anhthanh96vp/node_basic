// Phân tích cú pháp và định dạng chuỗi truy vấn bằng querystring

var querystring = require("querystring");

console.log(querystring.escape("ab/bc/cd")); // Trả về 1 chuỗi truy vấn (hình như là mã hóa chuỗi)

console.log(querystring.unescape("ab%2Fbc%2Fcd")); //Ngược lại với phương thức escape

console.log(querystring.parse("year=2017&month=february")); // Phân tích chuỗi truy vấn và trả về 1 object

console.log(
  querystring.stringify({ foo: "bar", baz: ["qux", "quux"], corge: "" }) //Ngược lại với phương thức parse ở trên
);
// returns 'foo=bar&baz=qux&baz=quux&corge='

console.log(querystring.stringify({ foo: "bar", baz: "qux" }, ";", ":"));
// returns 'foo:bar;baz:qux'

console.log(querystring);
