// https://freetuts.net/ap-dung-yargs-nodejs-vao-ung-dung-quan-ly-hoc-sinh-596.html

/*THƯ VIỆN STUDENT*/

// Lúc test chỉ sử dụng được phiên bản npm install node-persist@0.0.8 --save
// Mỗi lần lưu lại có khi phải tắt đi mở lại file mới hiển thị

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

//--------------------------------------

// Hàm hiển thị danh sách sinh viên
function showStudents() {
	var students = getAllStudents()
	students.forEach(function(student) {
		console.log(`Student:   ${student.fullname} (${student.id})`)
	})
}

//---------------------------------------

// ****ACTION****

const yargs = require("yargs")

let argv = yargs
	.command("list", "Get List Students", yargs => {
		console.log("Get List Students Finish")
	})
	.command("create", "Create List Students", yargs => {
		return yargs.option({
			id: {
				demand: true,
				type: "number"
			},
			name: {
				demand: true,
				type: "string"
			}
		})
	})
	.command("edit", "Edit List Students", yargs => {
		return yargs.option({
			id: {
				demand: true,
				type: "number"
			},
			name: {
				demand: true,
				type: "string"
			}
		})
	})
	.command("delete", "Delete List Students", yargs => {
		return yargs.option({
			id: {
				demand: true,
				type: "number"
			}
		})
	}).argv

//Khi nhập action "node yargs-persist.js test" --> nó sẽ lưu action vào mảng argv._

/*XỬ LÝ ACTION*/

// Lấy tên action
let action = argv._[0]

if (action === "list") {
	showStudents()
} else if (action === "create") {
	addStudent(argv.id, argv.name)
	console.log("Add Successfully!")
	showStudents()
} else if (action === "delete") {
	removeStudent(argv.id)
	console.log("Delete Successfully!")
	showStudents()
} else if (action === "edit") {
	editStudent(argv.id, argv.name)
	console.log("Edit Successfully!")
	showStudents()
} else {
	console.log("Command not found!")
	showStudents()
}

// Hiển thị danh sách -> node yargs-persist.js list
// Thêm -> node yargs-persist.js create--id 2 --name Chuong
// Sửa -> node yargs-persist.js edit--id 2 --name cuong
// Xóa -> node yargs-persist.js delete --id 2
