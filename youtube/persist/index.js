// Load module node-persist
const storage = require("node-persist")

// Hàm khởi tạo
// Load dữ liệu đã lưu trên ổ đĩa
storage.initSync({
	dir: "students"
})

// Hàm lấy danh sách sinh viên
const getAllStudents = () => {
	// Lấy sinh viên từ nơi lưu trữ
	var students = storage.getItemSync("students")

	// Nếu không có sinh viên nào thì trả về một mảng rỗng
	if (typeof students === "undefined") {
		return []
	}

	// Ngược lại sẽ trả về danh sách sinh viên
	return students
}
