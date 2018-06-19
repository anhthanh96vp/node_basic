
// Stt	URI	Phương thức HTTP	POST body	Kết quả
// 1	listUsers	GET	empty	Hiển thị danh sách user
// 2	addUser	POST	JSON String	Thêm một user mới
// 3	deleteUser	DELETE	JSON String	Xóa một user hiện tại.
// 4	:id	GET	empty	Hiển thị chi tiết một user

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/addUserr', function (req, res) {
   fs.readFile( __dirname + "/" + "lession7.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})