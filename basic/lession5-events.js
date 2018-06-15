// Để sử dụng event ta phải require event
const event = require("events");
//Và khởi tạo đối tượng eventEmitter
//Bắt buộc phải sử dụng từ khóa new
const eventEmitter = new event.EventEmitter();

// Phương thức on() hoặc addListener() để lắng nghe sự kiện
// eventName - Là tên của sự kiện muốn thêm.
// handleEvent - là hàm xử lý khi eventName được gọi.
// handleEvent có thể là một callbackfunction hoặc là một hàm ẩn danh(closure function).

eventEmitter.on("eventName", function(data) {
  console.log(data);
});

// Phương thức emit() để thực thi sự kiện
// eventName - Là tên của sự kiện muốn thực thi
// new Date() là tham số truyền vào sự kiện

eventEmitter.emit("eventName", new Date());
