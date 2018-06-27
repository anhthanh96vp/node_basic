// https://freetuts.net/gioi-thieu-module-yargs-trong-nodejs-591.html

// Yargs là một module có tác dụng tách chuỗi của các request và lấy các tham số + giá trị của các tham số, module này rất hữu ích trong việc giao tiếp lấy dữ liệu từ client.

var yargs = require("yargs")

// Lấy hết tham số
var argv = yargs.argv

// In ra xem thử
console.log(argv)
