// Lúc test chỉ sử dụng được phiên bản npm install node-persist@0.0.8 --save
// Mỗi lần lưu lại có khi phải restart lại visual mới hiển thị

// CÁC LOẠI HÀM SỬ DỤNG TRONG MODULE NÀY

// Hàm get dùng để lấy giá trị của một key nào đó, nếu key không tồn tại thì nó sẽ trả về undefined.

// storage.setItem("domain", "freetuts")
// // hoặc
// storage.setItemSync("domain", "freetuts")

//----------------------------

//Hàm set dùng để thiết lập giá trị cho một key nào đó.

// storage.setItem("domain", "freetuts")
// // hoặc
// storage.setItemSync("domain", "freetuts")

//---------------------------------

//Hàm remove dùng để xóa một key nào đó.

// storage.removeItem("domain")
// // hoặc
// storage.removeItemSync("domain")

//----------------------------

//Hàm clear dùng để xóa tất cả các key trong bộ nhớ và ổ đĩa.

// storage.clear()
// // hoặc
// storage.clearSync()

// Load module node-persist
const storage = require("node-persist")

// Hàm khởi tạo - Load dữ liệu đã lưu trên ổ đĩa
storage.initSync({
	dir: "mydata", //tạo "thư mục" lưu trữ
	ttl: false // thời gian lưu file trong thư mục (false là lưu mãi mãi)
})

//--------------------------------------

// Hàm lấy danh sách sinh viên
const getAllStudents = () => {
	// Lấy sinh viên từ nơi lưu trữ
	//Ở đây là lấy từ thư mục => node-persist/storage/mydata/students
	let students = storage.getItemSync("students")

	// Nếu không có sinh viên nào thì trả về một mảng rỗng
	if (typeof students === "undefined") {
		return []
	}
	// Ngược lại sẽ trả về danh sách sinh viên
	return students
}

//--------------------------------------

// Hàm lấy chi tiết sinh viên theo id của sinh viên
function getStudent(studentId) {
	// Lấy danh sách sinh viên
	let students = getAllStudents()

	// Biến lưu trữ sinh viên được tìm thấy
	let result = null

	// for (let i = 0; i < students.length; i++) {
	// 	if (students[i].id === studentId) {
	// 		result = students[i]
	// 		break
	// 	}
	// }

	// Lặp để tìm sinh viên
	for (let stud of students) {
		if (stud.id == studentId) {
			result = stud
			break
		}
	}
	return result
}

//------------------------------------

// Hàm thêm một sinh viên

function addStudent(id, fullname) {
	// Lấy danh sách sinh viên
	let students = getAllStudents()

	//Push obcject sinh viên mới vào mảng
	students.push({
		id: id,
		fullname: fullname
	})

	// set lại mảng mới được thêm vào file students
	storage.setItemSync("students", students)
}

//-------------------------------

// Hàm xóa sinh viên
function removeStudent(studentId) {
	// Lấy danh sách sinh viên
	var students = getAllStudents()

	// Lặp để tìm sinh viên muốn xóa
	for (let stud in students) {
		stud = Number(stud)
		if (students[stud].id === studentId) {
			students.splice(stud, 1)
		}
	}
	// set lại mảng mới được thêm vào file students
	storage.setItemSync("students", students)
}

//-------------------------------

// Hàm sửa sinh viên
function editStuent(studentId, studentName) {
	var students = getAllStudents()

	for (var i = 0; i < students.length; i++) {
		if (students[i].id === studentId) {
			students[i].fullname = studentName
		}
	}

	// set lại mảng mới được thêm vào file students
	storage.setItemSync("students", students)
}

//------------------------------

// Hàm hiển thị danh sách sinh viên
function showStudents() {
	var students = getAllStudents()
	students.forEach(function(student) {
		console.log(`Student:   ${student.fullname} (${student.id})`)
	})
}
