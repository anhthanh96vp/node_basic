// domain Module trong Node.js được sử dụng để can thiệp các lỗi chưa được xử lý.Các lỗi này có thể được can thiệp bằng cách sử dụng Internal Binding hoặc External Binding.

// Internal Binding - Error Emmitter đang thực thi phần code của nó bên trong phương thức run của một Domain.

// External Binding - Error Emmitter được thêm vào một Domain bởi sử dụng phương thức add.

// Để sử dụng domain Module trong Node.js, bạn cần import theo cú pháp sau.
var domain = require("domain");

var EventEmitter = require("events").EventEmitter;

var emitter1 = new EventEmitter();

// Tao mot domain boi su dung phuong thuc create()
var domain1 = domain.create();

domain1.on("error", function(err) {
  console.log("domain1 se xu ly loi: (" + err.message + ")");
});

// Them mot Emitter toi domain boi phuong thuc add()
domain1.add(emitter1);

emitter1.on("error", function(err) {
  console.log("listener se xu ly loi: (" + err.message + ")");
});

emitter1.emit("error", new Error("Duoc xu ly boi listener"));

emitter1.removeAllListeners("error");

emitter1.emit("error", new Error("Duoc xu ly boi domain1"));

var domain2 = domain.create();

domain2.on("error", function(err) {
  console.log("domain2 se xu ly loi: (" + err.message + ")");
});

// Them mot Emitter toi domain boi phuong thuc run()
domain2.run(function() {
  var emitter2 = new EventEmitter();
  emitter2.emit("error", new Error("Duoc xu ly boi domain2"));
});

domain1.remove(emitter1);
emitter1.emit(
  "error",
  new Error("Da chuyen doi thanh Exception. He thong bi pha vo!")
);
