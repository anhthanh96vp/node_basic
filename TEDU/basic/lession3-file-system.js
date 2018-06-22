http = require("http");

// Module fs(viết tắt của file system) là một module được tích hợp sẵn trong node.js có chức năng xử lý file, thư mục trong node.js
//Nó có thể:
// - Sửa File
// - Tạo File
// - Xóa File
// - Đổi tên File ...
fs = require("fs");

//Sử dụng hàm cho sẵn createServer()
http
  .createServer(function(req, res) {
    res.writeHead(200, {
      "content-type": "text/html"
    });

    // lession3HTML.html là đường dẫn của file cần đọc.
    // option có thể là chuỗi hoặc mảng chứa các tùy chọn encode hay mode của file, nếu không cần cấu hình thì mọi người có thể bỏ trống.
    // err là biến chứa lỗi nếu có.
    // data là dữ liệu đọc được từ file.

    //Có các loại Create file: appendFile(), open(), writeFile(), readFile()....

    var content =
      "<meta charset='utf-8'><h1>Đây là nội dung tôi muốn ghi đè</h1>";

    var content2 = "<h2>Nội dung thứ 2 muốn append()</h2>";

    // - Ở đây readFile() là function Đọc file
    fs.readFile("lession3HTML.html", "utf8", function(err, data) {
      if (err) throw err;
      // in ra nội dung đọc được
      res.write(data);
      res.end();
    });

    // - Ở đây function writeFile() sử dụng để viết đè nội dung file, nếu không có file nó sẽ tự tạo file mới
    fs.writeFile("lession3HTML.html", content, "utf8", function(err) {
      if (err) {
        throw err;
      } else console.log("Đè thành công");
    });

    // - Ở đây function appendFile() sử dụng để add thêm nội dung file, nếu không có file nó cũng sẽ tự tạo file mới.
    // Nó được kích hoạt khi load page localhost:8000
    fs.appendFile("lession3HTML.html", content2, "utf8", function(err) {
      if (err) throw err;
      else console.log("thêm content file html thành công");
    });

    // - Ở đây function open() sử dụng để tạo mới file, tham số là 'taomoifile.html'
    // Nó được kích hoạt khi load page localhost:8000
    //Tham số 'r' là mở ra để đọc file, 'w' là để viết, 'wr' cả đọc cả viết.
    //Nhưng đm cứ xài r là lỗi đéo tạo được
    fs.open("taomoifile.html", "w", function(err, file) {
      if (err) throw err;
      else console.log("tạo file html thành công");
      console.log(file);
    });

    //- Ở đây function unlink() sử dụng để xóa file, 2 tham số là link file và callback function
    fs.unlink("taomoifile.html", function(err) {
      if (err) throw err;
      console.log("Delete file finish");
    });

    //-Ở đây function rename() sử dụng để đổi tên file.
    fs.rename("taomoifile.html", "doitenfinish.html", function(err) {
      if (err) throw err;
      console.log("Rename file finish");
    });
  })
  .listen(8888);

  