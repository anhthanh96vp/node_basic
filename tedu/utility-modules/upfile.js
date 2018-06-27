var http = require("http");
var fs = require("fs");
var formidable = require("formidable");

http
  .createServer(function(req, res) {
    //Request đến url xem link có phải là /upload không
    //Và request method có bằng post không
    //Mặc định phương thức method là get chỉ khi upload file thì thành post
    if (req.url == "/upload" && req.method.toLowerCase() == "post") {
      // Khởi tạo form bằng 1 phương thức |đéo biết là cái đéo gì của formidable|

      var form = new formidable.IncomingForm();

      //Thiết lập thư mục chứa file trên server
      form.uploadDir = "uploads/";

      form.parse(req, function(err, fields, file) {
        //path tmp trên server
        var path = file.files.path;

        //thiết lập path mới cho file
        var newpath = form.uploadDir + file.files.name;

        fs.rename(path, newpath, function(err) {
          if (err) throw err;
          res.end("Upload Thành Công!");
        });
      });
      return;
    }

    res.writeHead("200", { "content-type": "text/html" });
    fs.readFile("upfile.html", "utf8", function(err, data) {
      if (err) throw err;
      else console.log("Server running");
      res.write(data);
      res.end();
    });
  })
  .listen(8888);
